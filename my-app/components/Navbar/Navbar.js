import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/image/logo.jpeg";
import Link from "next/link";

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
      <main className="shadow-md text-white bg-black">
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
              <Link href={'/'}><li>Product</li></Link>
               <Link className="text-yellow-700" href={'/blog'}><li>Service</li></Link>
               <Link href={'/'}><li>Blog</li></Link>
               <Link href={'/'}><li>Contect</li></Link>
               <Link href={'/'}><li>FAQ</li></Link>
              </ul>
              </div>
            </div>
            <div onClick={Menu}>sss</div>
          </div>
         
        </div>
        
      </main>
      <div className={menu ? `block md:hidden right-0 lg:hidden  h-screen w-1/2 bg-black absolute text-white` : `hidden md:hidden  absolute w-1/2 lg:hidden  h-screen bg-black text-white`}>
              <ul className="flex flex-col gap-4 h-28 items-center">
              <Link href={'/blog'}><li>Product</li></Link>
              <Link href={'/'}><li>Service</li></Link>
              <Link href={'/'}><li>Blog</li></Link>
              <Link href={'/'}><li>Contect</li></Link>
              <Link href={'/'}><li>FAQ</li></Link>
              </ul>
              </div>
    </>
  );
}
