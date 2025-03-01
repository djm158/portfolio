import { createFileRoute, useParams } from "@tanstack/react-router";
import BlogPost from "@/components/BlogPost";

export const Route = createFileRoute("/blog/$blogId")({
  component: BlogPostRoute,
});

function BlogPostRoute() {
  const { blogId } = useParams({ from: "/blog/$blogId" });
  return <BlogPost blogId={blogId} />;
}
