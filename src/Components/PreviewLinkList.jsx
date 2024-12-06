/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 import { AiFillYoutube, AiOutlineCodepen } from "react-icons/ai";
 import {
   BsLinkedin,
   BsFacebook,
   BsTwitch,
   BsStackOverflow,
   BsTwitterX,
 } from "react-icons/bs";
 import { FaDev, FaFreeCodeCamp, FaGitlab } from "react-icons/fa6";
 import { PiGithubLogoFill } from "react-icons/pi";
 import { SiFrontendmentor, SiCodewars, SiHashnode } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PreviewLinkList({ link }) {
  const Icon = eval(link.icon);
  return (
    <Link to={link?.url} key={link.name}>
      <li
        className={`my-3 flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium shadow-md md:text-base lg:text-lg ${link.style}`}
      >
        <div className="flex items-center gap-3">
          <Icon />
          {link.name}
        </div>
        <FaArrowRight />
      </li>
    </Link>
  );
}

export default PreviewLinkList;