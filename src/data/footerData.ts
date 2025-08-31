interface FooterDataType {
  about: string;
  copyright: string;
  links: string[];
}

interface FooterData {
  en: FooterDataType;
  ne: FooterDataType;
}

const footerData: FooterData = {
  en: {
    about:
      "Dura Peto is a platform dedicated to preserving and sharing the history, culture, and identity of the Dura Indigenous Community.",
    copyright: "© 2025 Dura Students Society. All rights reserved.",
    links: ["About Us", "Privacy Policy", "Terms of Service"],
  },
  ne: {
    about:
      "दुरा पेटो दुर्लभ इतिहास, संस्कृति र पहिचानलाई सुरक्षित राख्न र साझा गर्न समर्पित एक मञ्च हो।",
    copyright: "© २०२५ दुरा विद्यार्थी समाज। सबै अधिकार सुरक्षित।",
    links: ["हाम्रोबारे", "गोपनीयता नीति", "सेवा सर्तहरू"],
  },
};

export default footerData;
