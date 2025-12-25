import { Mail, Copy, Phone, Github, Twitter, Figma } from "lucide-react";

export const GetInTouch = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-12 md:px-28 px-4 my-24">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center bg-gray-200 rounded-xl w-[122px] font-medium text-[14px] justify-center text-gray-600">
          Get in touch
        </div>
        <div className="text-[20px] text-gray-600 font-normal text-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </div>
      </div>
      <div className="text-center ">
        <div className="flex justify-center items-center gap-5">
          <Mail />
          <div className="text-center text-[36px] font-bold max-sm:text-[18px]">
            tom@pinecone.mn
          </div>
          <Copy />
        </div>
        <div className="flex justify-center items-center gap-5">
          <Phone />
          <div className="text-center text-[36px] font-bold max-sm:text-[18px]">
            +976 88112233{" "}
          </div>
          <Copy />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-600 text-4 font-normal">
          You may also find me on these platforms!
        </div>
        <div className="flex justify-center items-center gap-4">
          <Github />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
