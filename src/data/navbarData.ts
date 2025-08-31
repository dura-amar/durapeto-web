interface NavLink {
  name: string;
  href: string;
}

interface NavLinks {
  en: NavLink[];
  ne: NavLink[];
}

const navLinks: NavLinks = {
  en: [
    { name: "Home", href: "/" },
    { name: "People", href: "/people" },
    { name: "Residences", href: "/residences" },
    { name: "Organizations", href: "/organizations" },
    { name: "Contact", href: "/contact" },
  ],
  ne: [
    { name: "गृहपृष्ठ", href: "/" },
    { name: "व्यक्तित्वहरु", href: "/people" },
    { name: "स्थाननाम", href: "/residences" },
    { name: "संगठनहरु", href: "/organizations" },
    { name: "सम्पर्क", href: "/contact" },
  ],
};

export default navLinks;
