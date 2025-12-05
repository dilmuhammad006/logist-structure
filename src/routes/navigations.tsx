import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/navigations")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/navigation"!</div>;
}
