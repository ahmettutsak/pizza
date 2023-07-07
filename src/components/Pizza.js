import Image from "next/image";

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

  return (
    <div className="p-6 flex flex-col justify-center items-center gap-5 min-w-[300px]">
      <Image
        className="rounded-full"
        width={200}
        height={200}
        src={`/../public/images/pizzas/${id}.png`}
        alt="pizza"
      />
      <h2 className="text-2xl">{names[id - 1]}</h2>
      <h2 className="text-xl font-bold">{prices[id - 1]}</h2>
      <div className="text-xl font-bold bg-[#CADE78] p-3 rounded">Add Cart</div>
    </div>
  );
}
