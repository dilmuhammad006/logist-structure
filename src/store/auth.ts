import type { User } from "@/types";
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;

  login: (user: User) => void;
  logout: () => void;
}

const useAuth = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (user) =>
    set(() => ({
      user: user,
      isAuthenticated: true,
    })),

  logout: () =>
    set(() => ({
      user: null,
      isAuthenticated: false,
    })),
}));

export default useAuth;
