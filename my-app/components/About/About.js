import Image from "next/image";
import React from "react";
import logo3 from "../../assets/image/logo3.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <Image src={logo3} />
        </div>
        <div>
          <p className="font-bold text-4xl">معرفی تیم شرکت <span className="text-primaryColor">تجارت نوین</span></p>
          <p className="font-light text-justify my-8">
          سه سال پیش دی ام روم، یک تیم یک نفره و تنها سرمایه اون تجربه و دانش عماد چابک به همراه پشتکار و امید به آینده بود. اما حالا ما یک تیم 29 نفره هستیم که با انگیزه چند برابری نسبت به دیگران، تلاش می‌کنیم تا به کسب و کارها کمک کنیم که جزو بهترین ها نه، بلکه بهترین در حوزه کاری خود باشند و تاکنون با نتایجی که بدست آوردهایم، به خواسته خود جامه عمل پوشانده‌ایم.
          </p>
          <Link href={'/'} className="lg:font-bold font-light bg-purple text-whate lg:w-64 w-64 block lg:py-3 py-1 text-center rounded-lg ">معرفی کامل شرکت تجارت نوین <AiOutlineArrowLeft className="inline text-whate" size={17}/></Link>
        </div>
      </div>
    </>
  );
}
