import { Link } from "@tanstack/react-router";
import { sidebarMenu } from "./navigation";
import { Sidebar } from "@/components/ui/sidebar";

const SidebarLayout = () => {
  return (
    <Sidebar>
      <div className="flex gap-2 items-center flex-col p-4">
        {sidebarMenu.map((el) => (
          <Link to={el.path} className="w-full">
            <div
              key={el.label}
              className="w-full border rounded p-2 flex items-center gap-2"
            >
              {el.icon && <el.icon />}
              <p>{el.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </Sidebar>
  );
};

export default SidebarLayout;
