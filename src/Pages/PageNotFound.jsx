import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

export default function PageNotFound() {
  return (
    <div className="my-7 text-center text-xl lg:text-3xl">
      <div className="space-y-0 px-10">
        <Logo />
      </div>
      Invalid page url
      <span className="block text-base underline lg:text-xl text-primary-300">
        <Link to="/login">click here login</Link>
      </span>
    </div>
  );
}
