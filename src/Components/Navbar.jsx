import { Card, Typography } from "@material-tailwind/react";
import { LuLink } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link} from "react-router-dom";
import Tab from "./Tab";
import { useAuth } from "../Context/AuthProvider";

function Navbar() {
  const authUser = useAuth()
  const { uid } = authUser;
  // console.log(authUser)
  return (
    <Card className="mb-5 mt-2">
      <nav className="app-nav mx-5 flex items-center justify-between py-3">
        <Link to="/">
          <div className="flex items-center justify-center gap-3">
            <img src="/icons/solar_link-circle-bold.svg" className="" alt="" />
            <Typography variant="h5" className="hidden md:block">
              {" "}
              Linkwave
            </Typography>
          </div>
        </Link>
        <div className="flex gap-3">
          <Tab
            className="rounded-none bg-white shadow-none hover:scale-105 hover:shadow-none active:bg-primary-100"
            to="link"
          >
            <LuLink className="text-base sm:text-lg" />{" "}
            <span className="hidden md:block">Links</span>
          </Tab>
          <Tab
            className="rounded-none bg-white shadow-none hover:scale-105 hover:shadow-none active:bg-primary-100"
            to="profile"
          >
            <FaRegCircleUser className="text-base sm:text-lg" />{" "}
            <span className="hidden md:block"> profile details</span>
          </Tab>
        </div>
        <Tab
          to={`/preview/${uid}`}
          className="border border-primary-300 bg-white text-sm shadow-none active:bg-primary-200/30"
        >
          <MdOutlineRemoveRedEye className="text-base sm:text-lg md:hidden" />
          <span className="hidden md:block">preview</span>
        </Tab>
      </nav>
    </Card>
  );
}

export default Navbar;
