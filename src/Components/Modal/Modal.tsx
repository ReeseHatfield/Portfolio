// Modal.tsx
import React from 'react';
import './Modal.css';

export default function Modal({ isOpen, children, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}

                <div>
                    <button 
                    onClick={onClose}
                    className="close-button"
                >
                    X</button>
                </div>
                
            </div>
        </div>
    );
}
