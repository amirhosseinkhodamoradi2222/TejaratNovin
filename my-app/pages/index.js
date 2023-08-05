
export default function Home(props) {
  return (
    <>
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
