import React from 'react';
import bag from "../assets/bag.png";
import wheel from "../assets/wheel.png";
import cup from "../assets/cup.png";
import car from "../assets/car.png";
import SchemeCard from '../components/SchemeCard';
import BestSellerCard from '../components/BestSellerCard';
import { IoClose } from "react-icons/io5";
import homebg from "../assets/homebg.png";
import car2 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import SchemeSlider from '../components/SchemeSlider';
import schmepageimg from "../assets/schemepimg.png"

const SchemesPage = () => {
  return (
    <>
      <div>
        {/* banner */}
        <div
  className="bg-custom-gradient w-full lg:h-96 md:h-96 flex flex-col lg:flex-col justify-center items-center"
  style={{ height: "610px" }}
>
<div className="w-full px-4 md:px-20 lg:mr-5">
  <div
    className="h-80 lg:min-w-72 md:w-full w-72 rounded-2xl flex flex-col lg:flex-row items-center justify-between lg:gap-24 lg:ml-0 md:ml-0 ml-10 lg:pt-0 md:pt-0 pt-5 "
    style={{
      backgroundImage: `url(${homebg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "434px",
    }}
  >
    <div className="flex flex-col lg:flex-row items-center justify-between px-5 lg:w-full xl:gap-10 lg:ml-10">
      <div className="text-center lg:text-left md:text-left lg:mr-auto md:mr-80 lg:col-span-7 lg:ml-0 lg:my-10 my-0 md:my-16">
        <p className="max-w-xl text-white md:text-lg lg:text-4xl font-semibold lg:mb-8 lg:mt-0 md:mt-0">
          Buy any product from
        </p>
        <h1 className="mb-5 text-3xl lg:text-7xl font-extrabold tracking-tight leading-none md:text-4xl text-white">
          Hululu Scheme
        </h1>
        <p className="max-w-xl text-white md:text-lg lg:text-4xl font-semibold mb-5">
          and get a chance to <br /> win a CAR !!
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-4 py-2 mr-3 lg:mt-5 text-base font-medium text-center text-white rounded-3xl bg-[#F539F8]"
        >
          View Products
        </a>
      </div>
      <div className="flex flex-col lg:h-96 items-center lg:items-start lg:w-auto lg:ml-10 mt-5 lg:mt-0  relative lg:bottom-0 md:bottom-80 lg:left-0 md:left-28">
        <img
          className="lg:w-full md:w-96 object-cover   "
          src={schmepageimg}
          alt="scheme page image"
          
        />
        <p className="text-white mt-3 lg:ml-60 md:mb-10 underline">Scheme Policies</p>
      </div>
    </div>
  </div>
</div>
<div>
  <div className="flex justify-center  lg:mt-10 md:mt-10 mt-5">
    <div className="w-64 sm:w-72 md:w-80 lg:w-96 bg-gray-200 rounded-full h-2.5 ">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '56%' }}></div>
    </div>
    <p className="   text-white ml-3">
  56%
</p>
  </div>

  

  <p className="w-full text-center text-lg font-semibold text-[#374557]">Winner to be announced at 100%, <span className="text-blue-700">Hurry up</span> on schemes</p>
</div>

</div>


        {/* howschemeworks */}
        <div className="bg-[#DEDFF3] w-full">
          <SchemeCard />
        </div>

        <div>
          <div>
            <p className="text-[#374557] font-bold text-xl lg:pl-20 pt-4 pl-36 md:pl-20 bg-[#DEDFF3] pb-5">
              Prize Details
            </p>
          </div>
          <div className="flex justify-center items-center w-full bg-[#DEDFF3] lg:px-20 px-12  md:px-16  ">
            <div className="bg-[#EBE4FF] rounded-2xl shadow-xl">
              <div className="flex justify-end mr-1 mt-1">
                <IoClose className="w-5 h-5" />
              </div>
              <div className="flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden">
                <div className="flex-shrink-0 flex justify-center md:justify-start lg:mb-5 p-4 md:p-0 md:pl-4">
                  <img
                    src={car}
                    alt="car.png"
                    className="lg:w-40 h-44 lg:h-36 object-cover md:w-48 md:h-48 rounded-2xl"
                  />
                </div>
                <div className="flex flex-col justify-center p-4">
                  <div className="mb-4">
                    <p className="text-base font-semibold">BMW CAR</p>
                  </div>
                  <ul className="list-disc pl-4 space-y-2 text-base font-normal">
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled eggs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SchemeSlider name="Products under scheme" style="lg:ml-10 text-[#374557] text-xl font-bold md:ml-8" />
        </div>
      </div>
    </>
  );
};

export default SchemesPage;
