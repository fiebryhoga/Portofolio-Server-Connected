import React, { useState, useEffect } from "react";
import Link from "next/link";

const References = () => {
  const [references, setReferences] = useState([]);
  const [referenceContents, setReferenceContents] = useState([]);

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/references");
        if (!response.ok) {
          throw new Error("Failed to fetch references");
        }
        const data = await response.json();
        setReferences(data);
      } catch (error) {
        console.error("Error fetching references:", error);
      }
    };

    const fetchReferenceContents = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/referenceContents"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reference contents");
        }
        const data = await response.json();
        setReferenceContents(data);
      } catch (error) {
        console.error("Error fetching reference contents:", error);
      }
    };

    fetchReferences();
    fetchReferenceContents();
  }, []);

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:gap-6 justify-between gap-12 flex-col">
      {references.map((reference) => (
        <div className="flex flex-col gap-4" key={reference.id}>
          <h2 className="py-2 text-[#329f9a] text-base sm:text-lg font-semibold">
            {reference.title}
          </h2>
          <ul className="flex flex-col gap-2 text-white text-[12px] sm:text-[14px] text-opacity-80">
            {referenceContents
              .filter((item) => item.reference_id === reference.id)
              .map((item) => (
                <li className="hover:text-[#329f9a]" key={item.id}>
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
