import { motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #333333 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center select-none w-full">
        {/* Terminal prompt */}
        <p className="font-mono text-[#555555] text-sm tracking-[0.3em] uppercase mb-6">
          $ init --portfolio
        </p>

        {/* Draggable filled name */}
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0.1}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="border border-dashed border-[#444444] px-6 py-2 w-fit"
          whileDrag={{ scale: 1.02 }}
        >
          <h1
            className="text-white text-[120px] md:text-[180px] leading-none tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SRAYAN
          </h1>
        </motion.div>

        {/* Outlined name */}
        <h1
          className="text-[120px] md:text-[180px] leading-none tracking-tight -mt-4"
          style={{
            fontFamily: "var(--font-display)",
            WebkitTextStroke: "2px #e8e8e8",
            color: "transparent",
          }}
        >
          BHATTACHARYA
        </h1>

        {/* Typewriter subtitle */}
        <div className="flex items-center gap-1 mt-6 font-mono text-sm md:text-base tracking-widest">
          <span className="text-[#555555]">&gt;&nbsp;</span>
          <span className="text-[#e8e8e8]">
            <Typewriter
              options={{
                strings: [
                  "Backend Engineer",
                  "Exploring Machine Learning",
                  "System Builder",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40,
              }}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
