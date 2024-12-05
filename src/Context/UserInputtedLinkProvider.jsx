/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { platformLinks } from "../Select/SelectPlatform";

export const UserLinksContext = createContext();
function UserInputtedLinkProvider({ children }) {
  const [userLinks, setUserLinks] = useState([platformLinks.at(0)]);
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

export { UserInputtedLinkProvider, useLinks };
