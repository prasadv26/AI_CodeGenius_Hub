import { Link } from "react-router-dom";
import { toolsList } from '../../utils/toolsList';

const Services = () => {
  const firstThreeTools = toolsList.slice(0, 3);

  return (
    <>
      <span id="services"></span>
      <div className="py-10 bg-gradient-to-r from-blue-700 to-purple-800">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-white">
              Power-Packed Tools for You
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {firstThreeTools.map((tool) => (
              <Link to={`/app/${tool.id}`} key={tool.id}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={tool.aosDelay}
                  className="rounded-2xl bg-gradient-to-b from-blue-500 to-purple-600 hover:from-blue-300 hover:to-purple-400 hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                >
                  <div className="h-[122px]">
                    <img
                      src={tool.img}
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-full"></div>
                    <h1 className="text-xl font-bold">{tool.name}</h1>
                    <p className="text-gray-300 group-hover:text-white duration-high text-sm line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Centered "All Apps" button */}
          <div className="text-center mt-8">
            <Link to="/all-apps">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300">
                All Apps
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
