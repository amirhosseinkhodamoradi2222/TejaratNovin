import { NextSeo } from "next-seo";
import Header from "@/components/Header/Header";
import Catgory from "@/components/Catgory/Catgory";
import Product from "@/components/Product/Product";

export default function Home(props) {
  return (
    <>
    <NextSeo
      title="Home"
      description="A short description goes here."
      
    />
      <p className="font-Regular">دسته بندی ها</p>
      <div className="grid  grid-rows-1 grid-cols-2 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 gap-2 ">
         <div className="justify-self-center ">
         <Catgory/>
          </div> 
          <div className="justify-self-center ">
         <Catgory/>
          </div> 
          <div className="justify-self-center ">
         <Catgory/>
          </div> 
          <div className="justify-self-center ">
         <Catgory/>
          </div> 
      </div>
      <div className="flex justify-between ">
        <p className="font-light">محصولات</p>
        <p className="font-light">محصولات</p>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-6">
        <Product/>
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
