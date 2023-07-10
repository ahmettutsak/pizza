"use client";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/features/cart-slice";

import one from "@/../public/images/pizzas/1.png";
import two from "@/../public/images/pizzas/2.png";
import three from "@/../public/images/pizzas/3.png";
import four from "@/../public/images/pizzas/4.png";
import five from "@/../public/images/pizzas/5.png";
import six from "@/../public/images/pizzas/6.png";
import seven from "@/../public/images/pizzas/7.png";
import eight from "@/../public/images/pizzas/8.png";
import nine from "@/../public/images/pizzas/9.png";
import ten from "@/../public/images/pizzas/10.png";
import eleven from "@/../public/images/pizzas/11.png";
import twelve from "@/../public/images/pizzas/12.png";
import Image from "next/image";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const calculatePrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.amount;
    });
    return total.toFixed(2);
  };

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

  const handleAddToCart = (pizza) => {
    dispatch(addToCart(pizza));
  };

  const handleRemoveToCart = (pizzaId) => {
    dispatch(removeFromCart(pizzaId));
  };

  return (
    <div className="bg-[#df6f63] h-full w-full flex">
      <div className="flex flex-col p-12 gap-4 w-full">
        {cartItems?.map((cartItem, index) => (
          <div
            className="w-full bg-red-400 rounded-2xl p-4 flex justify-between items-center"
            key={cartItem.id}
          >
            <div className="flex gap-12">
              <Image
                className="rounded-full"
                width={200}
                src={images[cartItem.id - 1]}
                alt="pizza"
              />
              <div className="flex flex-col gap-4 justify-center">
                <h2 className="text-3xl">{cartItem.name}</h2>
                <h2 className="text-xl">
                  ${(cartItem.price * cartItem.amount).toFixed(2)}
                </h2>
                <h2 className="text-xl">Amount: {cartItem.amount}</h2>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={() =>
                  handleAddToCart({
                    id: cartItem.id,
                    name: cartItem.name,
                    price: cartItem.price,
                    amount: 1,
                  })
                }
                className="p-8 bg-green-600 rounded-2xl w-16 h-16 flex justify-center items-center text-5xl"
              >
                +
              </button>
              <button
                onClick={() => handleRemoveToCart(cartItem.id)}
                className="p-8 bg-red-600 rounded-2xl w-16 h-16 flex justify-center items-center text-5xl"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-red-400 mt-12 p-12 w-[600px] min-h-[1000px] rounded">
        <h2 className="text-4xl">CheckOut</h2>
        {cartItems?.map((cartItem, index) => (
          <div
            className="w-full bg-red-400 rounded-2xl p-4 flex justify-between items-center"
            key={cartItem.id}
          >
            <div className="flex gap-6">
              <div className="flex gap-4 justify-between items-center w-[400px] p-4">
                <div>
                  <h2 className="text-3xl">{cartItem.name}</h2>
                  <h2 className="text-xl">Amount: {cartItem.amount}</h2>
                </div>
                <h2 className="text-xl">
                  ${(cartItem.price * cartItem.amount).toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        ))}
        <div className="text-4xl w-full text-right">
          Total: ${calculatePrice()}
        </div>
      </div>
    </div>
  );
}
