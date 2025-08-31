"use client";
import { useLang } from "@/context/LanguageContext";
import organizationsData from "@/data/organizationsData";
import Image from "next/image";
import Link from "next/link";

export default function OrganizationsPreview() {
  const { lang } = useLang();

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {lang === "en" ? "Organizations" : "संगठनहरु"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {organizationsData.map((org) => (
          <div
            key={org.nameEn}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-4 transition-colors duration-300"
          >
            <Image
              src={org.image}
              alt={org.nameEn}
              width={300}
              height={150}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">
              {lang === "en" ? org.nameEn : org.nameNe}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {org.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link
          href="/organizations"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {lang === "en" ? "View All Organizations" : "सबै संगठनहरु हेर्नुहोस्"}
        </Link>
      </div>
    </section>
  );
}
