// AllApps.js
import React from "react";
import { Link } from "react-router-dom";
import Img2 from "../../assets/website/code_analysis.jpg";
import { toolsList } from "../../utils/toolsList";
const AllApps = () => {

  return (
    <>
      <span id="all-apps"></span>
      <div className="py-10 bg-gradient-to-r from-blue-300 to-purple-400">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-white">All Apps</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {toolsList.map((tool) => (
              <Link to={`/app/${tool.id}`} key={tool.id}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={tool.aosDelay}
                  className="rounded-lg overflow-hidden bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-300 hover:to-purple-400 hover:text-white relative shadow-xl duration-high group max-w-[300px] mb-8"
                >
                  <div className="h-[200px]">
                    <img
                      src={tool.img}
                      alt=""
                      className="w-full h-full object-cover transform group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold text-white mb-2">
                      {tool.name}
                    </h1>
                    <p className="text-gray-300 text-sm line-clamp-3">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllApps;
