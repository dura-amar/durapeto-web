export interface Person {
  nameEn: string;
  nameNe: string;
  role: string;
  image: string; // URL or path
}

const peopleData: Person[] = [
  {
    nameEn: "Amar Dura",
    nameNe: "अमर दुरा",
    role: "Researcher",
    image: "/images/people/amar.jpg",
  },
  {
    nameEn: "Sita Dura",
    nameNe: "सिता दुरा",
    role: "Historian",
    image: "/images/people/sita.jpg",
  },
  {
    nameEn: "Ram Dura",
    nameNe: "राम दुरा",
    role: "Community Leader",
    image: "/images/people/ram.jpg",
  },
];

export default peopleData;
