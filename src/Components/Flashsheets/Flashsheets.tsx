import React, { useState } from 'react';
import Modal from '../Modal/Modal.tsx';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion'
import './Flashsheets.css';

// Import the images
import flash1 from '../../images/IMG_0380.jpeg';
import flash2 from '../../images/IMG_0381.jpeg';
import flash3 from '../../images/IMG_0382.jpeg';
import flash4 from '../../images/IMG_0383.jpeg';
import flash5 from '../../images/IMG_0384.jpeg';
import flash6 from '../../images/IMG_0385.jpeg';
// this should be done via SSR, 
// but since its being hosted with github pages
// SSR is not feasible


const images = [flash1, flash2, flash3, flash4,
    flash5, flash6
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
        <>
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
        </>
    );
}