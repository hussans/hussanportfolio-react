import React from "react";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

const ScrollableRightContent = () => {
  return (
    <div className="w-full lg:w-1/2 xl:w-3/5 p-3 md:p-6 lg:p-10 space-y-16 md:space-y-20">
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
};

export default ScrollableRightContent;
