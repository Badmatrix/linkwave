/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// import { platformLinks } from "../Select/SelectPlatform";
import { createContext, useContext, useState } from "react";
import { useAuthUserData } from "../Hooks/UserDataProvider";

export const UserLinksContext = createContext();
function UsersActiveLinksProvider({ children }) {
  const data = useAuthUserData();

  const [userLinks, setUserLinks] = useState(data?.links);
  return (
    <UserLinksContext.Provider value={{ userLinks, setUserLinks }}>
      {children}
    </UserLinksContext.Provider>
  );
}

function useLinks() {
  const context = useContext(UserLinksContext);
  if (context === undefined)
    throw new Error("Links context was used outside the users ");
  return context;
}

export { UsersActiveLinksProvider, useLinks };
