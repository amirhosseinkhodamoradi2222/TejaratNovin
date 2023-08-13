import { NextSeo } from "next-seo";

export default function Home(props) {
  return (
    <>
    <NextSeo
      title="Home"
      description="A short description goes here."
      
    />
      <p>{props.amir}</p>
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
