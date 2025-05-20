import React from "react";
import { useState } from "react";
// import Card from "./Card";


// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // from react-icons

// const [liked, setLiked] = useState(false);

// <div className="absolute top-2 right-2 text-xl cursor-pointer" onClick={() => setLiked(!liked)}>
//   {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart className="text-gray-400" />}
// </div>

const Card = ({ image, title, price }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-xl shadow-md overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top-left badge */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        New
      </div>

      {/* Top-right wishlist radio */}
      <div className="absolute top-2 right-2">
        <input type="radio" name="wishlist" className="accent-" />
      </div>

      {/* Image */}
      <img src={image} alt={title} className="w-72 h-64 border border-red-500 " />

      {/* Hover Add to Cart */}
      {hovered && (
        <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
          Add to Cart
        </button>
      )}

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">₹{price}</p>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const items = [
    { image: "/images/item1.png", title: "Item 1", price: 999 },
    { image: "/images/item2.png", title: "Item 2", price: 899 },
    { image: "/images/item3.png", title: "Item 3", price: 1099 },
    { image: "/images/item4.png", title: "Item 4", price: 1299 },
    { image: "/images/item5.png", title: "Item 5", price: 799 },
    { image: "/images/item6.png", title: "Item 6", price: 1499 },
    { image: "/images/item7.png", title: "Item 7", price: 699 },
    { image: "/images/item8.png", title: "Item 8", price: 999 },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* === Header Section === */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Top Deals Just for You</h1>
        <p className="text-gray-500 text-lg mb-4">Grab the best offers before they're gone!</p>
        <div className="flex flex-wrap justify-center gap-6 text-blue-600 font-medium">
          <a href="#" className="hover:underline">Men</a>
          <a href="#" className="hover:underline">Women</a>
          <a href="#" className="hover:underline">Kids</a>
          <a href="#" className="hover:underline">Offers</a>
          <a href="#" className="hover:underline">New Arrivals</a>
        </div>
      </div>

      {/* === 4 Column Card Grid === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
