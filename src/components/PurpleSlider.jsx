import React, { useEffect, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import purbbg from "../assets/purrbg.png"
import winnbg from "../assets/winnbg.png"
import cwin from "../assets/cwin.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PurpleSlider = () => {

  const sliderRef = React.useRef(null);

  const CustomArrow = ({ className, onClick, icon }) => (
    <button onClick={onClick} className={className} style={{ background: "#5356FB", borderRadius: "50%", padding: "10px" }}>
      {icon}
    </button>
  );
    const Trending = [
  {
    title: "Scheme Name ",
    desc: "Lorem Ipsum has been the industry's dummy text to use as content.",
    bgimg: "https://picsum.photos/200/300",
  },
  {
    title: "Scheme Name ",
    desc: "Lorem Ipsum has been the industry's dummy text to use as content.",
    bgimg: "https://picsum.photos/200/300",
  },
  {
    title: "Scheme Name ",
    desc: "Lorem Ipsum has been the industry's dummy text to use as content.",
    bgimg: "https://picsum.photos/200/300",
  }
];
      // const scrollContainer1 = useRef(null);
      // const scrollContainer2 = useRef(null);
    
      // const scrollLeft = (scrollContainer) => {
      //   if (scrollContainer.current.scrollLeft <= 0) {
      //     scrollContainer.current.scrollLeft = scrollContainer.current.scrollWidth;
      //   } else {
      //     scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
      //   }
      // };
    
      // const scrollRight = (scrollContainer) => {
      //   if (
      //     scrollContainer.current.scrollLeft +
      //       scrollContainer.current.offsetWidth >=
      //     scrollContainer.current.scrollWidth
      //   ) {
      //     scrollContainer.current.scrollLeft = 0;
      //   } else {
      //     scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
      //   }
      // };
    
      // useEffect(() => {
      //   const scrollInterval1 = setInterval(() => {
      //     scrollRight(scrollContainer1);
      //   }, 2000); // scrolls right every 2 seconds
    
      //   const scrollInterval2 = setInterval(() => {
      //     scrollLeft(scrollContainer2);
      //   }, 2000); // scrolls right every 2 seconds
    
      //   return () => {
      //     clearInterval(scrollInterval1); // cleanup on unmount
      //     clearInterval(scrollInterval2); // cleanup on unmount
      //   };
      // }, []);


      const settings = {
   
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        autoplay: true,
        autoplaySpeed: 3000, // Auto-play speed in milliseconds
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
    <div className="bg-custom-blue w-full h-80 p-4 overflow-x-hidden">
    <p className="text-white relative top-12 left-10 text-xl mb-3 font-semibold">All Live Schemes</p>
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
    <Slider ref={sliderRef} {...settings}>
    {Trending.map((trend, index) => (
      <div key={index} className="mx-10 ">
        <div className="flex bg-custom-card rounded-lg overflow-hidden h-40 px-4 lg:py-1" style={{ width: "21rem" }}>
          <div className="flex-1 p-4">
            <h1 className="text-xl font-bold text-white">{trend.title}</h1>
            <p className="mt-2 text-white text-base ">{trend.desc}</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={cwin}
              alt="Image"
              className="w-32 h-20 object-contain mt-6 lg:ml-8"
            />
          </div>
        </div>
      </div>
    ))}
  </Slider>

  </div>
  )
}

export default PurpleSlider
