import Image from "next/image";

import fun from "@/../public/images/humans/smile.jpg";

export default function About() {
  return (
    <div className="bg-[#df6f63] h-full p-12">
      <h2 className="text-5xl -rotate-6 p-4">About Pizza 🥰</h2>
      <div className="flex flex-col">
        <p className="p-4 text-2xl mt-24 max-w-[1400px]">
          Hello! We are Pizza, a whimsical world where the most delicious and
          fun pizzas come to life. With every slice, you'll taste our creativity
          and passion. Immerse yourself in a colorful and vibrant atmosphere
          where we bring children's imaginations to reality. Together with our
          team, we've created a place where everyone can embark on an
          unforgettable adventure while discovering our mouthwatering pizzas.
          Welcome to Pizza, where we blend the joy of pizza with
          cartoon-inspired entertainment!
        </p>
        <Image
          className="self-end rounded-3xl"
          width={314}
          src={fun}
          alt="smiling"
        />
      </div>
    </div>
  );
}
