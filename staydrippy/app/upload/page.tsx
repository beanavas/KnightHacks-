"use client";

import { wardrobe } from "@/data/wardrobeData";
import Link from "next/link";
import { useState } from "react";

export default function Upload() {
  const [query, setQuery] = useState("");
  // const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showFace, setShowFace] = useState<boolean>(false); // State to store outfit recommendations
  const [topImage, setTopImage] = useState<string>('assets/top.png');
  const [bottomImage, setBottomImage] = useState<string>('assets/legs.png');

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

    function getImageById(id: number, isTop: boolean): string {

      console.log("id in getImageById",id);
      // Find the item with the matching id
      const item = wardrobe.find((item) => item.id === +id);

      console.log("item", item);

      
      // If item is found, return the image string, otherwise return undefined
      const image =  'assets/' + (item ?  item.image :  isTop ? 'top.png' : 'legs.png');

      console.log(image);
      return image;
  }

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

      const {top_id, bottom_id} = parsedData;

      console.log("topIdRaw", top_id);

      const topImage = getImageById(top_id, true);
      const bottomImage = getImageById(bottom_id, false);

      


      setTopImage(topImage); // Update the state with the received outfits
      setBottomImage(bottomImage);
      setShowFace(true);

    } else {
      console.error('Error fetching outfit recommendations');
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
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center text-pink-800">
              {/* Text input for searching */}
              <input
                type="text"
                placeholder="Category..."
                value={query}
                onChange={handleInputChange}
                className="w-full max-w-md px-6 py-4 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />

              
            </div>
          </form>
        </section>

        {/* Image section */}
        <div className="w-1/4 flex flex-col items-center">
  <img
    src={showFace ? "assets/face.png" : "assets/head.png"}
    alt="3D model 1"
    className="w-[150px] h-auto object-contain border-4 border-pink-700 rounded-lg mb-4"
  />
  <img
    src={topImage}
    alt="3D model 2"
    className="w-[150px] h-auto object-contain border-4 border-pink-700 rounded-lg mb-4"
  />
  <img
    src={bottomImage}
    alt="3D model 3"
    className="w-[150px] h-auto object-contain border-4 border-pink-700 rounded-lg"
  />
</div>
      </div>
    </div>
  );
}
