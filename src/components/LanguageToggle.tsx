"use client";
import { useLang } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
    >
      {lang === "en" ? "🇳🇵 नेपाली" : "🇬🇧 English"}
    </button>
  );
}
