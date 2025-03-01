import Container from "../Container/Container";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import tailwind from "../../assets/skills/tailwind.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import js from "../../assets/skills/js.png";
import ts from "../../assets/skills/ts.png";
import react from "../../assets/skills/react.png";
import next from "../../assets/skills/next.png";
import redux from "../../assets/skills/redux.png";
import node from "../../assets/skills/node.png";
import express from "../../assets/skills/express.png";
import mongodb from "../../assets/skills/mongodb.png";
import mongoose from "../../assets/skills/mongoose.png";
import nextAuth from "../../assets/skills/auth.png";
import firebase from "../../assets/skills/firebase.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.webp";
import figma from "../../assets/skills/figma.png";

const Skills = () => {
  const skillsWithLogos = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "Tailwind", logo: tailwind },
    { name: "Bootstrap", logo: bootstrap },
    { name: "JavaScript", logo: js },
    { name: "TypeScript", logo: ts },
    { name: "React", logo: react },
    { name: "Next Js", logo: next },
    { name: "Redux", logo: redux },
    { name: "Node.js", logo: node },
    { name: "Express.js", logo: express },
    { name: "MongoDB", logo: mongodb },
    { name: "Mongoose", logo: mongoose },
    { name: "NextAuth", logo: nextAuth },
    { name: "Firebase", logo: firebase },
    { name: "Git", logo: git },
    { name: "GitHub", logo: github },
    { name: "Figma", logo: figma },
  ];

  return (
    <div id="skills" className="lg:mt-48 mt-20">
      <Container>
        <h2 className="text-3xl font-bold mb-10  text-center text-white w-full lg:w-[600px] mx-auto">
          The skills, tools and technologies I am good at <span>👇</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsWithLogos.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center shadow-lg shadow-[#040c16] text-white py-7 rounded transition-transform transform hover:scale-110 duration-500"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <img src={skill.logo} alt={skill.name} className="h-16" />
              <span className="ml-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
