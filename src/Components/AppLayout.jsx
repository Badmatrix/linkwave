import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import PhoneSimulator from "./PhoneSimulator";
import { useEffect } from "react";
import { useAuth } from "../Context/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../Services/FirebaseConfig";

function AppLayout() {
  function handleLogOut() {
    signOut(auth)
      .then(() => console.log("user logged out"))
      .catch((err) => console.log(err));
  }
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
        <button className="bg-danger px-3" onClick={handleLogOut}>
          logout
        </button>
      </div>
    );
}

export default AppLayout;
