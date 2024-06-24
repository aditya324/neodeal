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
     <div className="bg-custom-gradient w-full h-auto lg:h-96 flex flex-col lg:flex-row justify-start items-center gap-20">
  <div
    className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-5 rounded-2xl lg:h-auto ml-5  place-items-center w-full lg:w-3/5 md:w-5/6 lg:ml-12"
    style={{ backgroundImage: `url(${purbbg})`,  backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat" }}
  >
    <div className="">
      <p className="text-white">Buy any product from schemes and</p>
      <p className="text-white text-4xl font-bold my-5">WIN BIG!</p>
      <p className="text-white">
        Each purchase of a product earns you a unique number,
        unlocking the chance to win lavish prizes. It's as simple
        as... Buy a product, spin the wheel & WIN!
      </p>
      <div className="flex  gap-10 justify-start items-center">
        <button className="bg-[#F539F8] text-white my-5 px-3 py-1 rounded-full">
          Buy Now
        </button>
        <a href="" className="text-white underline">
          Learn More
        </a>
      </div>
    </div>
    <div>
      <img src={winnbg} alt="" className="w-full h-auto" />
    </div>
  </div>
  <div className="lg:mx-0 mx-10 lg:mb-0 mb-10 ">
  <div className="w-full lg:w-80 h-auto lg:h-80 rounded-xl lg:py-0 py-5  "
  style={{backgroundImage:`url(${yelimg})`}}>
    <div className="flex flex-col items-center lg:py-10">
      <p className="text-red-600 text-lg font-semibold">Your ticket to luxury!</p>
      <p className="text-indigo-600 font-bold text-xl">introducing</p>
      <h1 className="text-indigo-600 text-4xl font-bold">Schemes</h1>
      <p className="ml-7 font-bold">Shop for products starting at just ₹299 and win incredible prizes.</p>
      
      {/* <button className="bg-[#5356FB] hover:bg-blue-600 text-white font-bold py-2 px-20 rounded-full mt-6">
          Submit
      </button> */}
      <Button name="Submit" style="bg-[#5356FB] hover:bg-blue-600 text-white font-bold py-2 px-20 rounded-full mt-6" />
      
    </div>
  </div>
  </div>
</div>



   

<PurpleSlider/>


<BestSellerCard name="Best Seller" style="font-bold text-[#374557] lg:ml-12 ml-5  mb-5 text-xl" />


<PopularCategories/>



     
     </div>
    

    </>
  );
};

export default Home;
