import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <div className="h-[68px] bg-gray-50 flex justify-center items-center gap-1">
      <img src="/image/endC.png" alt="" />
      <div className="text-gray-600 text-4 font-normal h-5 flex items-center justify-center gap-0.5">
        2024 | Greetings with <Heart className="w-4 h-4" /> ️ from Ulaanbaatar
      </div>
    </div>
  );
};
export default Footer;
