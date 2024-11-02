import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center justify-center gap-x-2">
        <img src="/icons/solar_link-circle-bold.svg" className="" alt="" />
        <Typography variant="h4"> Linkwave</Typography>
      </div>
    </Link>
  );
}

export default Logo;
