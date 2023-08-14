import Image from "next/image";
import React from "react";
import logo3 from "../../assets/image/logo3.png";
import Link from "next/link";

function Product() {
  return (
    <div className="hover:bg-whate pb-4 px-2 hover:shadow-2xl hover:rounded-lg relative">
      <Image
        src={logo3}
        width={650}
        className="rounded-t-lg h-64 w-full"
        height={600}
      />
        <p className='font-light text-lg bg-primaryColor left-50 rounded-lg mr-2 px-8 absolute top-60 text-whate text-center mt-2 py-0 '>موجود در انبار</p>
      <p className="font-bold opacity-80 text-2xl text-center pr-2 pt-2">سرامیک</p>
      <p className="font-light text-center opacity-95 px-2 pt-2">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>
      <Link href={"/"}>
        <p className="font-Medium text-center mt-4 text-secondaryColor1">
          {" "}
          جزییاتت{" "}
        </p>
      </Link>
    </div>
  );
}

export default Product;
