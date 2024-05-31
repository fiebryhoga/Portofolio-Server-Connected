import React from "react";

const CollabCard = () => {
  return (
    <div className=" flex flex-col w-full h-full rounded-lg border border-[#e9e9e96e] border-opacity-40 py-3 sm:py-8 bg-[#060911]">
      <h1 className="pb-4 text-lg text-white font-semibold tracking-white text-center">
        Lets Collab, Shall We?
      </h1>

      <form
        className="flex flex-col gap-6 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 px-6"
        action=""
      >
        <div className="flex flex-col justify-start w-full gap-1">
          <label
            className="text-white text-xs font-medium tracking-wide opacity-90 "
            htmlFor=""
          >
            Name
          </label>
          <input
            className="bg-transparent border border-white rounded-md min-h-8 py-3 text-xs placeholder:text-white placeholder:text-opacity-60 placeholder:text-xs placeholder:font-medium placeholder:tracking-wide px-6 text-white tracking-wider outline-none"
            type="text"
            placeholder="Input your name"
          />
        </div>
        <div className="flex flex-col justify-start w-full gap-1">
          <label
            className="text-white text-xs font-medium tracking-wide opacity-90 "
            htmlFor=""
          >
            Email
          </label>
          <input
            className="bg-transparent border border-white rounded-md min-h-8 py-3 text-xs placeholder:text-white placeholder:text-opacity-60 placeholder:text-xs placeholder:font-medium placeholder:tracking-wide px-6 text-white tracking-wider outline-none"
            type="text"
            placeholder="Input your email"
          />
        </div>
        <div className="flex flex-col justify-start w-full lg:col-span-2 ">
          <label
            className="text-white text-xs font-medium tracking-wide opacity-90 "
            htmlFor=""
          >
            Your name
          </label>
          <textarea
            className="flex items-start bg-transparent border border-white rounded-md min-h-20 py-3 text-xs placeholder:text-white placeholder:text-opacity-60 placeholder:text-xs placeholder:font-medium placeholder:tracking-wide px-6 text-white tracking-wider outline-none"
            type="textarea"
            placeholder="Input message"
          />
        </div>
        <button className="text-[#329f9a] lg:col-span-2 border w-full border-[#329f9a] rounded-lg py-2 px-4 mt-4 self-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default CollabCard;
