import Navbar from "./Navbar/Navbar";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="bg-backgroundColour h-[52vh] md:h-[70vh]">
      <Navbar />
      <section className="flex flex-col h-[70%] justify-center border-2 border-red-500 p-4 lg:p-0 md:border-green-500 md:w-[80%] md:h-fit md:mx-auto mt-32">
        <section className="border-2 border-red-500 md:my-auto md:mr-auto h-[60%] md:w-[30%]">
          <ul className="flex flex-col item border-2">
            <li>
              <a href="/">
                <h3 className=" underline-links">Lawyers.</h3>
              </a>
            </li>
            <li>
              <a href="/">
                <h3 className="underline-links ">Expertise.</h3>
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
        <section
          className="h-[70vh] fixed right-0 top-0 w-[40%] opacity-100 bg-black hidden md:block"
          style={{ backgroundImage: `url(/1.PNG)` }}
        ></section>
      </section>
    </section>
  );
};

export default Hero;
