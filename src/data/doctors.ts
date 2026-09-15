import type { Doctor } from "@/components/medinova/doctor-assets";

/** Static medical-team directory — example content, no backend required. */
export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Sarah Perera",
    specialty: "General Physician",
    photo_slug: "doctor-1",
    experience_years: 12,
    qualifications: "MBBS, MD (Family Medicine)",
    languages: ["English", "Sinhala"],
    focus: "General consultation, preventive care, health screening",
    bio: "Dr. Sarah Perera leads our general consultation service and has a special interest in preventive health and long-term follow-up for families.",
  },
  {
    id: "d2",
    name: "Dr. Amara Okonjo",
    specialty: "Internal Medicine",
    photo_slug: "doctor-2",
    experience_years: 15,
    qualifications: "MBBS, MRCP (UK)",
    languages: ["English", "French"],
    focus: "Diabetes, blood pressure, cholesterol management",
    bio: "Dr. Amara Okonjo supports patients living with long-term conditions, focusing on clear explanations and practical daily routines.",
  },
  {
    id: "d3",
    name: "Dr. Mei Tanaka",
    specialty: "Pediatric Care",
    photo_slug: "doctor-3",
    experience_years: 10,
    qualifications: "MBBS, DCH",
    languages: ["English", "Japanese"],
    focus: "Child growth, childhood illness, immunisation guidance",
    bio: "Dr. Mei Tanaka cares for infants, children and teenagers, and spends time helping parents understand what to watch for at home.",
  },
  {
    id: "d4",
    name: "Dr. Peter Lindqvist",
    specialty: "Dental Care",
    photo_slug: "doctor-4",
    experience_years: 18,
    qualifications: "BDS, MSc (Restorative Dentistry)",
    languages: ["English", "Swedish"],
    focus: "Routine dental care, oral hygiene, restorative treatment",
    bio: "Dr. Peter Lindqvist runs our dental service, with an emphasis on gentle routine care and everyday oral-health habits.",
  },
];

/**
 * Look up a doctor by id ("d1") or by 1-based position ("1"), so both
 * /doctors/d1 and /doctors/1 resolve to the same server-rendered profile.
 */
export function findDoctor(idOrIndex: string): Doctor | undefined {
  const byId = doctors.find((d) => d.id === idOrIndex);
  if (byId) return byId;
  const index = Number(idOrIndex);
  return Number.isInteger(index) && index >= 1 ? doctors[index - 1] : undefined;
}
