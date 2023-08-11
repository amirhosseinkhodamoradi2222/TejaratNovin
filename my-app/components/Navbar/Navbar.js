import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/image/logoS.png";
import Link from "next/link";
import langArabic from '../../lang/  arabic'
import { AiFillFilePdf } from "react-icons/ai";

export default function Navbar() {
  const [menu,setMenu] = useState(false)
  const Menu = () => {
    if(menu == false) {
      setMenu(true)
    } else if (menu == true) {
      setMenu(false)
    }
  }
  return (
    <>
      <main className="shadow-md text-white bg-secondaryColor2 text-whate">
        <div className="container mx-8 lg:mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link href='/'>
                <Image src={logo}  className="rounded-full w-24 h-24" />
              </Link>
            </div>
            <div>
              <div className="hidden md:block lg:block">
              <ul className="flex gap-4 h-28 items-center">
               <Link href={'/'}><li>{langArabic.product}</li></Link>
               <Link className="font-Regular" href={'/blog'}><li>{langArabic.service}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.blog}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.aboutUs}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.contactUs}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.FAQ}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.photoGallery}</li></Link>
              </ul>
              </div>
            </div>
            <div className="flex gap-4">
            <p onClick={Menu}>sss</p>
            <button className="font-Medium rounded-xl bg-yelloe text-whate py-2 px-12 hover:shadow-lg"><span><AiFillFilePdf size={25} className="inline"/></span> <span>{langArabic.catalog}</span></button>
            </div>
          </div>
        </div>
      </main>
      <div className={menu ? `block md:hidden right-0 lg:hidden  h-screen w-1/2 bg-black absolute text-white` : `hidden md:hidden  absolute w-1/2 lg:hidden  h-screen bg-black text-white`}>
              <ul className="flex flex-col gap-4 h-28 items-center">
               <Link className="font-Regular" href={'/'}><li>{langArabic.product}</li></Link>
               <Link className="font-Regular" href={'/blog'}><li>{langArabic.service}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.blog}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.aboutUs}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.contactUs}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.FAQ}</li></Link>
               <Link className="font-Regular" href={'/'}><li>{langArabic.photoGallery}</li></Link>
            <button className="font-demiBold rounded bg-yelloe text-whate py-1 px-12 hover:shadow-lg">{langArabic.catalog}</button>
              
              </ul>
              </div>
    </>
  );
}
