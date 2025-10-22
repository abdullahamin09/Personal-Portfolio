import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import Experience from "../pages/Experience.jsx";
import Resume from "../pages/Resume.jsx";
import Contact from "../pages/Contact.jsx";
import Blog from "../pages/Blog.jsx"; // optional
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";

const AppRoutes = () => {
    useScrollToTop(); // ensures scroll to top on route change

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default AppRoutes;
