import { create } from "zustand";

interface SidebarI {
  isOpen: boolean;
  toggleOpen: () => void;
  setOpen: (value: boolean) => void;
}

const getInitialSidebar = (): boolean => {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("sidebar");
  return saved === "true";
};

const useSidebarOpen = create<SidebarI>((set) => ({
  isOpen: getInitialSidebar(),

  toggleOpen: () =>
    set((state) => {
      const newValue = !state.isOpen;
      localStorage.setItem("sidebar", newValue.toString());
      return { isOpen: newValue };
    }),

  setOpen: (value: boolean) => {
    localStorage.setItem("sidebar", value.toString());
    set({ isOpen: value });
  },
}));

export default useSidebarOpen;
