import { FaCalendarDay, FaGraduationCap } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

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

                          <div className="JouneyShadow relative border border-[#FF014F] rounded-lg p-3">
                            <h2 className="text-xl font-semibold">B.Sc in Computer Science</h2>
                            <h2 className="text-md ">Computer Science and Engineering</h2>
                            <h2 className="text-md text-gray-400">Delta Computer Science College,Rangpur</h2>
                            <h2 className="text-md text-gray-400">CGPA - 3.18/4.00</h2>
                            <span className="flex gap-3 items-center">
                              <FaCalendarDay/>
                              <p className=" text-[#FF014F]">Feb 2019 - Oct 2024</p>
                            </span>
                          </div>

                          <div className="JouneyShadow relative border border-[#FF014F] rounded-lg p-3 ]">
                            <h2 className="text-xl font-semibold">Higher Secondary</h2>
                            <h2 className="text-md ">Science</h2>
                            <h2 className="text-md text-gray-400">Rangpur Govt College,Rangpur</h2>
                            <h2 className="text-md text-gray-400">GPA - 4.00/5.00</h2>
                            <span className="flex gap-3 items-center">
                              <FaCalendarDay/>
                              <p className=" text-[#FF014F]">2015-2017</p>
                            </span>
                          </div>                     
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

                          <div className=" JouneyShadow relative border border-[#FF014F] rounded-lg p-3 ]">
                            <h2 className="text-xl font-semibold">Fiverr – Front-End Developer</h2>
                            <span className="flex gap-3 items-center mb-2">
                              <FaCalendarDay/>
                              <p className=" text-[#FF014F]">Nov 22 - Present</p>
                            </span>
                            <a className="text-sm ps-3 pt-1 pb-1 pr-3 border-sm bg-[#FF014F] rounded-lg" target="_blank" href="https://www.fiverr.com/nomandipto?up_rollout=true">Visit Here</a>
                          </div>


                          <div className="JouneyShadow relative border border-[#FF014F] rounded-lg p-3 ]">
                            <h2 className="text-xl font-semibold">Upwork – Front-End Developer</h2>
                            <span className="flex gap-3 items-center mb-2">
                              <FaCalendarDay/>
                              <p className=" text-[#FF014F]">Dec 22 - Present</p>
                            </span>
                            <a className="text-sm ps-3 pt-1 pb-1 pr-3 border-sm bg-[#FF014F] rounded-lg" target="_blank" href="https://www.upwork.com/freelancers/~010bb0b9ee12dbfb3b?mp_source=share">Visit Here</a>
                          </div>


                          <div className="JouneyShadow relative border border-[#FF014F] rounded-lg p-3 ]">
                            <h2 className="text-xl font-semibold">Britto Soft. (Skilled, Development & Tech Professional Team) - Front-End Developer</h2>
                            <span className="flex gap-3 items-center mb-2">
                              <FaCalendarDay/>
                              <p className=" text-[#FF014F]">Jan 24 - Present</p>
                            </span>
                            <a className="text-sm ps-3 pt-1 pb-1 pr-3 border-sm bg-[#FF014F] rounded-lg" target="_blank" href="https://brittosoft.com/">Visit Here</a>
                          </div>

                                             
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
