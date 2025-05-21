import React, { Suspense, useState, useEffect } from "react";
import Description from "../components/Description";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundCanvas from "../components/BackgroundCanvas";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyProjects = React.lazy(() => import("../components/Projects"));
const LazySkills = React.lazy(() => import("../components/Skills"));
const LazyContact = React.lazy(() => import("../components/Contact"));

function Homepage() {
  const [currentSection, setCurrentSection] = useState("home");

  const { ref: descriptionRef, inView: isDescInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: isProjInView } = useInView({ threshold: 0.2 });
  const { ref: skillsRef, inView: isSkillsInView } = useInView({ threshold: 0.3 });
  const { ref: contactsRef, inView: isContactInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
  if (isContactInView) setCurrentSection("contact");
  else if (isSkillsInView) setCurrentSection("skills");
  else if (isProjInView) setCurrentSection("projects");
  else if (isDescInView) setCurrentSection("home");
}, [isSkillsInView, isProjInView, isDescInView, isContactInView]);


  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Full-screen animated background */}
      <BackgroundCanvas currentSection={currentSection} />

      {/* Foreground UI */}
      <div className="relative z-10">
        <Header activeSection={currentSection} />

        {/* Page Sections */}
        <main className="pt-20">
          {/* Home Section */}
          <motion.section
            id="home"
            ref={descriptionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen flex items-center justify-center"
          >
            <Description />
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            ref={projectsRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isProjInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="min-h-screen flex items-center justify-center"
          >
            <Suspense fallback={<div className="text-white">Loading Projects...</div>}>
              <LazyProjects />
            </Suspense>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            ref={skillsRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="min-h-screen flex items-center justify-center"
          >
            <Suspense fallback={<div className="text-white">Loading Skills...</div>}>
              <LazySkills />
            </Suspense>
          </motion.section>

           <motion.section
            id="contact"
            ref={contactsRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="min-h-screen flex items-center justify-center"
          >
            <Suspense fallback={<div className="text-white">Loading Contact...</div>}>
              <LazyContact />
            </Suspense>
          </motion.section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
