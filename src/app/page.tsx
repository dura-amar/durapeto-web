"use client";
import { useLang } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Statistics from "@/components/Statistics";
import PeoplePreview from "@/components/PeoplePreview";
import ResidencesPreview from "@/components/ResidencesPreview";
import OrganizationsPreview from "@/components/OrganizationsPreview";
import heroImages from "@/data/heroData";

export default function HomePage() {
  const { lang } = useLang();
  const [current, setCurrent] = useState(0);

  // Carousel effect: change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={heroImages[current]}
              alt={`Hero ${current}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {lang === "en" ? "Welcome to Dura Peto" : "दुरा पेटोमा स्वागत छ"}
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">
            {lang === "en"
              ? "This platform is dedicated to the history, culture, and identity of the Dura community."
              : "यो मञ्च दुरा समुदायको इतिहास, संस्कृति, र पहिचानलाई सुरक्षित राख्न समर्पित छ।"}
          </p>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
        <div className="container mx-auto p-6">
          <Statistics />
        </div>
      </section>
      {/* People Preview */}
      <section className="bg-white dark:bg-gray-950 py-12 transition-colors duration-300">
        <div className="container mx-auto p-6">
          <PeoplePreview />
        </div>
      </section>
      {/* Residences Preview
      <section className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
        <div className="container mx-auto p-6">
          <ResidencesPreview />
        </div>
      </section> */}
      {/* Organizations Preview */}
      <section className="bg-white dark:bg-gray-950 py-12 transition-colors duration-300">
        <div className="container mx-auto p-6">
          <OrganizationsPreview />
        </div>
      </section>
    </div>
  );
}
