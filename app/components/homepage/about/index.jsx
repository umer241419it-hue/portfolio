// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md font-semibold">
            About Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className={`grid grid-cols-1 ${personalData.profile ? 'lg:grid-cols-12' : ''} gap-8 lg:gap-10 items-center`}>
        <div className="order-2 lg:order-1 lg:col-span-8 xl:col-span-8 lg:translate-x-5">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed text-justify sm:text-left">
            {personalData.description}
          </p>
        </div>
        {personalData.profile && (
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 lg:col-span-4 xl:col-span-4 lg:-translate-x-5">
            <Image
              src={personalData.profile}
              width={280}
              height={290}
              alt={personalData.name}
              className="rounded-lg transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer w-56 sm:w-64 lg:w-72 max-w-[280px] h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
