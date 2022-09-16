import React, { useState } from 'react';
import { data } from '../data/data';
import '../index.css';

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter Types of Food function
  const filterFood = (category) => {
    setFoods(
      data.filter((food) => {
        return food.category === category;
      })
    );
  };

  // Filter by Price function
  const filterPrice = (price) => {
    setFoods(
      data.filter((food) => {
        return food.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-black text-xl flex justify-center m-2 duration-300 link link-underline link-underline-black">
            Filter Type
          </p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 border-2 duration-300 text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterFood('burger')}
              className="m-1 border-orange-600 border-2 duration-300 text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterFood('pizza')}
              className="m-1 border-orange-600 border-2 duration-300 text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterFood('salad')}
              className="m-1 border-orange-600 border-2 duration-300 text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterFood('chicken')}
              className="m-1 border-orange-600 border-2 duration-300 text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-black text-xl flex justify-center m-2 link link-underline link-underline-black">
            Filter Price
          </p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice('$')}
              className="m-1 border-orange-600 border-2 duration-300 text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className="m-1 border-orange-600 border-2 duration-300 text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className="m-1 border-orange-600 border-2 duration-300 text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className="m-1 border-orange-600 border-2 duration-300 text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Food Items */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {foods.map(({ id, image, name, price }) => (
          <div
            key={id}
            className="border shadow-2xl rounded-lg duration-300 hover:scale-105"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full font-bold">
                  {price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
