import Lottie from "lottie-react";
import education from "../assets/lottie/Education.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import VVCELogo from "../assets/vvce-logo.png"; // VVCE College logo
import SaradaLogo from "../assets/sarada.jpg"; // Sarada Vilas College logo
import MarimallappaLogo from "../assets/Marimallappa.jpg"; // Marimallappa School logo

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 mb-10 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Education
        </h1>

        <div
          className="EDUCATION flex gap-7 justify-between max-sm:flex-col"
          data-aos="fade-right"
        >
          <div className="max-w-[600px] mt-[52px] p-7 max-sm:p-3">
            <div className="education-items space-y-12">
              {/* B.E in AIML */}
              <div className="education-item p-6 rounded-xl shadow-lg border border-[#00040f] dark:border-slate-700 bg-[#e1e1e1] dark:bg-transparent hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:hover:from-[#00040F] dark:hover:to-[#0B274C] transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-3">
                  <img src={VVCELogo} alt="VVCE Logo" className="w-16 h-16 object-contain rounded-full border border-[#00040f] dark:border-slate-500" />
                  <h2 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl tracking-wider">
                    B.E in AIML
                  </h2>
                </div>
                <h3 className="text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg mt-2">
                  VidyaVardhaka College of Engineering
                </h3>
                <p className="italic text-gray-500 dark:text-slate-500 text-lg max-sm:text-base mt-1">
                  2021 – 2025 | Mysore
                </p>
              </div>

              {/* Pre-University */}
              <div className="education-item p-6 rounded-xl shadow-lg border border-[#00040f] dark:border-slate-700 bg-[#e1e1e1] dark:bg-transparent hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:hover:from-[#00040F] dark:hover:to-[#0B274C] transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-3">
                  <img src={SaradaLogo} alt="Sarada Vilas Logo" className="w-16 h-16 object-contain rounded-full border border-[#00040f] dark:border-slate-500" />
                  <h2 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl tracking-wider">
                    Pre-University
                  </h2>
                </div>
                <h3 className="text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg mt-2">
                  Sarda Vilas Pre-University College
                </h3>
                <p className="italic text-gray-500 dark:text-slate-500 text-lg max-sm:text-base mt-1">
                  2019 – 2021 | Mysore
                </p>
              </div>

              {/* SSLC */}
              <div className="education-item p-6 rounded-xl shadow-lg border border-[#00040f] dark:border-slate-700 bg-[#e1e1e1] dark:bg-transparent hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:hover:from-[#00040F] dark:hover:to-[#0B274C] transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-3">
                  <img src={MarimallappaLogo} alt="Marimallappa Logo" className="w-16 h-16 object-contain rounded-full border border-[#00040f] dark:border-slate-500" />
                  <h2 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl tracking-wider">
                    SSLC
                  </h2>
                </div>
                <h3 className="text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg mt-2">
                  Marimallappa's High School
                </h3>
                <p className="italic text-gray-500 dark:text-slate-500 text-lg max-sm:text-base mt-1">
                  2019 | Mysore
                </p>
              </div>
            </div>
          </div>
          
          <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] self-center"
          />
        </div>
      </div>
    </section>
  );
};
export default Education;
