import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Container from "../Container/Container";
import { MdCall, MdEmail, MdOutlineWhatsapp } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5rdxana",
        "template_b5h3617",
        form.current,
        "aY09R0x-o_CBd4nUQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          Swal.fire({
            title: "Good job!",
            text: "You you have successfully submitted !",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="text-gray-300 lg:my-48 my-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-center text-white">
              Contact Me 👇
            </h2>
            <form
              className="shadow-lg shadow-[#040c16] p-10"
              ref={form}
              onSubmit={sendEmail}
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-4 py-2 rounded bg-gray-300 text-black focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-4 py-2 rounded bg-gray-300 text-black focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 rounded bg-gray-300 text-black focus:outline-none"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white font-medium py-2 rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <div
              className="flex items-center gap-5 shadow-lg p-5 shadow-[#040c16]"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="bg-teal-600 p-5 rounded-full">
                <MdOutlineWhatsapp className="text-4xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">WhatsApp Me</h3>
                <p className="text-gray-300">01732907620</p>
              </div>
            </div>
            <div
              className="flex items-center gap-5 shadow-lg p-5 shadow-[#040c16]"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="bg-teal-600 p-5 rounded-full">
                <MdCall className="text-4xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Me Anytime</h3>
                <p className="text-gray-300">+880 1738751356</p>
              </div>
            </div>
            <div
              className="flex items-center gap-5 shadow-lg p-5 shadow-[#040c16]"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="bg-teal-600 p-5 rounded-full">
                <MdEmail className="text-4xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Send An Email</h3>
                <p className="text-gray-300">litonmia2k1@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
