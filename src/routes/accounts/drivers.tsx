import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accounts/drivers")({
  component: DriversComonent,
});

export default function DriversComonent() {
  return <div>Hello "/accounts/drivers"!</div>;
}
