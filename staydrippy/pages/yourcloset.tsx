// pages/yourcloset.tsx
import React from 'react';
import { useImageContext } from '../context/ImageContext';

const YourClosetPage: React.FC = () => {
    const { images } = useImageContext();

    return (
        <div>
            <h1>Your Closet</h1>
            {images.length > 0 ? (
                <ul>
                    {images.map((img, index) => (
                        <li key={index}>
                            <img src={img} alt={`Uploaded Image ${index}`} style={{ width: '200px', height: 'auto' }} />
                        </li>
                    ))}
                </ul>
            ) : 
                <p>No images uploaded yet.</p>
            )}
        </div>
    );
};

export default YourClosetPage;
