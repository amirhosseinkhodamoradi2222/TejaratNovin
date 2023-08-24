import React from "react";
import { TypeAnimation } from "react-type-animation";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function page() {
  return (
    <>
      <NextSeo title="contect" description="A short description goes here." />
      <section className="bg-secondaryColor2">
        <div className="container mx-auto py-8">
          <h1 className=" text-center py-4 font-Medium text-secondaryColor3 text-md lg:text-4xl">
          شرکت تجارت نوین تولید و عرضه مستقیم کاشی و سرامیک
          </h1>
          <p className="text-justify mt-4 font-Regular text-lg text-whate lg:px-11">
            بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند جایگاه ما را
            در نتایج جستجوی کاربران بهبود دهد. از سوی دیگر با آموزش و یادگیری
            سئو می‌توانیم اقدام به بهینه سازی صفحات سایت و در نتیجه ارتقای رتبه
            صفحات سایت خود در نتایج جستجو کنیم. ما مصمم هستیم که می‌توانیم
            مقدمات موفقیت شما را فراهم سازیم. مسیر رشد از همین‌جا شروع می‌شود.
            پس همین الان با یک تماس، قدم اول را محکم‌تر از همیشه بردارید.
          </p>
          <div className="flex">
          <Link href={'/'} className="lg:font-bold font-light bg-purple text-whate lg:w-36 w-24 lg:py-2 py-1 text-center rounded-lg ">وبلاگ<AiOutlineArrowLeft className="inline text-whate" size={17}/></Link>
          <Link href={'/'} className="lg:font-bold font-light bg-purple text-whate lg:w-36 w-24 lg:py-2 py-1 text-center rounded-lg ">وبلاگ<AiOutlineArrowLeft className="inline text-whate" size={17}/></Link>
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
