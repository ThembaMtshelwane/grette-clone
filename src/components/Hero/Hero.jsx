import Navbar from "./Navbar/Navbar";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-backgroundColour h-[52vh] md:h-[70vh] border-blue-300 border-[10px] overflow-x-hidden ">
      <Navbar open={open} setOpen={setOpen} />
      <div
        className={`flex   transform transition-transform duration-300 ease-in-out border-[5px] h-full items-center border-yellow-400 ${
          open ? "translate-x-72 ml-[35%]" : "translate-x-0 md:border-green-500"
        }`}
      >
        lol
        <section
          className={`w-full flex flex-col h-[70%] justify-center border-2 border-red-500 p-4 lg:p-0 lg:w-[50%] md:border-green-500 md:h-fit md:mx-auto  md:mt-32 ${
            open ? "md:w-[100%]" : " md:w-[80%]"
          }  `}
        >
          <section
            className={`border-2 border-red-500 md:my-auto md:mr-auto h-[60%] md:w-[80%] md:max-w-[350px] ${
              open ? "md:ml-[0%]" : "md:ml-0"
            }  `}
          >
            <ul className="flex flex-col item border-2">
              <li>
                <a href="/">
                  <h3 className="h3-style  underline-links">Lawyers.</h3>
                </a>
              </li>
              <li>
                <a href="/">
                  <h3 className="h3-style  underline-links ">Expertise.</h3>
                </a>
              </li>
            </ul>
            <section className="flex items-center mt-7 border-2 sm:border-yellow-400">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#d5ccc1] placeholder-black w-[90%] p-2 focus:outline-none "
              />
              <CiSearch className="bg-[#d5ccc1] p-1 max-w-[20px] scale-[2.5]" />
            </section>
          </section>
        </section>
        <section
          className={`absolute w-[35%] h-full right-0 transition-transform duration-300 ease-in-out ${
            open ? "translate-x-72" : "translate-x-0"
          }`}
        >
          <img className="h-full" src="/1.PNG" alt="" />
        </section>
      </div>
    </section>
  );
};

export default Hero;
