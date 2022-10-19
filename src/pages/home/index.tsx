// React
import { useState } from "react";
// NextJS
import type { NextPage } from "next";
import {
  IntroCompontent,
  BioCompontent,
  PortfoloCompontent,
  ContactmeCompontent,
} from "../../components/homePageCompontent";
import { Header, Footer, NavCompontent } from "../../components/globalComponent";
// Library
import ReactFullpage from "@fullpage/react-fullpage";

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);

  function onLeaveHandler(origin: any, destination: any, direction: any) {
    setIndex(destination.index);
  }

  return (
    <div
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="flex items-center justify-center w-screen h-screen"
    >
      <NavCompontent />

      <div className="flex flex-col w-full h-screen p-4">
        <div className="flex flex-col px-0 md:px-16 w-ful">
          <ReactFullpage
            navigation
            scrollOverflow={true}
            onLeave={onLeaveHandler}
            render={(comp) => (
              <ReactFullpage.Wrapper>
                <IntroCompontent />
                <BioCompontent />
                <PortfoloCompontent />
                <ContactmeCompontent />
              </ReactFullpage.Wrapper>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
