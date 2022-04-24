import { Breadcrumbs, Divider, Link, Paper } from "@mui/material";
// Data
import { frontend, backend, cloud, devops } from "../../../util/techstack"

const WorkCompontent = () => {
  return (
    <div id="work" className="flex lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full flex flex-col bg-white items-center border justify-between">
        <span></span>
        <img className="w-52 h-52" src="/assets/work.svg" />
        <div className="mb-8 justify-self-end">
          <Breadcrumbs
            className="lg:flex hidden text-black"
            aria-label="breadcrumb"
          >
            <Link
              href="/#about"
              underline="hover"
              className="text-base text-black"
            >
              ABOUT
            </Link>
            <Link
              href="/#work"
              underline="hover"
              className="text-base text-black"
            >
              WORK
            </Link>
            <Link
              href="/#contact"
              underline="hover"
              className="text-base text-black"
            >
              CONTACT
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col bg-white items-center justify-center border">
        <div className="p-4 m-16 space-y-8">
          <p className="text-2xl font-bold leading-loose">Tech Stack</p>
          <p className="text-xl font-bold leading-loose">Frontend</p>
          <Paper
            className="border-none shadow-none"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
            }}
            component="ul"
          >
            {frontend.map((item) => {
              return (
                <div className="flex border rounded shadow m-2 p-2 items-center justify-center space-x-4">
                  <img width="30" height="30" src={item.icon} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </Paper>
          <Divider />
          <p className="text-xl font-bold leading-loose">Backend</p>
          <Paper
            className="border-none shadow-none"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
            }}
            component="ul"
          >
            {backend.map((item) => {
              return (
                <div className="flex border rounded shadow m-2 p-2 items-center justify-center space-x-4">
                  <img width="30" height="30" src={item.icon} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </Paper>
          <Divider />
          <p className="text-xl font-bold leading-loose">
            Cloud Infrastructure
          </p>
          <Paper
            className="border-none shadow-none"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
            }}
            component="ul"
          >
            {cloud.map((item) => {
              return (
                <div className="flex border rounded shadow m-2 p-2 items-center justify-center space-x-4">
                  <img width="30" height="30" src={item.icon} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </Paper>
          <Divider />
          <p className="text-xl font-bold leading-loose">DevOps</p>
          <Paper
            className="border-none shadow-none"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
            }}
            component="ul"
          >
            {devops.map((item) => {
              return (
                <div className="flex border rounded shadow m-2 p-2 items-center justify-center space-x-4">
                  <img width="30" height="30" src={item.icon} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default WorkCompontent;
