import React from 'react';

function Card({ title, image, price }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{price}</p>
    </div>
  );
}

export default Card;