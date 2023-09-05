import loadingImg from "../../assets/image/logoS.png";
import loadingGif from "../../assets/image/Loading.gif";
import Image from "next/image";

function Loading() {

  return (
    <div className={"relative"}>
      <div className="fixed bg-[#000] z-40 bg-opacity-70 h-full top-0 w-full">
        <div class="relative h-screen">
          <div class="fixed inset-0 flex justify-center items-center">
            <div className="bg-[#fff] rounded-lg shadow-lg pt-8 px-20">
              <Image src={loadingImg} className="w-40 h-40 block text-center" />
              <p className="font-Regular text-2xl text-center">
                لطفا کمی صبر کنید
              </p>
              <div className="flex justify-center mt-4 items-center">
                <Image
                  src={loadingGif}
                  className="h-20 w-20"
                  alt="Loading GIF"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
