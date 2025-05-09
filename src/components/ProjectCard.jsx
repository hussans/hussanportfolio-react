import React, { useContext } from "react";
import { ExternalLink } from "lucide-react";
import { ThemeContext } from "../App";

const ProjectCard = ({ title, description, tech = [], link, imageSrc }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`rounded-lg p-5 transition-all duration-300 ease-in-out group
                    ${
                      theme === "dark"
                        ? "bg-gray-700/60 hover:bg-gray-700/90 border border-gray-600/50"
                        : "bg-gray-100/70 hover:bg-gray-200/80 border border-gray-300/70"
                    }`}
    >
      <div
        className={`w-full h-48 rounded-md mb-4 overflow-hidden 
                      ${theme === "dark" ? "bg-gray-600/50" : "bg-gray-300/50"} 
                      flex items-center justify-center`}
      >
        {" "}
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              const parent = e.target.parentNode;
              if (parent && !parent.querySelector(".image-error-fallback")) {
                const fallbackText = document.createElement("span");
                fallbackText.className = `text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                } image-error-fallback`;
                fallbackText.textContent = "Image not available";
                parent.appendChild(fallbackText);
              }
            }}
          />
        ) : (
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Project Image
          </span>
        )}
      </div>

      <h3
        className={`text-xl font-semibold mb-2 ${
          theme === "dark" ? "text-purple-300" : "text-purple-700"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm mb-3 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        } min-h-[4.5rem]`}
      >
        {description}
      </p>
      <div className="mb-4">
        <p
          className={`text-xs font-medium mb-1.5 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className={`px-2.5 py-1 text-xs rounded-full
                                    ${
                                      theme === "dark"
                                        ? "bg-purple-500/30 text-purple-300"
                                        : "bg-purple-500/20 text-purple-700"
                                    }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center text-sm font-medium group-hover:underline
                      ${
                        theme === "dark"
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-purple-600 hover:text-purple-800"
                      }`}
        >
          View Project <ExternalLink size={14} className="ml-1" />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
