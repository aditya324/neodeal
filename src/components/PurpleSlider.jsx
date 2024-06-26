//  import React, { useEffect, useRef } from 'react' import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import purbbg from "../assets/purrbg.png"
// import winnbg from "../assets/winnbg.png"
//  import cwin from "../assets/cwin.png"
//  import "slick-carousel/slick/slick.css"; 
//  import "slick-carousel/slick/slick-theme.css";
//  import Slider from "react-slick";

//  const PurpleSlider = () => {

//   const sliderRef = React.useRef(null);

//   const CustomArrow = ({ className, onClick, icon }) => (
//     <button onClick={onClick} className={className} style={{ background: "#5356FB", borderRadius: "50%", padding: "10px" }}>
//       {icon}
//     </button>
//   );
//     const Trending = [
//   {
//     title: "Scheme Name ",
//     desc: "Lorem Ipsum has been the industry's dummy text to use as content.",
//     bgimg: "https://picsum.photos/200/300",
//   },
//   {
//     title: "Scheme Name ",
//     desc: "Lorem Ipsum has been the industry's dummy text to use as content.",
//     bgimg: "https://picsum.photos/200/300",
//   },
//   {
//     title: "Scheme Name ",
//     desc: "Lorem Ipsum has been the industry's dummy text to use as content.",
//     bgimg: "https://picsum.photos/200/300",
//   }
// ];
//       // const scrollContainer1 = useRef(null);
//       // const scrollContainer2 = useRef(null);
    
//       // const scrollLeft = (scrollContainer) => {
//       //   if (scrollContainer.current.scrollLeft <= 0) {
//       //     scrollContainer.current.scrollLeft = scrollContainer.current.scrollWidth;
//       //   } else {
//       //     scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
//       //   }
//       // };
    
//       // const scrollRight = (scrollContainer) => {
//       //   if (
//       //     scrollContainer.current.scrollLeft +
//       //       scrollContainer.current.offsetWidth >=
//       //     scrollContainer.current.scrollWidth
//       //   ) {
//       //     scrollContainer.current.scrollLeft = 0;
//       //   } else {
//       //     scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
//       //   }
//       // };
    
//       // useEffect(() => {
//       //   const scrollInterval1 = setInterval(() => {
//       //     scrollRight(scrollContainer1);
//       //   }, 2000); // scrolls right every 2 seconds
    
//       //   const scrollInterval2 = setInterval(() => {
//       //     scrollLeft(scrollContainer2);
//       //   }, 2000); // scrolls right every 2 seconds
    
//       //   return () => {
//       //     clearInterval(scrollInterval1); // cleanup on unmount
//       //     clearInterval(scrollInterval2); // cleanup on unmount
//       //   };
//       // }, []);


//       const settings = {
   
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: false, // Disable default arrows
//         // autoplay: true,
//         autoplaySpeed: 3000, // Auto-play speed in milliseconds
//         pauseOnHover: true,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//             }
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             }
//           }
//         ]
//       };
    
//   return (
//     <div className="bg-custom-blue w-full h-80 p-4 overflow-x-hidden">
//     <p className="text-white relative top-12 left-10 text-xl mb-3 font-semibold">All Live Schemes</p>
//     <div className="flex justify-end items-center gap-2 mb-4 lg:mr-8">
//       <button onClick={() => sliderRef.current.slickPrev()}>
//         <div className="bg-[#5356FB] p-3 rounded-full">
//           <IoIosArrowBack className="text-white" />
//         </div>
//       </button>
//       <button onClick={() => sliderRef.current.slickNext()}>
//         <div className="bg-[#5356FB] p-3 rounded-full">
//           <IoIosArrowForward className="text-white" />
//         </div>
//       </button>
//     </div>
//     <div className=''>
//     <Slider ref={sliderRef} {...settings}>
//     {Trending.map((trend, index) => (
//       <div key={index} className=" w-1/2 px-5   ">
//         <div className="flex bg-custom-card rounded-lg overflow-hidden h-32  lg:py-1" >
//           <div className="flex-1 p-4">
//             <h1 className="text-xl font-bold text-white">{trend.title}</h1>
//             <p className="mt-2 text-white text-base ">{trend.desc}</p>
//           </div>
//           <div className=" flex items-center justify-center">
//             <img
//               src={cwin}
//               alt="Image"
//               className="w-32 h-20 object-contain mt-6 "
//             />
//           </div>
//         </div>
//       </div>
//     ))}
//   </Slider>
//     </div>

//   </div>
//   )
// }

// export default PurpleSlider




// import React, { useEffect, useRef, useState } from 'react'
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// useRef
// const PurpleSlider = () => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     const dropdownItems = document.querySelectorAll(".dropdown_menu li");

