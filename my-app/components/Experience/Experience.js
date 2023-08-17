import Image from "next/image";
import React from "react";
import logo3 from "../../assets/image/logo3.png";
import iraq from "../../assets/image/flag/iraq.png";
import qatar from "../../assets/image/flag/qatar.png";
import oman from "../../assets/image/flag/oman.png";
import lebanon from "../../assets/image/flag/lebanon.png";
import kuwait from "../../assets/image/flag/kuwait.png";
import emirates from "../../assets/image/flag/emirates.png";
import syria from "../../assets/image/flag/syria.png";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";


export default function Experience() {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 md:gri0-cols-2 gap-4">
        <div>
          <p className="font-bold text-4xl my-12"> مشتریان ما از کدام <span className="text-primaryColor">کشور ها</span> هستند </p>
          <p className="font-Medium mb-9 text-xl">تجربه صادرات به بیش از <span className="text-primaryColor font-bold text-2xl">20 کشور در اسیا و اروپا</span></p>
          <div className="text-right">
            <div class="flex">
              <Image
               data-tooltip-id="my-tooltip"
               data-tooltip-content="Iraq"
                src={iraq}
                className="border-2 border-white shadow shadow-primaryColor rounded-full md:h-20 md:w-20 lg:h-24 h-20 w-20 lg:w-24  hover:ml-6"
              />

              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Qatar"
                src={qatar}
                className="border-2 border-white shadow shadow-primaryColor rounded-full md:h-20 md:w-20 lg:h-24 h-20 w-20 lg:w-24  -mr-6 hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Emirates"
                src={emirates}
                className="border-2 border-white shadow shadow-primaryColor rounded-full md:h-20 md:w-20 lg:h-24 h-20 w-20 lg:w-24  -mr-6 hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Oman"
                src={oman}
                className="border-2 border-white shadow shadow-primaryColor rounded-full md:h-20 md:w-20 lg:h-24 h-20 w-20 lg:w-24  -mr-6 hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Lobanon"
                src={lebanon}
                className="border-2 border-white shadow shadow-primaryColor rounded-full md:h-20 md:w-20 lg:h-24 h-20 w-20 lg:w-24  -mr-6 hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Kuwate"
                src={kuwait}          
                className="border-2 border-white shadow shadow-primaryColor rounded-full md:h-20 md:w-20 lg:h-24 h-20 w-20 lg:w-24  -mr-6  hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Syria"
                src={syria}
                className="border-2 border-white shadow shadow-primaryColor rounded-full md:h-20 md:w-20 lg:h-24 h-20 w-20 lg:w-24  -mr-6 hover:mr-1" 
              />
              <Tooltip id="my-tooltip" />
            </div>
          </div>
          <p className="font-Medium mb-5 text-xl mt-10"> امادگی فروش انواع سنگ با کیفیت به  تمام دنیا </p>
          <p className="font-light mb-9 text-lg mt-0"> برای سفارش سنگ در هر جای دنیا که هستید به پشتیبانی ما پیام دهید تا در کمترین زمان ممکن شما را راهنمایی و ثبت سفارش انجام دهند </p>
          <Link href={'/'} className="lg:font-bold font-light bg-purple text-whate lg:w-44 w-28 block lg:py-3 py-1 text-center rounded-lg ">محصولات<AiOutlineArrowLeft className="inline text-whate" size={17}/></Link>
        </div>
        <div>
          <Image src={logo3} />
        </div>
      </div>
    </>
  );
}
