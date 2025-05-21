import { motion } from "framer-motion";


const skillsData = [
  {
    id: 1,
    title: "The Nebula Inter-University Esports ShowDown 2024",
    description: "Participated in Inter-University-level Esport Championship and placed in top 4 Fragging Valorant.",
    image: "/images/nebula.jpg",
  },
  {
    id: 2,
    title: "Android and IOS App Development Workshop Organized by Pick Me",
    description: "Participated android and IOS App Development Workshop Organized by Pick Me. That workshop mainly focused on how android and IOS app development with modern world technology and Explain about trending designing architectures comes to mobile app development.",
    image: "/images/workshop1.jpg",
  },
  {
    id: 3,
    title: "Vortex InterFaculty Esports Tournement 2025",
    description: "Inter Faculty Esports Championship event Organized by Rotract Club of CINEC Collabrated with CINEC Esports Club and IEEE Student Branch Of CINEC",
    image: "/images/game2.jpg",
  },
  {
    id: 4,
    title: "Google KeyNote 2024",
    description: "Participated Remotly Google KeyNote 2024 for latest tech release programe Organized by Google.inc yearly.",
    image: "/images/keynote24.jpg",
  },
  {
    id: 5,
    title: "Apple WWDC23",
    description: "Participated Remotly Apple WWDC23 Organized by Apple.inc yearly.",
    image: "/images/WWDC23.jpg",
  },
  {
    id: 6,
    title: "Apple WWDC24",
    description: "Participated Remotly Apple WWDC24 Technical Conference Organized by Apple.inc yearly.",
    image: "/images/WWDC24.jpg",
  },
  {
    id: 7,
    title: "Google KeyNote 2025",
    description: "Participated Remotly Google KeyNote 2024 for latest tech release programe Organized by Google.inc yearly.",
    image: "/images/keynote25.jpg",
  },
];

function Skills() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-Nunito">
          My Experiences & CLUB Events
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[#111] p-4 shadow-lg hover:shadow-pink-500/60 border border-transparent hover:border-pink-500 transition-all duration-300"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-pink-400">
                {skill.title}
              </h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
