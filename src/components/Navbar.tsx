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
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left */}
        <span className="text-white font-mono text-sm tracking-widest uppercase">
          &gt; SRAYAN
        </span>

        {/* Center */}
        <span className="hidden md:block text-[#555555] font-mono text-sm tracking-widest">
          Kolkata — {time}
        </span>

        {/* Right - Desktop */}
        <div className="hidden md:flex gap-6">
          <a
            href="#work"
            className="text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-colors"
          >
            WORK
          </a>
          <a
            href="#about"
            className="text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-colors"
          >
            ABOUT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-red-500 font-mono text-lg"
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
            className="text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-colors"
          >
            &gt; WORK
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-[#555555] font-mono text-sm tracking-widest hover:text-red-500 transition-colors"
          >
            &gt; ABOUT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
