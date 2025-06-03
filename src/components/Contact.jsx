/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";
import { useState, useRef } from "react";
import API_CONFIG from "../config/api";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);
  
  const [formError, setFormError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      const formData = new FormData(e.target);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };
      
      // Send data to backend API
      const response = await fetch(API_CONFIG.getUrl(API_CONFIG.ENDPOINTS.CONTACT), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus("success");
        
        // Reset the form
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setFormError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      
      // Reset success/error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setFormError(null);
      }, 5000);
    }
  };
  
  return (
    <>
      <section
        id="contact"
        className="EXPERIENCE dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins'] max-sm:p-2"
      >
        <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">
          <div className="ABOUT p-7 flex-1">
            <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
              Hemanth S
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
              Python Full Stack Developer | B.E in AIML | VidyaVardhaka College of Engineering | 
              Building innovative web solutions with Python, React, and Django
            </p>
            <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://github.com/HemanthS3"
                className="hover:text-slate-500 dark:hover:text-sky-300"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hemanth-s-b8233624a/"
                className="hover:text-slate-500 dark:hover:text-sky-300"
              >
                <SiLinkedin />
              </a>
             
              <a
                href="mailto:hemanths072@gmail.com?subject=Hello%20from%20your%20Portfolio%20Website"
                className="hover:text-slate-500 dark:hover:text-sky-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email to Hemanth"
              >
                <SiGmail />
              </a>
            </div>
            <div className="flex gap-5 max-sm:justify-center">
              <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded">
                <a href="/HEMANTH - Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </button>
              <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded">
                <a
                  href="https://github.com/HemanthS3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center justify-center"
                >
                  <SiGithub />
                  Star
                </a>
              </button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="flex-1 max-w-[500px] p-4">
            <h3 className="text-[#00040f] font-semibold dark:text-slate-300 text-xl mb-4">Get In Touch</h3>
            
            <form 
              ref={formRef}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 px-4 rounded-md text-white font-medium transition-all duration-300 ${
                    isSubmitting 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-300 dark:text-black hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              
              {submitStatus === "success" && (
                <div className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md text-center text-sm">
                  Thank you! Your message has been received. I'll get back to you soon.
                </div>
              )}
              
              {formError && (
                <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-center text-sm">
                  {formError}
                </div>
              )}
              
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <p>You can also reach me directly at: <a href="mailto:hemanths072@gmail.com" className="text-blue-500 dark:text-blue-400 hover:underline">hemanths072@gmail.com</a></p>
              </div>
            </form>
          </div>
        </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with ❤️ by Hemanth S
        </p>
      </section>
    </>
  );
};

export default Contact;