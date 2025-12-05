import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accounts/garbage")({
  component: GarbageComponent,
});

export default function GarbageComponent() {
  return <div>Hello "/accounts/garbage"!</div>;
}
