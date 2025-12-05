import useTheme from "@/store/theme";
import { useEffect, type ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return children;
};

export default ThemeProvider;
