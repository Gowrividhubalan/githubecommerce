import React from 'react';
import Card from './Card';
import img1 from '../assets/woman pro.png';
import img2 from '../assets/woman1 pro1.png';
import img3 from '../assets/bag.png';
import img4 from '../assets/woman4.png';
import img5 from '../assets/kids.png';

function ShopGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      
      {/* Column 1: Two rows */}
      <div className="flex flex-col gap-5 ">
        <Card image={img1} />
        <Card image={img2} />
      </div>

      {/* Column 2: Single full card */}
      <div className="flex">
        <Card image={img3} />
      </div>

      {/* Column 3: Two rows */}
      <div className="flex flex-col gap-6">
        <Card image={img4} />
        <Card image={img5} />
      </div>
    </div>
  );
}


export { ShopGrid } ;