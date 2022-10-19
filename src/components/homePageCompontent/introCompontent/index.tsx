import type { NextPage } from "next";
// data
import { introData } from "../../../utils/setting"

const Intro: NextPage = () => {
  return (
    <div className="h-screen section">
      <div className="flex flex-col items-start justify-center w-full h-full space-x-0 md:items-center md:space-x-8 md:flex-row">
        <div className="relative z-50 flex items-center justify-center p-6 transition duration-300 ease-in-out delay-75 border-8 border-black w-96 min-h-96 hover:shadow-lg">
          <img
            className="shadow-lg drop-shadow-2xl"
            src={ introData.image }
          />
          <div className="absolute inset-y-0 z-40 w-6 my-20 bg-yellow-400/75 -left-4"></div>
          <div className="absolute inset-y-0 z-40 w-6 my-20 bg-yellow-400/75 -right-4"></div>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="py-4 text-5xl uppercase special-font">
            { introData.title }
          </h1>
          <div className="w-40 p-0 bg-black border-4 border-black/75" />
          <div className="py-8 text-lg">{ introData.description }</div>
          <div className="text-5xl special-font2 ">{ introData.sign }</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
