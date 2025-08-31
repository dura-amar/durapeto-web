"use client";
import { useLang } from "@/context/LanguageContext";
import peopleData from "@/data/peopleData";
import Image from "next/image";
import Link from "next/link";

export default function PeoplePreview() {
  const { lang } = useLang();

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {lang === "en" ? "Notable People" : "व्यक्तित्वहरु"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {peopleData.map((person) => (
          <div
            key={person.nameEn}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 text-center transition-colors duration-300"
          >
            <Image
              src={person.image}
              alt={person.nameEn}
              width={150}
              height={150}
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">
              {lang === "en" ? person.nameEn : person.nameNe}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{person.role}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link
          href="/people"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {lang === "en" ? "View All People" : "सबै व्यक्तित्वहरु हेर्नुहोस्"}
        </Link>
      </div>
    </section>
  );
}
