import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section
      id="about"
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
        $ whoami
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-[#222222] mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Bio */}
      <motion.p
        className="font-mono text-[#e8e8e8] text-base md:text-lg leading-relaxed max-w-2xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        &gt; <strong>Backend Developer</strong> |{" "}
        <strong>AI/ML Enthusiast</strong> — <strong>West Bengal, India</strong>.
        <br />
        &gt; I build <strong>scalable backend systems</strong> and{" "}
        <strong>high-performance APIs</strong>.
        <br />
        &gt; I explore <strong>AI/ML</strong> and apply it to{" "}
        <strong>real-world problems</strong>.
        <br />
        &gt; I focus on <strong>clean architecture</strong>,{" "}
        <strong>efficiency</strong>, and <strong>scalability</strong>.
      </motion.p>

      {/* Links header */}
      <motion.p
        className="font-mono text-red-500 text-sm tracking-[0.3em] uppercase mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        $ cat links.txt
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-[#222222] mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Social Links */}
      <motion.div
        className="flex flex-col gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="https://github.com/SrayanBhattacharya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 font-mono text-[#555555] hover:text-red-500 transition-colors group w-fit"
        >
          <FaGithub className="text-lg" />
          <span className="text-xs tracking-widest uppercase">&gt; GitHub</span>
          <span className="text-[#333333] group-hover:text-red-500 transition-colors">
            → github.com/SrayanBhattacharya
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/srayan-bhattacharya/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 font-mono text-[#555555] hover:text-red-500 transition-colors group w-fit"
        >
          <FaLinkedin className="text-lg" />
          <span className="text-xs tracking-widest uppercase">
            &gt; LinkedIn
          </span>
          <span className="text-[#333333] group-hover:text-red-500 transition-colors">
            → linkedin.com/in/srayan-bhattacharya
          </span>
        </a>
      </motion.div>

      {/* Resume header */}
      <motion.p
        className="font-mono text-red-500 text-sm tracking-[0.3em] uppercase mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        $ view RESUME.pdf
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-[#222222] mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ transformOrigin: "left" }}
      />

      {/* View Button */}
      <motion.a
        href="/RESUME.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 w-fit font-mono text-sm border border-[#333333] px-6 py-3 text-[#e8e8e8] hover:border-red-500 hover:text-red-500 transition-all group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ x: 4 }}
      >
        <span className="text-red-500 group-hover:text-red-400">▶</span>
        VIEW: RESUME.pdf
      </motion.a>
    </section>
  );
};

export default About;
