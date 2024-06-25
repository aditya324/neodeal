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

const SchemesPage = () => {
  return (
    <>
      <div>
        {/* banner */}
        <div className="bg-custom-gradient w-full h-96 lg:h-96 md:h-96 flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full px-20 lg:mr-5 ">
            <div
              className="h-80 lg:h- lg:min-w-96 md:w-full w-80 rounded-2xl mx-auto"
              style={{
                backgroundImage: `url(${homebg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="grid px-4 mx-auto lg:gap-6 xl:gap-0 lg:grid-cols-12">
                <div className="lg:mr-auto md:mr-auto place-self-center lg:col-span-7 text-center lg:text-left lg:ml-0 lg:my-0 my-0 md:my-16">
                  <p className="max-w-xl text-white md:text-lg lg:text-xl font-semibold lg:mb-6 lg:mt-0 md:mt-0 mt-3">
                    Buy any product from
                  </p>
                  <h1 className="max-w-xl mb-3 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">
                    Hululu Scheme
                  </h1>
                  <p className="max-w-xl text-white md:text-lg lg:text-xl font-semibold">
                    and get a chance to <br /> win a CAR !!
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 mr-3 lg:mt-5 text-base font-medium text-center text-white rounded-3xl bg-[#F539F8]"
                  >
                    View Products
                  </a>
                </div>
                <div className="lg:flex lg:col-span-5 lg:justify-end relative lg:w-auto md:flex md:justify-end lg:bottom-0 bottom-0 md:bottom-64">
                  <img
                    className="object-contain lg:block lg:h-72 md:h-56 h-40 lg:ml-0 ml-16"
                    src={home2}
                    alt="mockup"
                  />
                  <img
                    className="absolute right-1/2 bottom-1 object-contain lg:block hidden h-44"
                    src={car2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* howschemeworks */}
        <div className="bg-[#DEDFF3] w-full">
          <SchemeCard />
        </div>

        <div>
          <div>
            <p className="text-[#374557] font-bold text-xl lg:pl-44 pt-4 pl-36 md:pl-20 bg-[#DEDFF3] pb-5">
              Prize Details
            </p>
          </div>
          <div className="flex justify-center items-center w-full bg-[#DEDFF3] lg:px-40 px-12  shadow-xl">
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
          <SchemeSlider name="Products under scheme" style="lg:ml-28 text-[#374557] text-xl font-bold" />
        </div>
      </div>
    </>
  );
};

export default SchemesPage;
