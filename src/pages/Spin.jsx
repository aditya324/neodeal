import React from "react";
import spin from "../assets/spin.gif";
import car from "../assets/carSpin.png";
import { FaGift } from "react-icons/fa6";

const Spin = () => {
  return (
    <div className="bg-gray-300 w-full flex flex-col justify-center items-center p-10 text-center">
      <h2 className="my-5 font-bold text-3xl leading-10">Your Lucky number is...</h2>
      <div className="flex justify-center items-center w-80 relative">
        <img
          src={spin}
          alt="Spin"
          className="mx-2 w-80"
          style={{ zIndex: 0 }}
        />
        <img src={car} alt="Car" className="mx-2 absolute w-80 right-40 top-20" style={{ zIndex: 1 }} />
      </div>
      <h2 className="font-semibold text-xl">Scheme name: Car hululu</h2>
      <h3 className="flex items-center justify-center mt-2 font-semibold text-gray-700">
        <FaGift className="mr-2" /> Hyundai Car
      </h3>
    </div>
  );
};

export default Spin;
