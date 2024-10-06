"use client"; // Add this at the top
import React from 'react';
import { useRouter } from 'next/router'; // Use Next.js router for navigation

const HomePage: React.FC = () => {
  const router = useRouter(); // Use router for navigation

  const navigateToUpload = () => {
    router.push('/upload'); // Navigate to upload page
  };

  return (
    <div className="container mx-auto p-8">
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to staydrippy</h1>
        <p className="mt-4 text-lg text-gray-600">
          Let AI help you choose the perfect outfit for any occasion!
        </p>
      </header>

      <section className="upload-section my-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Upload Your Closet</h2>
        <p className="text-center text-gray-600 my-4">
          Upload images of your clothes to create your personal digital closet.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
            onClick={navigateToUpload} // Use Next.js navigation
          >
            Upload Clothes
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
