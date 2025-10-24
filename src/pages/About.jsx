import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact size={28} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={28} className="text-yellow-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={28} className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress size={28} className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb size={28} className="text-green-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} className="text-teal-500" /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={28} className="text-orange-600" /> },
];

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h1>

      {/* About Text */}
      <motion.div
        className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p>
          Hi, I’m <strong>Abdullah Amin (Elliot)</strong>, a passionate
          <strong> Full-Stack Web Developer</strong> with experience in building
          modern, responsive web applications using <strong>React.js</strong> for
          the frontend and <strong>Node.js</strong> with <strong>Express.js</strong> for
          the backend. I have experience with <strong>RESTful APIs</strong>, user
          authentication, protected routes, and database management.
        </p>

        <p className="mt-4">
          During my internship at <strong>Octaloop</strong>, I learned to build
          scalable backend services and integrate them with dynamic React frontends.
          I enjoy solving problems, learning new technologies, and creating
          user-friendly interfaces.
        </p>

        <p className="mt-4">
          Apart from coding, I love exploring nature and documenting my travels —
          especially the Hunza Valley. I believe creativity in coding comes from
          curiosity and exploration in life.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:scale-105 transition"
            >
              {skill.icon}
              <span className="mt-2 font-medium text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
