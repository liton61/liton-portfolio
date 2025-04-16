import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <SoftSkills />
      <Projects />
      <About/>
      <Contact />
    </>
  );
}

export default App;
