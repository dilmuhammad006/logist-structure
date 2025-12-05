import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/schedule/")({
  component: RouteComponent,
});

const sonners = [
  {
    type: "default",
  },
  { type: "success" },
  {
    type: "error",
  },
  {
    type: "loading",
  },
];
const handleToast = (type: string) => {
  console.log("as");
  if (type === "default") toast("Default toast");
  else if (type === "success") toast.success("Success toast");
  else if (type === "error") toast.error("Error toast");
  else toast.loading("Loading toast");
};

function RouteComponent() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex gap-4">
        {sonners.map((el) => (
          <Button onClick={() => handleToast(el.type)} key={el.type}>
            {el.type}
          </Button>
        ))}
      </div>
    </div>
  );
}
