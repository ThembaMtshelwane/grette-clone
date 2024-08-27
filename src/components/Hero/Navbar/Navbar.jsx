import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const SideBar = () => (
    <section
      className="w-screen h-screen bg-backgroundColour flex flex-col max-w-[550px] "
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <nav className="flex border-2 items-center px-3 py-4 w-full">
        <IoCloseOutline
          className="scale-[2.5] mx-4 mr-8"
          onClick={toggleDrawer(true)}
        />
        <h1 className="text-4xl cormorant-garamond-semibold">Grette</h1>
        <div className="flex items-center ml-auto border-2 ">
          <p className="text-xl mx-2">EN</p>
          <IoMdArrowDropdown className="scale-[1.8]" />
        </div>
      </nav>
      <section className="p-5 flex flex-col my-auto border-2 h-[50%] w-[65%]">
        <section className="mb-4">
          <a href="/">
            <h3 className=""> Employees</h3>
          </a>
          <a href="/">
            <h3> Expertise</h3>
          </a>
          <a href="/">
            <h3> About Grette</h3>
          </a>
        </section>
        <section className="mb-4">
          <a href="/">
            <h4>Doing Business in Norway </h4>
          </a>
          <a href="/">
            <h4>Sustainability </h4>
          </a>
          <a href="/">
            <h4>Career </h4>
          </a>
          <a href="/">
            <h4>Grette High-Q</h4>
          </a>
          <a href="/">
            <h4>Standard Terms of Engagement</h4>
          </a>
        </section>
        <section className="flex items-center mt-10">
          <input
            type="text"
            placeholder="Search"
            className="bg-accent placeholder-color w-[90%] p-2"
          />
          <CiSearch className="bg-accent p-1 w-[20px] scale-[2.5]" />
        </section>
      </section>
    </section>
  );

  return (
    <div className="overflow-x-hidden">
      <nav
        className={` flex border-2 items-center px-3 py-4 transform transition-transform duration-300 ease-in-out ${
          open
            ? "translate-x-64"
            : "translate-x-0 md:border-green-500 md:py-[4.2rem] md:px-14"
        }`}
      >
        <AiOutlineMenu
          className="scale-[2.5] mx-4 mr-[5%] md:scale-[2]"
          onClick={toggleDrawer(true)}
        />
        <h1 className="text-4xl cormorant-garamond-semibold md:text-6xl">
          Grette
        </h1>
        <div className="flex items-center ml-auto border-2 mr-[15%]">
          <p className="text-xl mx-2">EN</p>
          <IoMdArrowDropdown className="scale-[1.8]" />
        </div>
      </nav>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {SideBar()}
      </Drawer>
    </div>
  );
};

export default Navbar;
