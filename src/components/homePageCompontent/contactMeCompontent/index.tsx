const contactMe = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-h-screen section">
      <div className="flex flex-col items-center justify-center px-16">
        <h2 className="text-5xl uppercase special-font">Contact me</h2>
        <div className="w-32 p-0 mt-2 bg-black border-4 border-black/75" />
        <div className="py-8 text-lg">
          If you want to collaborate on crafting amazing experience for people.
          you are very welcome to contact me. I am available for freelance projects and full-time employment.
        </div>
        <div className="flex items-center justify-center">
          <span className="w-10 text-center">
            <i className="fa-solid fa-quote-left"></i>
          </span>
          <button
            data-tf-popup="ZoFOxKCV"
            data-tf-iframe-props="title=Vacation Request Form (copy)"
            data-tf-medium="snippet"
            className="w-64 p-2 my-8 space-x-2 text-white bg-yellow-400 border border-b-4 border-blue-900 rounded shadow-md text-md"
          >
            <i className="fa-brands fa-rocketchat"></i>
            <span className="text-sm uppercase">Contact Me</span>
          </button>
          <span className="w-10 text-center">
            <i className="fa-solid fa-quote-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default contactMe;
