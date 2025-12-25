import { MapPin, Figma, Twitter, Github } from "lucide-react";

export const Introducer = () => {
  return (
    <div
      className="flex md:flex-row md:py-24 justify-between items-center flex-col-reverse py-16 gap-12 md:px-28 px-4 
       "
    >
      <div className="flex flex-col gap-2">
        <div className=" md:text-6xl font-bold text-5xl">Hi, I'm Tom 👋</div>
        <div className="flex flex-col gap-12 ">
          <div className="md:w-[600px] text-[16px] font-normal text-gray-600  w-[343px] ">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </div>
          <div>
            <div className="flex gap-2 justify-items-center items-center ">
              <MapPin />
              <div className=" text-[16px] font-normal text-gray-600">
                Ulaanbaatar, Mongolia
              </div>
            </div>
            <div className="flex gap-2 justify-items-center items-center ml-[6.5px]">
              <div className="bg-green-600 w-2 h-2 rounded-[50px]"></div>
              <div className=" text-[16px] font-normal text-gray-600">
                Available for new projects
              </div>
            </div>
          </div>
          <div className="flex gap-1 w-29 justify-between">
            <Figma className="w-6  h-6 " />
            <Twitter className="w-6  h-6  " />
            <Github className="w-6  h-6  " />
          </div>
        </div>
      </div>
      <div className="relative h-[364px] w-[568px] max-sm:w-[343px] max-sm:h-[300px] ">
        <img
          className="w-[280px] h-80 border-8 left-[248px] top-0.5 border-white z-20 absolute max-sm:w-60 max-sm:h-70 max-sm:left-[52px]"
          src="./image/intro.png"
          alt=""
        />
        <div className="w-[280px] h-80 bg-gray-200 left-72 top-[42px] z-10 absolute max-sm:w-70 max-sm:h-70 max-sm:top-5 max-sm:left-[31.5px]"></div>
      </div>
    </div>
  );
};
