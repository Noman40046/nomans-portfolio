import { FaCalendarDay, FaGraduationCap } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import journeyData from '../data/journeyData.json';

const Journey = () => {
  return (
    <div>
      <div className="bg-[#060606]">
        <section className="lg:py-8">
          <div className="w-full flex items-center bg-[#060606]">
            <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-6  dark:text-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold">MY JOURNEY</h1>
                <span className="w-16 h-[4px] bg-[#FF014F] rounded"></span>
                <span className="w-8 h-[4px] bg-[#FF014F] rounded"></span>
              </div>

              <section className="overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                    <div className="lg:pr-8 lg:pt-3">
                      <div className="lg:max-w-lg">
                        <p className="flex items-center gap-3 mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          <span className="text-4xl"><FaGraduationCap/></span> 
                           <h1 className="text-3xl font-semibold">EDUCATION</h1> 
                        </p>
                        <dl className="mt-5 max-w-xl space-y-7 leading-7 lg:max-w-none">
                          {journeyData.education.map((edu, index) => (
                            <div key={index} className="JouneyShadow relative border border-[#FF014F] rounded-lg p-3">
                              <h2 className="text-xl font-semibold">{edu.degree}</h2>
                              <h2 className="text-md ">{edu.field}</h2>
                              <h2 className="text-md text-gray-400">{edu.institution}</h2>
                              <h2 className="text-md text-gray-400">{edu.grade}</h2>
                              <span className="flex gap-3 items-center">
                                <FaCalendarDay/>
                                <p className=" text-[#FF014F]">{edu.duration}</p>
                              </span>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>

                    <div className="lg:pr-8 lg:pt-3">
                      <div className="lg:max-w-lg">
                        <p className="flex items-center gap-3 mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          <span className="text-4xl"><FaBagShopping/></span>
                          <h1 className="text-3xl font-semibold">EXPERIENCE</h1>                     
                        </p>
                        <dl className="mt-5 max-w-xl space-y-7 leading-7 lg:max-w-none">
                          {journeyData.experience.map((exp, index) => (
                            <div key={index} className="JouneyShadow relative border border-[#FF014F] rounded-lg p-3">
                              <h2 className="text-xl font-semibold">{exp.title}</h2>
                              <span className="flex gap-3 items-center mb-2">
                                <FaCalendarDay/>
                                <p className=" text-[#FF014F]">{exp.duration}</p>
                              </span>
                              <a className="text-sm ps-3 pt-1 pb-1 pr-3 border-sm bg-[#FF014F] rounded-lg" target="_blank" href={exp.link}>Visit Here</a>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Journey;
