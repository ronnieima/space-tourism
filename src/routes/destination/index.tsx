import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destination/")({
  loader: ({ navigate }) => navigate({ to: "$moon", params: { moon: "moon" } }),
});
