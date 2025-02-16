const Home = () => {
  return (
    <div>
      <div className="bg-[#060606]">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-4xl mb-3">
                    <div className="flex items-end gap-5">
                    <span> Hello, It's Me </span> 
                    <img className="w-16" src="../../public/hacker.png" alt="" />
                    </div>

                  <div className="relative inline-flex mt-4 mb-4">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#FF014F]"></span>
                    <h1 className="relative text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                      NOMAN DIPTO
                    </h1>
                  </div>
                </h1>
                <div className="flex mb-4">
                  <h1 className="text-4xl text-white font-bold pr-3">A</h1>
                  <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl text-[#FF014F] font-bold">
                    Professional Web Developer
                  </h1>
                </div>

                <div className="mt-4 sm:flex sm:items-center sm:space-x-8">
                  <a target="_blank"
                    href="https://drive.google.com/file/d/1BQfRX1Gw8UOCadUJ2Yl2q1mYXiDX44qt/view?usp=sharing"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white transition-all duration-200 bg-[#FF014F] rounded-lg"
                    role="button"
                  >                 
                    Explore Me
                  </a>
                </div>
              </div>

              <div className="w-[430px] flex justify-center items-center border-b-8 border-double border-gray-300">
                <img
                  className="noman-img w-[400px] h-auto"
                  src="../../public/noman3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
