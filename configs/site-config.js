import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Muhammad Farras Jibran. All Rights Reserved.`,
  author: {
    name: "Muhammad Farras Jibran",
    accounts: [
      {
        url: "https://github.com/farasjibran",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://linkedin.com/in/farrasjibran",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:farasjibran@gmail.com",
        label: "Mail farras",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
