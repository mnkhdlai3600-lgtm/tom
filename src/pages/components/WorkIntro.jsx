import { WorkData } from "./WorkData";

export const WorkIntro = () => {
  return (
    <div className=" flex flex-col items-center gap-12 justify-center md:m-24 my-16 md:px-28 px-4 ">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center bg-gray-200 rounded-xl w-[75px]  font-medium text-[14px] justify-center text-gray-600">
          Work
        </div>
        <div className="text-[20px] text-gray-600 font-normal ">
          Some of the noteworthy projects I have built:
        </div>
      </div>
      <div className="flex flex-col gap-12 ">
        {WorkData.map((work, index) => (
          <div
            key={index}
            className={`flex md:flex-row flex-col rounded-lg overflow-hidden shadow-lg ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="  bg-gray-100 flex md:p-12 p-8  justify-center items-center ">
              <div className=" rounded-xl overflow-hidden ">
                <img
                  className="object-cover md:w-[480px] md:h-96 w-[279px] h-48"
                  src={work.image}
                  alt=""
                />
              </div>
            </div>

            <div
              className={` flex flex-col  gap-6 md:w-xl md:p-12 p-8 ${
                index % 2 === 1 ? "md:rounded-l-2xl  " : "md:rounded-r-2xl "
              }}rounded-b-2xl `}
            >
              <p className="text-[20px] font-bold text-gray-900 flex-wrap">
                {work.title}
              </p>
              <p className="text-[16px]  font-regular text-gray-600 ">
                {work.lorem}
              </p>
              <div className="flex flex-wrap gap-2">
                {work.button.map((butt) => (
                  <p className=" py-1 px-5 bg-gray-200 rounded-xl">{butt}</p>
                ))}
              </div>
              <div>{work.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
