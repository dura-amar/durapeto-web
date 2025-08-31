export interface Residence {
  nameEn: string;
  nameNe: string;
  description: string;
  image: string;
}

const residencesData: Residence[] = [
  {
    nameEn: "Dura Village",
    nameNe: "दुरा गाउँ",
    description: "Traditional village in Nepal.",
    image: "/images/residences/village.jpg",
  },
  {
    nameEn: "Himalayan Settlement",
    nameNe: "हिमालयन बस्ती",
    description: "Scenic settlement in the mountains.",
    image: "/images/residences/himalaya.jpg",
  },
];

export default residencesData;
