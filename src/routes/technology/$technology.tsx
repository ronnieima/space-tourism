import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technology/$technology")({
  component: () => <div>Hello /technology/$technology!</div>,
});
