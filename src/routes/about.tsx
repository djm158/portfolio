import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="dark:bg-gray-800 min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center dark:text-gray-300">
          About
        </h1>
      </div>
    </div>
  );
}
