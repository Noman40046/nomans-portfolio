const About = () => {
  return (
    <div>
      <div className="bg-[#060606]">
        <section className="lg:py-14">
          <div className="w-full flex items-center bg-[#060606]">
            <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-6  dark:text-white">
              <div className="flex flex-col gap-2 md:mb-2">
                <h1 className="text-5xl font-bold">ABOUT ME</h1>
                <span className="w-16 h-[4px] bg-[#FF014F] rounded"></span>
                <span className="w-8 h-[4px] bg-[#FF014F] rounded"></span>
              </div>

              <h4 className="capitalize text-3xl font-semibold mb-2">
                <span className="text-[#FF014F]">
                  <span className="text-white pr-2">
                    Web Developer
                  </span> ||
                  <span className="text-white ps-2 pr-2"> Web Designer </span>{" "}
                  || <span className="text-white ps-2">WordPress Developer</span>{" "}
                </span>
              </h4>
              <p className="text-lg mb-2">
                As a front-end web developer, I am responsible for creating the
                user-facing side of websites and web applications. I am
                proficient in HTML, CSS, Bootstrap, JavaScript, and JavaScript
                frameworks like jQuery and React.js. In addition, I have
                experience working with open-source CMS WordPress and have a
                strong understanding of responsive design and web accessibility.
                As a passionate developer, I always strive to stay up-to-date
                with the latest technologies and trends in web development to
                deliver modern, high-quality solutions.
              </p>

              <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between">
                <div className="w-full flex flex-col items-stretch gap-4">

                  {/* skill progress----- */}

                <div className="w-full flex flex-col gap-2 mb-4">


                  
                <div className="flex flex-col gap-2">


                    <div className="w-full flex justify-between font-semibold">
                      <span>HTML/CSS/Javascript</span>
                      <span>80 %</span>
                    </div>

                    <div className="w-full bg-gray-300 rounded-full">
                      <div className="w-[80%] h-2 bg-[#FF014F] rounded-full"></div>
                    </div>
                  </div>


                  <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between font-semibold">
                      <span>WordPress</span>
                      <span>70 %</span>
                    </div>

                    <div className="w-full bg-gray-300 rounded-full">
                      <div className="w-[70%] h-2 bg-[#FF014F] rounded-full"></div>
                    </div>
                  </div>


                  <div className="flex flex-col gap-2">
                    <div className="w-full flex justify-between font-semibold">
                      <span>React JS</span>
                      <span>45 %</span>
                    </div>

                    <div className="w-full bg-gray-300 rounded-full">
                      <div className="w-[45%] h-2 bg-[#FF014F] rounded-full"></div>
                    </div>
                  </div>

                </div>
                  {/* buttons------ */}
                  <div className="flex gap-4 justify-center sm:justify-start">
                   
                    <a target="_blank"
                    href="https://drive.google.com/file/d/1BQfRX1Gw8UOCadUJ2Yl2q1mYXiDX44qt/view?usp=sharing"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white transition-all duration-200 bg-[#FF014F] rounded-lg"
                    role="button"
                  >                 
                    Download CV
                  </a>
                  
                   <a target="_blank"
                    href="https://www.linkedin.com/in/noman-dipto-a8b7b3263/"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white transition-all duration-200 bg-[#FF014F] rounded-lg"
                    role="button"
                  >                 
                    Hire Me
                  </a>
                    
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

export default About;
