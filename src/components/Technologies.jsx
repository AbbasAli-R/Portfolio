import {
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoNodejs,
    BiLogoReact,
    BiLogoTailwindCss,
  } from "react-icons/bi";
import expressicon from '../assets/expressicon.svg'

  const Technologies = () => {
    return (
      <section
        className="pt-20" // Consistent with About.jsx
        id="technologies"
      >
        <h2 className="text-center text-3xl lg:text-4xl mb-8 sm:mb-12 md:mb-16">
          Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-5 p-5">
          <div>
            <BiLogoHtml5
              className="cursor-pointer text-[60px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </div>
          <div>
            <BiLogoCss3
              className="cursor-pointer text-[60px] text-sky-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </div>
          <div>
            <BiLogoJavascript
              className="cursor-pointer text-[60px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </div>
          <div>
            <BiLogoReact
              className="cursor-pointer text-[60px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </div>
          <div>
            <BiLogoNodejs
              className="cursor-pointer text-[60px] text-green-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </div>
          <img src={expressicon} alt="Express.js"
   className="cursor-pointer w-[60px] h-[60px] transition-all duration-300 hover:-translate-y-5 sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"/>
          <div>
            <BiLogoMongodb
              className="cursor-pointer text-[60px] text-green-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </div>
          <div>
            <BiLogoTailwindCss
              className="cursor-pointer text-[60px] text-teal-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            />
          </div>

        </div>
      </section>
    );
  };
  
  export default Technologies;
  
