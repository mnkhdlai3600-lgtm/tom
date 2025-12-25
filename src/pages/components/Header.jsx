import { Sun, Weight, Menu } from "lucide-react";
import { Rubik_Mono_One } from "next/font/google";
const tom = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });

export const Header = () => {
  return (
    <div className="flex justify-between md:py-4 items-center md:px-28 px-4 ">
      <div
        className={` text-3xl/[36px] font-normal justify-center flex :items-center ${tom.className}`}
      >
        TOM
      </div>
      <div className="md:flex gap-6 md:justify-items-center md:items-center max-sm:hidden">
        <div className="md:text-[16px] md:text-gray-600">About</div>
        <div className="md:text-[16px] md:text-gray-600">Work</div>
        <div className="md:text-[16px] md:text-gray-600">Testimonials</div>
        <div className="md:text-[16px] md:text-gray-600">Contact</div>
        <div className="md:border-solid md:border md:w-0 md:h-6 md:border-gray-100"></div>
        <button>
          <Sun className="md:opacity-60" />
        </button>
        <div className="md:w-[136px] md:h-9 bg-gray-900 md:text-white md:justify-center md:flex md:items-center md:rounded-xl">
          Download CV
        </div>
      </div>
      <div className="hidden justify-center items-center max-sm:flex ">
        <Menu />
      </div>
    </div>
  );
};
export default Header;
