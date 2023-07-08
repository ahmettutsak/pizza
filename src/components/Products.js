"use client";

import Link from "next/link";

import Pizza from "./Pizza";
import { motion } from "framer-motion";
import pizzas from "@/pizza.json";

export default function Products({ pizzaNum, prod }) {
  const pizza = pizzaNum;
  const pizArr = [];

  // pizza calc
  for (var i = 1; i <= pizza; i++) {
    pizArr.push(i);
  }

  return (
    <div className="h-screen bg-white text-black w-full p-12">
      <h2 className="text-5xl p-12 -rotate-3">Pizzas ❤️</h2>
      <div className="p-6 flex justify-around flex-wrap">
        {pizArr.map((id, index) => {
          return (
            <Pizza
              key={index}
              name={pizzas.pizzas[id - 1].name}
              price={pizzas.pizzas[id - 1].price}
              id={index + 1}
            />
          );
        })}
      </div>
      {!prod && (
        <div className="w-full flex justify-center">
          <Link href={"/store"}>
            <motion.h2
              animate={{
                rotate: [5, -5, 5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="p-4 bg-[#4B8BDE] rounded text-white text-xl"
            >
              If you want to see more, click here!
            </motion.h2>
          </Link>
        </div>
      )}
    </div>
  );
}
