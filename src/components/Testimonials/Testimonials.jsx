import React from "react";
import Slider from "react-slick";

// const backgroundStyle = {
//   // backgroundImage: `url(${TestimonialBg})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

const TestimonialData = [
  {
    id: 1,
    name: "Dinesh Venugopal",
    text: "XDS AI Studio has revolutionized the way we approach AI development. The tools are powerful and user-friendly, making it a game-changer for our team.",
    img: "https://picsum.photos/201/201",
  },
  {
    id: 2,
    name: "Prasad Vispute",
    text: "The code analysis feature of XDS AI Studio has significantly improved our development process. It provides insightful suggestions and enhances code quality.",
    img: "https://picsum.photos/202/202",
  },
  {
    id: 3,
    name: "Shashank Deshmane",
    text: "XDS AI Studio's automated test generation has saved us valuable time in our testing phase. It's a reliable and efficient solution for our software projects.",
    img: "https://picsum.photos/204/204",
  },
  {
    id: 5,
    name: "Rasika Shrirao",
    text: "We've experienced a new level of efficiency with XDS AI Studio's bug triage capabilities. It has streamlined our bug identification and resolution process.",
    img: "https://picsum.photos/203/203",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            // data-aos="fade-up"
            className="text-center text-4xl font-semibold text-black font-cursive"
          >
           Employees' Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white/90 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-700">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
