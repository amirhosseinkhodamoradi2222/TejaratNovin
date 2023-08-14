import Image from "next/image";
import React from "react";
import logo3 from "../../assets/image/logo3.png";

export default function About() {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <Image src={logo3} />
        </div>
        <div>
          <p>zxcxzczxc</p>
          <p>zxcxzczxc</p>
        </div>
      </div>
    </>
  );
}
