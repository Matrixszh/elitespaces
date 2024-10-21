"use client";
import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section id="Contact" className="text-center py-16 px-5 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Get In <span className="text-[#D72323]">Touch</span>
        </h1>
        <div className="flex items-center justify-center my-4">
          <div className="text-black/50 text-3xl font-normal font-Jost leading-[42px]">
            Extend your&nbsp;
          </div>
          <div className="text-black/50 text-3xl font-normal font-Jost leading-[42px]">
            <Typewriter
              words={["Vision", "Creativity", "Inspiration", "Elegance"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>

        <p className="font-Jost text-gray-600 text-sm sm:text-lg md:text-xl mt-12 mb-10 mx-auto max-w-3xl">
          We&apos;d love to hear from you! Reach out to discuss your design needs or any questions you may have.
        </p>
      </div>

      {/* Calendly Embed */}
      <div className="w-full max-w-[38rem] mt-8 mx-auto font-Jost">
        <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '650px' }}>
          <iframe
            src="https://calendly.com/your-calendly-link"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            style={{ borderRadius: '10px', overflow: 'hidden' }}
            title="Schedule a call"
          ></iframe>
        </div>
      </div>

    </section>
  );
};

export default Contact;
