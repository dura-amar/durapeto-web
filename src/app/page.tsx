"use client";
import { useLang } from "@/context/LanguageContext";
import Statistics from "@/components/Statistics";
import PeoplePreview from "@/components/PeoplePreview";
import ResidencesPreview from "@/components/ResidencesPreview";
import OrganizationsPreview from "@/components/OrganizationsPreview";

export default function HomePage() {
  const { lang } = useLang();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12">
        <div className="container mx-auto p-6 text-center">
          <h1 className="text-4xl font-bold mb-6">
            {lang === "en" ? "Welcome to Dura Peto" : "दुरा पेटोमा स्वागत छ"}
          </h1>
          <p className="text-lg">
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

      {/* Residences Preview */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
        <div className="container mx-auto p-6">
          <ResidencesPreview />
        </div>
      </section>

      {/* Organizations Preview */}
      <section className="bg-white dark:bg-gray-950 py-12 transition-colors duration-300">
        <div className="container mx-auto p-6">
          <OrganizationsPreview />
        </div>
      </section>
    </div>
  );
}
