import Image from "next/image";

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

export default function Pizza({ id }) {
  const prices = [
    9.99, 12.99, 6.99, 12.99, 9.99, 6.99, 7.99, 11.99, 8.99, 10.99, 9.99, 10.99,
  ];
  const names = [
    "Margherita",
    "Pepperoni",
    "Hawaiian",
    "BBQ Chicken",
    "Veggie Delight",
    "Meat Lovers",
    "Supreme",
    "Mediterranean",
    "Buffalo Chicken",
    "Four Cheese",
    "Spinach and Feta",
    "Mushroom and Olive",
  ];

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

  return (
    <div className="p-6 flex flex-col justify-center items-center gap-5 min-w-[300px]">
      <Image
        className="rounded-full"
        width={200}
        height={200}
        src={images[id - 1]}
        alt="pizza"
      />
      <h2 className="text-2xl">{names[id - 1]}</h2>
      <h2 className="text-xl font-bold">{prices[id - 1]}</h2>
      <div className="text-xl font-bold bg-[#CADE78] p-3 rounded">Add Cart</div>
    </div>
  );
}
