import React from "react";
import logo from "../../assets/image/logo1.jpg";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { AiOutlineHistory } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { HiMiniUser } from "react-icons/hi2";
import { TbSeeding } from "react-icons/tb";
import { TbTrophyFilled, TbRosetteFilled } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Customer from "@/components/Customer/Customer";
import Loading from "@/components/Loading/Loading";

export default function about() {

  return (
    <div>
      {/* <Loading /> */}
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
            <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular">
              <AiOutlineHistory className="inline" /> تاریخچه
            </p>
            <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular">
              <TbTrophyFilled className="inline" /> نمونه کارهای ما
            </p>
            <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular">
              <TbRosetteFilled className="inline" /> تجربه کاری
            </p>
            <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular">
              <HiMiniUser className="inline" /> مشتریان
            </p>
            <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular">
              <FaShoppingCart className="inline" /> محصولات ما
            </p>
            <p className="rounded-xl bg-purple w-full duration-200 hover:duration-200 hover:bg-primaryColor block text-center py-1 text-whate font-Regular">
              <TbSeeding className="inline" /> مسٔولیت اجتماعی
            </p>
          </div>
        </div>
      </section>
      <section className="my-8">
        <div className="container mx-auto my-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <div>
              <p className="font-Medium text-primaryColor text-4xl">
                تاریخچه شرکت
              </p>
              <p className="font-light text-justify mt-6">
                بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند جایگاه ما
                را در نتایج جستجوی کاربران بهبود دهد. از سوی دیگر با آموزش و
                یادگیری سئو می‌توانیم اقدام به بهینه سازی صفحات سایت و در نتیجه
                ارتقای رتبه صفحات سایت خود در نتایج جستجو کنیم. ما مصمم هستیم که
                می‌توانیم مقدمات موفقیت شما را فراهم سازیم. مسیر رشد از همین‌جا
                شروع می‌شود. پس همین الان با یک تماس، قدم اول را محکم‌تر از
                همیشه بردارید. تاریخچه نمونه کارهای ما تجربه کاری
              </p>
              <Image src={logo} className="rounded-xl w-3/4 h-36 mt-14" />
            </div>
            <Image src={logo} className="rounded-3xl w-full h-96" />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="mt-8 bg-whate relative backdrop-blur-lg my-8">
            <div className="w-60 h-full inline-block absolute z-10 bg-secondaryColor2 shadow-md">
              <div className="absolute bottom-4 left-4">
                <p className="font-Regular text-whate text-2xl mb-6">
                  {" "}
                  نمومه کار ها{" "}
                </p>
                <p className=" hover:bg-purple w-20 rounded duration-200 hover:duration-200 bg-primaryColor  text-center py-1 text-whate font-Regular">
                  {" "}
                  محصولات{" "}
                </p>
              </div>
            </div>
            <div className="py-6">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper z-0"
              >
                <SwiperSlide>
                  <Image src={logo} className=" w-full h-96" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo} className=" w-full h-96" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo} className=" w-full h-96" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo} className=" w-full h-96" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo} className=" w-full h-96" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo} className=" w-full h-96" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo} className=" w-full h-96" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 my-8 lg:grid-cols-2">
            <div>
              <Image src={logo} className=" w-full h-96" />
            </div>
            <div>
              <p className="font-Medium text-primaryColor text-4xl">
                تاریخچه شرکت
              </p>
              <p className="font-light text-justify mt-6">
                بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند جایگاه ما
                را در نتایج جستجوی کاربران بهبود دهد. از سوی دیگر با آموزش و
                یادگیری سئو می‌توانیم اقدام به بهینه سازی صفحات سایت و در نتیجه
                ارتقای رتبه صفحات سایت خود در نتایج جستجو کنیم. ما مصمم هستیم که
                می‌توانیم مقدمات موفقیت شما را فراهم سازیم. مسیر رشد از همین‌جا
                شروع می‌شود. پس همین الان با یک تماس، قدم اول را محکم‌تر از
                همیشه بردارید. تاریخچه نمونه کارهای ما تجربه کاری
              </p>
              <div className="flex mt-4 gap-4">
                <p className=" bg-purple w-20 rounded duration-200 hover:duration-200 hover:bg-primaryColor  text-center py-1 text-whate font-Regular">
                  {" "}
                  محصولات{" "}
                </p>
                <p className=" bg-purple w-20 rounded duration-200 hover:duration-200 hover:bg-primaryColor  text-center py-1 text-whate font-Regular">
                  {" "}
                  محصولات{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-4">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
          </div>
          <section className="my-4">
            <p className="text-center my-5 font-Medium text-2xl">محصولات ما</p>
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-4">
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
              <div className="w-full rounded h-20 bg-green"></div>
            </div>
          </section>
        </div>
        <section className="my-12">
          <div className="container mx-auto">
            <div className="rounded-2xl bg-secondaryColor2 p-6 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
                <Image src={logo} className=" w-full h-96" />
                <div>
                  <p className="font-Medium text-primaryColor text-4xl">
                    تاریخچه شرکت
                  </p>
                  <p className="font-light text-justify text-whate mt-6">
                    بدون شک استفاده از خدمات حرفه‌ای سئو به خوبی می‌تواند جایگاه
                    ما را در نتایج جستجوی کاربرانبهبود دهد. از سوی دیگر با آموزش
                    و یادگیری سئو می‌توانیم اقدام به بهینه سازی صفحات سایت و در
                    نتیجه ارتقای رتبه صفحات سایت خود در نتایج جستجو کنیم. ما
                    مصمم هستیم که می‌توانیم مقدمات موفقیت شما را فراهم سازیم.
                    مسیر رشد از همین‌جا شروع می‌شود. پس همین الان با یک تماس،
                    قدم اول را محکم‌تر از همیشه بردارید. تاریخچه نمونه کارهای ما
                    تجربه کاری
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
