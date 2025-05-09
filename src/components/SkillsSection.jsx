import React from "react";
import ContentSection from "./ContentSection";
import SkillBadge from "./SkillBadge";
import { Code } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Figma",
    "REST APIs",
    "Azure",
    "UI/UX Design",
  ];
  return (
    <ContentSection id="skills-content" title="My Expertise" icon={<Code />}>
      <div className="flex flex-wrap gap-4">
        {skills.map((s) => (
          <SkillBadge key={s} name={s} />
        ))}
      </div>
    </ContentSection>
  );
};

export default SkillsSection;
