import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/image/logoS.png";
import Link from "next/link";
import langArabic from "../../lang/  arabic";
import { AiFillFilePdf } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [displaymenu,setSisplay] = useState('hidden')
  const [textMenu , SetTextMenu] = useState('شرکت تجارت نوین')

  const Menu = () => {
    if (menu == false) {
      setMenu(true);
    } else if (menu == true) {
      setMenu(false);
    }
  };
  return (
    <>
      <main className="sticky top-0 z-20">
        <div className="shadow-md text-white bg-secondaryColor2 text-whate">
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
                  <Link className="font-Regular hover:text-primaryColor h-full mt-[86px] hover:font-demiBold duration-300 hover:duration-300" onMouseLeave={() => setSisplay('hidden')} onMouseOver={() => setSisplay('absolute')} href={"/product"}>
                    <li>{langArabic.product}</li>
                  </Link>
                  <Link className="font-Regular hover:text-primaryColor hover:font-demiBold duration-300 hover:duration-300" href={"/blog"}>
                    <li>{langArabic.blog}</li>
                  </Link>
                  <Link className="font-Regular hover:text-primaryColor hover:font-demiBold duration-300 hover:duration-300" href={"/about"}>
                    <li>{langArabic.aboutUs}</li>
                  </Link>
                  <Link className="font-Regular hover:text-primaryColor hover:font-demiBold duration-300 hover:duration-300" href={"/contect"}>
                    <li>{langArabic.contactUs}</li>
                  </Link>
                  <Link className="font-Regular hover:text-primaryColor hover:font-demiBold duration-300 hover:duration-300" href={"/FAQ"}>
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
        </div>
      <div className={`w-full top-30 z-30 duration-500 ${displaymenu}`}  onMouseLeave={() => setSisplay('hidden')} onMouseOver={() => setSisplay('absolute')} href={"/product"}>
        <div className="container mx-auto">
          <div className="bg-secondaryColor2 text-[#fff] shadow-md p-4 ">
        <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
          <div className="">
            <Link onMouseOver={() => SetTextMenu('سلام خوبی')}  className="font-Medium block p-2 mr-3 duration-300 hover:duration-300 hover:shadow hover:text-[#fff] hover:bg-secondaryColor3 hover:rounded-lg" href={'/'}>سنگ سرامیک</Link>
            <Link onMouseOver={() => SetTextMenu('سلام چطوری')} className="font-Medium block p-2 mr-3 duration-300 hover:duration-300 hover:shadow hover:text-[#fff] hover:bg-secondaryColor3 hover:rounded-lg" href={'/'}>سنگ سرامیک</Link>
            <Link onMouseOver={() => SetTextMenu('سلام فدات')}  className="font-Medium block p-2 mr-3 duration-300 hover:duration-300 hover:shadow hover:text-[#fff] hover:bg-secondaryColor3 hover:rounded-lg" href={'/'}>سنگ سرامیک</Link>
            <Link onMouseOver={() => SetTextMenu('سلام مرسی')}  className="font-Medium block p-2 mr-3 duration-300 hover:duration-300 hover:shadow hover:text-[#fff] hover:bg-secondaryColor3 hover:rounded-lg" href={'/'}>سنگ سرامیک</Link>
          </div>
          <div className="">
          <p className="font-Regular text-right">{textMenu}</p>
          </div>
          </div>
          </div>
        </div>
      </div>
      </main>


      <div
        className={
          menu
            ? `h-4/5 md:hidden right-0 lg:hidden shadow-lg w-1/2 bg-secondaryColor2 absolute ease-linear duration-500 text-white inline-block z-10`
            : `hidden`
        }
      >
        <ul className="flex flex-col gap-4 h-28 items-center">
          <Link className="font-Regular text-whate" href={"/product"}>
            <li>{langArabic.product}</li>
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
