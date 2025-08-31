interface Stat {
  labelEn: string;
  labelNe: string;
  value: number;
}

const statisticsData: Stat[] = [
  { labelEn: "Total People", labelNe: "कुल व्यक्तित्व", value: 1250 },
  { labelEn: "Residences", labelNe: "स्थाननाम", value: 75 },
  { labelEn: "Organizations", labelNe: "संगठनहरु", value: 5 },
  { labelEn: "Stories Collected", labelNe: "संग्रहित कथाहरु", value: 320 },
];

export default statisticsData;
export type { Stat };
