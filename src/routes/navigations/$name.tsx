import { createFileRoute, useParams, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/navigations/$name")({
  component: RouteComponent,
});

function RouteComponent() {
  const { name } = useParams({ from: "/navigations/$name" });

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Hello {name}</h1>

      <Link
        to={"/navigations/" as any}
        className="text-blue-600 underline hover:text-blue-800"
      >
        Back to page
      </Link>
    </div>
  );
}
