import { Outlet } from "@tanstack/react-router";
import NavbarLayout from "../navbar";
import SidebarLayout from "../sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const MainLayout = () => {
  return (
    <SidebarProvider>
      <div className="w-full flex max-w-[100vw] mx-auto min-h-screen">
        <SidebarLayout />
        <div className="flex-1 flex flex-col">
          <NavbarLayout />
          <main className="p-4 flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
