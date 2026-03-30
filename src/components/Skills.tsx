import { motion } from "framer-motion";

const skills = [
  {
    category: "LANGUAGES",
    items: ["Python", "Java", "JavaScript", "C"],
  },
  {
    category: "BACKEND & FRONTEND",
    items: [
      "SpringBoot",
      "FastAPI",
      "PostgreSQL",
      "REST",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    category: "AI/ML",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "TOOLS & DEVOPS",
    items: ["Git", "Docker", "Linux", "AWS"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
        $ ls --skills
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

      {/* Terminal block */}
      <motion.div
        className="font-mono flex flex-col gap-0 border border-[#222222] p-6 md:p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal title bar */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#222222]">
          <span className="w-3 h-3 rounded-full bg-red-600" />
          <span className="w-3 h-3 rounded-full bg-[#333333]" />
          <span className="w-3 h-3 rounded-full bg-[#333333]" />
          <span className="text-[#555555] text-xs tracking-widest ml-4">
            skills.sh
          </span>
        </div>

        {/* Skills rows */}
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            className="flex flex-col md:flex-row md:items-start gap-2 md:gap-0 py-4 border-b border-[#1a1a1a] last:border-none"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Category */}
            <span className="text-red-500 text-xs tracking-[0.2em] w-full md:w-56 shrink-0 pt-[2px]">
              [{skill.category}]
            </span>

            {/* Items */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="text-[#e8e8e8] text-sm hover:text-red-400 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Blinking cursor at the end */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-red-500 text-sm">$</span>
          <motion.span
            className="inline-block w-[10px] h-[1.2em] bg-red-500"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
