import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DriversComonent from "./drivers";
import CarsCompenent from "./cars";
import GarbageComponent from "./garbage";

export const Route = createFileRoute("/accounts/")({
  component: RouteComponent,
});

const tabs = [
  {
    name: "Haydovchilar",
    value: "drivers",
    content: <DriversComonent />,
  },
  {
    name: "Mashinalar",
    value: "cars",
    content: <CarsCompenent />,
  },
  {
    name: "Yuklar",
    value: "garbages",
    content: <GarbageComponent />,
  },
];
function RouteComponent() {
  return (
    <Tabs defaultValue="drivers">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-6">
          <div className="min-h-[100px] flex items-start">
            <div className="text-muted-foreground text-sm">{tab.content}</div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
