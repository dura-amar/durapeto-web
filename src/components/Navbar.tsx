"use client";
import Link from "next/link";
import { useState } from "react";
import navLinks from "@/data/navbarData";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Dura Peto
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks[lang].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}

          <LanguageToggle />
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2 transition-colors duration-300">
          {navLinks[lang].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center space-x-4 mt-2">
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
