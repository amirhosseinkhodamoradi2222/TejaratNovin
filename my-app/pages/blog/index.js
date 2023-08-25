import React from "react";
import Blog from '../../components/Blog/Blog'
export default function page(props) {
  return (
    <>
    <section className="container mx-auto my-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mx-0 md:mx-4 mx-10">
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
      </div>
    </section>
    </>
  )
}


export async function getServerSideProps() {
  return {
    props : {
      blog : 'slam'
    }
  }
}