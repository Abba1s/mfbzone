import React from "react";
import logo from "../assets/images/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-footerColor mt-[56px]">
      <div className="wrapper flex flex-col md:flex-row justify-around items-center  my-[56px]">
        <div>
          <img src={logo} alt="logo" />
          <p className="max-w-[400px] text-white text-[18px] font-[500]">
            <span className="text-secondaryColor">PROCORE Estimators</span> are
            an industry leader in providing accurate and reliable construction
            cost estimation services. We specialize in Quantity and Material
            Takeoff, Scheduling, and Planning for your project management needs.
            Our experts use advanced softwares and we pay close attention to
            detail to ensure accurate estimates. We provide you with accurate
            information in a timely manner, enabling you to make informed
            decisions and execute projects efficiently. Rely on PROCORE
            Estimators for precise and prompt cost estimation in construction.
          </p>
        </div>
        <div className="my-5">
          <h2 className="text-white text-[30px] font-[600]">Navigation</h2>
          <ul className="mt-5 flex flex-col gap-3 justify-center items-center">
            <li className="text-white text-[20px] font-[600]">Service</li>
            <li className="text-white text-[20px] font-[600]">About us</li>
            <li className="text-white text-[20px] font-[600]">Payment</li>
            <li className="text-white text-[20px] font-[600]">Sample</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-[30px] font-[600]">Contact</h2>
          <div className="text-white flex flex-col gap-8 mt-5">
            <div className="flex gap-2 items-center">
              <div className="border border-white rounded-full p-1">
                <IoLocationOutline />
              </div>
              <p className="text-[16px]">
                2505 Bedford Ave, Brooklyn, NY 11226, USA
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="border border-white rounded-full p-1">
                <BsFillTelephoneFill />
              </div>
              <p className="text-[16px]">+1 917 300 1079</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="border border-white rounded-full p-1">
                <GrMail />
              </div>
              <p className="text-[16px]">Dave@procoreestimators.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white font-[500] text-center pb-5">
        Copyright © 2023 Procore Estimators Designed By
        <span className="text-green-500">&nbsp;MF</span><span className="text-secondaryColor">Bzone</span>
      </p>
    </footer>
  );
};

export default Footer;
