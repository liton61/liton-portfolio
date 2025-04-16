import liton from "../../assets/liton.jpg";
import { Typewriter } from "react-simple-typewriter";
import Container from "../Container/Container";
import { MdFacebook } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { GrLocation } from "react-icons/gr";

const Hero = () => {
  return (
    <div id="hero">
      <Container>
        <div className="grid lg:grid-cols-12 grid-cols-1 md:grid-cols-2 lg:gap-20 gap-10 lg:mt-40 mt-16">
          {/* Text Section */}
          <div className="lg:col-span-8 w-full text-gray-300 lg:order-1 order-2">
            <div>
              <h1
                className="lg:text-6xl text-4xl font-bold mb-5"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <span
                  className="bg-gradient-to-r from-teal-500 to-green-400 bg-clip-text text-transparent font-bold"
                  style={{ fontFamily: "Satisfy" }}
                >
                  <Typewriter
                    words={["Hi, I'm Liton Mia"]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <p
                className="text-md text-justify"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                A MERN stack developer passionate about crafting clean,
                efficient, and scalable web applications. With a solid
                foundation in MongoDB, Express.js, React.js, and Node.js, I aim
                to contribute innovative solutions while continuously learning
                and growing in this dynamic field.
              </p>
            </div>

            {/* Contact Info */}
            <div data-aos="zoom-in" data-aos-duration="2000">
              <ul className="list-disc mb-5 mt-10">
                <li className="flex items-center gap-2 mt-7">
                  <GrLocation size={25} /> Dhaka, Bangladesh
                </li>
                <li className="flex items-center gap-2 mt-3">
                  <GoDotFill size={25} color="#47DC81" /> Available for new
                  projects
                </li>

                {/* Social Icons */}
                <li className="flex items-center gap-5 mt-7">
                  <a
                    href="https://www.facebook.com/profile.php?id=100092320843338"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdFacebook size={25} className="text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/liton-mia-3212522a5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={25} className="text-white" />
                  </a>
                  <a
                    href="https://github.com/liton61"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={25} className="text-white" />
                  </a>
                  <a href="#">
                    <FaTwitter size={25} className="text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Section (No Rotation) */}
          <div className="lg:col-span-4 w-full flex justify-center items-center order-1 lg:order-2">
            <img
              src={liton}
              alt="Liton Mia"
              className="md:w-96 w-full h-auto border-4 border-teal-600 rounded-full"
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
