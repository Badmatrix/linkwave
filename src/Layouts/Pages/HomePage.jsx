import { Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import Logo from "../Components/Logo"

function HomePage() {
  return (
    <div className="my-5 flex items-center justify-center">
      <div className="px-10 py-3">
        <Logo />
        <Typography className="text-center font-serif text-sm capitalize">
          connect. share. simplify
        </Typography>
      </div>
      <Link to="login">login</Link>
      <button className="ml-5 bg-danger px-1 py-2" >
        Logout
      </button>
    </div>
  )
}

export default HomePage