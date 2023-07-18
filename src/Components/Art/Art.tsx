import React, { useState } from 'react';
import Modal from '../Modal/Modal.tsx';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion'
import './Art.css';

// Import the images
import img1 from '../../images/IMG_0346.jpeg';
import img2 from '../../images/IMG_0347.jpeg';
import img3 from '../../images/IMG_0378.jpeg';
import img4 from '../../images/IMG_0379.jpeg';
import img5 from '../../images/IMG_0380.jpeg';
import img6 from '../../images/IMG_0381.jpeg';
import img7 from '../../images/IMG_0382.jpeg';
import img8 from '../../images/IMG_0383.jpeg';
import img9 from '../../images/IMG_0384.jpeg';
import img10 from '../../images/IMG_0385.jpeg';
import img11 from '../../images/IMG_0386.jpeg';


const images = [img1, img2, img3, img4, img5, 
    img5, img6, img7, img7, img8,
    img9, img10, img11
]; // Add the imported images to this array

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
                <motion.img
                    src={src}
                    alt=""
                    key={index}
                    onClick={() => setSelectedImage(src)}
                    className="masonry-img"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.30 }}
                    />
                ))}
            </Masonry>
            {selectedImage && (
            <Modal isOpen={true} onClose={() => setSelectedImage(null)}>
                <motion.img src={selectedImage} alt="" 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                />
            </Modal>
            )}
        </div>
    );
}