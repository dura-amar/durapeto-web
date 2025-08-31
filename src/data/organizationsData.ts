export interface Organization {
  nameEn: string;
  nameNe: string;
  description: string;
  image: string;
}

const organizationsData: Organization[] = [
  {
    nameEn: "Dura Students Society",
    nameNe: "दुरा विद्यार्थी समाज",
    description: "Organization for Dura students and youth.",
    image: "/images/orgs/dss.jpg",
  },
  {
    nameEn: "Dura Cultural Center",
    nameNe: "दुरा सांस्कृतिक केन्द्र",
    description: "Promoting Dura culture and heritage.",
    image: "/images/orgs/dcc.jpg",
  },
];

export default organizationsData;
