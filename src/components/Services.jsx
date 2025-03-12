import { FaCode, FaMobile, FaWordpress } from "react-icons/fa";
import { FaComputer, FaShop } from "react-icons/fa6";
import servicesData from '../../public/data/services.json';

const Services = () => {
  return (
    <div>
      <div className="">
        <section className="lg:py-8">
          <div className="w-full flex items-center">
            <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 lg:py-0 py-6 lg:pt-6 pt-20 bg-black  dark:text-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold">SERVICES</h1>
                <span className="w-16 h-[4px] bg-[#FF014F] rounded"></span>
                <span className="w-8 h-[4px] bg-[#FF014F] rounded"></span>
              </div>

              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <section className=" w-full h-full flex flex-col justify-center">         
                  <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                    {servicesData.map((service, index) => (
                      <div key={index} className="flex items-start sm:gap-4 gap-1">
                        <span className="">
                          {service.icon === "FaCode" && <FaCode className="sm:text-5xl text-3xl text-[#FF014F]"/>}
                          {service.icon === "FaComputer" && <FaComputer className="sm:text-5xl text-3xl text-[#FF014F]"/>}
                          {service.icon === "FaWordpress" && <FaWordpress className="sm:text-5xl text-3xl text-[#FF014F]"/>}
                          {service.icon === "FaMobile" && <FaMobile className="sm:text-5xl text-3xl text-[#FF014F]"/>}
                          {service.icon === "FaShop" && <FaShop className="sm:text-5xl text-3xl text-[#FF014F]"/>}
                        </span>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold text-white">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 ">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
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
