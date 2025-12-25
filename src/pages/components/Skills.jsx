import { Data } from "./SkillsData";

export const Skills = () => {
  return (
    <div className="py-24 flex flex-col justify-center items-center gap-12  bg-white md:px-28 px-4">
      <div className="flex flex-col gap-4  items-center justify-center">
        <div className=" bg-gray-200 rounded-xl px-5 py-1  font-medium text-[14px] flex justify-center items-center text-gray-600 ">
          Skills
        </div>
        <div className="text-[20px] text-gray-600 font-normal text-center">
          The skills, tools and technologies I am really good at:
        </div>
      </div>
      <div className="grid md:grid-cols-8 md:gap-x-[86px] md:gap-y-12   grid-cols-[78px_78px_78px] grid-rows-[96px_96px_96px] gap-x-12 gap-y-4  ">
        {Data.map((item) => (
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={item.image} alt="" />
            <p className="font-normal md:text-[18px] text-gray-600 text-[16px]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
