import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";
import Button from "../Components/Button";

function Homepage() {

  
  return (
    <div className="my-5 flex items-center justify-center">
      <div className="px-10 py-3">
        <Logo />
        <Typography className="-mt-5 text-center font-serif text-sm capitalize">
          connect. share. simplify
        </Typography>
      </div>
      <Link to="login">login</Link>
      <Button type="secondary" className="bg-danger">
        Logout
      </Button>
    </div>
  );
}

export default Homepage;