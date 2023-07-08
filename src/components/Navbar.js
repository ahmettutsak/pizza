import Image from "next/image";

import logo from "../../public/images/humans/logo.png";
import Link from "next/link";

export default function Navbar() {
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
            href={"/"}
          >
            About
          </Link>
          <Link
            className="hover:scale-125 hover:-translate-y-2 transition-all"
            href={"/"}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
