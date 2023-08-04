import Form from "../components/Navbar/form";


export default function Home(props) {
  return (
    <>
      <h1 className="text-center bg-gray-500">Slam</h1>
      <Form />
      <p>{props.amir}</p>
    </>
  );
}
export async function getServerSideProps () {
  return{
    props : {
      amir : 'Amir Hossein'
    }
  }
}