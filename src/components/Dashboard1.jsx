import React from "react";
import { Link } from "react-router-dom";
import { toolsList } from '../utils/toolsList';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {toolsList.map((tool) => (
          <div
            key={tool.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <Link
              to={`/app/${tool.id}`}
              className="block text-xl font-bold text-blue-500 hover:text-blue-700"
            >
              {tool.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
