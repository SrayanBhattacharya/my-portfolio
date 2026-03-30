import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "01",
    name: "CodeDuel",
    description:
      "Real-time multiplayer competitive coding platform where players race to solve coding challenges live.",
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "WebSockets",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/SrayanBhattacharya/codeduel",
    live: "https://codeduel-three.vercel.app/",
    image: "/projects/project1.webp",
  },
  {
    id: "02",
    name: "Air Quality Monitor",
    description:
      "Real-time air quality monitoring and forecasting system using IoT sensor data and an LNN model to predict PM2.5/PM10 with live dashboard alerts.",
    stack: [
      "FastAPI",
      "Liquid Neural Network",
      "Firebase",
      "React",
      "Tailwind CSS",
      "Chart.js",
    ],
    github: "https://github.com/SrayanBhattacharya/air-quality-monitor",
    image: "/projects/project2.webp",
  },
];

const ITEMS_PER_PAGE = 2;

export default function Projects() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const currentProjects = projects.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const handleNext = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  };

  return (
    <section
      id="work"
      className="min-h-screen px-6 md:px-20 lg:px-40 py-24 bg-[#0a0a0a] text-white"
    >
      {/* Header */}
      <motion.p
        className="font-mono text-red-500 text-sm tracking-[0.3em] uppercase mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        $ ls --projects
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-[#222] mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />

      {/* Projects */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={{
            enter: (d: number) => ({ opacity: 0, x: d * 60 }),
            center: { opacity: 1, x: 0 },
            exit: (d: number) => ({ opacity: 0, x: d * -60 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6"
        >
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col md:flex-row gap-6 border border-[#1a1a1a] p-6 hover:border-red-600 transition"
            >
              {/* Image */}
              <div className="w-full md:w-64 h-40 shrink-0 overflow-hidden border border-[#222]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between flex-1 gap-4">
                <div>
                  {/* Title */}
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[#333] text-2xl group-hover:text-red-600 transition">
                      {project.id}
                    </span>

                    <h3 className="font-mono text-lg tracking-widest uppercase text-[#e8e8e8] group-hover:text-red-400 transition">
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-mono text-sm text-[#555] mt-2">
                    &gt; {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-[#555] border border-[#222] px-2 py-1 group-hover:border-red-900 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#555] hover:text-red-500 transition"
                  >
                    <FaGithub size={18} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#555] hover:text-red-500 transition"
                    >
                      <HiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-10">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="font-mono text-sm text-[#555] hover:text-red-500 disabled:opacity-20"
        >
          ← PREV
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === page ? "bg-red-500" : "bg-[#333]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className="font-mono text-sm text-[#555] hover:text-red-500 disabled:opacity-20"
        >
          NEXT →
        </button>
      </div>
    </section>
  );
}
