import React from "react";

export default function page(props) {
  return <div>Blog</div>;
}


export async function getServerSideProps() {
  return {
    props : {
      blog : 'slam'
    }
  }
}