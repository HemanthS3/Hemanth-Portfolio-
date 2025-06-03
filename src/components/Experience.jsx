import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// No image imports needed

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              title="Python Full Stack Developer | Wizzybox Private Limited"
              subtitle="Internship"
              date="February 2025 - present"
              para="- Currently working on full-stack web development projects within a collaborative development team and gaining hands-on experience in Testing, Python, React and the Django framework."
            />
            <Exp_prop
              title="Build Your Own Robot 1.0 | HOLLOWORLD"
              subtitle="Participant"
              date="2023"
              para="- Creating real-time Prototype with different sensors, by performing various tasks using Arduino UNO IDE."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
