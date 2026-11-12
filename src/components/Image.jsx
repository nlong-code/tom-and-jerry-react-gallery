
import React from "react";

// Reusable Image component.
// source = image file path or web address.
// width = displayed image width.
// alt = image description for accessibility.

function Image({ source, width, alt }) {
  return (
    <img
      src={source}
      style={{ width: width }}
      alt={alt}
      className="cartoon-image"
    />
  );
}

export default Image;
