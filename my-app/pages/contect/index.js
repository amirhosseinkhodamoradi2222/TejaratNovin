import React from "react";
import { TypeAnimation } from "react-type-animation";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

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
            <div className="rounded  p-4 bg-secondaryColor3 outline outline-whate outline-4">sfsd</div>
            <div className="rounded  p-4 bg-secondaryColor3 outline outline-whate outline-4">sfsd</div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className="lg:flex flex-row lg:mx-0 mx-8 gap-8 items-center justify-center">
          <div></div>
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
