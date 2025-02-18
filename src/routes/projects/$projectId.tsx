import { createFileRoute } from "@tanstack/react-router";
import { useParams } from "@tanstack/react-router";
import { ProjectDetails } from "@/components/project-details";
import { projects } from "@/data";
export const Route = createFileRoute("/projects/$projectId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { projectId } = useParams({ from: "/projects/$projectId" });
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    return <div>Project not found</div>;
  }
  return <ProjectDetails project={project} />;
}
