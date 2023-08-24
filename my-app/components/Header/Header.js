import Image from "next/image";
import logo3 from "../../assets/image/logo3.png";
import Linkedin from "../Linkedin/Linkedin";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { TypeAnimation } from "react-type-animation";

// Import Swiper styles
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function Header() {
  return (
    <>
      <section className="bg-secondaryColor2 lg:p-20 p-8 mb-10">
        <div className="container mx-auto">
          <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div className="mr-4 lg:mr-0">
              <div className="h-16">
                <h1>
                  <TypeAnimation
                    sequence={[
                      "شرکت تجارت نوین تولید و عرضه مستقیم کاشی و سرامیک",
                      5000,
                      "شرکت تجارت نوین",
                    ]}
                    wrapper="span"
                    cursor={false}
                    speed={50}
                    className="font-Medium text-whate text-md lg:text-3xl"
                    repeat={Infinity}
                  />
                </h1>
              </div>
              <h2 className="font-Regular mt-8 text-whate lg:text-2xl text-md">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </h2>
              <p className="font-light my-6 mb-8 text-justify text-whate">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است
              </p>
              <Linkedin />
            </div>
            <div className="mr-4">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image src={logo3} width={500} height={500} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo3} width={500} height={500} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo3} width={500} height={500} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={logo3} width={500} height={500} />
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
