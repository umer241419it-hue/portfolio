// @flow strict
import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import lottieFile from '../../../assets/lottie/build.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                certifications.map(cert => (
                  <GlowCard key={cert.id} identifier={`cert-${cert.id}`}>
                    <a
                      href={cert.certificatePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 relative text-white group cursor-pointer no-underline hover:no-underline"
                      title="Click to view certificate"
                    >
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-between items-center px-1">
                        <p className="text-xs sm:text-sm text-[#16f2b3] font-medium">
                          {cert.type}
                        </p>
                        <span className="text-[11px] sm:text-xs text-[#16f2b3] bg-[#16f2b3]/10 border border-[#16f2b3]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 group-hover:bg-[#16f2b3] group-hover:text-[#0d1224] transition-all duration-300 font-medium">
                          <span>View Certificate</span>
                          <HiOutlineExternalLink size={14} />
                        </span>
                      </div>
                      <div className="flex items-center gap-x-6 sm:gap-x-8 px-3 py-5">
                        {cert.image ? (
                          <div className="flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                            <Image
                              src={cert.image}
                              alt={cert.title}
                              width={72}
                              height={72}
                              className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-[0_0_12px_rgba(255,153,0,0.3)]"
                            />
                          </div>
                        ) : (
                          <div className="text-violet-500 transition-all duration-300 group-hover:scale-125 flex-shrink-0">
                            <FaAward size={36} />
                          </div>
                        )}
                        <div>
                          <p className="text-base sm:text-xl mb-1 font-medium uppercase group-hover:text-[#16f2b3] transition-colors">
                            {cert.title}
                          </p>
                          <p className="text-sm sm:text-base text-gray-300">{cert.issuer}</p>
                          {cert.validationNumber && (
                            <p className="text-[11px] sm:text-xs text-gray-400 mt-1 font-mono">
                              Validation: {cert.validationNumber}
                            </p>
                          )}
                        </div>
                      </div>
                    </a>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
