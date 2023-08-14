import React from "react";
import logo3 from "../../assets/image/logo3.png";
import Image from "next/image";

export default function Customer() {
  return (
    <div className="relative">
      <div className="">
        
      </div>
      <Image
          src={logo3}
          className="rounded-full w-20 h-20 absolute right-1/2  top-10  left-1/2  "
        />
      <div className="border border-secondaryColor2 opacity-50 p-10">
        <p className="font-Medium">مدیر عامل شرکت</p>
        <p className="font-light">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
    </div>
  );
}
