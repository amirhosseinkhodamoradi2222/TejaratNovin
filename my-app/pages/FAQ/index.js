import React from "react";

export default function page() {
  return <div>page</div>;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
