import React from "react";
import HeroPng from "../../assets/website/code_analysis.jpg";

const Hero = () => {
  return (
    <>
      {/* <div className="min-h-[550px] sm:min-h-[600px] bg-gradient-to-r from-blue-700 to-purple-800 flex justify-center items-center text-white"> */}
      <div className="min-h-[550px] sm:min-h-[600px] bg-gradient-to-r from-blue-700 to-purple-800 flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                Unlock the Power of{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-purple-500"
                >
                  XDS AI Studio
                </span>{" "}
                Shaping Tomorrow's Possibilities
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-blue-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Chat with XDS AI Studio
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              {/* <img
                data-aos-once="true"
                src="https://appsierra-site.s3.ap-south-1.amazonaws.com/voice_blogs_8c1ea645cf.jpg"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
                alt="AI Revolution"
              /> */}
              <div class="relative w-[200px] sm:w-[300px] sm:h-[300px] sm:scale-125 mx-auto spin rounded-full overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center ring-4 ring-white transform rotate-180">
                  <img
                    data-aos-once="true"
                    src="https://appsierra-site.s3.ap-south-1.amazonaws.com/voice_blogs_8c1ea645cf.jpg"
                    class="w-full h-full object-cover rounded-full"
                    alt="AI Revolution"
                  />
                </div>
              </div>

              {/* <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white">Hey Coder</h1>
              </div> */}
              {/* <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl absolute bottom-10 right-10"
              >
                <h1 className="text-white">Revolutionizing Innovation</h1>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
