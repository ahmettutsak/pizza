import Image from "next/image";

import logo from "../../public/images/humans/logo.png";
import Link from "next/link";
import s from "@/../public/s.svg";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const calculateAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.amount;
    });
    return total;
  };

  return (
    <nav className="bg-[#df6f63] flex justify-center">
      <div className="p-8 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-4">
          <h2 className="text-center text-4xl tracking-wide text-white -scale-x-100">
            Pizza
          </h2>
          <Image width={75} height={75} src={logo} alt="logo" />
          <h2 className="text-center text-4xl tracking-wide text-white">
            Pizza
          </h2>
        </div>
        <div className="flex gap-8 text-3xl mt-4 text-white">
          <Link
            className="hover:scale-125 hover:-translate-y-2 transition-all"
            href={"/"}
          >
            HomePage
          </Link>
          <Link
            className="hover:scale-125 hover:-translate-y-2 transition-all"
            href={"/store"}
          >
            Store
          </Link>
          <Link
            className="hover:scale-125 hover:-translate-y-2 transition-all"
            href={"/about"}
          >
            About
          </Link>
        </div>
      </div>
      <div>
        <Link href={"/cart"}>
          <Image
            className="absolute right-56 top-24"
            width={40}
            src={s}
            alt="shopping cart"
          />
          {cartItems.length > 0 && (
            <div className="text-black text-3xl rounded-full absolute z-50 right-48 top-24">
              {calculateAmount()}
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
}
