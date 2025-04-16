import Container from "../Container/Container";
import { MdSchool } from "react-icons/md";

const experiences = [
  {
    company: "SoftyPy",
    role: "Software Engineer (Frontend)",
    duration: "Jun 2024 – Present",
    description:
      "Develop and maintain client-side applications with modern frontend technologies. Collaborate with cross-functional teams to build scalable, accessible, and responsive web interfaces. Handle state management, server-side integration, and performance optimization using tools like Redux and React Query.",
    responsibilities: [
      "Developed scalable and performant frontend architectures using React and Next.js.",
      "Implemented advanced state management using Redux Toolkit and React Query.",
      "Styled and structured UI with Tailwind CSS, MUI, and ShadCN components.",
      "Built reusable components using TypeScript with strong type safety.",
      "Collaborated in Agile teams to deliver features through CI/CD pipelines.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
    ],
  },
];

const education = [
  {
    institute: "Sonargaon University",
    degree: "BSc in Computer Science & Engineering",
    period: "Jan 2019 – Sep 2023",
    location: "Dhaka, Bangladesh",
  },
];

const About = () => {
  return (
    <div id="about" className="text-white lg:mt-48 mt-20">
      <Container>
        <h2
          className="text-3xl font-bold text-center mb-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          About Me 👇
        </h2>
        <div className="border-l border-teal-600 pl-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-1">
                {exp.company} · {exp.duration}
              </p>
              <p className="text-white my-4">{exp.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 mb-4">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-600 text-white text-xs font-semibold px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- Education Section --- */}
        <div id="education" className="mt-10">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 border-l border-teal-600 p-10 rounded-md shadow-md"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="flex items-center gap-4 mb-2">
                  <MdSchool size={30} className="text-teal-400" />
                  <h3 className="text-xl font-semibold">{edu.institute}</h3>
                </div>
                <p className="text-teal-300">{edu.degree}</p>
                <p className="text-sm text-gray-400">
                  {edu.period} · {edu.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
