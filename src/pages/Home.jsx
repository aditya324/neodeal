import React, { useEffect } from "react";
import purbbg from "../assets/purrbg.png"
import winnbg from "../assets/winnbg.png"
import yelimg from "../assets/yelimg.png"
import Button from "../components/Button";


import PurpleSlider from "../components/PurpleSlider";
import BestSellerCard from "../components/BestSellerCard";
import PopularCategories from "../components/PopularCategories";



const Home = () => {



  return (
    <>
      <div>
      <div className="bg-custom-gradient w-full h-auto lg:h-96 flex flex-col md:flex-row lg:flex-row justify-start items-center gap-3 lg:px-7">
  <div
    className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:p-6 md:p-3 rounded-2xl lg:h-auto place-items-center w-80 lg:w-5/6 md:w-full lg:ml-12 md:ml-10 md:h-72  px-10 md:px-5 lg:mt-0 md:mt-0 mt-10 "
    style={{
      backgroundImage: `url(${purbbg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
    <div className="lg:ml-0 md:ml-5 ml-6">
      <p className="text-white font-semibold text-lg ">Buy any product from schemes and</p>
      <p className="text-white lg:text-7xl font-extrabold my-2 text-4xl">WIN BIG!</p>
      <p className="text-white font-medium w-44 lg:w-80">
        Each purchase of a product earns you a
        <span className="block"> unique number, unlocking the chance to</span>
        <span className="block">win lavish prizes.</span>
      </p>

      <div className="flex lg:gap-10 gap-5 justify-start items-center">
        <button className="bg-[#F539F8] text-white lg:my-5 lg:px-5 lg:py-3 px-4 py-2 rounded-full md:py-1 md:px-1 md:w-28 ">
          Buy Now
        </button>
        <a href="" className="text-white underline md:w-10 lg:w-20">
          Learn More
        </a>
      </div>
    </div>
    <div className="lg:mb-0 mb-0 md:mb-10">
      <img src={winnbg} alt="" className="w-full h-auto " />
      <div className="text-center font-semibold text-white">
        <p>
          Its as simple as.. Buy a product,<br />
          spin the wheel & WIN!
        </p>
      </div>
    </div>
  </div>
  <div className="lg:mx-0 mx-10 md:mx-0 lg:mb-0 mb-10 lg:px-5 lg:mt-0 md:mt-10 md:px-5">
    <div className="w-80 h-auto lg:h-80 rounded-xl lg:py-0 py-5 lg:mr-16 md:mr-0 mr-0 lg:px-5"
      style={{ backgroundImage: `url(${yelimg})` }}>
      <div className="flex flex-col items-center lg:py-10">
        <p className="text-red-600 text-lg font-semibold">Your ticket to luxury!</p>
        <p className="text-indigo-600 font-bold text-xl">Introducing</p>
        <h1 className="text-indigo-600 text-6xl font-bold">Schemes</h1>
        <p className="font-bold text-center">Shop for products starting at just <br /> ₹299 and win incredible prizes.</p>
        <Button name="View All Schemes" style="bg-[#5356FB] hover:bg-blue-600 text-white font-bold py-3 px-10 w-60 rounded-full mt-6" />
      </div>
    </div>
  </div>
</div>






        <PurpleSlider />


        <BestSellerCard  />


        <PopularCategories />




      </div>


    </>
  );
};

export default Home;
