import React from "react";
import { Icons } from "./Icons";
const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex items-center justify-center flex-col text-2xl text-black bg-stone-300 border-t-4 border-t-black">
      <p>&copy; {date.getFullYear()}, Friedrich482, All rights reserved</p>
      <div className="flex flex-row gap-4 mb-3">
        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
