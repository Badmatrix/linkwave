/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

import { getAuthUserData } from "../Services/apiUsers";
import { useAuth } from "../Context/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import Error from "../Components/Error";

const UserContext = createContext();
function UserDataProvider({ children }) {
  const user = useAuth();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["userData", user?.uid],
    queryFn: () => getAuthUserData(user?.uid),
  });
  if (isLoading)
    return (
      <div className="my-7 flex items-center justify-center">
        <Spinner
          className="aspect-square h-24 w-24 text-primary-300"
          color="blue-gray"
        />
      </div>
    );
  if (isError) return <Error />;
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}
function useAuthUserData() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("user context was used outside the authentication");
  return context;
}
export { UserDataProvider, useAuthUserData };
