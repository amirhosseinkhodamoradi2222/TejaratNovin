import React from "react";

export default function index() {
  return <div>index</div>;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  return {
    props: {},
  };
}
