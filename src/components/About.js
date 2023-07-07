import Image from "next/image";

import jump from "@/../public/images/humans/jump.jpg";
import yp from "@/../public/images/pizzas/yp.png";
import yp2 from "@/../public/images/pizzas/yp2.png";

export default function About() {
  return (
    <div className="h-screen p-12 w-full">
      <h2 className="text-5xl p-12 rotate-3">About Pizza</h2>
      <div>
        <div className="flex justify-center items-center">
          <Image
            className="self-end rounded-2xl"
            width={600}
            src={jump}
            alt="hapy family"
          />
          <div className="relative">
            <p className="text-2xl p-12 w-[1000px] tracking-wider leading-10 relative font-bold z-10">
              Pizza is the ultimate destination for delicious pizzas and a
              fun-filled atmosphere, catering to kids and those young at heart.
              Every slice is prepared with love, while our vibrant and
              cartoon-themed venue offers an unforgettable pizza experience.
              With entertaining play areas, interactive activities, and friendly
              staff, we strive to put a smile on the face of every visitor. At
              Pizza, we are here to bring happiness with every bite. We can
              {"\u0027"}t wait to welcome you among us!
            </p>
            <Image
              className="rounded-full absolute right-0 -top-48 z-[1] "
              width={200}
              src={yp}
              alt="pizza 1"
            />
            <Image
              className="rounded-full absolute left-48 z-[1]"
              width={200}
              src={yp2}
              alt="pizza 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
