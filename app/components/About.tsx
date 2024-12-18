"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import img1 from "@/public/images/elite2.jpg";
import img2 from "@/public/images/elite4.jpg";
import img3 from "@/public/images/elite10.jpg";
import img4 from "@/public/images/elite6.jpg";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const firstLineWords = ["Our", "Love", "for"];
  const secondLineWords = ["Interior", "Design"];

  // Refs for useInView
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="About" className="py-16 px-5 sm:px-10 lg:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Animated H1 with first 3 words on one line, rest on the next line */}
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
        >
          {/* First line words */}
          <motion.div className="inline-block">
            {firstLineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={headingInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.3 }}
                className="inline-block mx-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <br />
          {/* Second line words */}
          <motion.div className="inline-block">
            {secondLineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={headingInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  delay: (index + firstLineWords.length) * 0.2 + 0.2,
                  duration: 0.3,
                }}
                className="inline-block mx-1 text-[#D72323]"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </h1>

        {/* Rest of the content */}
        <div className="flex justify-center items-center gap-3 my-4">
          <div className="w-1/4 h-px border-t border-gray-600" />
          <p className="text-gray-600 font-Jost text-sm sm:text-base uppercase tracking-wider">
            About Us
          </p>
          <div className="w-1/4 h-px border-t border-gray-600" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 1.0,
            duration: 0.3,
            type: "spring",
            stiffness: 50,
          }}
          className="text-gray-600 font-Jost text-sm sm:text-lg md:text-xl mt-2 mb-10 mx-auto max-w-3xl"
        >
          We are a passionate team dedicated to creating stunning interiors.
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 1.0,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="w-full lg:w-1/2 rounded-2xl relative overflow-hidden"
            style={{ height: "500px" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={img}
                  alt={`Interior design ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="animate-slow-zoom"
                />
              </div>
            ))}
          </motion.div>

          {/* Text block animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 1.2,
              duration: 0.8,
              type: "spring",
              stiffness: 50,
            }}
            className="w-full lg:w-1/3 text-justify"
          >
            <p className="text-black/80 md:text-xl text-left text-lg font-normal font-Jost leading-relaxed">
              At <span className="text-[#D72323]">EliteSpaces</span>, we
              specialize in transforming homes through expert kitchen and
              bathroom renovations, as well as stunning home additions. With a
              track record of over 100 successful projects, we take pride in
              creating functional, beautiful spaces tailored to our clients&apos; unique needs and lifestyles.
            </p>
            <p className="text-black/80 md:text-xl text-left text-lg font-normal font-Jost leading-relaxed">
              From concept to completion, our team of experienced professionals
              is dedicated to delivering top-quality craftsmanship and
              exceptional service on every project. Whether you&apos;re looking to upgrade your kitchen, refresh your bathroom, or expand your living space, EliteSpaces is committed to making your vision a reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
