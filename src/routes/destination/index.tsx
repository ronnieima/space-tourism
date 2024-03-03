import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destination/")({
  component: Destination,
});

function Destination() {
  return <Navigate to="/destination/$moon" params={{ moon: "moon" }} />;
}
