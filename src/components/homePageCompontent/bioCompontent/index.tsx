import type { NextPage } from "next";
// data
import { bioData } from "../../../utils/setting";

const bio: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-16 section">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl uppercase special-font">BIOGRAPHY</h2>
        <div className="w-32 p-0 mt-2 bg-black border-4 border-black/75" />
      </div>
      <div className="py-8 text-lg">{bioData.description}</div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3 p-2 text-xl text-center bg-gray-200 border-4 border-black">
          Name: <span className="font-bold">{bioData.name}</span>
        </div>
        <div className="col-span-2 p-2 text-xl text-center bg-gray-200 border-4 border-black">
          Age: <span className="font-bold">{bioData.age}</span>
        </div>
        <div className="col-span-2 p-2 text-xl text-center bg-gray-200 border-4 border-black">
          Adress: <span className="font-bold">{bioData.address}</span>
        </div>
        <div className="col-span-3 p-2 text-xl text-center bg-gray-200 border-4 border-black">
          Birthday: <span className="font-bold">{bioData.birthday}</span>
        </div>
        <div className="col-span-3 p-2 text-xl text-center bg-gray-200 border-4 border-black">
          Email:
          <span className="font-bold transition duration-300 ease-in-out delay-75 cursor-pointer hover:text-yellow-400">
            {bioData.email}
          </span>
        </div>
        <div className="col-span-2 p-2 text-xl text-center bg-gray-200 border-4 border-black">
          Discord:
          <span className="font-bold transition duration-300 ease-in-out delay-75 cursor-pointer hover:text-yellow-400">
            {bioData.Discord}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="w-10 text-center">
          <i className="fa-solid fa-quote-left"></i>
        </span>
        <button onClick={() => window.open("https://www.cakeresume.com/wilson-ltl")} className="w-64 p-2 my-8 space-x-2 text-white bg-yellow-400 border border-b-4 border-blue-900 rounded shadow-md text-md">
          <i className="fa-solid fa-download"></i>
          <span className="text-sm uppercase">Download Resume</span>
        </button>
        <span className="w-10 text-center">
          <i className="fa-solid fa-quote-right"></i>
        </span>
      </div>
    </div>
  );
};

export default bio;
