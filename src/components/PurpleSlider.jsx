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
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1256,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1030,
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
    <div className="bg-custom-blue w-full h-80 p-4 overflow-hidden">
      <div className='flex justify-between items-center mb-4 lg:flex-row flex-col md:flex-row'>
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

      <div className='lg:w-11/12 lg:ml-14 md:ml-0   md:px-0 px-8 rounded-2xl md:w-full w-96 lg:mr-0 md:mr-0  '>
        <Slider ref={sliderRef} {...settings}>
          {Trending.map((trend, index) => (
            <div key={index} className="slick-slide-custom lg:px-0 md:px-5 lg:ml-0 ml-0 md:ml-1 lg:mr-0 md:mr-0 mr-10">
              <div className="flex bg-custom-card lg:w-[380px] rounded-lg overflow-hidden h-36 lg:py-1">
                <div className="flex-1 p-4">
                  <h1 className="text-xl font-bold text-white">{trend.title}</h1>
                  <p className="mt-2 text-white text-base">{trend.desc}</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={cwin}
                    alt="Image"
                    className="lg:w-32 lg:h-20 object-contain lg:ml-5 h-20 lg:mr-0 md:mr-0 mr-5 lg:mt-0 md:mt-0"
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
