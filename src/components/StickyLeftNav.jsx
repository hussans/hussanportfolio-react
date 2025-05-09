import React, { useContext } from "react";
import {
  UserCircle,
  Briefcase,
  Code,
  Phone,
  Mail,
  Linkedin,
  Github,
  FileText,
} from "lucide-react";
import { ThemeContext } from "../App";

const StickyLeftNav = ({ onNavLinkClick, activeSection }) => {
  const { theme } = useContext(ThemeContext);

  const navLinks = [
    { id: "about-content", label: "About Me", icon: <UserCircle size={18} /> },
    {
      id: "projects-content",
      label: "Projects",
      icon: <Briefcase size={18} />,
    },
    { id: "skills-content", label: "Skills", icon: <Code size={18} /> },
  ];

  return (
    <aside
      className={`w-full lg:w-1/2 xl:w-2/5 p-6 lg:sticky lg:top-0 lg:h-screen 
                       flex flex-col justify-center 
                       transition-colors duration-300 custom-scrollbar
                       ${
                         theme === "dark"
                           ? "bg-gray-900/30 lg:bg-transparent"
                           : "bg-white/30 lg:bg-transparent"
                       } 
                       border-r-0 lg:border-r 
                       ${
                         theme === "dark"
                           ? "border-gray-700/40"
                           : "border-gray-300/40"
                       }`}
    >
      <div className="space-y-10 max-w-md mx-auto lg:mx-0 lg:ml-auto lg:mr-12">
        <div>
          <h2
            className={`text-3xl font-bold mb-6 ${
              theme === "dark" ? "text-purple-300" : "text-purple-700"
            }`}
          >
            Portfolio Sections
          </h2>
          <nav className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavLinkClick(link.id);
                }}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out group
                            ${
                              activeSection === link.id
                                ? theme === "dark"
                                  ? "bg-purple-600/40 text-purple-300 shadow-md"
                                  : "bg-purple-500/30 text-purple-700 shadow-md"
                                : theme === "dark"
                                ? "hover:bg-gray-700/60 hover:text-gray-100 text-gray-300"
                                : "hover:bg-gray-200/80 hover:text-gray-800 text-gray-600"
                            }
                          `}
              >
                <span
                  className={`transition-colors duration-200 ${
                    activeSection === link.id
                      ? theme === "dark"
                        ? "text-purple-300"
                        : "text-purple-700"
                      : theme === "dark"
                      ? "text-gray-400 group-hover:text-gray-100"
                      : "text-gray-500 group-hover:text-gray-800"
                  }`}
                >
                  {link.icon}
                </span>
                <span className="font-medium text-md">{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div
          className={`pt-8 border-t ${
            theme === "dark" ? "border-gray-700/50" : "border-gray-300/50"
          }`}
        >
          <p
            className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              theme === "dark" ? "text-purple-400" : "text-purple-600"
            }`}
          >
            Contact & Links
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="tel:+11234567890"
              className={`flex items-center space-x-2.5 group ${
                theme === "dark"
                  ? "text-gray-300 hover:text-purple-300"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              <Phone
                size={16}
                className="text-purple-500/80 group-hover:text-purple-400"
              />
              <span>(209) 561-6984</span>
            </a>
            <a
              href="mailto:youremail@example.com"
              className={`flex items-center space-x-2.5 group ${
                theme === "dark"
                  ? "text-gray-300 hover:text-purple-300"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              <Mail
                size={16}
                className="text-purple-500/80 group-hover:text-purple-400"
              />
              <span>hussanswork@gmail.com</span>
            </a>
          </div>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/hussans/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2.5 rounded-full transition-colors ${
                theme === "dark"
                  ? "hover:bg-purple-500/20 text-gray-400 hover:text-purple-300"
                  : "hover:bg-purple-500/10 text-gray-500 hover:text-purple-600"
              }`}
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/hussans"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2.5 rounded-full transition-colors ${
                theme === "dark"
                  ? "hover:bg-purple-500/20 text-gray-400 hover:text-purple-300"
                  : "hover:bg-purple-500/10 text-gray-500 hover:text-purple-600"
              }`}
            >
              <Github size={22} />
            </a>
            <a
              href="HussanSajid-Resume.pdf
              "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className={`p-2.5 rounded-full transition-colors ${
                theme === "dark"
                  ? "hover:bg-purple-500/20 text-gray-400 hover:text-purple-300"
                  : "hover:bg-purple-500/10 text-gray-500 hover:text-purple-600"
              }`}
            >
              <FileText size={22} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default StickyLeftNav;
