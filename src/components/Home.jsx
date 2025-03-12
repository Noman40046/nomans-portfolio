const Home = () => {
  return (
    <div>
      <div className=" bg-black">
        <section className="py-10 sm:py-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 order-1 lg:order-2">
              <div className="lg:order-1 order-2">
                <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-4xl mb-3">
                    <div className="flex items-end gap-5">
                    <span> Hello, It's Me </span> 
                    <img className="w-16" src="../../public/hacker.png" alt="" />
                    </div>

                  <div className="relative inline-flex mt-4 mb-4">
                    <span className="absolute inset-x-0 bottom-0 lg:border-b-[30px] border-b-[17px] border-[#FF014F]"></span>
                    <h1 className="relative text-4xl font-bold text-white sm:text-6xl lg:text-6xl">
                      NOMAN DIPTO
                    </h1>
                  </div>
                </h1>
                <div className="flex mb-4">
                  <h1 className="lg:text-4xl text-2xl text-white font-bold pr-3">A</h1>
                  <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 lg:text-4xl text-2xl text-[#FF014F] font-bold">
                    Professional Web Developer .
                  </h1>
                </div>

                <div className="mt-4 sm:flex sm:items-center sm:space-x-8">
                  <a target="_blank"
                    href="https://drive.google.com/file/d/1BQfRX1Gw8UOCadUJ2Yl2q1mYXiDX44qt/view?usp=sharing"
                    title=""
                    className="JouneyShadow border border-[#FF014F] inline-flex items-center justify-center lg:px-10 px-4 lg:py-4 py-2 text-lg font-semibold text-white transition-all duration-200  rounded-lg"
                    role="button"
                  >                 
                    Explore Me
                  </a>
                </div>
              </div>

              <div className="lg:w-[530px] lg:h-[548px] flex justify-center items-center lg:order-2 order-1">
                <img className="w-[250px] lg:w-full " src="../../noman4.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
