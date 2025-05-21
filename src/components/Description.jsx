import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Typewriter from "typewriter-effect";

function DescriptionCard({ theme = "dark" }) {
  const techStack = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiGithub />, name: "GitHub" },
  ];

  const neonBorder =
    theme === "dark"
      ? "border-[3px] border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-padding backdrop-blur-md"
      : "border-[3px] border-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-padding backdrop-blur-md";

  const cardBackground =
    theme === "dark" ? "bg-[#0e0e0e] text-white" : "bg-white text-gray-800";

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className={`relative rounded-3xl p-[2px] animate-border-glow shadow-lg ${neonBorder}`}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className={`rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-center lg:items-start ${cardBackground}`}
          >
            {/* Profile Image */}
            <div className="w-full sm:w-auto flex justify-center">
              <motion.img
                src="../src/assets/images/profile.jpg"
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-purple-500 shadow-md"
                whileHover={{ rotate: 3 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Info Section */}
            <div className="w-full text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Hi, I'm Osanda 👋
              </h2>

              <div className="text-xl sm:text-2xl text-purple-400 font-medium mb-4 h-8">
                <Typewriter
                  options={{
                    strings: ["Frontend Developer", "AI Enthusiast", "React Lover","UI Enthusias","Future Project Manager"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              <p className="text-base sm:text-lg mb-6 leading-relaxed text-gray-300">
                I'm a passionate Software Engineering student who builds elegant,
                scalable, and user-friendly web applications. I focus on modern
                tools like React, Firebase, and Tailwind to craft smooth digital
                experiences.
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-500">
                  🧠 Tech Stack
                </h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-purple-500">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-3xl hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 2 }}
                    >
                      {tech.icon}
                      <span className="text-sm text-gray-400 mt-1">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Buttons & Socials */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="/OsandaLakruwan_CV.pdf"
                  download
                  className="bg-gradient-to-r from-purple-500 via-black to-blue-500 hover:from-blue-600 hover:via-purple-300 to-purple-500 text-white font-semibold px-6 py-2 rounded-full transition duration-300 shadow-md text-center"
                >
                  📄 Download CV
                </a>

                <div className="flex justify-center sm:justify-start gap-4 text-2xl text-purple-400">
                  <a
                    href="https://github.com/osca16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    <SiGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/osanda-lakruwan-a9b157111/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                  >
                    <SiLinkedin />
                  </a>
                  <a
                    href="mailto:osandalakruwan516@gmail.com"
                    className="hover:text-red-400 transition"
                  >
                    <MdEmail />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default DescriptionCard;
