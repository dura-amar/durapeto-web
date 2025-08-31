"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { organizationsData } from "@/data/organizationsData";

export default function OrganizationsPreview() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Organizations</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Key organizations of the Dura community
      </p>

      <motion.div
        className="flex justify-center items-center gap-6 mb-6 flex-wrap"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {organizationsData.map((org) => (
          <motion.div
            key={org.id}
            className="relative w-24 sm:w-32 h-24 sm:h-32 cursor-pointer group"
            variants={item}
            layout
          >
            <Link href="/organizations">
              <Image
                src={org.image}
                alt={org.nameEn}
                fill
                className="object-contain transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-1">
                <p className="text-white text-xs sm:text-sm text-center font-semibold">
                  {org.nameEn} <br /> {org.nameNp}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <Link
        href="/organizations"
        className="inline-block px-6 py-2 bg-primary text-black rounded-full shadow-md hover:bg-primary/90 transition"
      >
        See All Organizations →
      </Link>
    </section>
  );
}
