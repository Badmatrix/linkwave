/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../Services/FirebaseConfig";
import { Spinner } from "@material-tailwind/react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);
  if (isLoading)
    return (
      <div className="my-10 flex items-center justify-center">
        <Spinner
          className="aspect-square h-24 w-24 text-primary-300"
          color="blue-gray"
        />
      </div>
    );
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("user context was used outside the users authentication");
  return context;
}

export { AuthProvider, useAuth };
