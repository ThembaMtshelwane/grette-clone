import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { Drawer } from "@mui/material";

import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ open , setOpen }) => {
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const SideBar = () => (
    <section
      className="overflow-x-hidden w-full h-screen bg-backgroundColour flex flex-col relative md:w-[100%]"
      role="presentation"
    >
      <nav className="flex border-2 items-center px-3 py-4 w-full  md:pt-14">
        <IoCloseOutline
          className="scale-[2.5] mx-4 mr-8"
          onClick={toggleDrawer(false)}
        />
        <h1 className="text-4xl cormorant-garamond-semibold  md:text-6xl">
          Grette
        </h1>
        <div className="flex items-center ml-auto border-2 md:hidden ">
          <p className="text-xl mx-2">EN</p>
          <IoMdArrowDropdown className="scale-[1.8]" />
        </div>
      </nav>

      <section className="flex flex-col justify-center h-full border-2">
        <section className="p-5 flex flex-col border-2 h-[90%] w-[65%] md:w-[60%] md:ml-[5%]">
          <section className="mb-4">
            <a href="/">
              <h3 className="h3-style"> Employees</h3>
            </a>
            <a href="/">
              <h3 className="h3-style"> Expertise</h3>
            </a>
            <a href="/">
              <h3 className="h3-style"> About Grette</h3>
            </a>
          </section>
          <section className="mb-10">
            <a href="/">
              <h4 className="h4-style">Doing Business in Norway </h4>
            </a>
            <a href="/">
              <h4 className="h4-style">Sustainability </h4>
            </a>
            <a href="/">
              <h4 className="h4-style"> Career </h4>
            </a>
            <a href="/">
              <h4 className="h4-style">Grette High-Q</h4>
            </a>
            <a href="/">
              <h4 className="h4-style">Standard Terms of Engagement</h4>
            </a>
          </section>
          <section className="flex items-center mt-10">
            <input
              type="text"
              placeholder="Search"
              className="bg-accent  placeholder-black w-[90%] p-2"
            />
            <CiSearch className="bg-accent p-1 w-[20px] scale-[2.5]" />
          </section>
        </section>
      </section>

      <section
        className={`absolute w-[17%] h-full right-0 md:w-[35%] transition-transform duration-[1000ms] ease-in-out ${
          !open ? "translate-x-72" : "translate-x-0"
        }`}
      >
        <img className="h-full" src="/2.PNG" alt="" />
      </section>
    </section>
  );

  return (
    <div className="fixed w-full z-[999]">
      <nav
        className={`flex border-2 items-center px-3 py-4 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-64" : "translate-x-0 md:pt-14"
        }`}
      >
        <AiOutlineMenu
          className="scale-[2.5] mx-4 mr-[12%] md:scale-[2] md:mr-[5%]"
          onClick={toggleDrawer(true)}
        />
        <h1 className="text-4xl cormorant-garamond-semibold md:text-6xl">
          Grette
        </h1>
        <div className="flex items-center ml-auto border-2 mr-[10%] md:hidden">
          <p className="text-xl mx-2">EN</p>
          <IoMdArrowDropdown className="scale-[1.8]" />
        </div>

        <div className="hidden text-white mr-[10%] items-center ml-auto  md:flex">
          <p className="language-links">NO</p>/
          <p className="language-links">EN</p>/
          <p className="language-links">DE</p>
        </div>
      </nav>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        variant="persistent"
        PaperProps={{
          className: "w-full md:w-[65%]",
        }}
      >
        {SideBar()}
      </Drawer>
    </div>
  );
};

export default Navbar;
