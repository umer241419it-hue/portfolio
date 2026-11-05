// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md font-semibold">
            Contact Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span className="break-all">{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <Link target="_blank" href={personalData.github} className="flex items-center gap-3 hover:text-[#16f2b3] transition-colors">
                <IoLogoGithub
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span className="break-all">{personalData.github}</span>
              </Link>
            </p>
            {personalData.linkedIn && (
              <p className="text-sm md:text-xl flex items-center gap-3">
                <Link target="_blank" href={personalData.linkedIn} className="flex items-center gap-3 hover:text-[#16f2b3] transition-colors">
                  <BiLogoLinkedin
                    className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                  <span className="break-all">{personalData.linkedIn}</span>
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
