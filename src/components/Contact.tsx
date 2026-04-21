import { motion } from "framer-motion";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: "New message from portfolio",
          from_name: form.name,
          ...form,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 py-24 bg-[#0a0a0a]"
    >
      {/* Section header */}
      <motion.p
        className="font-mono text-red-500 text-sm tracking-[0.3em] uppercase mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        $ contact --me
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-[#222222] mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Two column layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left — Form */}
        <motion.div
          className="border border-[#222222] p-6 md:p-10 flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-[#222222]">
            <span className="w-3 h-3 rounded-full bg-red-600" />
            <span className="w-3 h-3 rounded-full bg-[#333333]" />
            <span className="w-3 h-3 rounded-full bg-[#333333]" />
            <span className="text-[#555555] text-xs tracking-widest ml-4 font-mono">
              contact.sh
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-red-500 text-xs tracking-widest">
                $ enter --name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-transparent border-b border-[#333333] focus:border-red-500 outline-none font-mono text-[#e8e8e8] text-sm py-2 placeholder:text-[#333333] transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-red-500 text-xs tracking-widest">
                $ enter --email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-transparent border-b border-[#333333] focus:border-red-500 outline-none font-mono text-[#e8e8e8] text-sm py-2 placeholder:text-[#333333] transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-red-500 text-xs tracking-widest">
                $ enter --message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                rows={5}
                className="bg-transparent border-b border-[#333333] focus:border-red-500 outline-none font-mono text-[#e8e8e8] text-sm py-2 placeholder:text-[#333333] transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={
                status === "sending" ||
                !form.name ||
                !form.email ||
                !form.message
              }
              className="flex items-center gap-3 w-fit font-mono text-sm border border-[#333333] px-6 py-3 text-[#e8e8e8] hover:border-red-500 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 mt-2"
            >
              <span className="text-red-500">▶</span>
              {status === "sending" ? "SENDING..." : "EXECUTE: send.sh"}
            </button>

            {/* Success */}
            {status === "success" && (
              <motion.p
                className="font-mono text-green-500 text-sm tracking-widest"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                &gt; message sent successfully. i'll get back to you soon.
              </motion.p>
            )}

            {/* Error */}
            {status === "error" && (
              <motion.p
                className="font-mono text-red-500 text-sm tracking-widest"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                &gt; error: something went wrong. try again.
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Right — Info */}
        <motion.div
          className="border border-[#222222] p-6 md:p-10 lg:w-80 flex flex-col gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 pb-4 border-b border-[#222222]">
            <span className="w-3 h-3 rounded-full bg-red-600" />
            <span className="w-3 h-3 rounded-full bg-[#333333]" />
            <span className="w-3 h-3 rounded-full bg-[#333333]" />
            <span className="text-[#555555] text-xs tracking-widest ml-4 font-mono">
              info.sh
            </span>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-red-500 text-xs tracking-widest">
              $ cat email.txt
            </p>
            <p className="font-mono text-[#e8e8e8] text-sm">
              &gt; bhattacharyasrayan@gmail.com
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#1a1a1a]" />

          {/* Location */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-red-500 text-xs tracking-widest">
              $ cat location.txt
            </p>
            <p className="font-mono text-[#e8e8e8] text-sm">
              &gt; Kolkata, WB, India
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#1a1a1a]" />

          {/* Ping */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-red-500 text-xs tracking-widest">
              $ ping --world
            </p>
            <p className="font-mono text-[#e8e8e8] text-sm">
              &gt; Somewhere between coffee and code.
            </p>
          </div>

          {/* Blinking cursor */}
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-red-500 font-mono text-sm">$</span>
            <motion.span
              className="inline-block w-[10px] h-[1.2em] bg-red-500"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
