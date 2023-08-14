import Image from "next/image";
import React from "react";
import logo from "../../assets/image/logoS.png";

export default function page() {
  return (
    <>
      <footer className="bg-secondaryColor2 text-whate py-4">
        <div className="container mx-auto">
          <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-2">
            <div className="font-Medium">
              <Image
                src={logo}
                className="lg:block hidden"
                width={150}
                height={20}
              />
            </div>
            <div className="mt-0 lg:mt-2 md:mt-0">
              <p className="font-Regular text-xl after:w-12 after:bg-primaryColor lg:text-right text-center">
                شرکت تجارت نوین
              </p>
            </div>
            <div>
              <p>dfdsfsdfs</p>
              <p>dfdsfsdfs</p>
              <p>dfdsfsdfs</p>
              <p>dfdsfsdfs</p>
              <p>dfdsfsdfs</p>
            </div>
            <div>
              <p>dfdsfsfsa</p>
              <p>dfgdfgdsgreawcvbvcxbvxctgesg</p>
              <p>dfgdsfgsd</p>
              <p>092214314641</p>
            </div>
            <div>
              <p>dfdsfsdfs</p>
              <p>dfdsfsdfs</p>
              <p>dfdsfsdfs</p>
              <p>dfdsfsdfs</p>
              <p>dfdsfsdfs</p>
            </div>
          </div>
        </div>
        <div className="divide-x-4 divide-yelloe"></div>
      </footer>
    </>
  );
}
