import React from "react";
import logo3 from "../../assets/image/logo3.png";
import Image from "next/image";

export default function Customer() {
  return (
    <>
    <div className="bg-whate shadow rounded">
      <div className=""></div>
      <Image src={logo3} className="rounded-full w-16 h-16 mr-5 mt-5" />
      <div className="p-5">
        <p className="font-Medium">مدیر عامل شرکت</p>
        <p className="font-light">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
    </div>
    </>
  );
}
