import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";
import { useState, useEffect } from "react";

const About = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [cursorColor, setCursorColor] = useState("#0ea5e9"); // Initial color - sky-500
  
  const phrases = [
    { text: "Python Full Stack Development", color: "#3b82f6" }, // blue-500
    { text: "React", color: "#06b6d4" }, // cyan-500
    { text: "Django", color: "#22c55e" }, // green-500
    { text: "AIML ", color: "#a855f7" }, // purple-500
    { text: "Problem Solver", color: "#eab308" }, // yellow-500
    { text: "Innovator", color: "#ef4444" } // red-500
  ];
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i].text;
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );
      
      setCursorColor(phrases[i].color);
      setTypingSpeed(isDeleting ? 50 : Math.random() * 50 + 100); // Variable typing speed for more natural effect
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTimeout(() => {}, 200); // Slight pause before starting next word
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases, cursorColor]);
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex justify-between items-center max-sm:flex-col gap-10">
          <div className="INTRO flex-shrink-0 max-w-[45%] text-[70px] leading-[80px] font-semibold max-sm:max-w-full max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
              Hemanth S
              
            </span>

            <div className="ABOUT h-[200px] text-xl max-sm:text-[15px] max-w-[470px] mt-5 pl-1">
              <div className="typewriter-container relative">
                <span className="inline-block text-[#00040f] dark:text-slate-300">I'M INTO ::  </span>
                <span className="inline-block font-bold transition-colors duration-500" 
                      style={{ color: cursorColor }}>{text}</span>
                <span className="inline-block w-[3px] h-[25px] ml-1 animate-blink transition-colors duration-500" 
                      style={{ backgroundColor: cursorColor }}></span>
              </div>
              
              <div className="mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 animate-fadeIn">
                <p className="leading-relaxed">
                  Specializing in building innovative web applications
                  <span className="block mt-1 animate-slideUp" style={{ animationDelay: '0.5s' }}>
                    and creating AI-powered solutions for real-world challenges.
                  </span>
                </p>
              </div>
              
              <div className="mt-6 flex space-x-2">
                <a 
                  href="#contact" 
                  className="px-4 py-2 rounded-md text-white font-medium text-sm transition-all hover:shadow-lg animate-fadeIn"
                  style={{ 
                    animationDelay: '1s',
                    backgroundColor: cursorColor
                  }}
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className="px-4 py-2 rounded-md bg-transparent border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium text-sm transition-all hover:border-gray-600 dark:hover:border-gray-400 animate-fadeIn"
                  style={{ animationDelay: '1.2s' }}
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>

          <Lottie
            animationData={computer}
            loop={true}
            className="max-w-[700px] w-full ml-auto max-sm:ml-0 max-sm:mt-8"
          />
        </div>
      </section>
    </>
  );
};
export default About;
