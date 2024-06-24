import React, { useState } from "react";
import phone from "../assets/phone1.png";
import ReactStars from "react-rating-stars-component";
import { FcOldTimeCamera } from "react-icons/fc";

const Orders = () => {
  const [images, setImages] = useState([]);
  const [isTextAreaActive, setTextAreaActive] = useState(false);

  const ratingChanged = (newRating) => {
    console.log(newRating);
    // Handle rating change here, e.g., send it to a server
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...fileUrls]);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleTextAreaFocus = () => {
    setTextAreaActive(true);
  };

  const handleTextAreaBlur = () => {
    setTextAreaActive(false);
  };

  return (
    <>
      <div className="bg-gray-300 h-full lg:px-32 px-3 py-5">
        <h2 className="font-semibold text-2xl leading-5 my-2">Review</h2>
        <div className="lg:max-w-full h-auto rounded-2xl bg-[#EBE4FF] p-3 flex flex-col items-center sm:flex-row mt-1 font-semibold">
          <div className="flex-shrink-0">
            <img
              src={phone}
              alt="Phone Image"
              className="h-28 lg:w-full mx-auto sm:mx-0"
            />
          </div>
          <div className="flex flex-col sm:justify-center text-left">
            <p className="font-semibold text-base mt-2">
              Apple iPhone 14 | 256 GB | Grey
            </p>
            <div className="flex items-center mt-1">
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
            <div className="flex items-center mt-1">
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

        <div className="mt-4">
          <p className="text-sm font-medium text-[#262626]">Your Products</p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            spacing={10}
            size={35}
            activeColor="#ffd700"
          />
        </div>

        <div>
          <p className="font-semibold text-lg leading-4 mt-5">
            Add Detailed Review
          </p>
          <textarea
            className={`w-full h-44 mt-5 bg-[#EBE4FF] outline-none rounded-2xl p-3 ${
              isTextAreaActive ? "bg-white" : ""
            }`}
            placeholder="Write here"
            onFocus={handleTextAreaFocus}
            // onBlur={handleTextAreaBlur}
          ></textarea>

          <input
            type="file"
            id="upload"
            name="upload"
            className="hidden"
            multiple
            onChange={handleFileInputChange}
          />

          {images.length > 0 && (
            <div className="mt-4">
              <div className="flex flex-wrap w-full mt-5 bg-[#EBE4FF] outline-none rounded-2xl p-3">
                {images.map((imageUrl, index) => (
                  <div key={index} className="relative mr-5 mb-2 ">
                    <img
                      src={imageUrl}
                      alt={`Selected Image ${index + 1}`}
                      className="h-24 w-24 object-cover rounded-lg"
                    />
                    <button
                      className="absolute top-0 right-0 p-1 text-gray-500 rounded-full"
                      onClick={() => removeImage(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <label
            htmlFor="upload"
            className="cursor-pointer text-blue-500 mt-3 text-blue flex"
          >
            <FcOldTimeCamera className="text-2xl mr-2" />
            Add Photo/videos
          </label>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-56 h-9 mt-5 rounded-3xl border border-purple flex items-center justify-center hover:text-white text-purple text-sm hover:bg-Btn-bg font-semibold mb-10 text-center">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Orders;
