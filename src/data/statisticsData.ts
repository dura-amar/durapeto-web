interface Stat {
  labelEn: string;
  labelNe: string;
  value: number;
}

const statisticsData: Stat[] = [
  { labelEn: "Total People", labelNe: "कुल व्यक्तित्व", value: 5581 },
  { labelEn: "Sub Castes", labelNe: "उप थरहरु", value: 5 },
  { labelEn: "Native Speakers", labelNe: "वक्ता सङ्ख्या", value: 1921 },
  { labelEn: "Residences", labelNe: "स्थाननाम", value: 75 },
  { labelEn: "Organizations", labelNe: "संगठनहरु", value: 5 },
  { labelEn: "Districts", labelNe: "जिल्लाहरु", value: 9 },

];

export default statisticsData;
export type { Stat };
