import React from 'react';
import myImage from '../assets/man.422a052d.png'; // replace with your image path
import backgroundImage from '../assets/bannerbg.jpeg';


function HeroSection() {
  return (

    <div
      className="w-full  h-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

    <div className="flex flex-col md:flex-row items-center justify-between  p-8">
      
      {/* Left Side */}
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-9xl font-thin mb-4 text-gray-800">Live For</h1>
        <h1 className="text-9xl font-bold mb-4 text-white">Fashion</h1>
        <p className="text-lg text-white mb-6">
          Save Up To 50%
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center">
        <img src={myImage} alt="Shop Banner" className="w-78 h-89 " />
      </div>
    </div>
    </div>
  );
}

const Card = ({ image, text }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group">
    <img src={image} alt="product" className="w-full h-48 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
      <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
        Shop Now
      </button>
    </div>
  </div>
);



export {HeroSection} ;
