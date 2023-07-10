"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import eat from "@/../public/images/humans/eat.jpg";

export default function Hero() {
  return (
    <div className="w-full h-full flex justify-center p-16">
      <div className="p-24 flex flex-col gap-12">
        <h2 className="text-8xl text-white tracking-tighter">
          Pizza, Fun, Life
        </h2>
        <p className="text-4xl tracking-wide text-white">
          Savor delicious slices, have fun, and embrace the joy of life at our
          pizza joint. Experience the magnificent trio of pizza, entertainment,
          and vibrant living at our establishment
        </p>
      </div>
      <motion.div
        className="hidden xl:flex"
        animate={{
          rotate: [5, -5, 5],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          className="rounded-3xl w-full h-full relative z-10 transition ease-in-out duration-50000 hover:translate-y-6 hover:-translate-x-4"
          src={eat}
          alt="woman eating pizza"
        />
        <div className="relative -top-[96%] right-4  rounded-3xl bg-[#913B31] w-full h-full"></div>
      </motion.div>
    </div>
  );
}
