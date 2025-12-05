import { Link, useMatchRoute } from "@tanstack/react-router";
import { sidebarMenu } from "./navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

const SidebarLayout = () => {
  const matchRoute = useMatchRoute();

  return (
    <Sidebar>
      <SidebarHeader>Logistics</SidebarHeader>
      <SidebarContent className="flex gap-2 items-center flex-col p-4">
        {sidebarMenu.map((el) => {
          const isActive = !!matchRoute({ to: el.path as any });

          return (
            <Link to={el.path as any} className="w-full" key={el.path}>
              <div
                key={el.label}
                className={`w-full p-2 rounded flex items-center gap-2 ${isActive ? "bg-slate-500" : ""}`}
              >
                {el.icon && <el.icon />}
                <p>{el.label}</p>
              </div>
            </Link>
          );
        })}
      </SidebarContent>
      <SidebarFooter>Logout</SidebarFooter>
    </Sidebar>
  );
};

export default SidebarLayout;
