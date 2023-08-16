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

export default function Experience() {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <p className="font-bold text-4xl my-12"> مشتریان ما از کدام <span className="text-primaryColor">کشور ها</span> هستند </p>
          <p className="font-Medium mb-9 text-xl">تجربه صادرات به بیش از <span className="text-primaryColor font-bold text-2xl">10 کشور در اسیا و اروپا</span></p>
          <div className="text-right">
            <div class="flex">
              <Image
               data-tooltip-id="my-tooltip"
               data-tooltip-content="Iraq"
                src={iraq}
                width={180}
                height={180}
                className="border-2 border-white shadow shadow-primaryColor rounded-full h-24 w-24 -mr-6 hover:ml-6"
              />

              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Qatar"
                src={qatar}
                width={180}
                height={180}
                className="border-2 border-white shadow shadow-primaryColor rounded-full h-24 w-24 -mr-6 hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Emirates"
                src={emirates}
                width={180}
                height={180}
                className="border-2 border-white shadow shadow-primaryColor rounded-full h-24 w-24 -mr-6 hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Oman"
                src={oman}
                width={180}
                height={180}
                className="border-2 border-white shadow shadow-primaryColor rounded-full h-24 w-24 -mr-6 hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Lobanon"
                src={lebanon}
                width={180}
                height={180}
                className="border-2 border-white shadow shadow-primaryColor rounded-full h-24 w-24 -mr-6 hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Kuwate"
                src={kuwait}
                width={180}
                height={180}
                className="border-2 border-white shadow shadow-primaryColor rounded-full h-24 w-24 -mr-6  hover:-mr-1 hover:ml-6"
              />
              <Image
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Syria"
                src={syria}
                width={180}
                height={180}
                className="border-2 border-white shadow shadow-primaryColor rounded-full h-24 w-24 -mr-6 hover:mr-1" 
              />
              <Tooltip id="my-tooltip" />
            </div>
          </div>
        </div>
        <div>
          <Image src={logo3} />
        </div>
      </div>
    </>
  );
}
