import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full my-10">
      {/* Background Image */}
      <img
        src="/images/t-shirt.7a6c302e.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      {/* Content Section */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-20">
        <div className="text-white max-w-xl space-y-6 text-right">
          {/* Countdown Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-end">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, idx) => (
              <div key={idx} className="bg-white bg-opacity-90 text-black text-center py-3 px-4 shadow-lg rounded">
                <p className="text-2xl font-bold">00</p>
                <p className="text-sm">{unit}</p>
              </div>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            20% OFF FOR ALL T–SHIRT COLLECTION
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            quisquam, odit assumenda sit modi commodi esse necessitatibus
            temporibus aperiam veritatis eveniet!
          </p>

          {/* Button */}
          <button className="bg-black text-white px-6 py-3 uppercase font-semibold rounded hover:bg-red-600">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
