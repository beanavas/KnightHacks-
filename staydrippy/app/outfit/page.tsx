import Link from "next/link";

export default function Outfit() {
    // Separate arrays for tops and bottoms
    const tops = [
      '/assets/greensweater.png', 
      '/assets/redlong.png',
      '/assets/pinktop.png',
      '/assets/cutebra.png',
      '/assets/pinklong.png',
      '/assets/blacklong.png',
      '/assets/offshoulder.png',
      '/assets/oneshoulder.png',
      '/assets/white.png',
      '/assets/yellotop.png'
    ];
  
    const bottoms = [
      '/assets/oranngeskirtt.png', 
      '/assets/jeansr.png',
      '/assets/blackpants.png',
      '/assets/greyskirtt.png',
      '/assets/cuteskirt.png',
      '/assets/whiteskirt.png',
      '/assets/jeans2.png',
      '/assets/lshorts.png',
      '/assets/bskirt.png'
    ];
  
    return (
      <div className="container mx-auto p-8">
        <div className="absolute top-4 left-4">
        <Link href="/upload">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
            back
          </button>
        </Link>
      </div>
        <header className="text-center my-12">
          <h1 className="text-4xl font-bold text-pink-800">Your Closet</h1>
        </header>
  
        {/* Section for Tops */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Tops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {tops.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Top ${index + 1}`}
                  className="w-24 h-24 object-cover border-4 border-pink-500 rounded-lg shadow-lg shadow-pink-300"
                />
              </div>
            ))}
          </div>
        </section>
  
        {/* Section for Bottoms */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Bottoms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {bottoms.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Bottom ${index + 1}`}
                  className="w-24 h-50 object-cover border-4 border-pink-500 rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  
}  