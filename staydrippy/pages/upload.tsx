import React from 'react';
import { useRouter } from 'next/router'; // Use Next.js router

const UploadClothesPage: React.FC = () => {
  const router = useRouter(); // Use router to go back to home

  return (
    <div className="container mx-auto p-8">
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800">Upload Your Clothes</h1>
        <p className="mt-4 text-lg text-gray-600">
          Add images of your clothes to your digital closet.
        </p>
      </header>

      <section className="upload-section my-12">
        <form>
          <div className="flex flex-col items-center">
            <label className="text-gray-600 mb-2" htmlFor="file-input">
              Choose clothes to upload:
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              multiple
              className="block mb-4"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Upload
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600"
            onClick={() => router.push('/')} // Navigate back to the home page
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default UploadClothesPage;