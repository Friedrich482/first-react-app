import React from "react";
import gitHubLogo from "./assets/imgs/icons/github.svg";
import LinkedinLogo from "./assets/imgs/icons/linkedin.svg";
import MailLogo from "./assets/imgs/icons/envelope.svg"
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
  {
    logo: MailLogo,
    link: "mailto:friedricht109@gmail.com",
    altText: "Mail Logo",
  },
  
];

export function Icons() {
  return iconsProps.map((icon, index) => (
    <a href={icon.link} key={index}>
      <img src={icon.logo} alt={icon.altText} className="size-8"></img>
    </a>
  ));
}
