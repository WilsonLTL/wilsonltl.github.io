import type { NextPage } from "next";
import { useEffect, useState } from "react";

const nav: NextPage = () => {
  const [index, setIndex] = useState(1);
  const [status, setStatus] = useState(true);
  const [navLock, setNavLock] = useState(false)
  const hasWindow = typeof window !== 'undefined';

  useEffect(() => {
    const width: any = hasWindow ? window.innerWidth : null;
    if(width <= 1140 && status) {
      setStatus(false)
      setNavLock(true)
    } else if(width > 1140 && !status) {
      setStatus(true)
      setNavLock(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      const width: any = hasWindow ? window.innerWidth : null;
      if(width <= 1140 && status) {
        setStatus(false)
        setNavLock(true)
      } else if(width > 1140 && !status) {
        setStatus(true)
        setNavLock(false)
      }
    console.log(width)

    });
  }, [])

  useEffect(() => {
    let num = fullpage_api.getActiveSection().index()
    setIndex(num + 1)
  });

  return (
    <div
      className={`relative flex flex-col justify-center h-full tracking-widest border-r-4 border-black special-font ${
        status ? "w-1/3 items-center" : "w-[12rem] min-w-[12rem] items-end pr-6"
      }`}
    >
      <button
        onClick={() => { if(!navLock) { setStatus(!status) } }}
        className={`absolute top-0 -right-6 w-11 h-11 p-.5 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition delay-75 duration-300 ease-in-out ${navLock ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        {status ? (
          <i className="text-xs fa-solid fa-arrow-left"></i>
        ) : (
          <i className="text-xs fa-solid fa-arrow-right"></i>
        )}
      </button>
      {status ? (
        <div className="flex flex-col items-center justify-center">
          <span className="pb-12 text-4xl underline">Rewall</span>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => {
                fullpage_api.moveTo(1);
                setIndex(1);
              }}
              className={`py-1 transition duration-300 ease-in-out delay-75 w-72 hover:bg-yellow-400 ${
                index == 1 && "bg-yellow-400"
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => {
                fullpage_api.moveTo(2);
                setIndex(2);
              }}
              className={`py-1 transition duration-300 ease-in-out delay-75 w-72 hover:bg-yellow-400 ${
                index == 2 && "bg-yellow-400"
              }`}
            >
              BIOGRAPHY
            </button>
            <button
              onClick={() => {
                fullpage_api.moveTo(3);
                setIndex(3);
              }}
              className={`py-1 transition duration-300 ease-in-out delay-75 w-72 hover:bg-yellow-400 ${
                index == 3 && "bg-yellow-400"
              }`}
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => {
                fullpage_api.moveTo(4);
                setIndex(4);
              }}
              className={`py-1 transition duration-300 ease-in-out delay-75 w-72 hover:bg-yellow-400 ${
                index == 4 && "bg-yellow-400"
              }`}
            >
              CONTACT
            </button>
          </div>
          <div className="mt-12 bg-black border-2 border-black/75 w-72" />
          <div className="flex mt-12 space-x-4">
            <button onClick={() => window.open("https://www.instagram.com/ltl_211105/")} className="w-10 p-1 px-1.5 border-2 border-black hover:bg-black hover:text-white transition delay-75 duration-300 ease-in-out">
              <i className="fa-brands fa-instagram"></i>
            </button>
            {/* <button className="w-10 p-1 px-1.5 border-2 border-black hover:bg-black hover:text-white transition delay-75 duration-300 ease-in-out">
              <i className="fa-brands fa-twitter"></i>
            </button> */}
            <button onClick={() => window.open("https://www.linkedin.com/in/wilson-lo-707120170/")} className="w-10 p-1 px-1.5 border-2 border-black hover:bg-black hover:text-white transition delay-75 duration-300 ease-in-out">
              <i className="fa-brands fa-linkedin"></i>
            </button>
            {/* <button className="w-10 p-1 px-1.5 border-2 border-black hover:bg-black hover:text-white transition delay-75 duration-300 ease-in-out">
              <i className="fa-brands fa-line"></i>
            </button> */}
          </div>
          <div className="flex flex-col items-center justify-center py-2 mt-2 space-y-2 text-xs font-thin">
            <span>© coperight 2022</span>
            <span>Wilson Lo</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-12">
          <button
            onClick={() => {
              fullpage_api.moveTo(1);
              setIndex(1);
            }}
            className={`w-10 h-10 text-white transition duration-300 ease-in-out delay-75 border-2 border-black ${
              index == 1
                ? "bg-yellow-400"
                : "bg-black hover:bg-white hover:text-black"
            }`}
          >
            <i className="fa-solid fa-house"></i>
          </button>
          <button
            onClick={() => {
              fullpage_api.moveTo(2);
              setIndex(2);
            }}
            className={`w-10 h-10 text-white transition duration-300 ease-in-out delay-75 border-2 border-black ${
              index == 2
                ? "bg-yellow-400"
                : "bg-black hover:bg-white hover:text-black"
            }`}
          >
            <i className="fa-solid fa-book"></i>
          </button>
          <button
            onClick={() => {
              fullpage_api.moveTo(3);
              setIndex(3);
            }}
            className={`w-10 h-10 text-white transition duration-300 ease-in-out delay-75 border-2 border-black ${
              index == 3
                ? "bg-yellow-400"
                : "bg-black hover:bg-white hover:text-black"
            }`}
          >
            <i className="fa-solid fa-briefcase"></i>
          </button>
          <button
            onClick={() => {
              fullpage_api.moveTo(4);
              setIndex(4);
            }}
            className={`w-10 h-10 text-white transition duration-300 ease-in-out delay-75 border-2 border-black ${
              index == 4
                ? "bg-yellow-400"
                : "bg-black hover:bg-white hover:text-black"
            }`}
          >
            <i className="fa-brands fa-rocketchat"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default nav;
