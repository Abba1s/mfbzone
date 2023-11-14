import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <div className="bg-primaryColor min-h-[8rem] w-full flex justify-center flex-col gap-3 items-center lg:relative p-2">
          <div>
            <h3 className="text-white text-[18px] font-[600] md:text-[25px]">
              TURN AROUND TIME 24-48 HOURS!
            </h3>
            <p className="bg-secondaryColor text-[16px] font-[600] md:text-[21px] py-2 mt-2 rounded-full text-center">
              Affordable estimate (30% off)
            </p>
          </div>

          <div className="flex gap-5 items-center text-white lg:absolute top-[32px] right-[3rem] ">
            <div>
              <div className="flex gap-2 items-center">
                <div className="border border-white rounded-full p-1">
                  <BsFillTelephoneFill />
                </div>
                <p className="text-[16px]">+1 917 300 1079</p>
              </div>
              <div className="flex gap-2 items-center mt-1">
                <div className="border border-white rounded-full p-1">
                  <GrMail />
                </div>
                <p className="text-[16px]">Dave@procoreestimators.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <BsFacebook />

              <BsLinkedin />
            </div>
          </div>
        </div>

        {/* _______________________Navbar_________________________ */}

        <Navbar />
      </header>
    </>
  );
};

export default Header;
