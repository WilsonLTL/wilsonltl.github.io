function header() {
  return (
    <div className="border-b border-[#00b4bd] bg-[#1f1043] w-[100vw] h-[68px] flex lg:justify-center">
      <div className="w-[100%] lg:w-[1024px] w-min-w-[330px] flex justify-between items-center p-5">
        <img
          className="w-[175px] lg:w-[248px] mx-auto"
          src="/assets/lofi_logo.png"
          alt="Lofilians Logo"
        />

        <div className="hidden md:block special-font text-[18px] mx-[40px] text-center space-x-[47px] text-white">
          <a href="#about">about</a>
          <a href="#roadmap">roadmap</a>
          <a href="#crew">crew</a>
          <a href="#follow-us">faq</a>
        </div>
        <button
          className="hidden md:invisible  w-[115px] lg:w-[160px] h-[40px] rounded-[20px] border-2 border-[#2ad8d0] special-font"
        >
          CONNECT
        </button>
      </div>
    </div>
  );
}

export default header;
