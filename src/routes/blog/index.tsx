import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/components/BlogPostPreview";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Blog />;
}
