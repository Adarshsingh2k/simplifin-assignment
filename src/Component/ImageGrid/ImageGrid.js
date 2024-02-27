import React from "react";
import "./ImageGrid.css"; // Make sure to create this CSS file with the provided styles

const ImageGrid = ({ images, search }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div>
          <img
            key={index}
            src={image.url}
            alt={image.title}
            className="image-grid-item"
          />

          {search && <h6>{image.title}</h6>}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
