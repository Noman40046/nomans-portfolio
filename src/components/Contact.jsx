import { FaPhone } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import toast from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a98ab884-d8c0-4dd5-a693-943169ec18ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success('Messege Sent Successfully!')

      console.log("Success", res);
    }
  };
  return (
    <div>
      <div className="bg-black">
        <section className="lg:py-8">
          <div className="w-full flex items-center bg-black">
            <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-6  dark:text-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold">CONTACT ME</h1>
                <span className="w-16 h-[4px] bg-[#FF014F] rounded"></span>
                <span className="w-8 h-[4px] bg-[#FF014F] rounded"></span>
              </div>

              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                  <div className="max-w-5xl mx-auto sm:mt-10">
                    <div className="grid grid-cols-1 gap-20 text-center  md:grid-cols-3">
                      <div className="flex flex-col items-center justify-center overflow-hidden border bg-[#0c0c0c] border-[#FF014F] rounded-lg">
                        <FaPhone className="flex-shrink-0 w-8 h-8 mx-auto text-white" />
                        <p className="mt-6 text-md font-medium text-white">
                          +880 1720540046
                        </p>
                        <p className="mt-1 text-md font-medium text-white">
                          +880 1767726722
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center overflow-hidden bg-[#0c0c0c] border border-[#FF014F] rounded-lg">
                        <div className="p-6">
                          <HiOutlineMailOpen className="flex-shrink-0 w-8 h-8 mx-auto text-white" />
                          <p className="mt-6 text-md font-medium text-white">
                            noman40046@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center overflow-hidden bg-[#0c0c0c] border border-[#FF014F] rounded-lg">
                        <CiLocationOn className="flex-shrink-0 w-8 h-8 mx-auto text-white" />
                        <p className="mt-6 text-md font-medium text-white">
                          Nurpur Gravayard, Shapla Chattar, Rangpur
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 overflow-hidden border border-[#FF014F] bg-[#0c0c0c] rounded-lg">
                      <div className="px-6 py-6">
                        <form onSubmit={onSubmit} method="POST" className="py-5">
                        <input type="hidden" name="subject" value="New Messege"/>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                            <div>
                              <label
                                htmlFor="name"
                                className="text-base font-medium text-white"
                              >
                                Your name
                              </label>
                              <div className="mt-2.5 relative">
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  placeholder="Enter your name"
                                  className="block w-full px-4 py-4 border border-[#FF014F] rounded-lg bg-white text-black"
                                  required
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="text-base font-medium text-white"
                              >
                                Email address
                              </label>
                              <div className="mt-2.5 relative">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="Enter your email"
                                  className="block w-full px-4 py-4 border border-[#FF014F] rounded-lg bg-white text-black"
                                  required
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="phone"
                                className="text-base font-medium text-white"
                              >
                                Phone number
                              </label>
                              <div className="mt-2.5 relative">
                                <input
                                  type="tel"
                                  name="phone"
                                  id="phone"
                                  placeholder="Enter your phone number"
                                  className="block w-full px-4 py-4 border border-[#FF014F] rounded-lg bg-white text-black"
                                  required
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="company"
                                className="text-base font-medium text-white"
                              >
                                {" "}
                                Company name{" "}
                              </label>
                              <div className="mt-2.5 relative">
                                <input
                                  type="text"
                                  name="company"
                                  id="company"
                                  placeholder="Enter your company name"
                                  className="block w-full px-4 py-4 border border-[#FF014F] rounded-lg bg-white text-black"
                                  required
                                />
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="messege"
                                className="text-base font-medium text-white"
                              >
                                Message
                              </label>
                              <div className="mt-2.5 relative">
                                <textarea
                                  name="messege"
                                  id="messege"
                                  placeholder="Send me a message"
                                  className="block w-full px-4 py-4 border border-[#FF014F]  rounded-lg bg-white text-black"
                                  required
                                  rows="4"
                                ></textarea>
                              </div>
                            </div>

                            <div className="sm:col-span-2">                         
                              <button
                                type="submit"
                                className=" w-full border border-[#FF014F] inline-flex items-center justify-center px-5 py-2 text-md font-semibold text-white transition-all duration-500  rounded-lg bg-[#FF014F] hover:bg-white hover:text-[#FF014F] hover:border-[white]"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
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

export default Contact;
