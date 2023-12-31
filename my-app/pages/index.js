import { NextSeo } from "next-seo";
import Header from "@/components/Header/Header";
import Catgory from "@/components/Catgory/Catgory";
import Product from "@/components/Product/Product";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Customer from "@/components/Customer/Customer";
import Blog from "../components/Blog/Blog";
import Divedr from "@/components/Divedr/Divedr";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Home(props) {
  return (
    <>
      <NextSeo title="Home" description="A short description goes here." />
      <Header />
      
      <div className="container mx-auto">
        <p className="font-Regular py-8">دسته بندی ها</p>
        <div className="grid  grid-rows-1 grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-4 ">
          <div className="justify-self-center ">
            <Catgory />
          </div>
          <div className="justify-self-center ">
            <Catgory />
          </div>
          <div className="justify-self-center ">
            <Catgory />
          </div>
          <div className="justify-self-center ">
            <Catgory />
          </div>
        </div>
        <div className="flex justify-between my-12">
          <p className="font-light mt-2">محصولات</p>
          <Link href={'/'} className="lg:font-bold font-light bg-purple text-whate lg:w-36 w-24 lg:py-2 py-1 text-center rounded-lg ">محصولات<AiOutlineArrowLeft className="inline text-whate" size={17}/></Link>

        </div>
        <div className="grid grid-rows-1 grid-cols-1 gap-8 my-8 lg:grid-cols-4">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="my-4">
          <About />
        </div>
        <div className="my-4">
          <Experience />
        </div>
        <p className="text-center font-Medium text-2xl mt-20"> نظر مشتریان </p>
        <Divedr width={24}/>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-4 gap-4">
          <Customer />
          <Customer />
          <Customer />
          <Customer />
        </div>
        <div className="mt-20">
        <div className="flex justify-between my-12">
          <p className="font-light text-lg mt-2">وبلاگ تخصصی ما درباره سنگ</p>
          <Link href={'/'} className="lg:font-bold font-light bg-purple text-whate lg:w-36 w-24 lg:py-2 py-1 text-center rounded-lg ">وبلاگ<AiOutlineArrowLeft className="inline text-whate" size={17}/></Link>
        </div>
        <div className="grid grid-rows-1 grid-cols-1 gap-4 my-8 lg:grid-cols-3">
          <Blog />
          <Blog />
          <Blog />
        </div>
        </div>
      </div>
    </>
  );
}

//server
export async function getServerSideProps() {
  return {
    props: {
      amir: "Amir Hossein",
    },
  };
}
