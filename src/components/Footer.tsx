"use client";
import { useLang } from "@/context/LanguageContext";
import footerData from "@/data/footerData";
import Link from "next/link";

export default function Footer() {
  const { lang } = useLang();
  const data = footerData[lang];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300 mt-10">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300">
            {lang === "en" ? "About" : "हाम्रोबारे"}
          </h2>
          <p className="text-sm">{data.about}</p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300">
            {lang === "en" ? "Quick Links" : "छिटो पहुँच"}
          </h2>
          <ul className="space-y-2">
            {data.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href="/"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300">
            {lang === "en" ? "Contact" : "सम्पर्क"}
          </h2>
          <p>Email: info@durasociety.org</p>
          <p>Phone: +977-1234567890</p>
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-gray-800 py-4 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center text-sm">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}
