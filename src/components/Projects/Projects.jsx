import Container from "../Container/Container";
import kalam from "../../assets/kalam.png";
import softypy from "../../assets/softypy.png";
import anaa from "../../assets/anaa.png";
import quickShip from "../../assets/quickShip.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./Projects.css";

// Project data array
const projects = [
  { img: kalam, link: "https://kalamstutorial.com/", title: "Kalam" },
  { img: softypy, link: "https://softypy.com/", title: "Softypy" },
  { img: anaa, link: "https://anaadevelopersltd.com/", title: "Anaa" },
  {
    img: quickShip,
    link: "https://quick-ship-client-lemon.vercel.app/",
    title: "Quick Ship",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="projects" className="text-gray-300 lg:my-48 my-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="image-wrap border border-teal-600 p-5 relative"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl font-semibold px-4 py-2 bg-teal-600 rounded-full"
                >
                  Live Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
