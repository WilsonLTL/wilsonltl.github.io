// NextJS
import type { NextPage } from "next";
import Image from "next/image";
import Router from 'next/router'
import { useEffect } from 'react'
import { useRouter } from "next/router"

const loading: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/home")
    }, 2000)
  }, [])

  return (
    <div className="section">
      <div
        id="loading"
        className={`flex flex-col items-center justify-center w-screen h-screen`}
      >
        <div data-aos="fade-down" data-aos-duration="1000" className="relative">
          <div className="flex items-center justify-center">
            <div className="z-40 ml-1 m-1.5 rounded-full w-28 h-28 bg-white"></div>
          </div>
          <div className="absolute inset-0 ml-1 m-1.5 rounded-full w-30 h-30 bg-gradient-to-r shadow-md from-indigo-500 via-purple-500 to-pink-500 z-30 animate-spin-slow"></div>
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            <Image width="180" height="120" src="/assets/logo.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;