"use client";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import one from "../../public/images/pizzas/1.png";
import two from "../../public/images/pizzas/2.png";
import three from "../../public/images/pizzas/3.png";
import four from "../../public/images/pizzas/4.png";
import five from "../../public/images/pizzas/5.png";
import six from "../../public/images/pizzas/6.png";
import seven from "../../public/images/pizzas/7.png";
import eight from "../../public/images/pizzas/8.png";
import nine from "../../public/images/pizzas/9.png";
import ten from "../../public/images/pizzas/10.png";
import eleven from "../../public/images/pizzas/11.png";
import twelve from "../../public/images/pizzas/12.png";

export default function Pizza({ id, name, price, handleAddToCart }) {
  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
  ];
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="p-6 flex flex-col justify-center items-center gap-5 min-w-[300px]">
      <Image
        className="rounded-full"
        width={200}
        height={200}
        src={images[id - 1]}
        alt="pizza"
      />
      <h2 className="text-2xl">{name}</h2>
      <h2 className="text-xl font-bold">${price}</h2>
      <button
        onClick={() => handleAddToCart({ id, name, price })}
        className="text-xl font-bold bg-[#CADE78] p-3 rounded"
      >
        Add Cart
      </button>
    </div>
  );
}
