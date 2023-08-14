import Image from "next/image";
import React from "react";
import logo3 from "../../assets/image/logo3.png";

export default function Experience() {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
      <div>
          <p>zxcxzczxc</p>
          <p>zxcxzczxc</p>
          <div className="flex">
          <Image src={logo3} className="rounded-full w-20 h-20" />
          <Image src={logo3} className="rounded-full w-20 h-20" />
          <Image src={logo3} className="rounded-full w-20 h-20" />
          <Image src={logo3} className="rounded-full w-20 h-20" />
          <Image src={logo3} className="rounded-full w-20 h-20" />
        
          </div>
        </div>
        <div>
          <Image src={logo3} />
        </div>
      
      </div>
    </>
  );
}
