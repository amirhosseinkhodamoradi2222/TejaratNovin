import Image from "next/image";
import React from "react";
import logo3 from "../../assets/image/logo3.png";
import Link from "next/link";

function Product() {
  return (
    <div className="bg-whate pb-4  hover:shadow-2xl hover:rounded-lg relative">
      <div className="w-full h-64 relative">
        <Image
          src={logo3}
          width={700}
          className="rounded-t-lg h-64 w-full"
          height={600}
        />
        <div className="w-12 h-12 absolute bg-[#f6e58d] top-3 rounded right-3">
          <p className="font-demiBold text-center">29 مرداد</p>
        </div>
        <div className="w-12 h-12 absolute bg-[#6c5ce7] top-3 rounded left-3">
          <p className="font-demiBold text-center">5 دقیقه</p>
        </div>
      </div>

      <p className="font-light text-lg bg-yelloeInfo left-24 m-0 right-24 rounded-lg mr-2 px-8 absolute top-60 text-whate text-center mt-2 py-0 ">
        موجود در انبار
      </p>
      <p className="font-bold opacity-80 text-2xl mt-4 text-center pr-2 pt-2">
        سرامیک
      </p>
      <p className="font-light text-center opacity-95 px-2 pt-2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>
      <Link href={"/"}>
        <p className="font-Medium text-center mt-4 text-secondaryColor1">
          جزییاتت
        </p>
      </Link>
    </div>
  );
}

export default Product;
