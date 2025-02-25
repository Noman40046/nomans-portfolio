const Allprojects = () => {
  return (
    <div>
      <div className="bg-[#060606]">
        <section className="lg:py-8">
          <div className="w-full flex items-center bg-[#060606]">
            <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-6  dark:text-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold">PROJECTS</h1>
                <span className="w-8 h-[4px] bg-[#FF014F] rounded"></span>
                <span className="w-16 h-[4px] bg-[#FF014F] rounded"></span>
              </div>

              <div className="mx-auto max-w-7xl px-6 lg:px-8">      
                <div className="grid grid-cols-1 mt-12 gap-0 px-5 lg:mt-12 md:grid-cols-2">
                  
                  <div className="md:px-4 lg:px-10">
                    <div className="w-full max-w-md mx-auto"> 
                      <img className="rounded-lg" src="../../public/pro-1.png" alt="" />
                     <h1 className="text-2xl font-bold pt-5 pb-3 hover:text-[#FF014F]">Consulting and Advisory Firm</h1>
                     <a target="_blank"
                    href="https://sparkaccountingpartners.com/"
                    title=""
                    className="border border-[#FF014F] inline-flex items-center justify-center px-5 py-2 text-md font-semibold text-white transition-all duration-200  rounded-lg hover:bg-white hover:text-[#FF014F] hover:border-[white]"
                    role="button"
                  >                 
                    Visit Here
                  </a>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Allprojects;
