import React from "react";
import logo from "../../assets/image/logo1.jpg";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { AiOutlineHistory } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { HiMiniUser } from "react-icons/hi2";
import { TbSeeding } from "react-icons/tb";
import { TbTrophyFilled , TbRosetteFilled } from "react-icons/tb";


export default function about() {
  return (
    <>
      <section className="bg-secondaryColor2 p-4">
        <div className="container mx-auto">
          <h1 className=" text-center py-4 font-Medium text-secondaryColor3 text-md text-2xl lg:text-3xl">
            شرکت تجارت نوین تولید و عرضه مستقیم کاشی و سرامیک
          </h1>
          <p className="text-justify mt-3 font-Regular text-sm lg:text-lg text-whate opacity-80 lg:px-11">
            بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند جایگاه ما را
            در نتایج جستجوی کاربران بهبود دهد. از سوی دیگر با آموزش و یادگیری
            سئو می‌توانیم اقدام به بهینه سازی صفحات سایت و در نتیجه ارتقای رتبه
            صفحات سایت خود در نتایج جستجو کنیم. ما مصمم هستیم که می‌توانیم
            مقدمات موفقیت شما را فراهم سازیم. مسیر رشد از همین‌جا شروع می‌شود.
            پس همین الان با یک تماس، قدم اول را محکم‌تر از همیشه بردارید.
          </p>
        <div className="lg:flex grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 mt-8">
          <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular"> <AiOutlineHistory className="inline"/> تاریخچه </p>
         <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular"> <TbTrophyFilled className="inline"/> نمونه کارهای ما</p>
          <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular"> <TbRosetteFilled className="inline"/> تجربه کاری</p>
          <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular"> <HiMiniUser className="inline"/> مشتریان</p>
          <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular"> <FaShoppingCart className="inline"/> محصولات ما</p>
          <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular"> <TbSeeding className="inline"/> مسٔولیت اجتماعی</p>
        </div>
        </div>
      </section>
      <section className="my-8 container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <Image src={logo} />
          <p>dsfsdfd</p>
          <p>dsfsdfd</p>
          <Image src={logo} />
        </div>
      </section>
    </>
  );
}
