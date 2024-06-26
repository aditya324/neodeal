import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import bg from '../assets/abtus.jpg';
import logo from '../assets/footer logo.png';
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-300 min-h-screen xl:px-32 px-3 py-5">
      <div className="mt-5">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeftLong className="text-2xl" />
        </button>
      </div>
      <div className="my-5 flex lg:flex-row flex-col gap-5 w-full">
        <div
          className="lg:w-2/5 w-full xl:h-[528px] lg:h-96 md:w-1/2 h-96  bg-center bg-cover rounded-3xl flex items-center justify-center lg:p-5 p-5"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <img src={logo} alt="Logo" className=" lg:w-auto" />
        </div>
        <div className="lg:w-3/5 w-full lg:py-5">
          <p className="font-semibold text-2xl text-[#5356FB] mb-4">About us</p>
          <p className="text-justify text-gray-700 text-base font-normal lg:leading-8">
            Neodeals is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            it to make a type specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
