import React, { useState } from 'react';
import Modal from '../Modal/Modal.tsx';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import './Art.css';

// Import the images
import gothGirl from '../../images/IMG_0533.png';
import redHair from '../../images/IMG_0379.jpeg'
import fairy from '../../images/IMG_0534.png';
import bwSun from '../../images/IMG_0346.jpeg';
import pinkLady from '../../images/IMG_0378.jpeg';
import longHairPinkLady from '../../images/IMG_0386.jpeg';
import moonAndStar from '../../images/IMG_0387.jpeg';
import greenShirtLady from '../../images/IMG_0537.png';
import overallGirl from '../../images/IMG_8160.png';
import mushroomPainting from '../../images/IMG_9968.png';
import babyGoat from '../../images/IMG_0539.png';
import pinkDiamond from '../../images/IMG_0538.png';
import couple from '../../images/IMG_0535.png';
import sweetForest from '../../images/IMG_0531.png';
import frogInCup from '../../images/IMG_0529.png';
import noname from '../../images/IMG_0528.png';

const images = [
    gothGirl, redHair, fairy, bwSun,
    pinkLady, longHairPinkLady, moonAndStar,
    greenShirtLady, overallGirl, mushroomPainting,
    babyGoat, pinkDiamond, couple, sweetForest,
    frogInCup, noname
]; 

export default function Art() {
    const [selectedImage, setSelectedImage] = useState(null);

    const breakpointColumnsObj = {
        default: 3, // this means if the width of the viewport is larger than 1100px, it will display 3 columns
        1100: 3,
        700: 2, // if the width of the viewport is between 700px and 1100px, it will display 2 columns
        500: 2  // if the width of the viewport is less than 500px, it will display 1 column
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
