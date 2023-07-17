// Art.tsx
import React, { useState } from 'react';
import Modal from '../Modal/Modal.tsx';
import Masonry from 'react-masonry-css';
import './Art.css';

// Import the images
import img1 from '../../images/IMG_0346.jpeg';
import img2 from '../../images/IMG_0347.jpeg';
import img3 from '../../images/IMG_0378.jpeg';

const images = [img1, img2, img3]; // Add the imported images to this array

export default function Art() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Responsive grid settings
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="art-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((src, index) => (
          <img
            src={src}
            alt=""
            key={index}
            onClick={() => setSelectedImage(src)}
            className="masonry-img"
          />
        ))}
      </Masonry>
      {selectedImage && (
        <Modal isOpen={true} onClose={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="" />
        </Modal>
      )}
    </div>
  );
}
