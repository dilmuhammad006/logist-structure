import type { FileRoutesByPath } from "@tanstack/react-router";
import {
  Navigation,
  DollarSign,
  Calendar,
  CreditCard,
  type LucideProps,
  Home,
} from "lucide-react";

interface SidebarProps {
  label: string;
  path: keyof FileRoutesByPath;
  icon: React.ComponentType<LucideProps>;
}

export const sidebarMenu: SidebarProps[] = [
  { label: "Bosh sahifa", path: "/", icon: Home },
  {
    label: "Hisoblar",
    path: "/accounts/",
    icon: CreditCard,
  },
  { label: "Marshrut", path: "/navigations/", icon: Navigation },
  {
    label: "Moliya",
    path: "/finance/",
    icon: DollarSign,
  },
  { label: "Ish jadvali", path: "/schedule/", icon: Calendar },
];
