// context/ImageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ImageContextType {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<string[]>([]);
  
  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};
