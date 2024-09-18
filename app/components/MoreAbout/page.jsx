import React from 'react';

const page = () => {
  return (
    <div className=" py-10 px-4 bg-amber-600 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 md:gap-0 flex-col md:flex-row w-full px-4 ">
          <div className=" md:w-1/2  w-full flex justify-center">
            <p className ="bg-white  px-7 py-3 md:w-72 text-center rounded-full text-amber-600 font-bold md:text-xl">Learn More About Level-Funded Coverage</p>
          </div>
          <div className="md:w-1/2 w-full">
            <p className="text-lg md:w-[85%] w-full">
              With level-funded plans, employers get fixed monthly payments, visibility into ongoing claims and a refund if there's a surplus. All of the plans above are level-funded plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;