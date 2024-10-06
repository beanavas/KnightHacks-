
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Upload() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Example data to be used for recommendations
  const data = ["dark academia", "90s", "office", "break up", "movie night", "club", "school"];

  // Handle input change and filter recommendations
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Filter the data to match the query
    if (value) {
      const filteredSuggestions = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="container mx-auto p-8">
      {/* Home button */}
      <div className="absolute top-4 left-4">
        <Link href="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
            home
          </button>
        </Link>
      </div>

      {/* Header */}
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold text-pink-800">Input Dress To Impress category</h1>
        <p className="mt-4 text-lg text-pink-600">
          Type in theme to get outfit recommendations to win your game below:
        </p>
      </header>

      {/* Main content - Flex container to show form and image side by side */}
      <div className="flex flex-row justify-between items-center">
        {/* Form section */}
        <div className="flex justify-center mt-4">
                <Link href="outfit">
                    <button
                        className="bg-pink-500 text-white px-6 py-5 rounded-full hover:bg-pink-600" >

                        Your Closet
                    </button>
                </Link>
            </div>
        <section className="my-12 w-1/2">
          <form>
            <div className="flex flex-col items-center text-pink-800">
              {/* Text input for searching */}
              <input
                type="text"
                placeholder="Category..."
                value={query}
                onChange={handleInputChange}
                className="w-full max-w-md px-6 py-4 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />

              {/* Show suggestions */}
              {suggestions.length > 0 && (
                <ul className="mt-4 bg-white rounded-md shadow-lg w-full max-w-md">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="w-full max-w-md px-6 py-4 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 mx-autor"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </section>

        {/* Image section */}
        <div className="w-1/4 flex flex-col items-center">
  <img
    src="assets/head.png"
    alt="3D model 1"
    className="w-[150px] h-auto object-contain border-4 border-pink-700 rounded-lg mb-4"
  />
  <img
    src="assets/greensweater.png"
    alt="3D model 2"
    className="w-[150px] h-auto object-contain border-4 border-pink-700 rounded-lg mb-4"
  />
  <img
    src="assets/bskirt.png"
    alt="3D model 3"
    className="w-[150px] h-auto object-contain border-4 border-pink-700 rounded-lg"
  />
</div>
      </div>
    </div>
  );
}