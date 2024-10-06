"use client";

import Link from "next/link";
import { useState } from "react";

export default function Upload() {
  const [query, setQuery] = useState("");
  // const [suggestions, setSuggestions] = useState<string[]>([]);
  const [topId, setTopId] = useState<string>(''); // State to store outfit recommendations
  const [bottomId, setBottomId] = useState<string>('');

  // Example data to be used for recommendations
  // const data = ["dark academia", "90s", "office", "break up", "movie night", "club", "school"];

  // Handle input change and filter recommendations
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  }


  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Send the user's query to the API
    const response = await fetch('/api/designer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: query }),
    });

    if (response.ok) {
      const data = await response.json();

      console.log(data);

      const parsedData = JSON.parse(data.ids);

      console.log(parsedData);

      const {topIdRaw, bottomIdRaw} = parsedData;

      setTopId(topIdRaw); // Update the state with the received outfits
      setBottomId(bottomIdRaw);

    } else {
      console.error('Error fetching outfit recommendations');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="absolute top-4 left-4">
        <Link href="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-gray-600">
            home
          </button>
        </Link>
      </div>
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800">Input Dress To Impress category</h1>
        <p className="mt-4 text-lg text-gray-600">
          Type in theme to get outfit recommendations to win your game below: 
        </p>
      </header>

      <section className="my-12">
        <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
          <div className="flex flex-col items-center">
            {/* Text input for searching */}
            <input
              type="text"
              placeholder="Start typing..."
              value={query}
              onChange={handleInputChange}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />


            {/* Show suggestions */}
            {/* {suggestions.length > 0 && (
              <ul className="mt-4 bg-white rounded-md shadow-lg w-full max-w-md">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )} */}
          </div>
        </form>
      </section>

      {/* Display the outfit recommendations */}
      {/* {outfits && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Outfit Recommendations:</h2>
          {['outfit1', 'outfit2'].map((outfitKey) => (
            <div key={outfitKey} className="my-4">
              <h3 className="text-xl">{outfits[outfitKey].top.description}</h3>
              <img src={outfits[outfitKey].top.image} alt={outfits[outfitKey].top.description} className="w-1/2" />
              <p>{outfits[outfitKey].bottom.description}</p>
              <img src={outfits[outfitKey].bottom.image} alt={outfits[outfitKey].bottom.description} className="w-1/2" />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
