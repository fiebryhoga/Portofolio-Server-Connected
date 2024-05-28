/* eslint-disable @next/next/no-img-element */
// components/ImageContainer.js
import React from "react";

const ImageContainer = ({ src, alt }) => {
  return (
    <div className="rounded-md flex justify-center">
      <img
        className="object-cover rounded-md max-h-64 sm:max-h-80 w-full"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ImageContainer;
