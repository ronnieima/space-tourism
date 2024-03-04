import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crew/$crewMember")({
  component: CrewPage,
});

function CrewPage() {
  return <main>Crew Page</main>;
}
