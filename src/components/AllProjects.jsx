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
      
                  <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
                    <div className="md:px-4 lg:px-10">
                      <img
                        className="-rotate-1"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
                        alt=""
                      />
                      <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
                        Join as a team
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint.
                      </p>
                    </div>

                    <div className="md:px-4 lg:px-10">
                      <img
                        className="rotate-1"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
                        alt=""
                      />
                      <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
                        Work from anywhere
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint.
                      </p>
                    </div>

                    <div className="md:px-4 lg:px-10">
                      <img
                        className="-rotate-1"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
                        alt=""
                      />
                      <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
                        Get success
                      </h3>
                      <p className="mt-4 text-base text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint.
                      </p>
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
