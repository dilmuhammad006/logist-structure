import { Outlet } from "@tanstack/react-router";
import NavbarLayout from "../navbar";
import SidebarLayout from "../sidebar";

const MainLayout = () => {
  return (
    <div className="w-full flex max-w-[100vw] mx-auto">
      <SidebarLayout />
      <div className="w-full flex-1 flex-col">
        <NavbarLayout />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
