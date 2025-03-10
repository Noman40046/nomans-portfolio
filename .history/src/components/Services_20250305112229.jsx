import { FaCode, FaMobile, FaWordpress } from "react-icons/fa";
import { FaComputer, FaShop } from "react-icons/fa6";

const Services = () => {
  return (
    <div>
      <div className="bg-[#060606]">
        <section className="lg:py-8">
          <div className="w-full flex items-center bg-[#060606]">
            <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-6  dark:text-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold">SERVICES</h1>
                <span className="w-16 h-[4px] bg-[#FF014F] rounded"></span>
                <span className="w-8 h-[4px] bg-[#FF014F] rounded"></span>
              </div>

              
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <section className=" w-full h-full flex flex-col justify-center">         
                    <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">


                      <div className="flex items-start sm:gap-4 gap-1">
                        <span className="">
                          <FaCode className="sm:text-5xl text-3xl text-[#FF014F]"/>
                        </span>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold text-white">
                            Web Development
                          </h3>
                          <p className="text-gray-300 ">
                            Crafting responsive and intuitive websites tailored
                            to your unique needs using cutting-edge
                            technologies.
                          </p>
                        </div>
                      </div>


                      <div className="flex sm:gap-4 gap-2">
                        <span>
                        <FaComputer className="sm:text-5xl text-3xl text-[#FF014F]"/>
                        </span>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold text-white">
                            UI/UX Design
                          </h3>
                          <p className="text-gray-300 ">
                            Creating visually appealing and user-centric designs
                            that enhance user experiences and engagement.
                          </p>
                        </div>
                      </div>


                      <div className="flex sm:gap-4 gap-2">
                        <span>
                        <FaWordpress className="sm:text-5xl text-3xl text-[#FF014F]"/>
                        </span>

                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold text-white">
                            Custom CMS Solutions
                          </h3>
                          <p className="text-gray-300">
                            Building reusable and efficient CMS APIs to simplify
                            website management and scalability.
                          </p>
                        </div>
                      </div>


                      <div className="flex sm:gap-4 gap-2">
                        <span>
                        <FaMobile className="sm:text-5xl text-3xl text-[#FF014F]"/>
                        </span>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold text-white">
                            Mobile App Development
                          </h3>
                          <p className="text-gray-300">
                            Designing and developing user-friendly mobile
                            applications for iOS and Android, ensuring seamless
                            performance and user satisfaction.
                          </p>
                        </div>
                      </div>


                      <div className="flex sm:gap-4 gap-2">
                        <span>
                        <FaShop className="sm:text-5xl text-3xl text-[#FF014F]"/>
                        </span>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold text-white">
                            E-commerce Development
                          </h3>
                          <p className="text-gray-300">
                            Creating robust platforms to elevate your online
                            business presence.
                          </p>
                        </div>
                      </div>

                    </div>
                  </section>
                </div>
            

              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
