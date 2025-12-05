import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/navigations/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const city: { index: number; name: string }[] = [
    { index: 1, name: "Andijon" },
    { index: 2, name: "Buxoro" },
    { index: 3, name: "Farg'ona" },
    { index: 4, name: "Jizzax" },
    { index: 5, name: "Xorazm" },
    { index: 6, name: "Namangan" },
    { index: 7, name: "Navoiy" },
    { index: 8, name: "Qashqadaryo" },
    { index: 9, name: "Samarqand" },
    { index: 10, name: "Sirdaryo" },
    { index: 11, name: "Surxondaryo" },
    { index: 12, name: "Toshkent viloyati" },
  ];
  const handleClick = (name: string) => {
    const formatted = name.toLowerCase().replace(/\s+/g, "-");
    navigate({ to: `/navigations/${formatted}` });
  };

  return (
    <div>
      {city.map((el) => (
        <Button key={el.index} onClick={() => handleClick(el.name)}>
          {el.name}
        </Button>
      ))}
    </div>
  );
}
