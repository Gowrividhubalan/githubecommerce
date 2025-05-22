import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineHeart } from 'react-icons/ai';

const products = [
  { id: 1, title: 'Shirt 1', price: '499', img: '/images/shirt1.png' },
  { id: 2, title: 'Shirt 2', price: '599', img: '/images/shirt2.png' },
  { id: 3, title: 'Shirt 3', price: '699', img: '/images/shirt3.png' },
  { id: 4, title: 'Shirt 4', price: '799', img: '/images/shirt4.png' },
  { id: 5, title: 'Shirt 5', price: '899', img: '/images/shirt5.png' },
  { id: 6, title: 'Shirt 6', price: '999', img: '/images/shirt6.png' },
];

const SlickList = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Trending Collection</h2>
      <p className="text-center text-gray-500 mb-6">Check out the hottest products this season!</p>

      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-white rounded-xl shadow relative overflow-hidden group">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>
                <AiOutlineHeart className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-500 cursor-pointer" />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <div className="space-x-4">
                    <button className="bg-white text-sm px-3 py-1 rounded hover:bg-gray-200">Wishlist</button>
                    <button className="bg-white text-sm px-3 py-1 rounded hover:bg-gray-200">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500">₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickList;
