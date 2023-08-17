import Image from "next/image";
import React from "react";
import logo3 from "../../assets/image/logo3.png";
import Linkedin from "../Linkedin/Linkedin";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Header() {
  return (
    <>
      <section className="bg-secondaryColor2 p-8 mb-10">
        <div className="container mx-auto">
          <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="mr-4 lg:mr-0">
              <h1 className="font-Medium text-whate text-md lg:text-3xl">
                {" "}
                شرکت تجارت نوین تولید و عرضه مستقیم کاشی و سرامیک
              </h1>
              <h2 className="font-Regular mt-8 text-whate lg:text-2xl text-md">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </h2>
              <Linkedin />
            </div>
            <div className="mr-4">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <Image src={logo3} width={600} height={500} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo3} width={500} height={500} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo3} width={500} height={500} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
