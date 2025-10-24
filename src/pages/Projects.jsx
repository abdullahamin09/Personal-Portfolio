import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample projects data
const projects = [
  {
    name: "WooCommerce Backend",
    description: "JWT authentication, RESTful APIs, protected routes using Node.js & Express.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/abdullahamin09/WooCommerce_Backend",
    live: "#", // replace with live link if any
  },
  {
    name: "React E-commerce UI",
    description: "Responsive React.js frontend with dynamic routing and state management.",
    stack: ["React.js", "Tailwind CSS", "React Router", "Axios"],
    github: "https://github.com/abdullahamin09/React-Ecommerce",
    live: "#",
  },
  {
    name: "Full-Stack Portfolio",
    description: "Portfolio built with React + Node.js backend for contact form submissions.",
    stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    github: "https://github.com/abdullahamin09/Portfolio",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-gray-800 mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 via-white to-blue-50 hover:shadow-2xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-all"></div>

            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {project.name}
                </h2>
                <p className="mt-3 text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition"
                >
                  <FaGithub /> Code
                </a>
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
