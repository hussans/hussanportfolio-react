import React, { useContext } from "react";
import { Mail, Send } from "lucide-react";
import { ThemeContext } from "../App";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="footer-contact"
      className="h-screen w-screen flex flex-col items-center justify-center p-8 relative"
    >
      <div className="text-center max-w-xl">
        <Mail
          size={60}
          className={`mx-auto mb-8 ${theme === "dark" ? "text-purple-400" : "text-purple-600"
            }`}
        />
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"
            }`}
        >
          Let's Connect
        </h2>
        <p
          className={`text-lg md:text-xl mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
        >
          Have a project in mind, a question, or just want to say hello? I'd
          love to hear from you.
        </p>
        <form className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="footer-contact-name" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                id="footer-contact-name"
                name="name"
                placeholder="Your Full Name"
                required
                className={`w-full p-3.5 rounded-lg border transition-all duration-300
                              ${theme === "dark"
                    ? "bg-gray-700/50 border-gray-600 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 text-white"
                    : "bg-gray-100 border-gray-300 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                  }`}
              />
            </div>
            <div>
              <label htmlFor="footer-contact-email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="footer-contact-email"
                name="email"
                placeholder="Your Email Address"
                required
                className={`w-full p-3.5 rounded-lg border transition-all duration-300
                              ${theme === "dark"
                    ? "bg-gray-700/50 border-gray-600 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 text-white"
                    : "bg-gray-100 border-gray-300 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                  }`}
              />
            </div>
          </div>
          <div>
            <label htmlFor="footer-contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="footer-contact-message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className={`w-full p-3.5 rounded-lg border transition-all duration-300
                          ${theme === "dark"
                  ? "bg-gray-700/50 border-gray-600 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 text-white"
                  : "bg-gray-100 border-gray-300 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                }`}
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              alert(
                "Backend or email service not set up yet."
              );
            }}
            className={`w-full sm:w-auto py-3.5 px-10 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto
                        ${theme === "dark"
                ? "bg-purple-600 hover:bg-purple-700 text-white focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                : "bg-purple-500 hover:bg-purple-600 text-white focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-gray-50"
              }`}
          >
            Send Message <Send size={18} className="ml-2.5" />
          </button>
        </form>
        <p
          className={`text-xs mt-10 ${theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
        >
          &copy; {new Date().getFullYear()} Hussan Sajid. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
