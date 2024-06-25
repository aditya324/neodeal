// import React, { useEffect, useRef } from 'react'
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// import MobileBg from "../assets/mobilebgg.png";
// import Lapbg from "../assets/laptopbgg.png";
// import Soundbg from "../assets/soundbg.png";
// import Watchbg from "../assets/watch.webp";
// import iphonebg from "../assets/iphone.jpg";
// import Sweater from "../assets/ladies-sweater.jpg";
// import Booksbg from "../assets/books.webp";
// import headph from "../assets/headphone.jpg";
// import coffebg from "../assets/coffee.webp"

// const BestSellerCard = () => {


//     const Products = [
//         {
//           category: "Electronics",
//           pname: "Laptop",
//           bgimg: Lapbg,
//           price: 800,
//         },
//         {
//           category: "Electronics",
//           pname: "Mobile",
//           bgimg: MobileBg,
//           price: 800,
//         },
//         {
//           category: "Electronics",
//           pname: "Sound System",
//           bgimg: Soundbg,
//           price: 800,
//         },
//         {
//           category: "Electronics",
//           pname: "Apple Watch",
//           bgimg: Watchbg,
//           price: 800,
//         },
//         {
//           category: "Electronics",
//           pname: "Iphone 14",
//           bgimg: iphonebg,
//           price: 800,
//         },
    
//         {
//           category: "Home Appliances",
//           pname: "Coffee Maker",
//           bgimg: coffebg,
//           price: 80,
//         },
//         {
//           category: "Books",
//           pname: "Biographies",
//           bgimg: Booksbg,
//           price: 18,
//         },
//         {
//           category: "Electronics",
//           pname: "Headphones",
//           bgimg: headph,
//           price: 50,
//         },
//         {
//           category: "Clothing",
//           pname: "Sweater",
//           bgimg: Sweater,
//           price: 35,
//         },
//       ];

//       const scrollContainer1 = useRef(null);
//   const scrollContainer2 = useRef(null);

//   // const scrollLeft = (scrollContainer) => {
//   //   scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
//   // };

//   const scrollLeft = (scrollContainer) => {
//     if (scrollContainer.current.scrollLeft <= 0) {
//       scrollContainer.current.scrollLeft = scrollContainer.current.scrollWidth;
//     } else {
//       scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
//     }
//   };

//   const scrollRight = (scrollContainer) => {
//     if (
//       scrollContainer.current.scrollLeft +
//         scrollContainer.current.offsetWidth >=
//       scrollContainer.current.scrollWidth
//     ) {
//       scrollContainer.current.scrollLeft = 0;
//     } else {
//       scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const scrollInterval1 = setInterval(() => {
//       scrollRight(scrollContainer1);
//     }, 2000); // scrolls right every 2 seconds

//     const scrollInterval2 = setInterval(() => {
//       scrollLeft(scrollContainer2);
//     }, 2000); // scrolls right every 2 seconds

//     return () => {
//       clearInterval(scrollInterval1); // cleanup on unmount
//       clearInterval(scrollInterval2); // cleanup on unmount
//     };
//   }, []);
//   return (
//    <>
//    {/* DEDFF3 */}
//    <div>
//    <div className='bg-[#DEDFF3]'>
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-lg font-semibold">Popular Products</p>
//               </div>
//               <div className="flex justify-end items-center gap-2">
//                 <button onClick={scrollLeft}>
//                   <div className="bg-[#5356FB] p-3 rounded-full">
//                     <IoIosArrowBack className=" text-white" />
//                   </div>
//                 </button>
//                 <button onClick={scrollRight}>
//                   <div className="bg-[#5356FB] p-3 rounded-full">
//                     <IoIosArrowForward className=" text-white" />
//                   </div>
//                 </button>
//               </div>
//             </div>
//             <div
//               className="overflow-x-scroll no-scrollbar"
//               style={{ scrollBehavior: "smooth" }}
//               ref={scrollContainer2}
//             >
//               <div className="inline-flex justify-start items-center gap-5 my-5">
//                 {Products.map((item, index) => {
//                   return (
//                     <div
//                       className="bg-white p-3 rounded-2xl w-72 h-fit shadow-2xl"
//                       key={index}
//                     >
//                       <div className="grid place-items-center">
//                         <img
//                           src={item.bgimg}
//                           alt=""
//                           className="rounded-lg h-40 w-full object-cover "
//                         />
//                       </div>
//                       <p className="my-2 grid">
//                         <span className="text-gray-500">Category </span>
//                         <span className="text-[#5356FB] whitespace-nowrap">
//                           {item.category}
//                         </span>
//                       </p>
//                       <p className="text-lg font-semibold my-2">{item.pname}</p>
//                       <div className="border border-gray-200 px-2 py-1 rounded-xl">
//                         <p className="text-gray-500">Current Scheme</p>
//                         <div className="flex justify-start items-center gap-2">
//                           <span className="text-[#5356FB] font-semibold">
//                             ${item.price}/-{" "}
//                           </span>
//                           <span className="text-[#EB5757] font-semibold line-through">
//                             $9200/-
//                           </span>
//                         </div>
//                       </div>
//                       <div className="my-5">
//                         <button className="bg-[#F539F8] text-white px-3 py-1 rounded-full">
//                           Get Now
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>



