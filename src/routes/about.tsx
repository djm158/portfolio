import { createFileRoute } from "@tanstack/react-router";
import About from "@/components/About";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return <About />;
}
