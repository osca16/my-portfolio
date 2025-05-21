import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Hospital Patients Management System",
    description: "Managed Patients andmaintain records accoding to the patients. developed by Using Java Swing Framework .",
    image: "./src/assets/images/project1.jpg",
    github: "https://github.com/osca16/Hosphital-Patient-Registry",
    live: "#",
  },
  {
    id: 2,
    title: "Zenflow - Mind Relaxation Web Site",
    description: "Mind Relaxation Website with Calm Music and Mind Relaxation Games and Self paintings",
    image: "./src/assets/images/zenflow.png",
    github: "https://github.com/HarshaKTM/web-architecture-group_project",
    live: "#",
  },
  {
    id: 3,
    title: "Pet Care",
    description: "Pet Care Web Site Create Using HTML,CSS,JavaScript ",
    image: "./src/assets/images/Petcare.png",
    github: "https://github.com/osca16/Pet-Care-Web-Site",
    live: "#",
  },{
    id: 4,
    title: "My E Portfolio",
    description: "My E Portfolio with React/threejs/JavaScript and TailwindCSS ",
    image: "./src/assets/images/Eportfolio.png",
    github: "https://github.com/osca16/my-portfolio/",
    live: "#",
  },{
    id: 5,
    title: "Heritsscope Lanka Web Site",
    description: "WebSite Created for Track and guide to our Cultural and Religious Travel Locations to world",
    image: "./src/assets/images/Heritscope.jpg",
    github: "https://github.com/osca16/HeritScope-Lanka-Web-Site",
    live: "#",
  },
  ,{
    id: 6,
    title: "Tution Class Management Mobile Application (Student and Teacher Application)",
    description: "Mobile Application built for physical Tution Classes Students Shows Childrens Payements, Class Attendance and Upcoming Scheduled Classes. Also teachers can use this application and Teacher got teacher logins and student got Student login. Teacher can mark attendance and shedules classes and homeworkfor their Childrens",
    image: "./src/assets/images/Get Start.png",
    github: "https://github.com/osca16/tution_management_app",
    live: "#",
  },
  ,{
    id: 7,
    title: "Tution Class Management Mobile Application (Admin Application)",
    description: "Mobile Application built for physical Tution Classes, and Admin Application is for admin track the Childrens and Teachers",
    image: "./src/assets/images/Get Start.png",
    github: "https://github.com/osca16/tution_management_Admin_app",
    live: "#",
  },
  ,{
    id: 8,
    title: "Book Shop Website (MERN STACK)",
    description: "Bookshop website intergrated with Google Books API, and using MERN STACK Techstack to implement this Site.",
    image: "./src/assets/images/Bookshop.jpg",
    github: "https://github.com/osca16/BookShop-Web-Site-With-API-Intergration-MERN-",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-6 rounded-2xl" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center font-Nunito">My Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-700 transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4 text-xl">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
