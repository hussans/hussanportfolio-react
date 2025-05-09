import React, { useContext } from "react";
import { ThemeContext } from "../App";

const SkillBadge = ({ name }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${
                      theme === "dark"
                        ? "bg-gray-700/60 hover:bg-gray-700/90 text-gray-200 border border-gray-600/50"
                        : "bg-gray-200/70 hover:bg-gray-200/90 text-gray-700 border border-gray-300/70"
                    }`}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
