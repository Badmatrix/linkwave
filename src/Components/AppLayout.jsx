import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import PhoneSimulator from "./PhoneSimulator";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Services/FirebaseConfig";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";

function AppLayout() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoading(false);
        setUser(user);
      } else {
        setIsLoading(false);
        navigate("/login");
      }
    });
  });
  if (isLoading)
    return (
      <div className="my-36 grid items-center justify-center">
        <Spinner className="h-24 w-24 text-primary-300 " color="blue-gray" />
      </div>
    );
  if (user)
    return (
      <div className="mx-3 mt-2 md:mx-5 lg:mx-10">
        <Navbar />
        <div className="scale-95 gap-10 lg:flex">
          <PhoneSimulator />
          <Outlet />
        </div>
      </div>
    );
}

export default AppLayout;
