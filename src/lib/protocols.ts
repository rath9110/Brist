import type { DeficiencyArea } from "./types";

export type Protocol = {
  nutrient: DeficiencyArea;
  nameSv: string;
  form: string;
  dose: string;
  doseHigh?: string; // used when score >= 0.8 (or range-based)
  timing?: string;
  duration: string;
  note: string;
  biomarker?: string; // tier 2: marker to request
  testRationale?: string; // tier 2: why testing is needed
};

export const PROTOCOLS: Record<DeficiencyArea, Protocol> = {
  vitamin_d: {
    nutrient: "vitamin_d",
    nameSv: "D-vitamin",
    form: "Cholecalciferol (D3)",
    dose: "2000 IU (50\u00B5g) dagligen",
    doseHigh: "4000 IU (100\u00B5g) dagligen",
    timing: "En måltid som innehåller fett. Tillägg av K2 (MK-7) 100\u00B5g rekommenderas.",
    duration: "12 veckor, sedan utvärdering",
    note: "4000 IU är EFSAs övre gräns för vuxna - säkert utan medicinsk övervakning.",
  },
  magnesium: {
    nutrient: "magnesium",
    nameSv: "Magnesium",
    form: "Magnesiumglycinat (bisglycinat)",
    dose: "400 mg per dag",
    doseHigh: "200 mg per dag",
    timing: "Kvällstid (kan stödja sömn)",
    duration: "8 veckor, utvärdera efter symtom",
    note: "Glycinat har hög biotillgänglighet och få biverkningar från magen. Minska dosen om du får lös mage.",
  },
  omega3: {
    nutrient: "omega3",
    nameSv: "Omega-3",
    form: "Triglyceridform fiskolja (EPA+DHA). Vegansk: Algbaserad olja.",
    dose: "1000 mg EPA+DHA per dag",
    doseHigh: "1500 mg EPA+DHA per dag",
    timing: "Tillsammans med mat",
    duration: "12 veckor",
    note: "Triglyceridform har ~70% bättre absorption än etylesterform. Välj IFOS- eller GOED-certifierad.",
  },
  b12: {
    nutrient: "b12",
    nameSv: "B12",
    form: "Metylkobalamin",
    dose: "500\u00B5g per dag, sublingual",
    doseHigh: "1000\u00B5g per dag, sublingual",
    duration: "8 veckor. Veganer: långvarigt.",
    note: "Sublingual form för optimal absorption.",
    biomarker: "B12 (kobalamin)",
    testRationale: "B12-brist bör bekräftas med blodprov, särskilt om du inte äter veganskt.",
  },
  iron: {
    nutrient: "iron",
    nameSv: "Järn",
    form: "Järnbisglycinat",
    dose: "25 mg per dag med C-vitamin 200 mg",
    timing: "Fastande eller med C-vitamin. 2 timmar från kaffe/te/mjölk.",
    duration: "12 veckor",
    note: "Supplementera INTE järn utan att först testa ferritin. Överdosering är skadligt.",
    biomarker: "Ferritin",
    testRationale: "Supplementera inte järn utan att veta ditt ferritinvärde.",
  },
  zinc: {
    nutrient: "zinc",
    nameSv: "Zink",
    form: "Zinkpikolinat eller zinkbisglycinat",
    dose: "15–25 mg per dag med mat",
    duration: "8 veckor max utan omtest",
    note: "Långvarig zinkanvändning tömmer kopparlagren. Lägg till 1–2 mg koppar om du tar det längre än 8 veckor.",
    biomarker: "S-Zink",
    testRationale: "Zinkstatus bör kontrolleras innan supplementering.",
  },
  folate: {
    nutrient: "folate",
    nameSv: "Folat",
    form: "Metylfolat (5-MTHF)",
    dose: "400\u00B5g per dag",
    duration: "8 veckor",
    note: "Folat kan maskera B12-brist. Kontrollera alltid B12-status parallellt.",
    biomarker: "Folat (erytrocytfolat)",
    testRationale: "Folatstatus bör mätas, och B12 kontrolleras parallellt.",
  },
  thyroid: {
    nutrient: "thyroid",
    nameSv: "Sköldkörtel",
    form: "",
    dose: "",
    duration: "",
    note: "Dina svar tyder på att sköldkörtelfunktionen bör utvärderas av en läkare. Det är inget att oroa sig för, det handlar om att få rätt hjälp.",
    biomarker: "TSH",
    testRationale: "Sköldkörtelfunktionen bör utvärderas av en läkare.",
  },
};

// Determine which dose string to show based on nutrient score
export function getDose(protocol: Protocol, score: number): string {
  if (protocol.nutrient === "magnesium") {
    // Magnesium: lower dose for "Troligt" range (0.3–0.49)
    return score < 0.5 && protocol.doseHigh ? protocol.doseHigh : protocol.dose;
  }
  // Others: higher dose if score >= 0.8
  if (score >= 0.8 && protocol.doseHigh) return protocol.doseHigh;
  return protocol.dose;
}
