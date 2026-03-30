import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a] border-b border-red-600">
      {/* Main Row */}
      <div className="relative px-6 py-4 flex items-center justify-between">
        {/* Left */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-block text-white font-mono text-sm tracking-widest uppercase hover:text-red-500 transition-all duration-200 active:scale-95"
        >
          &gt; SRAYAN
        </button>

        {/* Center */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center pointer-events-none">
          <span className="text-[#555555] font-mono text-sm tracking-widest">
            Kolkata — {time}
          </span>
        </div>

        {/* Right - Desktop */}
        <div className="hidden md:flex gap-6">
          <a
            href="#work"
            className="inline-block text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-all duration-200 active:scale-90"
          >
            WORK
          </a>
          <a
            href="#about"
            className="inline-block text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-all duration-200 active:scale-90"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="inline-block text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-all duration-200 active:scale-90"
          >
            CONTACT ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-red-500 font-mono text-lg transition-transform duration-200 active:scale-90"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "[x]" : "[=]"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4 border-t border-[#222222]">
          {/* Clock */}
          <span className="text-[#555555] font-mono text-xs tracking-widest pt-3">
            Your City — {time}
          </span>

          {/* Links */}
          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="inline-block text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-all duration-200 active:scale-95 origin-left"
          >
            &gt; WORK
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="inline-block text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-all duration-200 active:scale-95 origin-left"
          >
            &gt; ABOUT
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-all duration-200 active:scale-95 origin-left"
          >
            &gt; CONTACT ME
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
