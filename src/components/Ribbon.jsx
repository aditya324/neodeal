import React from 'react';
import elec from "../assets/electronics.png";
import { IoIosArrowRoundForward } from 'react-icons/io';

const Ribbon = () => {
  return (
    <div className="relative overflow-hidden w-64 h-20 bg-white border rounded-xl flex items-center">
      <div className="absolute right-0 top-0 h-20 w-16">
        <div className="bg-[#5356FB] rotate-45 px-10 h-8 text-center text-white font-semibold py-1 w-[120px]">
          <IoIosArrowRoundForward
            className="text-white relative font-bold"
            style={{ transform: "rotate(-45deg)", fontSize: "1.5rem" }}
          />
        </div>
      </div>
      <div className="rounded-full overflow-hidden border-2 border-[#5356FB] p-1 ml-4">
        <img
          src={elec}
          alt="Electronics"
          className="rounded-full"
        />
      </div>
      <div className="font-semibold text-[#374557] text-base ml-5">
        <h2>Electronics</h2>
      </div>
    </div>
  );
}

export default Ribbon;
