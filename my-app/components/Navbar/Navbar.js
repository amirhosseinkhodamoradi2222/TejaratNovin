import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/image/logoS.png";
import Link from "next/link";
import langArabic from "../../lang/  arabic";
import { AiFillFilePdf } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const Menu = () => {
    if (menu == false) {
      setMenu(true);
    } else if (menu == true) {
      setMenu(false);
    }
  };
  return (
    <>
      <main className="shadow-md sticky top-0 z-10 text-white bg-secondaryColor2 text-whate">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  src={logo}
                  className="rounded-full w-16 h-16 mr-4 lg:mr-0 lg:w-24 lg:h-24"
                />
              </Link>
            </div>
            <div>
              <div className="hidden md:block lg:block">
                <ul className="flex gap-4 h-28 items-center">
                  <Link className="font-Regular" href={"/product"}>
                    <li>{langArabic.product}</li>
                  </Link>
                  <Link className="font-Regular" href={"/services"}>
                    <li>{langArabic.service}</li>
                  </Link>
                  <Link className="font-Regular" href={"/blog"}>
                    <li>{langArabic.blog}</li>
                  </Link>
                  <Link className="font-Regular" href={"/about"}>
                    <li>{langArabic.aboutUs}</li>
                  </Link>
                  <Link className="font-Regular" href={"/contect"}>
                    <li>{langArabic.contactUs}</li>
                  </Link>
                  <Link className="font-Regular" href={"/FAQ"}>
                    <li>{langArabic.FAQ}</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="block lg:hidden lg:ml-0 ml-4" onClick={Menu}>
                {!menu ? (
                  <FiMenu className="text-whate" size={25} />
                ) : (
                  <FiX className="text-whate" size={25} />
                )}
              </button>
              <button className="font-Medium lg:block hidden rounded-md bg-yelloe text-whate ml-2 py-2 px-8 hover:shadow-lg">
                <span>
                  <AiFillFilePdf size={25} className="inline" />
                </span>{" "}
                <span>{langArabic.catalog}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <div
        className={
          menu
            ? `block md:hidden right-0 lg:hidden shadow-lg h-screen w-1/2 bg-secondaryColor2 absolute text-white z-10`
            : `hidden md:hidden z-10  absolute w-1/2 lg:hidden  h-screen bg-secondaryColor2 text-white`
        }
      >
        <ul className="flex flex-col gap-4 h-28 items-center">
          <Link className="font-Regular text-whate" href={"/product"}>
            <li>{langArabic.product}</li>
          </Link>
          <Link className="font-Regular text-whate" href={"/services"}>
            <li>{langArabic.service}</li>
          </Link>
          <Link className="font-Regular text-whate" href={"/blog"}>
            <li>{langArabic.blog}</li>
          </Link>
          <Link className="font-Regular text-whate" href={"/about"}>
            <li>{langArabic.aboutUs}</li>
          </Link>
          <Link className="font-Regular text-whate" href={"/contect"}>
            <li>{langArabic.contactUs}</li>
          </Link>
          <Link className="font-Regular text-whate" href={"/FAQ"}>
            <li>{langArabic.FAQ}</li>
          </Link>
          <button className="font-demiBold mt-4 rounded bg-yelloe text-whate py-1 px-12 hover:shadow-lg">
            {langArabic.catalog}
          </button>
        </ul>
      </div>
    </>
  );
}
