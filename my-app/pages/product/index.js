import React from "react";
import Link from "next/link";
import Product from "@/components/Product/Product";
import { NextSeo } from "next-seo";

export default function product() {
  return (
    <>
      <NextSeo title="Product" description="A short description goes here." />
      <section className="lg:mx-20 md:mx-10 mx-2 my-10">
        <div className="grid lg:grid-cols-10 grid-cols-1 lg:gap-8 md:gap-2 gap-0">
          <div className="col-span-2">
            <div className="bg-whate lg:sticky lg:top-32 lg:my-0 my-6 lg:z-0 shadow rounded">
              <div className="py-3">
                <p className="font-light pr-3 text-lg  border-r-4  border-[#ffa000] ">
                  انواع سنگ ها
                </p>
                <div className="bg-slate-100 my-1 p-[0.5px]"></div>
                <Link className="no-underline" href={"/"}>
                  <p className="mr-4 text-md mb-0 duration-150 hover:duration-150 hover:mr-5 hover:opacity-100 opacity-80 text-black  font-light">
                    تلویزیون
                  </p>
                </Link>
                <div className="bg-slate-100 my-1 p-[0.5px]"></div>
                <Link className="no-underline" href={"/"}>
                  <p className="mr-4 text-md duration-150 mb-0 hover:duration-150 hover:mr-5 hover:opacity-100 opacity-80 text-black  font-light">
                    تلفن همراه
                  </p>
                </Link>
                <div className="bg-slate-100 my-1 p-[0.5px]"></div>
              </div>
              <div className="py-3">
                <p className="font-light pr-3 text-lg mt-3 border-r-4  border-[#ffa000] ">
                  برند ها
                </p>
                <div className="text-md mb-2 hover:opacity-100 opacity-80 text-black  font-light">
                  <div className="bg-slate-100 my-1 p-[0.5px]"></div>
                  <div className="grid mx-2  grid-rows-1 grid-cols-2">
                    <div>
                      <p className="mb-0 opacity-80">سامسونگ</p>
                    </div>
                    <div className="grid justify-items-end ml-2">
                      <input type="checkbox" className="" />
                    </div>
                  </div>
                  <div className="bg-slate-100 my-1 p-[0.5px]"></div>
                  <div className="grid mx-2 grid-rows-1 grid-cols-2">
                    <div>
                      <p className="mb-0 opacity-80">ال جی</p>
                    </div>
                    <div className="grid justify-items-end ml-2">
                      <input type="checkbox" className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 lg:gap-6 md:gap-4 gap-4">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
        <div className="rounded shadow my-8 bg-whate p-4">
          <p className="font-Medium">خدمات سئو چیست؟</p>
          <p className="font-light">
            اجرای اصولی خدمات سئو سبب بهینه‌سازی صفحات برای کاربران و موتورهای
            جستجو می‌شود. به طور معمول کاربران برای دریافت خدمات یا خرید محصول
            به موتور جستجوی گوگل مراجعه کرده و سایت مورد نظر خود را از سه یا
            چهار لینک اول نتایج گوگل انتخاب می‌نمایند. به همین سبب بهترین راه
            تعامل با کاربران و افزایش نرخ کلیک، بهینه سازی صفحات سایت برای ربات
            های موتور جستجوی گوگل است. اگر به دنبال رشد کسب و کار خود هستید،
            برندینگ همراه با اصول صحیح سئو در افزایش رتبه صفحات سایت بسیار
            تاثیرگذار است. امروزه بسیاری از شرکت‌ها به دنبال اجرا سئو و بهینه
            سازی سایت جهت گسترش فروش یا ارائه انواع خدمات می‌باشند. بدیهی است که
            دریافت امتیاز در گوگل و رتبه بالا در نتایج جستجو به عنوان امن‌ترین
            پل ارتباطی جهت تعامل با کاربران معرفی می‌شود. همچنین سئو و بهینه
            سازی سایت‌ها در دسته تبلیغات کم هزینه با ماندگاری بالا قرار دارد که
            در مقایسه با سایر تبلیغات بسیار هدفمند پیش خواهد رفت.
          </p>
          <p className="font-Medium">خدمات سئو چیست؟</p>
          <p className="font-light">
            اجرای اصولی خدمات سئو سبب بهینه‌سازی صفحات برای کاربران و موتورهای
            جستجو می‌شود. به طور معمول کاربران برای دریافت خدمات یا خرید محصول
            به موتور جستجوی گوگل مراجعه کرده و سایت مورد نظر خود را از سه یا
            چهار لینک اول نتایج گوگل انتخاب می‌نمایند. به همین سبب بهترین راه
            تعامل با کاربران و افزایش نرخ کلیک، بهینه سازی صفحات سایت برای ربات
            های موتور جستجوی گوگل است. اگر به دنبال رشد کسب و کار خود هستید،
            برندینگ همراه با اصول صحیح سئو در افزایش رتبه صفحات سایت بسیار
            تاثیرگذار است. امروزه بسیاری از شرکت‌ها به دنبال اجرا سئو و بهینه
            سازی سایت جهت گسترش فروش یا ارائه انواع خدمات می‌باشند. بدیهی است که
            دریافت امتیاز در گوگل و رتبه بالا در نتایج جستجو به عنوان امن‌ترین
            پل ارتباطی جهت تعامل با کاربران معرفی می‌شود. همچنین سئو و بهینه
            سازی سایت‌ها در دسته تبلیغات کم هزینه با ماندگاری بالا قرار دارد که
            در مقایسه با سایر تبلیغات بسیار هدفمند پیش خواهد رفت.
          </p>
          <p className="font-Medium">خدمات سئو چیست؟</p>
          <p className="font-light">
            اجرای اصولی خدمات سئو سبب بهینه‌سازی صفحات برای کاربران و موتورهای
            جستجو می‌شود. به طور معمول کاربران برای دریافت خدمات یا خرید محصول
            به موتور جستجوی گوگل مراجعه کرده و سایت مورد نظر خود را از سه یا
            چهار لینک اول نتایج گوگل انتخاب می‌نمایند. به همین سبب بهترین راه
            تعامل با کاربران و افزایش نرخ کلیک، بهینه سازی صفحات سایت برای ربات
            های موتور جستجوی گوگل است. اگر به دنبال رشد کسب و کار خود هستید،
            برندینگ همراه با اصول صحیح سئو در افزایش رتبه صفحات سایت بسیار
            تاثیرگذار است. امروزه بسیاری از شرکت‌ها به دنبال اجرا سئو و بهینه
            سازی سایت جهت گسترش فروش یا ارائه انواع خدمات می‌باشند. بدیهی است که
            دریافت امتیاز در گوگل و رتبه بالا در نتایج جستجو به عنوان امن‌ترین
            پل ارتباطی جهت تعامل با کاربران معرفی می‌شود. همچنین سئو و بهینه
            سازی سایت‌ها در دسته تبلیغات کم هزینه با ماندگاری بالا قرار دارد که
            در مقایسه با سایر تبلیغات بسیار هدفمند پیش خواهد رفت.
          </p>
        </div>
      </section>
    </>
  );
}
