// Art.tsx
import React from 'react';
import './Art.css';

const imageNames = [
    'IMG_0346.jpeg',
    'IMG_0347.jpeg',
    'IMG_0378.jpeg',
  // Add more image names...
];

export default function Art() {
    return (
        <div className="art-container">
            {imageNames.map(name => (
                <img src={`/images/${name}`} alt="" key={name} />
            ))}
        </div>
    );
}
