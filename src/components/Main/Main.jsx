import docs from "../doc.json";

const Main = () => {
  const lawyers = docs.lawyers.map((lawyer) => ({
    src: lawyer.image,
    name: lawyer.name,
    position: lawyer.position,
  }));

  const handleImageClick = (lawyerName) => {
    console.log("Clicked on lawyer:", lawyerName);
  };

  return (
    <section className="bg-[#e4e0db] min-h-screen py-4 px-5 md:px-20 xl:px-48 ">
      <h3 className="my-8 text-2xl cormorant-garamond-medium xl:py-4">
        Meet some of our staff
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {lawyers.map((lawyer, index) => (
          <div key={index} className=" ">
            <div key={index} className="border-2 border-red-400 h-[100%] ">
              <img
                src={lawyer.src}
                alt={`Lawyer ${index}`}
                className="w-full h-[80%] object-cover cursor-pointer "
                onClick={() => handleImageClick(lawyer.name)}
              />
              <p className="font-semibold leading-4 text-sm md:text-lg  lg:text-2xl  ">
                {lawyer.name}
              </p>
              <p className="italic text-sm  lg:text-lg">{lawyer.position}</p>
              <br />
            </div>
          </div>
        ))}
      </div>
      <div className="h-40 flex justify-center items-center border-2 border-green-700">
        <a href="#" className="underline italic text-lg">
          See all our stuff.
        </a>
      </div>
    </section>
  );
};

export default Main;
