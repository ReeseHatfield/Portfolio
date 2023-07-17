// Art.tsx
import React from 'react';
import Gallery from 'react-photo-gallery';
//@ts-ignore
import { photos } from './photos.ts';
import './Art.css';

export default function Art() {
    return (
        <div className="art-container">
            <Gallery photos={photos} />
        </div>
    );
}
