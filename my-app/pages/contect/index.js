import React from "react";
import { TypeAnimation } from "react-type-animation";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsTelephoneFill , BsWhatsapp , BsLinkedin  } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";


export default function page() {
  return (
    <>
      <NextSeo title="contect" description="A short description goes here." />
      <section className="bg-secondaryColor2">
        <div className="container mx-auto py-8">
          
          <p className="text-justify mt-4 font-Regular text-sm lg:text-lg text-whate lg:px-11">
            بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند جایگاه ما را
            در نتایج جستجوی کاربران بهبود دهد. از سوی دیگر با آموزش و یادگیری
            سئو می‌توانیم اقدام به بهینه سازی صفحات سایت و در نتیجه ارتقای رتبه
            صفحات سایت خود در نتایج جستجو کنیم. ما مصمم هستیم که می‌توانیم
            مقدمات موفقیت شما را فراهم سازیم. مسیر رشد از همین‌جا شروع می‌شود.
            پس همین الان با یک تماس، قدم اول را محکم‌تر از همیشه بردارید.
          </p>
          <div className="flex gap-10 items-center justify-center mt-8">
            <Link
              href={"/"}
              className="lg:font-bold font-light border border-whate hover:text-secondaryColor2 duration-300 hover:duration-300 hover:bg-whate text-whate lg:w-36 w-24 lg:py-2 py-1 text-center rounded-lg "
            >
              021-25004
            </Link>
            <Link
              href={"/"}
              className="lg:font-bold font-light bg-green text-whate lg:w-36 w-24 lg:py-2 py-1 text-center rounded-lg "
            >
              وبلاگ
              <AiOutlineArrowLeft className="inline text-whate" size={17} />
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-4">
            <div className="rounded  p-4 ">
              <p className="font-Regular text-xl text-whate">سنگ میخوای</p>
              <p className="font-light text-whate mt-2 mb-2 opacity-90">بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند جایگاه ما را در نتایج جستجوی کاربران بهبود دهد</p>
              <button className="bg-secondaryColor3 text-whate font-Regular rounded shadow-xl my-2 w-1/4 block float-left">ارسال</button>
            </div>
            <div className="rounded  p-4 ">
              <p className="font-Regular text-xl text-whate">سنگ میخوای</p>
              <p className="font-light text-whate mt-2 mb-2 opacity-90">بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند جایگاه ما را در نتایج جستجوی کاربران بهبود دهد</p>
              <button className="bg-secondaryColor3 text-whate font-Regular rounded shadow-xl my-2 w-1/4 block float-left">ارسال</button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-28 container mx-auto">
        <p className="text-center font-Medium mb-10 text-3xl">راه های ارتباطی</p>
        <div className="lg:flex flex-row lg:mx-0 mx-8 gap-8 items-center justify-center">
          <div className="bg-whate shadow rounded p-4">
            <div className="flex gap-4">
              <FaLocationDot className="text-purple w-10 h-10"/>
              <div>
                <p className="font-Regular">آدرس</p>
                <p className="font-light text-sm mb-2 mt-2">بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند</p>
              </div>
            </div>
          </div>
          <div className="bg-whate shadow rounded p-4">
            <div className="flex gap-4">
              <BsTelephoneFill className="text-purple w-10 h-10"/>
              <div>
                <p className="font-Regular">آدرس</p>
                <p className="font-light text-sm mb-2 mt-2">بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند</p>
              </div>
            </div>
          </div>
          <div className="bg-whate shadow rounded p-4">
            <div className="flex gap-4">
              <BsWhatsapp className="text-purple w-10 h-10"/>
              <div>
                <p className="font-Regular">آدرس</p>
                <p className="font-light text-sm mb-2 mt-2">بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند</p>
              </div>
            </div>
          </div>
          <div className="bg-whate shadow rounded p-4">
            <div className="flex gap-4">
              <BsLinkedin className="text-purple w-10 h-10"/>
              <div>
                <p className="font-Regular">آدرس</p>
                <p className="font-light text-sm mb-2 mt-2">بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {},
  };
}
