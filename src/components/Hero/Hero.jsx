import Navbar from "./Navbar/Navbar";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="bg-backgroundColour h-[49vh] md:h-[70vh]">
      <Navbar />
      <section className="flex flex-col h-[70%] justify-center border-2 border-red-500 p-4 md: md:border-green-500 md:flex-row md:w-[80%] md:mx-auto">
        <section className="border-2 border-red-500 md:my-auto md:mr-auto h-[60%] md:w-[450px]">
          <ul className="flex flex-col item border-2">
            <li>
              <a href="/">
                <h3 className="underline-cursive border-b-2 w-fit border-black hover:border-none md:text-6xl md:mb-2 italic">
                  Lawyers.
                </h3>
              </a>
            </li>
            <li>
              <a href="/">
                <h3 className="underline-cursive border-b-2 w-fit border-black hover:border-none md:text-6xl italic">
                  {" "}
                  Expertise.
                </h3>
              </a>
            </li>
          </ul>
          <section className="flex items-center mt-10">
            <input
              type="text"
              placeholder="Search"
              className="bg-accent placeholder-color w-[90%] p-2 focus:outline-none"
            />
            <CiSearch className="bg-accent p-1 w-[20px] scale-[2.5]" />
          </section>
        </section>
        <section className="h-[70vh] fixed right-0 top-0 w-[40%] opacity-40 bg-black hidden md:block"></section>
      </section>
    </section>
  );
};

export default Hero;
