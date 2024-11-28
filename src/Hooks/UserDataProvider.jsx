/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

import { getAuthUserData } from "../Services/apiUsers";
import { useAuth } from "../Context/AuthProvider";

const UserContext = createContext();
function UserDataProvider({ children }) {
  const user = useAuth();
  const data = useQuery({
    queryKey: ["userData"],
    queryFn: () => getAuthUserData(user?.uid),
  });
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
function useAuthUserData() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("user context was used outside the authentication");
  return context;
}
export { UserDataProvider, useAuthUserData };
