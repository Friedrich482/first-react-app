import React from "react";
import gitHubLogo from "./assets/imgs/icons/github.svg";
import LinkedinLogo from "./assets/imgs/icons/linkedin.svg";

const iconsProps = [
  {
    logo: gitHubLogo,
    link: "https://github.com/Friedrich482",
    altText: "github Logo",
  },
  {
    logo: LinkedinLogo,
    link: "https://www.linkedin.com/in/friedrich-wekenon-tokponto-106789283/",
    altText: "LinkedIn Logo",
  },
  
];

export function Icons() {
  return iconsProps.map((icon, index) => (
    <a href={icon.link} key={index}>
      <img src={icon.logo} alt={icon.altText} className="size-8"></img>
    </a>
  ));
}
