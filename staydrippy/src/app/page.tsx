import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to OutfitRecommender
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Let AI help you choose the perfect outfit for any occasion!
        </p>
      </header>

      <section className="upload-section my-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Upload Your Closet
        </h2>
        <p className="text-center text-gray-600 my-4">
          Upload images of your clothes to create your personal digital closet.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Upload Clothes
          </button>
        </div>
      </section>

      <section className="category-section my-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Pick an Occasion
        </h2>
        <p className="text-center text-gray-600 my-4">
          Select an occasion and let our AI recommend an outfit from your closet.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
              Formal
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
              Casual
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
              Business
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
              Vacation
            </button>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">
              Seasonal
            </button>
          </div>
        </div>
      </section>

      <section className="laundry-section my-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Manage Laundry
        </h2>
        <p className="text-center text-gray-600 my-4">
          Mark clothes as ‘clean’ after laundry to make them available for recommendations again.
        </p>
        <div className="flex justify-center">
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
            Mark All Clothes Clean
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
