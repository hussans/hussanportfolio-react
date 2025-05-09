import React from "react";
import ContentSection from "./ContentSection";
import { UserCircle } from "lucide-react";

const AboutSection = () => (
  <ContentSection id="about-content" title="About Me" icon={<UserCircle />}>
    <div className="space-y-5 text-base md:text-lg leading-relaxed">
      <p>
        Hello! I'm Hussan Sajid, a passionate Web Developer. I
        specialize in creating intuitive, dynamic, and user-friendly web
        experiences. My journey in technology has been fueled by a relentless
        curiosity and a drive to solve complex problems with elegant solutions.
      </p>
      <p>
        I thrive in collaborative settings and am always eager to learn new
        skills and technologies. Beyond coding, I enjoy design, art, and experiences, 
        which often inspire my creative approach to development. 
        My goal is to build software that not only functions
        flawlessly but also provides a delightful user experience.
      </p>
    </div>
  </ContentSection>
);

export default AboutSection;
