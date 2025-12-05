import { create } from "zustand";

interface ThemeStore {
  theme: "dark" | "light";
  toggleTheme: () => void;
  setTheme: (value: "dark" | "light") => void;
}

const useTheme = create<ThemeStore>((set) => ({
  theme: "dark",

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),

  setTheme: (value) => set({ theme: value }),
}));

export default useTheme;
