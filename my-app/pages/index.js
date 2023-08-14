import { NextSeo } from "next-seo";
import Header from "@/components/Header/Header";
import Catgory from "@/components/Catgory/Catgory";
import Product from "@/components/Product/Product";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Customer from "@/components/Customer/Customer";

export default function Home(props) {
  return (
    <>
      <NextSeo title="Home" description="A short description goes here." />
      <p className="font-Regular py-8">دسته بندی ها</p>
      <div className="grid  grid-rows-1 grid-cols-2 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 gap-2 ">
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
      <div className="flex justify-between my-8">
        <p className="font-light">محصولات</p>
        <p className="font-light">محصولات</p>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 my-8 lg:grid-cols-6">
        <Product />
      </div>
      <div className="my-4">
        <About />
      </div>
      <div className="my-4">
        <Experience />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-4 gap-4">
        <Customer />
        <Customer />
        <Customer />
        <Customer />
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
