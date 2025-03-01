import { useState } from "react";
import Container from "../components/Container/Container";
import { MdClose, MdMenu } from "react-icons/md";
import "./Navbar.css";
import logo from "../assets/code2.png";
import resume from "../assets/Liton Mia.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="bg-gray-900 text-teal-600 border-b border-teal-600 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={logo} alt="" className="lg:w-20 w-16" />
          </a>
          <div className="lg:hidden block cursor-pointer" onClick={handleOpen}>
            {open ? <MdClose size={25} /> : <MdMenu size={25} />}
          </div>
          <ul
            className={`lg:flex justify-between items-center gap-7 menu-items ${
              open ? "block" : "hidden"
            }`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#soft-skills">Soft Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="lg:block hidden bg-teal-600 px-4 py-2 rounded text-white">
            <a href={resume} download="liton-resume.pdf">
              Download Resume
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
