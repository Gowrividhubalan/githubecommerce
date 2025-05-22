import React from "react";
import { Heart, Eye, Scale, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Black T-Shirt For Woman",
    price: "$34.00",
    image: "/images/item1.png",
    label: "Hot",
  },
  {
    id: 2,
    name: "Blue Dress For Woman",
    price: "$38.00",
    image: "/images/item2.png",
    label: "New",
  },
  {
    id: 3,
    name: "Black T-Shirt For Woman",
    price: "$31.00",
    image: "/images/item3.png",
  },
  {
    id: 4,
    name: "Woman Full Sliv Dresss",
    price: "$38.00",
    image: "/images/item4.png",
  },
];

const BannerSection = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Popular Women's Collection
        </h2>
        <p className="text-gray-500 mt-2">
          Check out our latest trending fashion styles for women.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group bg-white border rounded-md overflow-hidden shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Top-left Label */}
            {product.label && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                {product.label}
              </span>
            )}

            {/* Top Hover - Add to Cart */}
            <button className="absolute top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-4 py-2 rounded z-10">
              Add to Cart
            </button>

            {/* Right-side Hover Actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition z-10">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Heart size={16} />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Eye size={16} />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Scale size={16} />
              </button>
            </div>

            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />

            {/* Info */}
            <div className="p-4 text-center">
              <h3 className="text-md font-semibold text-gray-800">
                {product.name}
              </h3>
              <h3 className="text-sm text-gray-600 mt-1 font-bold">
                {product.price}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Dotted Scroll Navigation */}
      <div className="flex justify-center mt-8 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === 0 ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSection;
n