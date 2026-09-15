import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

export const doctorPhotos: Record<string, string> = {
  "doctor-1": doctor1,
  "doctor-2": doctor2,
  "doctor-3": doctor3,
  "doctor-4": doctor4,
};

export function doctorPhoto(slug: string | null | undefined): string {
  return (slug && doctorPhotos[slug]) || doctor1;
}

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  photo_slug: string | null;
  experience_years: number;
  qualifications: string;
  languages: string[];
  focus: string;
  bio: string;
};
