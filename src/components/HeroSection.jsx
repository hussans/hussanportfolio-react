import React, { useContext } from "react";
import { Sun, Moon, UserCircle, ChevronsDown } from "lucide-react";
import { ThemeContext } from "../App";

const HeroSection = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section
      id="hero"
      className="h-screen w-screen flex flex-col items-center justify-center p-8 relative"
    >
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`p-3 rounded-full transition-colors duration-300
                        ${
                          theme === "dark"
                            ? "bg-gray-800/50 hover:bg-gray-700/70 text-white"
                            : "bg-white/50 hover:bg-gray-200/70 text-gray-800"
                        }`}
        >
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
      <div className="text-center">
        <UserCircle
          size={100}
          className={`mx-auto mb-6 ${
            theme === "dark" ? "text-purple-400" : "text-purple-600"
          }`}
        />
        <h1
          className={`text-5xl md:text-7xl font-bold mb-4 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Hussan Sajid
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Web Developer - Crafting Digital Experiences
        </p>
        <button
          onClick={() => {
            const nextSection = document.getElementById("main-content-area");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={`py-3 px-8 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto group
                      ${
                        theme === "dark"
                          ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/50"
                          : "bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:shadow-purple-400/50"
                      }`}
        >
          Explore My Work{" "}
          <ChevronsDown size={20} className="ml-2 group-hover:animate-bounce" />
        </button>
      </div>
      <div
        className={`absolute bottom-8 text-xs ${
          theme === "dark" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        Scroll down
      </div>
    </section>
  );
};

export default HeroSection;