//    </div>
//    </>
//   )
// }

// export default BestSellerCard



import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import MobileBg from "../assets/mobilebgg.png";
import Lapbg from "../assets/laptopbgg.png";
import Soundbg from "../assets/soundbg.png";
import Watchbg from "../assets/watch.webp";
import iphonebg from "../assets/iphone.jpg";
import Sweater from "../assets/ladies-sweater.jpg";
import Booksbg from "../assets/books.webp";
import headph from "../assets/headphone.jpg";
import coffebg from "../assets/coffee.webp";

const Products = [
  {
    category: "Electronics",
    pname: "Laptop",
    bgimg: Lapbg,
    price: 800,
  },
  {
    category: "Electronics",
    pname: "Mobile",
    bgimg: MobileBg,
    price: 800,
  },
  {
    category: "Electronics",
    pname: "Sound System",
    bgimg: Soundbg,
    price: 800,
  },
  {
    category: "Electronics",
    pname: "Apple Watch",
    bgimg: Watchbg,
    price: 800,
  },
  {
    category: "Electronics",
    pname: "Iphone 14",
    bgimg: iphonebg,
    price: 800,
  },
  {
    category: "Home Appliances",
    pname: "Coffee Maker",
    bgimg: coffebg,
    price: 80,
  },
  {
    category: "Books",
    pname: "Biographies",
    bgimg: Booksbg,
    price: 18,
  },
  {
    category: "Electronics",
    pname: "Headphones",
    bgimg: headph,
    price: 50,
  },
  {
    category: "Clothing",
    pname: "Sweater",
    bgimg: Sweater,
    price: 35,
  },
];

const CustomArrow = ({ className, onClick, icon }) => (
  <button onClick={onClick} className={className} style={{ background: "#5356FB", borderRadius: "50%", padding: "10px" }}>
    {icon}
  </button>
);

const BestSellerCard = ({name ,style}) => {
  const sliderRef = React.useRef(null);

  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    // autoplay: true,
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='bg-[#DEDFF3]  lg:px-16 '>
      <div className="flex justify-between items-center mb-3 lg:mb-4 lg:flex-row  flex-col md:flex-row   " >
        <p className="font-semibold text-[#374557]  text-xl mt-5 lg:ml-0 ml-0 md:ml-10 md:mt-5">Best Seller</p>
        <div className="flex justify-end items-center gap-2 lg:mr-8 lg:mt-0  mt-5 md:mt-8 md:mr-5">
          <button onClick={() => sliderRef.current.slickPrev()}>
            <div className="bg-[#5356FB] p-3 rounded-full">
              <IoIosArrowBack className="text-white" />
            </div>
          </button>
          <button onClick={() => sliderRef.current.slickNext()}>
            <div className="bg-[#5356FB] p-3 rounded-full">
              <IoIosArrowForward className="text-white" />
            </div>
          </button>
        </div>
      </div>
      <div className='lg:mx-0 md:mx-3 mx-12 lg:ml-0  ml-3   '>
      <Slider ref={sliderRef} {...settings} className="" >
        {Products.map((item, index) => (
          <div key={index} className='lg:px-0 px-8 md:px-4 lg:ml-0 md:ml-0 ml-10'>
            <div className="bg-white p-2 rounded-2xl lg:w-64 h-fit w-60 ">
              <div className="grid place-items-center">
                <img
                  src={item.bgimg}
                  alt=""
                  className="rounded-lg h-32 w-full object-cover"
                />
              </div>
              <p className="my-2 grid">
                <span className="text-gray-500 font-base">Category <span className="text-[#5356FB] whitespace-nowrap font-bold">
                  {item.category}
                </span> </span>
                
              </p>
              <p className="text-lg font-semibold my-2">{item.pname}</p>
              <div className="border border-gray-200 px-2 py-1 rounded-xl">
                <p className="text-gray-500">Current Scheme</p>
                <div className="flex justify-start items-center gap-2">
                  <span className="text-[#5356FB] font-bold">
                    ${item.price}/-{" "}
                  </span>
                  <span className="text-[#EB5757] font-bold line-through">
                    $9200/-
                  </span>
                </div>
              </div>
              <div className="my-3">
                <button className="bg-[#F539F8] text-white px-3 py-1 rounded-full">
                  Get Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default BestSellerCard;
