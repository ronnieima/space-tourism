import MaxWidthContainer from "@/components/MaxWidthContainer";
import { cn, getTechnology } from "@/utils/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technology/$tech")({
  loader: ({ params: { tech } }) => getTechnology(tech),
  component: TechnologyPage,
});

function TechnologyPage() {
  const technology = Route.useLoaderData();
  return (
    <main
      className={cn(
        "bg-technology-mobile h-screen bg-cover bg-center bg-no-repeat",
        "sm:bg-technology-tablet",
        "lg:bg-technology-desktop",
      )}
    >
      <MaxWidthContainer>
        <h4>{technology.name}</h4>
      </MaxWidthContainer>
    </main>
  );
}
