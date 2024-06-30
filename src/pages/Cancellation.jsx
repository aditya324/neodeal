import React from "react";
import phone from "../assets/phone.png";
import Rating from "../components/Rating";
import ReactStars from "react-rating-stars-component";

const Cancellation = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
    // Here you can handle the rating change, e.g., send it to a server
  };
  return (
    <>
      <div className="flex justify-center px-4 mt-10">
        <div className="w-full max-w-3xl h-auto bg-[#EBE4FF] rounded-2xl p-4">
          <div className="flex flex-col md:flex-row justify-between font-semibold">
            <div className="flex flex-col mb-4 md:mb-0">
              <p>
                Status:{" "}
                <span className="bg-[#BEBFFF] px-2 py-1 rounded-2xl">
                  In transit
                </span>
              </p>
              <p className="mt-3">
                Delivered On: <span>13/2/24</span>
              </p>
            </div>
            <div className="flex flex-col  text-left md:text-right">
              <p className="">
                Order Id : <span>fqagqn340</span>
              </p>
              <p className="mt-2">
                Date of Order : <span>11/2/24</span> 
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="max-w-full h-auto rounded-2xl bg-[#F6F6F6] p-3 flex flex-col sm:flex-row font-semibold">
              <div className="flex-shrink-0">
                <img
                  src={phone}
                  alt="Phone Image"
                  className="h-28 w-20 mx-auto sm:mx-0"
                />
              </div>
              <div className="flex flex-col justify-center pl-0 sm:pl-3 mt-3 sm:mt-0 text-center sm:text-left">
                <p>Apple iPhone 14 | 256 GB | Grey</p>
                <div className="flex flex-col sm:flex-row items-center mt-2">
                  <label htmlFor="qty" className="mr-2">
                    Qty:
                  </label>
                  <select
                    id="qty"
                    name="qty"
                    className="rounded px-2 py-1 bg-[#F6F6F6]"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="flex flex-col sm:flex-row items-center mt-2">
                  <label htmlFor="size" className="mr-2">
                    Size: 
                  </label>
                  <select
                    id="size"
                    name="size"
                    className="rounded px-2 py-1 bg-[#F6F6F6]"
                  >
                    <option value="64gb">64 GB</option>
                    <option value="128gb">128 GB</option>
                    <option value="256gb">256 GB</option>
                    <option value="512gb">512 GB</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col sm:flex-row justify-between mt-4">
              <div className="w-full sm:w-1/2 mb-2 sm:mb-0 sm:pr-2">
                <button className="w-full bg-white text-black border border-black py-2 px-4 rounded-2xl">
                  Return
                </button>
              </div>
              <div className="w-full sm:w-1/2 sm:pl-2">
                <button className="w-full bg-white text-black border border-black py-2 px-4 rounded-2xl">
                  Exchange
                </button>
              </div>
            </div> */}
          </div>
          {/* <div className="mt-4">
            <p>How Would You Rate The Product?</p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={30}
              activeColor="#ffd700"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Cancellation;
