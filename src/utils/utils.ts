import { crewMembers, moons } from "@/config/content";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function getMoon(moonName: string) {
  return moons.find(
    (moon) => moon.name.toLowerCase() === moonName.toLowerCase(),
  );
}

export function getCrewMember(crewName: string) {
  return crewMembers.find(
    (crew) => convertStringToKebabCase(crew.name) === crewName,
  );
}

export function convertStringToKebabCase(str: string) {
  return str.split(" ").join("-").toLowerCase();
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
