import { 
  Avatar,
  Breadcrumbs,
  Divider,
  Link
 } from '@mui/material';

const AboutCompontent = () => {

  return (
    <div id="about" className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full flex flex-col bg-pink-400 items-center justify-between">
          <span></span>
          <img className="w-52 h-52" src="/assets/about.svg"/>
          <div className="mb-8 justify-self-end">
            <Breadcrumbs className="lg:flex hidden text-white" aria-label="breadcrumb">
              <Link href="/#about" underline="hover" className="text-base text-white">ABOUT</Link>
              <Link href="/#work" underline="hover" className="text-base text-white">WORK</Link>
              <Link href="/#contact" underline="hover" className="text-base text-white">CONTACT</Link>
            </Breadcrumbs>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col bg-white items-center justify-center border">
          <div className="p-4 m-16 space-y-8">
            <div className="flex hover:shadow-md hover:border hover:rounded p-4 space-x-4 items-center transition duration-150 hover:ease-in">
              <Avatar sx={{ width: 72, height: 72 }} src="https://media-exp1.licdn.com/dms/image/C5103AQEDjEg-clE66A/profile-displayphoto-shrink_800_800/0/1552970127855?e=1655942400&v=beta&t=_44ZXmxQO8Tn_Km6olNtMplBjdS9sgv2Nn1dRL47y1k"/>
              <div className="flex flex-col">
                <p className="text-2xl font-bold leading-loose">Wilson LO</p>
                <p className="text-xl leading-loose">To Infinity and Beyond!</p>
              </div>
            </div>
            <div className="space-y-8 p-4 hover:shadow-md hover:border hover:rounded transition duration-150 hover:ease-in">
              <p className="text-xl font-bold leading-loose">An Engineer 🧑‍🔧</p>
              <p className="leading-loose">I am responsible for Technician Leader of Freehunter. Also, I am a freelancer since I was 18, these projects include full-stack, big data, machine learning, etc. so I am good at fast learning and broad knowledge area in software development with 6 years + of working experience.</p>
            </div>
            <Divider />
            <div className="space-y-8 p-4 hover:shadow-md hover:border hover:rounded transition duration-150 hover:ease-in">
              <p className="text-xl font-bold leading-loose">A Photographer 📷</p>
              <p className="leading-loose">I am a part-time photographer, focusing on portrait photography and fine-art contemporary landscape, and I especially love creating images with a "Japan" feel. Now I am using Fujifilm XE-4.</p>
            </div>
            <Divider />
            <div className="space-y-8 p-4 hover:shadow-md hover:border hover:rounded transition duration-150 hover:ease-in">
              <p className="text-xl font-bold leading-loose">An athlete 🏹</p>
              <p className="leading-loose">I am an hoilday athlete, I love sport including long run, swimming, and also I am a professional archery with compound bow, currently work hard to being a Asian Games representative of Hong Kong before 2026.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutCompontent