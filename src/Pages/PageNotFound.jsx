import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="text-xl">
      page not found <Link to="/login">go to login</Link>
    </div>
  );
}
