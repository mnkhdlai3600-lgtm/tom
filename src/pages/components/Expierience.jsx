import { EpxData } from "./ExperienceData";

export const Experience = () => {
  return (
    <div className="flex flex-col py-24 bg-gray-50 justify-center items-center gap-12 md:px-28 px-4 ">
      <div className="flex flex-col  items-center gap-4">
        <div className="flex  bg-gray-200 rounded-xl px-5 py-1 font-medium text-[14px] text-center text-gray-600">
          Experience
        </div>
        <div className="text-[20px] text-gray-600 font-normal">
          Here is a quick summary of my most recent experiences:
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {EpxData.map((Exp) => (
          <div className="flex justify-between rounded-xl shadow-xs p-8 bg-white md:flex-row flex-col">
            <div>
              <img src={Exp.image} alt="" />
            </div>
            <p className=" md:hidden content-center font-normal text-[16px]  text-gray-700  :">
              {Exp.date}
            </p>
            <div className="flex flex-col gap-4 ">
              <ul className="font-semibold text-[20px] flex content-center  flex-col ">
                {Exp.title}
              </ul>
              <div className="flex flex-col  gap-1">
                {Exp.data.map((item) => (
                  <li className="list-disc text-[16px] font-normal text-gray-600 ml-5">
                    {item}
                  </li>
                ))}
              </div>
            </div>

            <p className=" flex content-center font-normal text-[16px] text-gray-700 hidden:">
              {Exp.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
