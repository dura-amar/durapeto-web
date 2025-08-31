export interface Organization {
  id: number;
  nameEn: string;
  nameNp: string;
  image: string;
  link?: string; // optional, can be used if different org pages exist
}

export const organizationsData: Organization[] = [
  {
    id: 1,
    nameEn: "Dura Sewa Samaj",
    nameNp: "दुरा सेवा समाज",
    image: "/images/orgs/org1.jpeg",
    link: "/organizations/dss",
  },
  {
    id: 2,
    nameEn: "Dura Mahila Samaj",
    nameNp: "दुरा महिला समाज",
    image: "/images/orgs/org2.jpg",
    link: "/organizations/dms",
  },
  {
    id: 3,
    nameEn: "Dura Students Society",
    nameNp: "दुरा विद्यार्थी समाज",
    image: "/images/orgs/org3.jpg",
    link: "/organizations/dss",
  },
];
