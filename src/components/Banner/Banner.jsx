import React from "react";
import BannerImg from "../../assets/website/mid.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="AI Studio Image"
                  // className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                  // className="max-w-[450px] w-full h-full mx-auto mt-10 rounded-full overflow-hidden drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                  className="max-w-[400px] w-full h-[400px] mx-auto mt-10 rounded-full overflow-hidden drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"

                  // className="max-w-[400px] w-full h-full mx-auto mt-10 rounded-full drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Unleash the Power of AI with XDS AI Studio
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Welcome to a realm where possibilities are boundless, and
                  innovation knows no limits. XDS AI Studio serves as your
                  gateway to cutting-edge technologies and services, reshaping
                  the realm of what's achievable.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      {/* <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " /> */}
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-width="2"
                          d="M16,16 L23,23 L16,16 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z M5,10 L15,10"
                        />
                      </svg>
                      <span>Intelligent Code Analysis</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke="#444"
                          stroke-width="2"
                          d="M12,1.5 L3,6.5 L3,17.5 L12,22.5 L21,17.5 L21,6.5 L12,1.5 Z M12,22.5 L12,11.5 M21,6.5 L12,11.5 M12,11.5 L3,6.5 M21,17.5 L21,12 L16.5,14.5 L16.5,20 L21,17.5 Z M3,17.5 L3,12 L7.5,14.5 L7.5,20 L3,17.5 Z M12,1.5 L7.5,4 L12,6.5 L16.5,4 L12,1.5 Z"
                        />
                      </svg>
                      {/* <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " /> */}
                      <span>Automated Test Generation</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          stroke-width="2"
                          d="M20,15 C19,16 21.25,18.75 20,20 C18.75,21.25 16,19 15,20 C14,21 13.5,23 12,23 C10.5,23 10,21 9,20 C8,19 5.25,21.25 4,20 C2.75,18.75 5,16 4,15 C3,14 1,13.5 1,12 C1,10.5 3,10 4,9 C5,8 2.75,5.25 4,4 C5.25,2.75 8,5 9,4 C10,3 10.5,1 12,1 C13.5,1 14,3 15,4 C16,5 18.75,2.75 20,4 C21.25,5.25 19,8 20,9 C21,10 23,10.5 23,12 C23,13.5 21,14 20,15 Z M7,12 L10,15 L17,8"
                        />
                      </svg>
                      {/* <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" /> */}
                      <span>Cutting-edge AI Solutions</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold ">
                      The Future Unveiled
                    </h1>
                    <p className="text-sm text-gray-500">
                      Embrace a future where AI-powered creativity converges
                      with technological brilliance. XDS AI Studio is more than
                      just a tool; it's an immersive experience that empowers
                      you to sculpt the future of innovation.
                    </p>
                    all apps
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
