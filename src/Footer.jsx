import React from "react";
import { Icons } from "./Icons";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex items-center justify-center flex-col text-2xl text-black">
      <p>&copy; {date.getFullYear()}, Friedrich482, All rights reserved</p>
      <div className="flex flex-row gap-4">
        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
