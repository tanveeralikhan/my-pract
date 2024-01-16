import { useEffect } from "react";

import { useAuth } from "./useAuth";

export const useUserRole = (allowedRoles) => {
  const { session } = useAuth();
  useEffect(() => {
    if (!allowedRoles.includes(session?.user?.role)) {
      localStorage.removeItem("session");
      window.location.reload();
    }
  }, [allowedRoles, session]);
  return true;
};