//     dropdownItems.forEach((item, index) => {
//       item.style.setProperty("--index", index);
//     });
//   }, []);

 

//   const Trending = [
//     {
//       title: "Amazing Deals",
//       desc: "Get the best discounts on all your favorite products.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//     {
//       title: "New Arrivals",
//       desc: "Discover the latest trends and styles in fashion.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//     {
//       title: "Tech Gadgets",
//       desc: "Explore cutting-edge technology and innovative gadgets.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//     {
//       title: "Travel Escapes",
//       desc: "Plan your next adventure to exotic destinations.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//     {
//       title: "Healthy Living",
//       desc: "Tips and tricks for maintaining a balanced lifestyle.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//     {
//       title: "Home Decor",
//       desc: "Transform your living space with stylish decor ideas.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//     {
//       title: "Fitness Goals",
//       desc: "Achieve your fitness goals with expert advice and workouts.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//     {
//       title: "Culinary Delights",
//       desc: "Discover mouthwatering recipes from around the world.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//     {
//       title: "Financial Tips",
//       desc: "Learn how to manage your finances and invest wisely.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//     {
//       title: "Artistic Creations",
//       desc: "Explore the world of art and creativity.",
//       bgimg: "https://picsum.photos/200/300",
//     },
//   ];

//   const scrollContainer1 = useRef(null);
//   const scrollContainer2 = useRef(null);

//   // const scrollLeft = (scrollContainer) => {
//   //   scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
//   // };

//   const scrollLeft = (scrollContainer) => {
//     if (scrollContainer.current.scrollLeft <= 0) {
//       scrollContainer.current.scrollLeft = scrollContainer.current.scrollWidth;
//     } else {
//       scrollContainer.current.scrollBy({ left: -500, behavior: "smooth" });
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
//       scrollContainer.current.scrollBy({ left: 500, behavior: "smooth" });
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
//     <>
//     <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-lg font-semibold">Trending Schemes</p>
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
//               className=" overflow-x-scroll gap-5 my-5 no-scrollbar"
//               style={{ scrollBehavior: "smooth" }}
//               ref={scrollContainer1}
//             >
//               <div className="inline-flex justify-start items-center  mr-10 ">
//                 {Trending.map((item, index) => (
//                   <div
//                     key={index}
//                     className="p-5 w-96 rounded-xl border-4 border-white shadow-xl"
//                     style={{
//                       // backgroundImage: `url(${item.bgimg})`,
//                       backgroundImage: `url(${purbbg})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   >
//                     <div className="flex justify-between items-center ">
//                       <div className="text-white">
//                         <p className="text-2xl font-semibold">{item.title}</p>
//                         <p>{item.desc}</p>
//                       </div>
//                       <div>
//                         <img src={winnbg} alt="" />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//     </>
//   )
// }

// export default PurpleSlider




import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import cwin from "../assets/cwin.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./customStyles.css"
import Slider from "react-slick";


const PurpleSlider = () => {
  const sliderRef = useRef(null);

  const Trending = [
    {
      title: "Scheme Name",
      desc: "Lorem Ipsum has been the industry's dummy text to use as content.",
      bgimg: "https://picsum.photos/200/300",
    },
    {
      title: "Scheme Name",
      desc: "Lorem Ipsum has been the industry's dummy text to use as content.",
      bgimg: "https://picsum.photos/200/300",
    },
    {
      title: "Scheme Name",
      desc: "Lorem Ipsum has been the industry's dummy text to use as content.",
      bgimg: "https://picsum.photos/200/300",
    }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-custom-blue w-full h-80 p-4 overflow-hidden">
     <div className='flex justify-between items-center mb-4 lg:flex-row  flex-col md:flex-row '>
  <p className="text-white text-xl mb-3 font-semibold lg:ml-12 md:ml-5">All Live Schemes</p>
  <div className="flex justify-end items-center gap-2 mb-4 lg:mr-20">
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

    
      <div className='lg:w-11/12  lg:ml-14 md:ml-0 ml-2 lg:px-0 md:px-0 px-8 rounded-2xl md:w-full   '>

      <Slider ref={sliderRef} {...settings}>
        {Trending.map((trend, index) => (
          <div key={index} className="slick-slide-custom lg:px-0 md:px-5 lg:ml-0 ml-0 md:ml-1">
            <div className="flex bg-custom-card lg:w-96 rounded-lg overflow-hidden h-36 lg:py-1">
              <div className="flex-1 p-4">
                <h1 className="text-xl font-bold text-white">{trend.title}</h1>
                <p className="mt-2 text-white text-base">{trend.desc}</p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={cwin}
                  alt="Image"
                  className="lg:w-32 lg:h-20 object-contain  lg:ml-5 h-20 lg:mr-0 md:mr-0 mr-20 lg:mt-0 md:mt-0 "
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default PurpleSlider;
