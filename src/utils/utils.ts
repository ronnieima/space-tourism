import { crewMembers, moons } from "@/config/content";
import { notFound } from "@tanstack/react-router";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function getMoon(moonName: string) {
  const moon = moons.find(
    (moon) => moon.name.toLowerCase() === moonName.toLowerCase(),
  );
  if (!moon) throw notFound();

  return moon;
}

export function getCrewMember(crewName: string) {
  const crewMember = crewMembers.find(
    (crew) => convertStringToKebabCase(crew.name) === crewName,
  );

  if (!crewMember) throw notFound();

  return crewMember;
}

export function convertStringToKebabCase(str: string) {
  return str.split(" ").join("-").toLowerCase();
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
