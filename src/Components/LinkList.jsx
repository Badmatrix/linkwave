import { AiFillYoutube, AiOutlineCodepen } from "react-icons/ai";
import {
  BsLinkedin,
  BsFacebook,
  BsTwitch,
  BsStackOverflow,
  BsTwitterX,
} from "react-icons/bs";
import {
  FaDev,
  FaFreeCodeCamp,
  FaGitlab,
  FaTiktok,
  FaArrowRight,
} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiFrontendmentor, SiCodewars, SiHashnode } from "react-icons/si";

import { Link } from "react-router-dom";
import LinkListLoader from "./LinkListLoader";
import { useLinks } from "../Context/UsersActiveLinksProvider";

function LinkList() {
  const { userLinks } = useLinks();
  if (!userLinks.length) return <LinkListLoader />;
  return (
    <ul className="z-0">
      {userLinks.map((link) => {
        const { name, url, icon } = link;
        const linkUrl = url.includes("https://") ? url : `https://${url}`;

        const Icon = eval(icon);
        return (
          <Link to={linkUrl} key={name}>
            <li
              className={`my-3 flex items-center justify-between rounded-md px-3 py-3 text-lg font-medium shadow-md ${link.style}`}
            >
              <div className="flex items-center gap-3">
                <Icon /> {name}
              </div>
              <FaArrowRight />
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default LinkList;
