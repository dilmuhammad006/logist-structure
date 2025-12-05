import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accounts/cars")({
  component: CarsCompenent,
});

export default function CarsCompenent() {
  return <div>Hello "/accounts/cars"!</div>;
}
