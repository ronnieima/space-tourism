import moon from "/src/assets/destination/image-moon.webp";
import mars from "/src/assets/destination/image-mars.webp";
import europa from "/src/assets/destination/image-europa.webp";
import titan from "/src/assets/destination/image-titan.webp";

import douglas from "/src/assets/crew/image-douglas-hurley.webp";
import mark from "/src/assets/crew/image-mark-shuttleworth.webp";
import victor from "/src/assets/crew/image-victor-glover.webp";
import anousheh from "/src/assets/crew/image-anousheh-ansari.webp";

import launchVehicleLandscape from "/src/assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "/src/assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportLandscape from "/src/assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "/src/assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleLandscape from "/src/assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "/src/assets/technology/image-space-capsule-portrait.jpg";

export const links = [
  { label: "home", href: "/" },
  { label: "destination", href: "/destination" },
  { label: "crew", href: "/crew" },
  { label: "technology", href: "/technology" },
];

export const moons = [
  {
    name: "moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    averageDistance: "384,400 KM",
    estimatedTravelTime: "3 Days",
    imageUrl: moon,
  },
  {
    name: "mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    averageDistance: "225 MIL. km",
    estimatedTravelTime: "9 months",
    imageUrl: mars,
  },
  {
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    averageDistance: "628 MIL. km",
    estimatedTravelTime: "3 years",
    imageUrl: europa,
  },
  {
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    averageDistance: "1.6 BIL. km",
    estimatedTravelTime: "7 years",
    imageUrl: titan,
  },
];

export const crewMembers = [
  {
    jobTitle: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imageUrl: douglas,
  },
  {
    jobTitle: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imageUrl: mark,
  },
  {
    jobTitle: "PILOT",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    imageUrl: victor,
  },
  {
    jobTitle: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    imageUrl: anousheh,
  },
];

export const technologies = [
  {
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imageUrl: {
      landscape: launchVehicleLandscape,
      portrait: launchVehiclePortrait,
    },
  },
  {
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imageUrl: {
      landscape: spaceportLandscape,
      portrait: spaceportPortrait,
    },
  },
  {
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imageUrl: {
      landscape: spaceCapsuleLandscape,
      portrait: spaceCapsulePortrait,
    },
  },
];
