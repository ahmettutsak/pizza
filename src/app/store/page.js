"use client";

import React, { useState } from "react";
import Pizza from "@/components/Pizza";
import pizzas from "@/pizza.json";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/features/cart-slice";

export default function Store() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    setSelectedCheckboxes((prevSelectedCheckboxes) => {
      if (isChecked) {
        return [...prevSelectedCheckboxes, checkboxValue];
      } else {
        return prevSelectedCheckboxes.filter(
          (value) => value !== checkboxValue
        );
      }
    });
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (pizza) => {
    dispatch(addToCart(pizza));
  };

  const filteredPizzas = pizzas.pizzas
    .filter((pizza) => {
      if (selectedCheckboxes.length === 0) {
        return true;
      }
      return selectedCheckboxes.every((ingredient) =>
        pizza.ingredients.includes(ingredient)
      );
    })
    .filter((pizza) =>
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const ingredientList = [
    ...new Set(pizzas.pizzas.flatMap((pizza) => pizza.ingredients)),
  ];

  return (
    <div className="w-full flex">
      <div className="bg-[#df6f63] h-full relative max-w-[300px] flex items-center flex-col">
        <form className="mt-12 flex w-full h-full flex-col p-12 items-center">
          <input
            className="p-4 rounded text-black"
            type="text"
            placeholder="Search Pizza ❤️"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <div className="flex flex-wrap">
            {ingredientList.length > 0 &&
              ingredientList.map((ing, index) => {
                return (
                  <label key={index} className="w-60 text-xl p-2 mt-2">
                    <input
                      className="w-12"
                      type="checkbox"
                      value={ing}
                      onChange={handleCheckboxChange}
                    />
                    {ing}
                  </label>
                );
              })}
          </div>
        </form>
      </div>
      <div className="flex flex-wrap p-12 text-black items-start">
        {filteredPizzas.map((pizza, index) => {
          return (
            <Pizza
              key={pizza.name + index}
              id={index + 1}
              name={pizza.name}
              price={pizza.price}
              handleAddToCart={() =>
                handleAddToCart({
                  id: index + 1,
                  name: pizza.name,
                  price: pizza.price,
                  amount: 1,
                })
              }
            />
          );
        })}
      </div>
    </div>
  );
}
