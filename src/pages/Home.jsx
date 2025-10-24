import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
import profile from "../assets/images/profile.png"; // replace with your photo

const Home = () => {
  return (
    <section className="flex lg:flex-row items-center justify-between container mx-auto px-6 py-20 gap-12">
      {/* LEFT SIDE — Text */}
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold ">
          Hi<span className='text-primary'>,</span>
        </h2>
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-semibold pl-5">I’m <span className=''>Abdullah</span></h2>
          <div className="absolute left-[-130px] w-[130px] border-b-[3px] border-primary"></div>
        </div>

        <h3 className="text-3xl sm:text-5xl  mt-3 font-medium">
          Full-Stack Web Developer
        </h3>

        {/* <p className="mt-6  max-w-xl leading-relaxed">
          I’m a passionate <strong>Full-Stack Developer</strong> specializing in
          <strong> React.js</strong> for frontend and <strong>Node.js</strong> with{" "}
          <strong>Express.js</strong> for backend. I’ve worked with RESTful APIs,
          authentication systems, and built dynamic, responsive web apps.
        </p> */}

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
          <Link
            to="/projects"
            className="bg-primary px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-primary-600 transition"
          >
            View My Work
            {/* <ArrowRight size={18} /> */}
          </Link>
          <Link
            to="/contact"
            className="border border-primary text-bg-primary px-6 py-3 rounded-xl hover:bg-primary-600 transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* RIGHT SIDE — Profile Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <img
            src={profile}
            alt="Elliot Profile"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-white shadow-lg relative z-10"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
