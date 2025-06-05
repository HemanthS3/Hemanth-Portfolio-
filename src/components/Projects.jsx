import Projectprop from './Projectprop'
import {
  Portfolio,
  FarmGenie,
  TodoList,
  Calculator,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiStreamlit,
  SiDjango
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Projectprop
            title="Portfolio Website"
            para="Personal portfolio website created with React and Tailwind CSS"
            img={Portfolio}
            link=""
            github_link="https://github.com/HemanthS3/Hemanth-Portfolio-"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Projectprop
            title="FarmGenie: AI-Driven Agriculture Platform"
            para="A comprehensive agriculture platform leveraging AI for precision farming with blockchain traceability and real-time collaboration features"
            img={FarmGenie}
            link="https://farmgenie.streamlit.app"
            github_link=""
            python={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            streamlit={
              <Tooltip title="Streamlit" arrow>
                <IconButton>
                  <SiStreamlit className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            django={
              <Tooltip title="Django" arrow>
                <IconButton>
                  <SiDjango className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Projectprop
            title="Todo-List Application"
            para="A feature-rich Todo-List application with task management, priority setting, and deadline tracking capabilities"
            img={TodoList}
            link="https://todo-list-app-demo.netlify.app"
            github_link="https://github.com/HemanthS3/TODO"
            html5={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Projectprop
            title="Calculator"
            para="A simple yet powerful calculator application with basic arithmetic operations and a clean user interface"
            img={Calculator}
            link=""
            github_link="https://github.com/HemanthS3/Calculator"
            html5={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;