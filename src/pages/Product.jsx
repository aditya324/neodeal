import React, { useState } from "react";
import phn1 from "../assets/phone1.png";
import phn2 from "../assets/phone2.png";
import phn3 from "../assets/phone3.png";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { FaBan } from "react-icons/fa";
import review from "../assets/review.png";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import profile from "../assets/profile.png";
import scheme from "../assets/Rectangle 465.png";
import { AiFillHeart } from "react-icons/ai";

const ProductPage = () => {
  const [openDescription, setOpenDescription] = useState(true);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openSpecification, setOpenSpecification] = useState(false);
  const [isFilled, setIsFilled] = useState(false);


  const [mainImage, setMainImage] = useState(phn1);
  const handleChangeImage = (newImage) => {
    setMainImage(newImage);
  };

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  const handleDescriptionClick = () => {
    setOpenDescription(true);
    setOpenFeatures(false);
    setOpenSpecification(false);
  };

  const handleFeaturesClick = () => {
    setOpenDescription(false);
    setOpenFeatures(true);
    setOpenSpecification(false);
  };

  const handleSpecificationClick = () => {
    setOpenDescription(false);
    setOpenFeatures(false);
    setOpenSpecification(true);
  };

  return (
    <div className="bg-gray-200 lg:px-32 px-3 py-5">
      <div className="lg:flex gap-5">
      <div className="lg:w-1/2 sm:h-96 border bg-white rounded-3xl sm:flex lg:max-xl:w-[98%]">
        <div className="sm:mt-10 mt-5">
          <div
            className="sm:w-36 w-20 sm:h-10 bg-cover bg-center bg-no-repeat text-center py-2.5 text-white font-semibold text-sm leading-4 relative"
            style={{
              backgroundImage: `url(${scheme})`,
            }}
          >
            <p>Scheme</p>
          </div>
          <p className="mt-2 ml-2 text-red-500 sm:font-bold sm:text-sm leading-4">
            <span>12 HR </span>
            <span> 30 MIN </span>
            <span> 60 SEC </span>
          </p>
        </div>
        <img className="sm:h-96 sm:w-2/3" src={mainImage} alt="Main" />
        <div
          onClick={handleClick}
          className="cursor-pointer text-2xl sm:mt-10 sm:ml-18 sm:mb-0 ml-2 mb-2"
        >
          {isFilled ? <AiFillHeart className="text-red-500" /> : <CiHeart />}
        </div>
      </div>
      <div className="flex lg:flex-col lg:w-1/2 lg:mt-0 gap-5 mt-3">
        <div className="w-full sm:w-40 h-28 bg-white rounded-lg">
          <img
            src={phn1}
            alt="Phone 1"
            className="h-28 mx-auto object-cover cursor-pointer"
            onClick={() => handleChangeImage(phn1)}
          />
        </div>
        <div className="w-full sm:w-40 h-28 bg-white rounded-lg">
          <img
            src={phn2}
            alt="Phone 2"
            className="h-28 mx-auto object-cover cursor-pointer"
            onClick={() => handleChangeImage(phn2)}
          />
        </div>
        <div className="w-full sm:w-40 h-28 bg-white rounded-lg">
          <img
            src={phn3}
            alt="Phone 3"
            className="h-28 mx-auto object-cover cursor-pointer"
            onClick={() => handleChangeImage(phn3)}
          />
        </div>
      </div>
    </div>
      {/* -------------------------- product description -----------------------------------  */}
      <div className="sm:w-2/3 mt-8">
        <h2 className="font-semibold sm:text-2xl text-md">
          Iphone 14, (128GB Storage) | Ultra Bright AMOLED Display | purple
          color | 64 MP OIS Ultra Stable Camera | 44WFlashCharge.
        </h2>
        <div className="flex items-center mt-2">
          <h2 className="line-through sm:text-2xl sm:font-medium text-xl text-gray-500">
            ₹1,99,900
          </h2>
          <h2 className="ml-5 font-bold sm:text-2xl text-xl leading-9">
            ₹66,840
          </h2>
          <h5 className="text-red-600 ml-5 font-bold text-base">45% off</h5>
        </div>
        <p className="text-sm font-medium text-gray-500 mt-3 flex items-center">
          3.5
          <FaStar
            className="ml-2 mr-2 text-yellow-500 opacity-50 text-md"
            style={{ fill: "currentColor" }}
          />
          | 400 reviews
        </p>
        <div className="mt-6 flex gap-5">
          <button className="w-56 sm:h-12 h-10 rounded-3xl border border-purple flex items-center justify-center text-center hover:text-white text-purple text-sm hover:bg-Btn-bg font-semibold">
            Buy Now
          </button>
          <button className="w-56 sm:h-12 h-10 rounded-3xl border border-purple flex items-center justify-center text-center hover:text-white text-purple text-sm hover:bg-Btn-bg font-semibold">
            Add to cart
          </button>
        </div>
        <p className="flex font-semibold sm:text-base text-sm mt-5 text-gray-900">
          <HiOutlineCash className="text-2xl mr-1" /> Cash on delivery available{" "}
        </p>
        <p className="flex items-center sm:text-base text-sm font-normal mt-3 text-gray-900">
          <FaBan className="text-lg mr-1 text-red-500" /> 7 days return &
          exchange not available{" "}
        </p>
      </div>
      {/* -------------------------------------------- extra description ----------------------------------------------- */}
      <div className="mt-10">
        <div className="flex  lg:gap-48 lg:justify-start justify-between text-gray-600 sm:font-semibold sm:text-xl text-sm font-medium">
          <h2
            onClick={handleDescriptionClick}
            className={`cursor-pointer ${openDescription ? "text-purple" : ""}`}
          >
            Description
          </h2>
          <h2
            onClick={handleFeaturesClick}
            className={`cursor-pointer ${openFeatures ? "text-purple" : ""}`}
          >
            Features
          </h2>
          <h2
            onClick={handleSpecificationClick}
            className={`cursor-pointer ${
              openSpecification ? "text-purple" : ""
            }`}
          >
            Specification
          </h2>
        </div>
        <div className="mt-3 rounded-3xl bg-gray-100 h-auto p-5">
          <div className="p-1 ">
            {openDescription && (
              <ul className="list-disc pl-4">
                <li>15.40 cm (6.1-inch) Super Retina XDR display </li>
                <li>Advanced camera system for better photos in any light </li>
                <li> Cinematic mode now in 4K Dolby Vision up to 30 fps </li>
                <li>Action mode for smooth, steady,handheld videos </li>
                <li>
                  Vital safety technology — Crash Detection calls for help when
                  you can’t{" "}
                </li>
                <li>
                  All-day battery life and up to 20 hours of video playback{" "}
                </li>
                <li>
                  Industry-leading durability features with Ceramic Shield and
                  water resistance Material & Care
                </li>
                {/* <li>Description</li>
                <li>Description</li> */}
              </ul>
            )}
            {openFeatures && (
              <ul className="list-disc pl-5">
                <li>Features</li>
                <li>Features</li>
                <li>Features</li>
              </ul>
            )}
            {openSpecification && (
              <ul className="">
                <li>Specifications</li>
                <li>Specifications</li>
                <li>Specifications</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* ---------------------------------------- reviews ------------------------------------------------- */}

      <div className="mt-10">
        <h2 className="font-semibold sm:text-2xl leading-5">Reviews</h2>
        <div className="mt-5 bg-gray-100 p-10 rounded-3xl">
          <div className="flex justify-between border-b-2 border-gray-200 pb-3">
            <h2 className="flex font-semibold sm:text-2xl leading-5">
              <FaStar
                className="ml-2 mr-2 text-yellow-500 opacity-50 text-md"
                style={{ fill: "currentColor" }}
              />
              4/5
            </h2>
            <p className="sm:font-medium text-base text-gray-600">
              400 Verified Reviews
            </p>
          </div>
          {/*  -------------------- review images ----------------------- */}
          <div className="mt-3 flex gap-4 sm:flex-row flex-wrap sm:gap-7">
            <img
              src={review}
              alt="review"
              className="h-40 w-36 object-cover rounded-lg "
            />
            <img
              src={review1}
              alt="review"
              className="h-40 w-36 object-cover rounded-lg"
            />
            <img
              src={review2}
              alt="review"
              className="h-40 w-36 object-cover rounded-lg"
            />
            <img
              src={review3}
              alt="review"
              className="h-40 w-36 object-cover rounded-lg"
            />
          </div>

          <div className="mt-3">
            <div>
              <div className="flex items-center">
                <img src={profile} alt="" className="w-10 rounded-full" />
                <h2 className="font-semibold text-base ml-1">Raghav</h2>
              </div>
              <p className="mt-2 font-normal text-base">
                Apple phone without a second delay, I would say it is better
                than all android phones I have used.
              </p>
            </div>
            {/* ------------------------ add reviews here ------------------------------ */}
          </div>
        </div>
      </div>
      {/* -------------------------------------------- similar products --------------------------------------- */}
      <div className="mt-10 mb-5">
        <h2 className="font-semibold sm:text-2xl sm:leading-5">
          Similar Products
        </h2>
        <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-5 sm:items-start items-center">
          {/* ----------------------------- card --------------------------------------- */}

          <div className="w-72 bg-gray-50 rounded-2xl p-4">
            <div className="border h-52 rounded-xl bg-product-bg flex justify-center">
              <img src={phn1} alt="img" className="h-48" />
            </div>
            <p className="mt-2 font-normal text-sm text-gray-500">
              Category <span className="text-purple">Electronics</span>
            </p>
            <p className="font-semibold text-base">
              Apple iphone 14 | 256 GB | Grey
            </p>
            <div className="my-3 border border-gray-300 p-1 rounded-lg">
              <p className="text-base font-bold text-purple">
                ₹ 66,840/-{" "}
                <span className="text-sm text-red-600 line-through">
                  ₹ 82200/-
                </span>
              </p>
              <p className="font-medium text-sm text-gray-500">32% Discount</p>
            </div>
            <div className="flex justify-between">
              <button className="w-24 border h-10 bg-pink rounded-3xl text-white">
                Get Now
              </button>
              <p className="flex items-center text-gray-400">
                3.5{" "}
                <FaStar
                  className="ml-1 text-yellow-500 opacity-50 text-md"
                  style={{ fill: "currentColor" }}
                />
              </p>
            </div>
          </div>
          <div className="w-72 bg-gray-50 rounded-2xl p-4">
            <div className="border h-52 rounded-xl bg-product-bg flex justify-center">
              <img src={phn1} alt="img" className="h-48" />
            </div>
            <p className="mt-2 font-normal text-sm text-gray-500">
              Category <span className="text-purple">Electronics</span>
            </p>
            <p className="font-semibold text-base">
              Apple iphone 14 | 256 GB | Grey
            </p>
            <div className="my-3 border border-gray-300 p-1 rounded-lg">
              <p className="text-base font-bold text-purple">
                ₹ 66,840/-{" "}
                <span className="text-sm text-red-600 line-through">
                  ₹ 82200/-
                </span>
              </p>
              <p className="font-medium text-sm text-gray-500">32% Discount</p>
            </div>
            <div className="flex justify-between">
              <button className="w-24 border h-10 bg-pink rounded-3xl text-white">
                Get Now
              </button>
              <p className="flex items-center text-gray-400">
                3.5{" "}
                <FaStar
                  className="ml-1 text-yellow-500 opacity-50 text-md"
                  style={{ fill: "currentColor" }}
                />
              </p>
            </div>
          </div>
          <div className="w-72 bg-gray-50 rounded-2xl p-4">
            <div className="border h-52 rounded-xl bg-product-bg flex justify-center">
              <img src={phn1} alt="img" className="h-48" />
            </div>
            <p className="mt-2 font-normal text-sm text-gray-500">
              Category <span className="text-purple">Electronics</span>
            </p>
            <p className="font-semibold text-base">
              Apple iphone 14 | 256 GB | Grey
            </p>
            <div className="my-3 border border-gray-300 p-1 rounded-lg">
              <p className="text-base font-bold text-purple">
                ₹ 66,840/-{" "}
                <span className="text-sm text-red-600 line-through">
                  ₹ 82200/-
                </span>
              </p>
              <p className="font-medium text-sm text-gray-500">32% Discount</p>
            </div>
            <div className="flex justify-between">
              <button className="w-24 border h-10 bg-pink rounded-3xl text-white">
                Get Now
              </button>
              <p className="flex items-center text-gray-400">
                3.5{" "}
                <FaStar
                  className="ml-1 text-yellow-500 opacity-50 text-md"
                  style={{ fill: "currentColor" }}
                />
              </p>
            </div>
          </div>
          <div className="w-72 bg-gray-50 rounded-2xl p-4">
            <div className="border h-52 rounded-xl bg-product-bg flex justify-center">
              <img src={phn1} alt="img" className="h-48" />
            </div>
            <p className="mt-2 font-normal text-sm text-gray-500">
              Category <span className="text-purple">Electronics</span>
            </p>
            <p className="font-semibold text-base">
              Apple iphone 14 | 256 GB | Grey
            </p>
            <div className="my-3 border border-gray-300 p-1 rounded-lg">
              <p className="text-base font-bold text-purple">
                ₹ 66,840/-{" "}
                <span className="text-sm text-red-600 line-through">
                  ₹ 82200/-
                </span>
              </p>
              <p className="font-medium text-sm text-gray-500">32% Discount</p>
            </div>
            <div className="flex justify-between">
              <button className="w-24 border h-10 bg-pink rounded-3xl text-white">
                Get Now
              </button>
              <p className="flex items-center text-gray-400">
                3.5{" "}
                <FaStar
                  className="ml-1 text-yellow-500 opacity-50 text-md"
                  style={{ fill: "currentColor" }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
