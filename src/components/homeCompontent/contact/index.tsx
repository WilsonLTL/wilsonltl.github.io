import { 
  Breadcrumbs,
  Link,
 } from '@mui/material';

const ContactCompontent = () => {
  return (
    <div id="contact" className="flex lg:flex-row flex-col h-screen">
      <div className="lg:w-1/2 w-full flex flex-col bg-black items-center justify-between">
        <span></span>
        <img className="w-52 h-52" src="/assets/contact.svg" />
        <div className="mb-8 justify-self-end">
          <Breadcrumbs
            className="lg:flex hidden text-pink-400"
            aria-label="breadcrumb"
          >
            <Link
              href="/#about"
              underline="hover"
              className="text-base text-pink-400"
            >
              ABOUT
            </Link>
            <Link
              href="/#work"
              underline="hover"
              className="text-base text-pink-400"
            >
              WORK
            </Link>
            <Link
              href="/#contact"
              underline="hover"
              className="text-base text-pink-400"
            >
              CONTACT
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col bg-white items-center justify-center border">
        <div className="p-4 m-16 space-y-8">
          <p className="font-bold leading-loose">
            If you want to collaborate on crafting amazing experience for
            people. you are very welcome to contact me.
          </p>
          <p className="leading-loose">
            I am available for freelance projects and full-time employment.
          </p>
          <p className="leading-loose">Email: wilsonloltl@gmail.com</p>
          <p className="leading-loose">
            Resume:{" "}
            <a className="text-pink-400" href="/doc/Resume.pdf">
              Here
            </a>
          </p>
          <p className="leading-loose">
            More About Me:{" "}
            <a className="text-pink-400" href="/doc/Wilson-Lo.pdf">
              Here
            </a>
          </p>
          <p className="leading-loose">
            Linkedin:{" "}
            <a
              className="text-pink-400"
              href="https://www.linkedin.com/in/wilson-lo-707120170/"
            >
              https://www.linkedin.com/in/wilson-lo-707120170/
            </a>
          </p>
          <p className="leading-loose">
            Cakeresume:{" "}
            <a
              className="text-pink-400"
              href="https://www.cakeresume.com/me/wilson-ltl"
            >
              https://www.cakeresume.com/me/wilson-ltl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCompontent;
