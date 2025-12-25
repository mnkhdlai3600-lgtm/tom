export const AboutMe = () => {
  return (
    <div className=" flex flex-col md:py-24 items-center justify-between md:gap-12 gap-6 md:px-28 px-4 ">
      <div className="flex bg-gray-200 rounded-xl px-5 py-1 font-medium text-[14px]  text-gray-600">
        About me
      </div>
      <div className="flex md:justify-between md:flex-row flex-col gap-12 w-full ">
        <div className="relative md:w-[584px] md:h-[558px] w-[343px] h-[380px]">
          <div className="md:w-[400px] md:h-[480px] bg-[url(/image/aboutMe.jpg)] bg-cover bg-center absolute z-10 border-white border-8 md:left-10 w-[280px] h-[360px] left-[31.5px]"></div>
          <div className="md:w-[400px] md:h-[480px] bg-gray-200 absolute z-0 md:top-10  border-white border-8 top-5 w-[320px] h-[360px] left-[11.5px]"></div>
        </div>
        <div className="md:w-[584px] md:h-[558px] flex flex-col gap-6 w-[343px] h-[826px]">
          <div className="md:text-[30px] font-semibold text-[24px]">
            Curious about me? Here you have it:
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[16px] text-gray-600 font-normal">
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </div>
            <div className="text-[16px] text-gray-600 font-normal">
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </div>
            <div className="text-[16px] text-gray-600 font-normal ">
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </div>
            <div className="text-[16px] text-gray-600 font-normal">
              Finally, some quick bits about me.
            </div>
            <div className="flex gap-2.5 ">
              <div className="w-[287px] h-[57px] flex flex-col gap-2.5 ml-5">
                <li className="text-[16px] text-gray-600 font-normal">
                  B.E. in Computer Engineering
                </li>
                <li className="text-[16px] text-gray-600 font-normal">
                  Full time freelancer
                </li>
              </div>
              <div>
                <li className="text-[16px] text-gray-600 font-normal ml-5">
                  Avid learner
                </li>
              </div>
            </div>
            <div className="text-[16px] text-gray-600 font-normal">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
