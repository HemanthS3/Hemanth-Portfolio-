import {
  HTML,
  CSS,
  Github,
  Git,
  TailwindCSS,
  ReactImg,
  Python,
  Javascript
} from "../constants/Constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "./Img_prop";

// External icons for new skills
const javaIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
const sqlIcon = "https://www.svgrepo.com/show/331760/sql-database-generic.svg"; // Better SQL icon
const mysqlIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg";
const tableauIcon = "https://www.tableau.com/sites/default/files/2022-04/TableauLogo_RGB.png";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  const skillCategories = [
    {
      id: "all",
      name: "All Skills"
    },
    {
      id: "languages",
      name: "Languages"
    },
    {
      id: "frontend",
      name: "Frontend"
    },
    {
      id: "backend",
      name: "Backend"
    },
    {
      id: "tools",
      name: "Tools"
    }
  ];
  
  const skills = [
    // Languages
    { id: 1, name: "Python", img: Python, category: "languages" },
    { id: 2, name: "JavaScript", img: Javascript, category: "languages" },
    { id: 3, name: "Java", img: javaIcon, category: "languages" },
    { id: 4, name: "SQL", img: sqlIcon, category: "languages" },
    
    // Frontend
    { id: 5, name: "HTML", img: HTML, category: "frontend" },
    { id: 6, name: "CSS", img: CSS, category: "frontend" },
    { id: 7, name: "React", img: ReactImg, category: "frontend" },
    { id: 8, name: "Tailwind CSS", img: TailwindCSS, category: "frontend" },
    
    // Backend
    { id: 9, name: "MySQL", img: mysqlIcon, category: "backend" },
    { id: 10, name: "Django", img: Python, category: "backend" },
    
    // Tools
    { id: 11, name: "Git", img: Git, category: "tools" },
    { id: 12, name: "GitHub", img: Github, category: "tools" },
    { id: 13, name: "Tableau", img: tableauIcon, category: "tools" }
  ];
  
  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);
  
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5">
        <div className="text-center mb-12">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl mb-4">
            SKILLS
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of technologies I work with as a Python Full Stack Developer and AIML Engineer.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-md"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5"
          data-aos="fade-up"
        >
          {filteredSkills.map(skill => (
            <div 
              key={skill.id} 
              data-aos="zoom-in" 
              data-aos-delay={skill.id * 50}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Image 
                img={skill.img} 
                name={skill.name}
              />
            </div>
          ))}
        </div>
        
        {/* Empty state if no skills match the filter */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No skills found in this category.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Skills;
