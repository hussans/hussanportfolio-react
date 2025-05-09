import React from "react";
import ContentSection from "./ContentSection";
import ProjectCard from "./ProjectCard";
import { Briefcase } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ShearGenius",
      description:
        "A multi-use full stack application for barber and clients to connect, interact, and socialize. ",
      tech: ["Next.js", "C#", "Azure", "Figma"],
      link: "https://sheargenius.vercel.app",
      imageSrc: "/ShearGenius-Site.png",
    },
    {
      title: "San-Pokedex",
      description:
        "A fun pokedex project utilizing external APIs and asynchronous data fetching.",
      tech: ["Next.js", "Asynchronous API", "Figma"],
      link: "https://pokedex-nextjs-tck8.vercel.app/",
      imageSrc: "/Pokedex-Site.png",
    },
  ];
  return (
    <ContentSection id="projects-content" title="My Work" icon={<Briefcase />}>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </ContentSection>
  );
};

export default ProjectsSection;
