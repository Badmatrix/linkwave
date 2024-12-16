import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import PhoneSimulator from "./PhoneSimulator";
import { useEffect } from "react";
import { useAuth } from "../Context/AuthProvider";

function AppLayout() {
  const currUser = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currUser) navigate("/login");
  }, [currUser, navigate]);
  if (currUser)
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
