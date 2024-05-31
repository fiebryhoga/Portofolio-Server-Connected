import React from "react";
import Link from "next/link";
import { reference } from "@/app/data/reference";
const References = () => {
  return (
    <div className="w-full grid grid-cols-2 justify-between gap-12 flex-col">
      {reference.map((reference) => (
        <div className="flex flex-col gap-4" key={reference.id}>
          <h2 className="py-2 text-[#329f9a] text-base font-semibold">
            {reference.title}
          </h2>
          <ul className="flex flex-col gap-2 text-white text-[12px] text-opacity-80">
            {reference.content.map((item) => (
              <li className=" hover:text-[#329f9a]" key={item.id}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default References;
