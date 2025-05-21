import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Projects", "Skills", "Contact"];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black to-black shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        {/* Logo and SVG Path Animation */}
        <div className="relative">
          <motion.h1
            className="text-2xl sm:text-3xl text-white font-Pacifico tracking-wide neon-text relative z-10"
            whileHover={{ scale: 1.05 }}
          >
            Welcome to My Portfolio
          </motion.h1>

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 10"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.circle
              r="0.5"
              fill="cyan"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            >
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath xlinkHref="#snakePath" />
              </animateMotion>
            </motion.circle>
            <path
              id="snakePath"
              d="M 5 5 Q 10 0, 20 5 Q 30 10, 40 5 Q 50 0, 60 5 Q 70 10, 80 5 Q 90 0, 95 5"
              fill="transparent"
              stroke="transparent"
            />
          </svg>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => {
            const lower = item.toLowerCase();
            return (
              <motion.a
                key={index}
                href={`#${lower}`}
                className={`font-medium transition-all duration-300 ${
                  activeSection === lower
                    ? "text-yellow-300 scale-110 underline underline-offset-4"
                    : "text-purple-400 hover:text-yellow-100"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-gradient-to-br from-black via-blue-800 to-purple-500 px-4 pb-4"
        >
          <ul className="space-y-3">
            {navItems.map((item, index) => {
              const lower = item.toLowerCase();
              return (
                <li key={index}>
                  <a
                    href={`#${lower}`}
                    className={`block text-lg font-medium transition ${
                      activeSection === lower
                        ? "text-yellow-200"
                        : "text-white hover:text-yellow-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;
