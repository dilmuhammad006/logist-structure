import { create } from "zustand";

interface ThemeStore {
  theme: "dark" | "light";
  toggleTheme: () => void;
  setTheme: (value: "dark" | "light") => void;
}

const getInitialTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme");
  return saved === "light" ? "light" : "dark";
};

const useTheme = create<ThemeStore>((set) => ({
  theme: getInitialTheme(),

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),

  setTheme: (value) => {
    localStorage.setItem("theme", value);
    set({ theme: value });
  },
}));

export default useTheme;
