import React from 'react';

const ResultsHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <span className="text-gray-600 font-medium text-[#737373] ml-[100px] ${montserrat.className} text-[14px]">Showing all 12 results</span>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <span className="text-gray-600 font-medium mr-[10px] ">Views:</span>
          <div className="inline-flex items-center">
            {/* List View Button */}
            <button className="bg-gray-200 hover:bg-gray-300   mb-[30px] ml-2">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Grid View Button */}
            <button className="bg-gray-200 hover:bg-gray-300 mr-[300px]  mb-[30px]  ml-2">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.5a1 1 0 01-.2.8l-13.5 13.5a1 1 0 010 1.4l-2.6 2.6a1 1 0 01-1.4 0l-1.4-1.4a1 1 0 010-1.4l2.6-2.6a1 1 0 011.4 0l13.5 13.5a1 1 0 01.8-.2H20a1 1 0 011-1V4z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <span className="text-gray-600 font-medium mt-[-90px] mb-[50px] pl-[40px]" >Sort by:</span>
          <select className="ml-2 bg-gray-200 text-gray-600 p-2 rounded-md focus:outline-none">
            <option value="latest ml-[40px] pl-[40px]">Latest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  
  );
};

export default ResultsHeader;
