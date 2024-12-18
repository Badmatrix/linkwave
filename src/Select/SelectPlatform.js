import { AiFillYoutube, AiOutlineCodepen } from "react-icons/ai";
import {
  BsLinkedin,
  BsFacebook,
  BsTwitch,
  BsStackOverflow,
  BsTwitterX,
} from "react-icons/bs";
import { FaDev, FaFreeCodeCamp, FaGitlab, FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { PiGithubLogoFill } from "react-icons/pi";
import { SiFrontendmentor, SiCodewars, SiHashnode } from "react-icons/si";

export const platformLinks = [
  {
    name: "X",
    icon: BsTwitterX,
    style: "bg-[#27292b] text-white",
    placeholder: "e.g. https://x.com/johnappleseed",
    validatePattern: [
      "https://www.x.com/",
      "https://x.com/",
      "www.x.com/",
      "x.com/",
    ],
  },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    style: "bg-[#2D68FF] text-white",
    placeholder: "e.g. https://www.linkedIn.com/in/johnappleseed",
    validatePattern: [
      "https://www.linkedIn.com/in/",
      "https://linkedIn.com/in/",
      "www.linkedIn.com/in/",
      "linkedIn.com/in/",
    ],
  },

  {
    name: "Facebook",
    icon: BsFacebook,
    style: "bg-[#2442AC] text-white",
    placeholder: "e.g. https://www.facebook.com/johnappleseed/",
    validatePattern: [
      "https://www.facebook.com/",
      "https://facebook.com/",
      "www.facebook.com/",
      "facebook.com/",
    ],
  },
  {
    name: "Tiktok",
    icon: FaTiktok,
    style: "bg-[#242323] text-white",
    placeholder: "e.g. https://www.tiktok.com/johnappleseed",
    validatePattern: [
      "https://www.tiktok.com",
      "https://tiktok.com",
      "www.tiktok.com",
      "tiktok.com",
    ],
  },
  {
    name: "instagram",
    icon: FaInstagram,
    style: "bg-[#f58142] text-white",
    placeholder: "e.g. https://www.instagram.com/username",
    validatePattern: [
      "https://www.instagram.com/",
      "https://instagram.com/",
      "www.instagram.com/username",
      "instagram.com/",
    ],
  },
  {
    name: "YouTube",
    icon: AiFillYoutube,
    style: "bg-[#EE3939] text-white",
    placeholder: "e.g. https://www.youtube.com/@johnappleseed",
    validatePattern: [
      "https://www.youtube.com/@",
      "https://youtube.com/@",
      "www.youtube.com/@",
      "youtube.com/@",
    ],
  },
  {
    name: "GitHub",
    icon: PiGithubLogoFill,
    style: "bg-black text-white",
    placeholder: "e.g. https://www.github.com/matrixlink",
    validatePattern: [
      "https://www.github.com/",
      "https://github.com/",
      "www.github.com/",
      "github.com/",
    ],
  },
  {
    name: "Frontend Mentor",
    icon: SiFrontendmentor,
    style: "bg-white text-black border border-black",
    placeholder: "e.g. https://www.frontendmentor.io/profile/johnappleseed",
    validatePattern: [
      "https://www.frontendmentor.io/profile/",
      "https://frontendmentor.io/profile/",
      "www.frontendmentor.io/profile/",
      "frontendmentor.io/profile/",
    ],
  },

  {
    name: "Twitch",
    icon: BsTwitch,
    style: "bg-[#EE3FC8] text-white",
    placeholder: "e.g. https://www.twitch.tv/johnappleseed",
    validatePattern: [
      "https://www.twitch.tv/",
      "https://twitch.tv/",
      "www.twitch.tv/",
      "twitch.tv/",
    ],
  },
  {
    name: "Dev.to",
    icon: FaDev,
    style: "bg-darkGrey text-white",
    placeholder: "e.g. https://dev.to/johnappleseed",
    validatePattern: [
      "https://www.dev.to/",
      "https://dev.to/",
      "www.dev.to/",
      "dev.to/",
    ],
  },

  {
    name: "Codewars",
    icon: SiCodewars,
    style: "bg-[#8A1A50] text-white",
    placeholder: "e.g. https://www.codewars.com/users/johnappleseed",
    validatePattern: [
      "https://www.codewars.com/users/",
      "https://codewars.com/users/",
      "www.codewars.com/users/",
      "codewars.com/users/",
    ],
  },
  {
    name: "Codepen",
    icon: AiOutlineCodepen,
    style: "bg-[#8A1A50] text-white",
    placeholder: "e.g. https://codepen.io/johnappleseed",
    validatePattern: [
      "https://www.codepen.io/",
      "https://codepen.io/",
      "www.codepen.io/",
      "codepen.io/",
    ],
  },
  {
    name: "freeCodeCamp",
    icon: FaFreeCodeCamp,
    style: "bg-[#302267] text-white",
    placeholder: "e.g. https://www.freecodecamp.org/johnappleseed",
    validatePattern: [
      "https://www.freecodecamp.org/",
      "https://freecodecamp.org/",
      "www.freecodecamp.org/",
      "freecodecamp.org/",
    ],
  },
  {
    name: "GitLab",
    icon: FaGitlab,
    style: "bg-[#EB4925] text-white",
    placeholder: "e.g. https://gitlab.com/johnappleseed",
    validatePattern: [
      "https://www.gitlab.com/",
      "https://gitlab.com/",
      "www.gitlab.com/",
      "gitlab.com/",
    ],
  },
  {
    name: "Hashnode",
    icon: SiHashnode,
    style: "bg-[#0330D1] text-white",
    placeholder: "e.g. https://hashnode.com/@johnappleseed",
    validatePattern: [
      "https://www.hashnode.com/@",
      "https://hashnode.com/@",
      "www.hashnode.com/@",
      "hashnode.com/@",
    ],
  },
  {
    name: "Stack Overflow",
    icon: BsStackOverflow,
    style: "bg-[#EC7100] text-white",
    placeholder:
      "e.g. https://stackoverflow.com/users/1234/kelly-johnappleseed",
    validatePattern: [
      "https://www.stackoverflow.com/users/",
      "https://stackoverflow.com/users/",
      "www.stackoverflow.com/users/",
      "stackoverflow.com/users/",
    ],
  },
];
