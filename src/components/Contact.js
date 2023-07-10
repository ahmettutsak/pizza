import Image from "next/image";

import smile from "@/../public/images/humans/smile.jpg";

export default function Contact() {
  return (
    <div className="p-12 w-full bg-[#e9bc73]">
      <div className="flex flex-col xl:flex-row justify-evenly items-center">
        <Image className="rounded-3xl" width={400} src={smile} alt="smiling" />
        <div className="flex flex-col p-12 gap-8">
          <h2 className="text-4xl">We love to hear you 👋</h2>
          <h2 className="text-2xl">
            Get in touch with us by sending an email or giving us a call!
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-xl">pizza@pizza.pizza</h2>
              <h2 className="text-xl">+123321123123</h2>
            </div>
            <div>
              <h2 className="text-xl">
                123 Main Street, Cityville, ABC 12345, Countryland
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
