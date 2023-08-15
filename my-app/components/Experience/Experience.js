import Image from "next/image";
import React from "react";
import logo3 from "../../assets/image/logo3.png";
import iraq from "../../assets/image/flag/iraq.svg";

export default function Experience() {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
      <div>
          <p>zxcxzczxc</p>
          <p>zxcxzczxc</p>
          <div className="text-right">
          <div class="flex">
          <Image src={iraq} width={180} height={180} className="border-2 border-white rounded-full h-24 w-24 -mr-6" />
          <Image src={logo3} className="border-2 border-white rounded-full h-24 w-24 -mr-6" />
          <Image src={logo3} className="border-2 border-white rounded-full h-24 w-24 -mr-6" />
          <Image src={logo3} className="border-2 border-white rounded-full h-24 w-24 -mr-6" />
          <Image src={logo3} className="border-2 border-white rounded-full h-24 w-24 -mr-6" />
          <Image src={logo3} className="border-2 border-white rounded-full h-24 w-24 -mr-6" />
         
    </div>
          </div>
        </div>
        <div>
          <Image src={logo3} />
        </div>
      
      </div>
    </>
  );
}
