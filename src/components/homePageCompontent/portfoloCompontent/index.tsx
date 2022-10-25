import type { NextPage } from "next";
import { breakpoints } from "../../../utils/sliderSetting";
// Library
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// CSS
import "swiper/css";
import "swiper/css/pagination";
// data
import { proData } from "../../../utils/setting";

const portfolo: NextPage = () => {
  const swiper = useSwiper();

  const SliderButton = ({ direction }: { direction: string }) => {
    const swiper = useSwiper();

    return direction === "Left" ? (
      <div
        className="text-left cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <i className="p-2 bg-yellow-400 border rounded-full shadow fa-solid fa-arrow-left"></i>
      </div>
    ) : (
      <div
        className="text-right cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <i className="p-2 bg-yellow-400 border rounded-full shadow fa-solid fa-arrow-right"></i>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen max-h-screen section">
      <div className="flex flex-col items-center justify-center px-16">
        <h2 className="text-5xl uppercase special-font">PORTFOLIO</h2>
        <div className="w-32 p-0 mt-2 bg-black border-4 border-black/75" />
        <div className="py-8 text-lg"> {proData.description}</div>
        {/* <div className="flex items-center justify-center">
          <span className="w-10 text-center">
            <i className="fa-solid fa-quote-left"></i>
          </span>
          <button className="w-64 p-2 my-8 space-x-2 text-white bg-yellow-400 border border-b-4 border-blue-900 rounded shadow-md text-md">
            <i className="fa-brands fa-rocketchat"></i>
            <span className="text-sm uppercase">Contact Me</span>
          </button>
          <span className="w-10 text-center">
            <i className="fa-solid fa-quote-right"></i>
          </span>
        </div> */}
      </div>

      <Swiper
        className="relative items-center justify-center w-[700px]"
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide
          className="flex items-center justify-center"
          key={(Math.random() + 1).toString(36).substring(7)}
        >
          <div className="flex col-span-2 p-8 py-8 space-x-8">
            <div className="flex items-end justify-center">
              <div className="flex flex-col items-center justify-center w-40 space-y-4 text-black">
                <div className="flex">
                  <span className="w-10 text-center">
                    <i className="text-yellow-400 fa-solid fa-quote-left"></i>
                  </span>
                  <span className="text-xl">
                    <a
                      className="transition duration-300 ease-in-out delay-75 hover:text-yellow-400"
                      href="#"
                    >
                      <span className="flex text-center">2426c</span>
                    </a>
                  </span>
                  <span className="w-10 text-center">
                    <i className="text-yellow-400 fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div className="w-32 p-0 mt-2 bg-black border-2 border-black/75 " />
                <span className="text-xs text-center">
                  Full Stack Development Lead
                </span>
                <img
                  className="w-40"
                  src="https://i.seadn.io/gcs/files/5069212d10bc3c81ebec2e0426aec50d.png?auto=format&w=384"
                />
              </div>
            </div>
            <div className="flex items-end justify-center">
              <img src="https://blockdailyhk.com/wp-content/uploads/2022/01/1500x500.jpeg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="flex items-center justify-center"
          key={(Math.random() + 1).toString(36).substring(7)}
        >
          <div className="flex col-span-2 p-8 py-8 space-x-8 ">
            <div className="flex items-end justify-center">
              <div className="flex flex-col items-center justify-center w-40 space-y-4 text-black">
                <div className="flex w-full">
                  <span className="w-10 text-center">
                    <i className="text-yellow-400 fa-solid fa-quote-left"></i>
                  </span>
                  <span className="text-xl">
                    <a
                      className="transition duration-300 ease-in-out delay-75 hover:text-yellow-400"
                      href="#"
                    >
                      Lofilians
                    </a>
                  </span>
                  <span className="w-10 text-center">
                    <i className="text-yellow-400 fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div className="w-32 p-0 mt-2 bg-black border-2 border-black/75 " />
                <span className="text-xs text-center">
                  Full Stack Development Lead
                </span>
                <img
                  className="w-40 px-4 py-11"
                  src="https://lofilians.com/assets/logo_black.png"
                />
              </div>
            </div>
            <div className="flex items-end justify-center">
              <img src="https://i.imgur.com/mevXb9W.jpg" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="flex items-center justify-center"
          key={(Math.random() + 1).toString(36).substring(7)}
        >
          <div className="flex col-span-2 p-8 py-8 space-x-8 ">
            <div className="flex items-end justify-center">
              <div className="flex flex-col items-center justify-center space-y-4 text-black">
                <div className="flex">
                  <span className="w-10 text-center">
                    <i className="text-yellow-400 fa-solid fa-quote-left"></i>
                  </span>
                  <span className="text-xl">
                    <a
                      className="transition duration-300 ease-in-out delay-75 hover:text-yellow-400"
                      href="#"
                    >
                      Freehunter
                    </a>
                  </span>
                  <span className="w-10 text-center">
                    <i className="text-yellow-400 fa-solid fa-quote-right"></i>
                  </span>
                </div>
                <div className="w-32 p-0 mt-2 bg-black border-2 border-black/75 " />
                <span className="text-xs">Technical lead</span>
                <img
                  className="w-40"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUApqj///8Al5kAoaPM5eWb0dIAnqAApKaYysub1NXF4eEAj5EAlJYAnJ4Ai40AkpTt+Pj3/Px0xMXf8fK94uMora9YurxLtriw3d2z2NiQxsdAtbZqwMKPzs8ur7Gj19h7vL0vn6FesLKz2dmn0tOBycrX7e5WrK244OButrjZ7/BIpqiEwcJctbaGvr/DIDabAAAEf0lEQVR4nO3cYXeaMBQGYCSaWNAKUm3Vamtn7Zxd///Pm3bkBpSQbtORy3mfTz1Hek5ebwhIQoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBrlGq6BdejhFCTxXSxmASHv5puzcUd4j0+ZGnntyRarqRouk2XpMQ06pxIbiatyajkODnN9+muJRnFIqvMd/TQhoFHPFnzHaRT7mVUgb2Av93Iptv4T9QkdQQ8nI2cI1YErEjMOmIpTxo9r+PRKB6+9Mtd9zvbiKIYJHuOBzIfOUW43hQjLpkON+KhUL/d7bD8ofxWiLhoqIn/Rt2bBN1RePa5uDd9OGHZT4W5kdncVnVDFZgj+gz7qXotBLTcuSgTkWERJfXBri3g4WpivgV2RVRjGmRie+PVI0UcWg/ylNjqpr+cDzKG7OrDnrndg1P/295+7bgusyKqJZWwfgwRd/rAulJ7SOjel9SXMFBT+ip4dVMaSTeu0gg6ktdoSqfXm6vd1E15nYim742ch+ozNhn8j5ZdCt3QJLHzUP1lpKyGGqELs3UXhjo0q14qbvJWR18ojE64vn67LgcJS8fqhKxGGldCJczkjH4UMGtTQjHeZl16Fqw+b9K3Mat7mvqEedVedUSxm812Nb+xfFSbkK6AVDQlh9x+49cmFN/zD+es+mVZfUL9u6PPrXAFSIiE/kNCJPQfEiKh/5AQCf3XmoTq+DSiiqSEg/NDaEZtPrT9vycLUJUa92x0iKxf8aFehNK1/nuvt1w1/5vfPLm/jofmI143YKfTa7in1q+qvIiGJzLM5O3VNDyRUVzTdSXOmbnrKi7quo6o6YfgdFW/kmTQ+GAq7qOujb7kJVUf6rVemfXfD+axD3c8MrQY9XRPiys+pHuaig/J0Iu7GivVlvtSq9bceVshIRL6DwmR0H9IiIT+Q0Ik9F/7E9Ia4U3F0yS2CZVYrOhhvMpDrCueRHBNKMZpp5M+5ony51S7qodJTBPqd7SmeRWVms/6YeXTMqYJ9fuUGbVaScujFqYJaRbjC8ueeSakdwrcj3GR0FPtT0jnoXvCiGlCfYnvvDkPFT/yQ+esEtLb93PnfAq9cbhrfOrlT1DXc79GSKfs3u+piRNmrs2V0GxF0PAM6B8yE6bvjspIfRpmvBKasyupL6Ja6K/C+YqwZ+g9EUcRJW1FsGc10JTm9esSCtonwv0CrW8k7SiU2a9zhb0+5sw6aWkVmHVvq+KWNOxKWDzDOlH1KVYM+M6uhAcran4nCyoyymlh3ySGJSy8o360PF0iKoLiOrE1q3fTidlt5lilV7MOVgm5Kq0Se2d2tSeivI3n3Xgij4uCg+lTeQ+6mWPHE5+d7lSaZj+ys50EI+vOURxUb8Za8q1yczM2xNl+uqfmrCt4IJe1+dI910HGEEHXHnAT87xMnJA/LTvPzsIR8x5Khm/np2PWHzS/KPaC5HA3M+NqGs3XcdiW+mlKhuF+9/Hx8bIP44HnK2L/3uebTU03AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJfdcE1yEGGOJUAAAAASUVORK5CYII="
                />
              </div>
            </div>
            <div className="flex items-end justify-center">
              <img src="https://media-exp2.licdn.com/dms/image/C511BAQE6lwo-g2JXPw/company-background_10000/0/1583148449664?e=2147483647&v=beta&t=c9oFlbnNZoFHpb37o9vj4JPaKTW1-9LDloFZOEKxHrU" />
            </div>
          </div>
        </SwiperSlide>
        <div className="w-[100%] columns-2 absolute bottom-32 z-50">
          <SliderButton direction={"Left"} />
          <SliderButton direction={"Right"} />
        </div>
      </Swiper>
    </div>
  );
};

export default portfolo;
