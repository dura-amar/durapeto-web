"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { peopleData } from "@/data/peopleData";

// utility to pick N random indices
function getRandomIndices(arrayLength: number, count: number) {
  const indices = new Set<number>();
  while (indices.size < count) {
    indices.add(Math.floor(Math.random() * arrayLength));
  }
  return Array.from(indices);
}

export default function PeoplePreview() {
  const totalImages = 12; // two rows on desktop
  const [previewPeople, setPreviewPeople] = useState(
    peopleData.slice(0, totalImages)
  );

  // // subtle shuffle: swap 1–2 images every 5s
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPreviewPeople((prev) => {
  //       const newPreview = [...prev];
  //       const swapCount = Math.floor(Math.random() * 2) + 1;
  //       const swapIndices = getRandomIndices(totalImages, swapCount);

  //       swapIndices.forEach((idx) => {
  //         const randomPerson =
  //           peopleData[Math.floor(Math.random() * peopleData.length)];
  //         newPreview[idx] = randomPerson;
  //       });

  //       return newPreview;
  //     });
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  // staggered animation variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">People</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Meet the faces of the Dura community
      </p>

      {/* Collage Grid: fully responsive */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {previewPeople.map((person, idx) => (
          <motion.div
            key={`${person.name}-${idx}`}
            className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer group"
            variants={item}
            layout // enables smooth position transition
          >
            <Link href="/people">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <Link
        href="/people"
        className="inline-block px-6 py-2 bg-primary text-black rounded-full shadow-md hover:bg-primary/90 transition"
      >
        See All People →
      </Link>
    </section>
  );
}
