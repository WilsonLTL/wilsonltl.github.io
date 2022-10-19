// NextJS
import Image from "next/image";

function footer() {
  return (
    <div
      className="flex flex-col w-full bg-black place-items-center h-96"
      id="follow-us"
    >
      <picture>
        <img
          src="/assets/lofi_logo.png"
          alt="LOFI logo"
          className="flex flex-wrap justify-center mt-8 w-96 md:w-full"
        />
      </picture>

      <div className="hidden text-lg text-center text-white p-9 space-x-9 special-font md:block">
        <a href="#about">about</a>
        {/* <a href="#mint">mint</a> */}
        <a href="#roadmap">roadmap</a>
        <a href="#crew">crew</a>
        <a href="#faq">faq</a>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center justify-between w-screen p-8 mt-12 space-y-8 text-sm md:space-y-0 md:flex-row">
          <p className="items-center text-center text-slate-500">
            Copyright © 2022, LOFILIANS
          </p>
          <div className="flex items-center justify-between w-52">
            <a
              href="https://twitter.com/lofilians"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width="24"
                height="24"
                src="/assets/social_twitter.png"
                alt="Twitter"
              />
            </a>
            <a
              href="https://instagram.com/lofilians"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width="24"
                height="24"
                src="/assets/social_ig.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://discord.gg/vPP9ErFRvV"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width="24"
                height="24"
                src="/assets/social_discord.png"
                alt="Discord"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
