export default function Outfit() {
    // Separate arrays for tops and bottoms
    const tops = [
      '/assets/greensweater.png', 
      '/assets/pinktop.png',
      '/assets/yellotop.png'
    ];
  
    const bottoms = [
      '/assets/orangeskirt.png', 
      '/assets/jeansr.png',
      '/assets/girl.png'
    ];
  
    return (
      <div className="container mx-auto p-8">
        <header className="text-center my-12">
          <h1 className="text-4xl font-bold text-pink-800">Your Closet</h1>
        </header>
  
        {/* Section for Tops */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Tops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
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