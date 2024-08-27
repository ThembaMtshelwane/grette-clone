import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex border-2 items-center px-3 py-4">
      <AiOutlineMenu className="scale-[2.5] mx-4 mr-8" />
      <h1 className="text-4xl cormorant-garamond-semibold">Grette</h1>
      <div className="flex items-center ml-auto border-2 ">
        <p className="text-xl mx-2">EN</p>
        <IoMdArrowDropdown className="scale-[1.8]" />
      </div>
    </nav>
  );
};

export default Navbar;
