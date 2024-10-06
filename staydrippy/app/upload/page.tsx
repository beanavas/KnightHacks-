
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
        <form>
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
            {suggestions.length > 0 && (
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
            )}
          </div>
        </form>
      </section>
    </div>
  );
}