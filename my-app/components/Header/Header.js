import Image from "next/image";
import React from "react";
import logo3 from '../../assets/image/logo3.png'
function Header() {
  return (
    <>
      <section className="bg-secondaryColor2">
        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
          <div className="mr-4 lg:mr-0">
            <h1 className="font-Medium text-md lg:text-3xl"> شرکت تجارت نوین تولید و عرضه مستقیم کاشی و سرامیک</h1>
            <h2 className="font-Regular mt-2 lg:text-3xl text-md">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h2>
          </div>
          <div>
            <Image src={logo3} width={600} height={600} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
