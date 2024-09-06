import { useState } from "react";

function Reviews() {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      text: `“Cleaning and sanitizing are now more important than ever and  these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”`,
      author: "- RACHAEL H."
    },
    {
      text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`,
      author: "- JOHN D."
    },
    {
      text: `“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”`,
      author: "- JANE S."
    },
    {
      text: `“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”`,
      author: "- MICHAEL B."
    }
  ];

  return (
    <div className="relative z-1 -mt-4 mb-16 flex justify-center items-center bg-gray-100 py-12">
      <div className="w-full max-w-5xl mx-auto text-center px-4">
        <h2 className="text-[14px] leading-[62px] font-normal tracking-[2.1px] text-[#002D33] font-brandon uppercase opacity-100">
          What people are saying
        </h2>
        <p className="text-center text-[20px] sm:text-[25px] leading-[32px] sm:leading-[42px] px-1 sm:px-36 font-bold tracking-[0px] text-[#002D33] font-chronicle mb-8">
          {reviews[activeReview].text}
        </p>
        <p className="text-center text-[13px] leading-[62px] font-medium tracking-[1.3px] text-[#002D33] uppercase opacity-100">
          {reviews[activeReview].author}
        </p>

        <div className="flex justify-center items-center space-x-2 mt-8">
          {reviews.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveReview(index)}
              className={`inline-block w-3 h-3 rounded-full cursor-pointer ${
                activeReview === index ? "bg-[#004A4C]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
