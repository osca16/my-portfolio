import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Hospital Patients Management System",
    description:
      "Managed patients and maintained records using Java Swing Framework.",
    image: "./src/assets/images/project1.jpg",
    github: "https://github.com/osca16/Hosphital-Patient-Registry",
    live: "#",
  },
  {
    id: 2,
    title: "Zenflow - Mind Relaxation Website",
    description:
      "Calm music, games, and self-painting experiences for relaxation.",
    image: "./src/assets/images/zenflow.png",
    github: "https://github.com/HarshaKTM/web-architecture-group_project",
    live: "#",
  },
  {
    id: 3,
    title: "Pet Care",
    description: "Pet care site using HTML, CSS, and JavaScript.",
    image: "./src/assets/images/Petcare.png",
    github: "https://github.com/osca16/Pet-Care-Web-Site",
    live: "#",
  },
  {
    id: 4,
    title: "My E Portfolio",
    description: "Built with React, Three.js, JavaScript & TailwindCSS.",
    image: "./src/assets/images/Eportfolio.png",
    github: "https://github.com/osca16/my-portfolio",
    live: "#",
  },
  {
    id: 5,
    title: "Heritscope Lanka Website",
    description:
      "Cultural and religious travel guide website for Sri Lanka.",
    image: "./src/assets/images/Heritscope.jpg",
    github: "https://github.com/osca16/HeritScope-Lanka-Web-Site",
    live: "#",
  },
  {
    id: 6,
    title: "Tuition Class Management App (Student/Teacher)",
    description:
      "Tracks payments, schedules, attendance. Separate logins for students and teachers.",
    image: "./src/assets/images/Get Start.png",
    github: "https://github.com/osca16/tution_management_app",
    live: "#",
  },
  {
    id: 7,
    title: "Tuition Class Admin App",
    description:
      "Admin mobile app to manage students and teachers for physical tuition classes.",
    image: "./src/assets/images/Get Start.png",
    github: "https://github.com/osca16/tution_management_Admin_app",
    live: "#",
  },
  {
    id: 8,
    title: "Book Shop Website (MERN Stack)",
    description:
      "Bookshop site with Google Books API using MERN Stack technologies.",
    image: "./src/assets/images/Bookshop.jpg",
    github:
      "https://github.com/osca16/BookShop-Web-Site-With-API-Intergration-MERN-",
    live: "#",
  },
];

function Projects() {
  return (
    <section
      className="bg-[#0f0f0f] text-white py-16 px-4 sm:px-6 md:px-8 lg:px-12"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-Nunito">
          My Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-700 transition-shadow duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover sm:h-40 md:h-48 lg:h-40 xl:h-48"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-pink-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex gap-5 text-xl mt-auto">
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
