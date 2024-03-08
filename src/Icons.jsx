import React from "react";

export function Icons({iconsProps}) {
  return iconsProps.map(({id, logo, link, altText}) => (
    <a href={link} key={id}>
      <img src={logo} alt={altText} className="size-8"></img>
    </a>
  ));
}
