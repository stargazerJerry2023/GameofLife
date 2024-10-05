import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[90vh]">
        <div>
          <h1 className="font-merriweather text-3xl  md:text-4xl lg:text-8xl text-center mx-5 md:mx-0">
            Game of{" "}
          </h1>
          <div className="flex justify-center mt-8 md:mt-10 lg:mt-12 mb-[30px]">
            <img
              src="src/assets/life.png" // Ensure the path is correct
              alt="image"
              className="md:w-4/5 lg:w-full h-auto" // Adjusted width to make the image larger
            />
          </div>

          <div className="mx-5 md:mx-0">
            <div className="max-w-4xl flex flex-col gap-10 md:gap-0 md:flex-row justify-between m-auto">
              <Link to="/quiz" className="bg-[#115aad] flex rounded-lg py-3 px-8 mx-4 text-[#ffffff] font-poppins font-bold text-center items-center justify-center text-lg md:text-xl lg:text-2xl transform transition-transform duration-200 hover:scale-105 cursor-pointer">Take a quiz to learn about financial literacy</Link>
              
              <Link to="/resources" className="bg-[#115aad] flex rounded-lg py-3 px-8 mx-4 text-[#ffffff] font-poppins font-bold text-center items-center justify-center text-lg md:text-xl lg:text-2xl transform transition-transform duration-200 hover:scale-105 cursor-pointer">Resources</Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-[] w-full bg-[#115aad] h-[8rem] flex items-center justify-center"></footer>
    </>
  );
};

export default Landing;
