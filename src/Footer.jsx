import React from "react";
import { LikedInLogo } from "./LikedInLogo";
import { GithubLogo } from "./GithubLogo";
import gitHubLogo from "./assets/imgs/icons/github.svg";
import LinkedinLogo from "./assets/imgs/icons/linkedin.svg";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex items-center justify-center flex-col text-2xl text-black">
      <p>&copy; {date.getFullYear()}, Friedrich482, All rights reserved</p>
      <div className="flex flex-row gap-4">
        <GithubLogo gitHubLogo={gitHubLogo} />
        <LikedInLogo LinkedinLogo={LinkedinLogo} />
      </div>
    </footer>
  );
};

export default Footer;
