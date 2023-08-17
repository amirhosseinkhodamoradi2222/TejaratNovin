import Image from "next/image";
import React from "react";
import logo from "../../assets/image/logoS.png";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillPhone,
} from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function page() {
  return (
    <>
      <footer className="bg-secondaryColor2 text-whate pt-20 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-2">
            <div className="font-Medium">
              <Image
                src={logo}
                className="lg:block hidden"
                width={150}
                height={20}
              />
            </div>
            <div className="mt-0 lg:mt-2 md:mt-0">
              <p className="font-Regular text-xl after:w-12 after:bg-primaryColor lg:text-right text-center">
                شرکت تجارت نوین
              </p>
              <p className="font-light my-4 text-sm text-whate">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
            <div className="mt-0 lg:mt-2 md:mt-0">
              <p className="font-Regular text-xl after:w-12 after:bg-primaryColor text-right">
                لینک مفید
              </p>
              <div className="mt-3">
              <p className="font-light">محصولات</p>
              <p className="font-light">درباره ما</p>
              <p className="font-light">تماس با ما</p>
              <p className="font-light">وبلاگ</p>
            </div>
            </div>
            <div className="mt-0 lg:mt-2 md:mt-0">
              <p className="font-Regular text-xl after:w-12 after:bg-primaryColor text-right">
                ادرس دفتر کار ما
              </p>
              <p>dfgdfgdsgreawcvbvcxbvxctgesg</p>
              <p>dfgdsfgsd</p>
              <p>092214314641</p>
            </div>
            <div className="mt-0 lg:mt-2 md:mt-0">
              <p className="font-Regular text-lg after:w-12 after:bg-primaryColor text-right">
                انواع سنگ برای فروش
              </p>
              <div className="mt-3">
                <p className="font-light">گرانیت</p>
                <p className="font-light">مرمر</p>
                <p className="font-light">سرامیک</p>
                <p className="font-light">کاشی</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] lg:my-4 my-2 opacity-50 bg-primaryColor"></div>
          <div className="lg:flex block md:flex gap-2 justify-evenly mt-4">
            <p className="font-light mt-1 shrink text-whate">
              © تمامی حقوق سایت برای عماد چابک محفوظ می باشد.
            </p>
            <div className="font-Regular mt-1">
              <FaPhone className="inline mt-0" size={15} /> 021-66948816
            </div>
            <div className="flex">
              <Link href={"#"}>
                <AiFillLinkedin className="w-8 h-8 " />
              </Link>
              <Link href={"#"}>
                <AiFillFacebook className="w-8 h-8" />
              </Link>
              <Link href={"#"}>
                <AiOutlineInstagram className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
