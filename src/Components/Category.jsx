import React from 'react';
import { categories } from '../data/data.js';
import '../index.css';

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center duration-300 hover:scale-105">
        Favorite Categories
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map(({ id, name, image }) => (
          <div
            key={id}
            className="bg-gray-100 rounded-lg p-4 flex border-gray-100 border-4 hover:border-4 justify-between items-center duration-300 hover:border-orange-500 focus:border-2  hover:scale-105"
          >
            <h2 className="font-bold sm:text-xl">{name}</h2>
            <img
              src={image}
              alt={name}
              className="w-20 hover:skew-x-12 hover:scale-110 duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
