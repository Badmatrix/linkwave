import { Link } from "react-router-dom";
import { useLinks } from "../Context/UserInputtedLinkProvider";
import LinkListLoader from "./LinkListLoader";
import { FaArrowRight } from "react-icons/fa";

function LinkList() {
  const { userLinks } = useLinks();
  // console.log(userLinks);
  if (!userLinks.length) return <LinkListLoader />;
  return (
    <ul className="z-0">
      {userLinks.map((link) => (
        <Link to={link?.url} key={link.name}>
          <li
            className={`flex my-3 items-center justify-between rounded-md px-3 py-3 text-lg font-medium shadow-md ${link.style}`}
          >
            <div className="flex items-center gap-3">
              <link.icon /> {link.name}
            </div>
            <FaArrowRight />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default LinkList;
