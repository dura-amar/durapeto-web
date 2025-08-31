"use client";
import { useLang } from "@/context/LanguageContext";
import statisticsData from "@/data/statisticsData";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Statistics() {
  const { lang } = useLang();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
      {statisticsData.map((stat) => (
        <motion.div
          key={stat.labelEn}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-3xl font-bold">
            <CountUp end={stat.value} duration={2} separator="," />
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {lang === "en" ? stat.labelEn : stat.labelNe}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
