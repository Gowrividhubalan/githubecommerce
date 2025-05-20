// HeroBanner.js
import React from 'react';

const HeroBanner = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 flex flex-col md:flex-row items-center justify-between">
      {/* Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/images/tshirt-model.png" // use your actual image path
          alt="T-Shirt Offer"
          className="w-72 mx-auto"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Countdown Boxes */}
        <div className="flex gap-4 justify-center md:justify-start mb-6">
          {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
            <div key={i} className="text-center bg-white shadow p-3 w-20">
              <p className="text-xl font-bold">00</p>
              <p className="text-sm">{unit}</p>
            </div>
          ))}
        </div>

        {/* Main Text */}
        <h2 className="text-3xl font-bold mb-3">
          20% OFF FOR ALL T-SHIRT COLLECTION
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam odit veritatis!
        </p>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;