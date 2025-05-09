import React, { useContext } from "react";
import { ThemeContext } from "../App";

const BackgroundGlitch = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`fixed inset-0 z-[-1] transition-colors duration-500 ease-in-out
                  ${theme === "dark" ? "bg-gray-950" : "bg-gray-100"}`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out
                    ${theme === "dark" ? "opacity-100" : "opacity-100"}`}
        style={{
          backgroundImage: `
            linear-gradient(${
              theme === "dark"
                ? "rgba(200, 150, 255, 0.07)"
                : "rgba(128, 0, 128, 0.05)"
            } 1px, transparent 1px),
            linear-gradient(90deg, ${
              theme === "dark"
                ? "rgba(200, 150, 255, 0.07)"
                : "rgba(128, 0, 128, 0.05)"
            } 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out
                    ${theme === "dark" ? "opacity-60" : "opacity-30"}`}
      >
        <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-purple-600/40 via-transparent to-transparent mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-purple-500/30 via-transparent to-transparent mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default BackgroundGlitch;
