import useAuth from "@/store/auth";
import { useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { isAuthenticated } = useAuth((state) => state);

  useEffect(() => {
    if (!isAuthenticated) router.navigate({ to: "/login" });
  }, [router, isAuthenticated]);
  return children;
};

export default AuthProvider;
