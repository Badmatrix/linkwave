import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import PhoneSimulator from "./PhoneSimulator";

function AppLayout() {
  

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
