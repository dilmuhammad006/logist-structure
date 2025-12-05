import useTheme from "@/store/theme";
import { MoonIcon, SunIcon } from "lucide-react";

const NavbarLayout = () => {
  const { theme, toggleTheme } = useTheme((state) => state);

  return (
    <nav className="w-full max-h-16 h-full p-4 border-b flex items-center justify-between">
      <p>Navbar</p>
      <div
        className="p-2 flex border rounded-lg gap-2 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </div>
    </nav>
  );
};

export default NavbarLayout;
