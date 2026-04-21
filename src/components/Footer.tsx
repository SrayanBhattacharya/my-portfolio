import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[#222222] px-6 md:px-20 lg:px-40 py-8 bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left — Punchy line + attribution */}
        <div className="flex flex-col gap-1">
          <p className="font-mono text-[#333333] text-xs tracking-widest">
            &gt; no bugs were harmed in the making of this portfolio.
          </p>
        </div>

        {/* Right — Back to top */}
        <motion.button
          onClick={scrollToTop}
          className="font-mono text-xs text-[#555555] hover:text-red-500 transition-colors duration-200 tracking-widest"
          whileHover={{ y: -2 }}
        >
          ↑ BACK TO TOP
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
