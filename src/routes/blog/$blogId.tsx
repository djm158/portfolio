import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$blogId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { blogId } = useParams({ from: "/blog/$blogId" });
  return <div>Hello {blogId}!</div>;
}
