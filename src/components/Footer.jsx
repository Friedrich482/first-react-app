import { Icons } from "./Icons";
const Footer = ({iconsProps}) => {
  const date = new Date();
  return (
    <footer className="flex items-center justify-center flex-col text-2xl text-black bg-stone-300 border-t-4 border-t-black text-center">
      <p>&copy; {date.getFullYear()}, Friedrich482, All rights reserved</p>
      <div className="flex flex-row gap-2 mb-3">
        <Icons iconsProps={iconsProps}/>
      </div>
    </footer>
  );
};

export default Footer;
