import React from "react";
import logo3 from "../../assets/image/logo3.png";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function Customer() {
  return (
    <>
      <div className="bg-whate shadow rounded">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-1">
            <Image src={logo3} className="rounded-full w-16 h-16 mr-5 mt-5" />
          </div>
          <div className="col-span-3">
          <p className="font-Medium text-sm mt-4 mr-4">امیر حسین خدامرادی</p>
          <p className="font-light opacity-70 text-sm mt-2 mr-4">مدیر عامل شرکت تجارت نوین</p>
          <div className="flex mr-4 mt-3">
            <AiFillStar className="text-yelloe" size={17}/>
            <AiFillStar className="text-yelloe" size={17}/>
            <AiFillStar className="text-yelloe" size={17}/>
            <AiFillStar className="text-yelloe" size={17}/>
          </div>
          </div>
        </div>
        <div className="p-5">
          <p className="font-light opacity-75 text-sm text-justify mt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
      </div>
    </>
  );
}
