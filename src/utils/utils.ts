import { notFound } from "@tanstack/react-router";
import { moons } from "../config/content";

export function getMoon(moonName: string) {
  const moon = moons.find((moon) => moon.name.toLowerCase() === moonName);
  if (!moon) throw notFound();
  return moon;
}
