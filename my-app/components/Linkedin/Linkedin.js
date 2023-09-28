import React from "react";
import { BiLogoLinkedin, BiLogoLinkedinSquare } from "react-icons/bi";

function Linkedin() {
  return (
    <>
      <div className="lg:w-2/3 md:w-2/3 w-full h-28 lg:h-36 bg-purple my-12 ml-14 rounded-lg shadow">
        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1">
            <BiLogoLinkedin className="text-whate w-full h-full hidden lg:block md:block opacity-50" />
          </div>
          <div className="col-span-2 text-whate mt-4">
            <p className="font-Regular mr-4 m-0 text-lg">
              لینکدین مرا دنبال کنید
            </p>
            <div className="flex justify-end ml-6 mt-6 lg:mt-10">
              <BiLogoLinkedinSquare className="text-whate m-0" size={40} />
              <button className="font-light rounded pt-1 text-center px-4 py-0 hover:bg-whate hover:text-secondaryColor1 duration-700 hover:duration-700">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Linkedin;
