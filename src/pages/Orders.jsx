import React, { useState } from 'react'
import phone from "../assets/phone.png"
import Rating from '../components/Rating'
import ReactStars from "react-rating-stars-component";
const Orders = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
        // Here you can handle the rating change, e.g., send it to a server
      };
  return (
    <>
  <div className='w-full lg:h-full  md:h-full bg-[#DEDFF3] relative '>
    <div className='text-black font-semibold ml-40' >
        <p>Orders</p>
    </div>
    
    <div className="flex justify-start mt-10 px-4 md:px-20">
  <div className="w-full max-w-7xl h-auto md:h-96 bg-[#EBE4FF] rounded-2xl p-4">
    <div className="flex flex-col md:flex-row justify-between font-semibold">
      <div className="flex flex-col mb-4 md:mb-0">
        <p>Status: <span className="bg-[#97E391] px-2 py-1 rounded">Delivered</span></p>
        <p>Delivered On: <span>13/2/24</span></p>
      </div>
      <div className="flex flex-col text-left md:text-right">
        <p>Order Id: <span>fqagqn340</span></p>
        <p>Date of Order: <span>11/2/24</span></p>
      </div>
    </div>
    <div className="">
     
      <div>
  <div className='bg-[#F6F6F6] rounded-2xl'>
  <div className='max-w-full h-auto rounded-2xl bg-[#F6F6F6] p-3 flex flex-col sm:flex-row mt-1 font-semibold'>
        <div className='flex-shrink-0'>
          <img src={phone} alt="Phone Image" className='h-28 w-20 mx-auto sm:mx-0' />
        </div>
        <div className='flex flex-col justify-center pl-0 sm:pl-3 mt-3 sm:mt-0 text-center sm:text-left'>
          <p>Apple iPhone 14 | 256 GB | Grey</p>
          <div className='flex flex-col md:flex-row items-start mt-2'>
            <div className='mr-4'>
              <label htmlFor="qty" className='mr-2'>Qty:</label>
              <select id="qty" name="qty" className='rounded px-2 py-1 bg-[#F6F6F6]'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className='mt-2 md:mt-0 md:ml-4'>
              <label htmlFor="size" className='mr-2'>Size:</label>
              <select id="size" name="size" className='rounded px-2 py-1 bg-[#F6F6F6]'>
                <option value="64gb">64 GB</option>
                <option value="128gb">128 GB</option>
                <option value="256gb">256 GB</option>
                <option value="512gb">512 GB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    <div className="flex flex-col md:flex-row justify-between font-semibold lg:gap-0 md:gap-0 gap-3">
      <button className="w-full md:w-[50%] bg-white text-black border-b border-l border-r py-2 rounded-bl-lg md:rounded-bl-none md:rounded-br-lg">Return</button>
      <button className="w-full md:w-[50%] bg-white text-black border-t border-l border-r py-2 px-4 rounded-br-lg md:rounded-br-none md:rounded-bl-lg">Exchange</button>
    </div>
  </div>
</div>

    </div>
    <div>
    <div className="mt-4">
      <p>How Would You Rate The Product?</p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={40}
        activeColor="#ffd700"
      />
    </div>
    <div className='text-[#2572E6] underline text-base font-semibold'>
    <a href='#'>Type a review</a>
    </div>
    </div>
  </div>
</div>








    {/* cancel */}
    <div className='flex justify-center items-center mt-10 px-4 md:px-20'>
  <div className="w-full max-w-7xl h-auto bg-[#EBE4FF] rounded-2xl p-4">
    <div className="flex flex-col md:flex-row justify-between font-semibold">
      <div className="flex flex-col mb-4 md:mb-0">
        <p>Status: <span className="bg-[#EB5757] px-2 py-1 rounded">Cancelled</span></p>
        <p>Delivered On: <span>13/2/24</span></p>
      </div>
      <div className="flex flex-col text-left md:text-right">
        <p>Order Id: <span>fqagqn340</span></p>
        <p>Date of Order: <span>11/2/24</span></p>
      </div>
    </div>
    <div>
      <div className='max-w-full h-auto rounded-2xl bg-[#F6F6F6] p-3 flex flex-col sm:flex-row mt-1 font-semibold'>
        <div className='flex-shrink-0'>
          <img src={phone} alt="Phone Image" className='h-28 w-20 mx-auto sm:mx-0' />
        </div>
        <div className='flex flex-col justify-center pl-0 sm:pl-3 mt-3 sm:mt-0 text-center sm:text-left'>
          <p>Apple iPhone 14 | 256 GB | Grey</p>
          <div className='flex flex-col md:flex-row items-start mt-2'>
            <div className='mr-4'>
              <label htmlFor="qty" className='mr-2'>Qty:</label>
              <select id="qty" name="qty" className='rounded px-2 py-1 bg-[#F6F6F6]'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className='mt-2 md:mt-0 md:ml-4'>
              <label htmlFor="size" className='mr-2'>Size:</label>
              <select id="size" name="size" className='rounded px-2 py-1 bg-[#F6F6F6]'>
                <option value="64gb">64 GB</option>
                <option value="128gb">128 GB</option>
                <option value="256gb">256 GB</option>
                <option value="512gb">512 GB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/* in transit */}


<div className="flex justify-start mt-10 px-4 md:px-20">
  <div className="w-full max-w-7xl bg-[#EBE4FF] rounded-2xl p-4 mt-3">
    <div className="flex flex-col md:flex-row justify-between font-semibold">
      <div className="flex flex-col mb-4 md:mb-0">
        <p>Status: <span className="bg-[#BEBFFF] px-2 py-1 rounded">in Transit</span></p>
        <p>Delivered On: <span>13/2/24</span></p>
      </div>
      <div className="flex flex-col text-left md:text-right">
        <p>Order Id: <span>fqagqn340</span></p>
        <p>Date of Order: <span>11/2/24</span></p>
      </div>
    </div>
    
    <div className="bg-[#F6F6F6] rounded-2xl overflow-hidden mt-4">
    <div className='max-w-full h-auto rounded-2xl bg-[#F6F6F6] p-3 flex flex-col sm:flex-row mt-1 font-semibold'>
        <div className='flex-shrink-0'>
          <img src={phone} alt="Phone Image" className='h-28 w-20 mx-auto sm:mx-0' />
        </div>
        <div className='flex flex-col justify-center pl-0 sm:pl-3 mt-3 sm:mt-0 text-center sm:text-left'>
          <p>Apple iPhone 14 | 256 GB | Grey</p>
          <div className='flex flex-col md:flex-row items-start mt-2'>
            <div className='mr-4'>
              <label htmlFor="qty" className='mr-2'>Qty:</label>
              <select id="qty" name="qty" className='rounded px-2 py-1 bg-[#F6F6F6]'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className='mt-2 md:mt-0 md:ml-4'>
              <label htmlFor="size" className='mr-2'>Size:</label>
              <select id="size" name="size" className='rounded px-2 py-1 bg-[#F6F6F6]'>
                <option value="64gb">64 GB</option>
                <option value="128gb">128 GB</option>
                <option value="256gb">256 GB</option>
                <option value="512gb">512 GB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between font-semibold lg:gap-0 md:gap-0 gap-3">
      <button className="w-full md:w-[100%] bg-white text-black border-b border-l border-r py-2 rounded-bl-lg md:rounded-bl-none md:rounded-br-lg">Cancel</button>
    </div>
    </div>

    <div className="mt-4">
      <p>How Would You Rate The Product?</p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={40}
        activeColor="#ffd700"
      />
    </div>
    
    <div className="text-[#2572E6] underline text-base font-semibold mt-2">
      <a href="#">Type a review</a>
    </div>
  </div>
</div>


{/* cancellation pending */}

<div className='flex justify-center items-center mt-10 px-4 md:px-20'>
  <div className="w-full max-w-7xl h-auto bg-[#EBE4FF] rounded-2xl p-4">
    <div className="flex flex-col md:flex-row justify-between font-semibold">
      <div className="flex flex-col mb-4 md:mb-0">
        <p>Status: <span className="bg-[#F8A926] px-2 py-1 rounded">Cancellation pending</span></p>
        <p>Delivered On: <span>13/2/24</span></p>
      </div>
      <div className="flex flex-col text-left md:text-right">
        <p>Order Id: <span>fqagqn340</span></p>
        <p>Date of Order: <span>11/2/24</span></p>
      </div>
    </div>
    <div>
      <div className='max-w-full h-auto rounded-2xl bg-[#F6F6F6] p-3 flex flex-col sm:flex-row mt-1 font-semibold'>
        <div className='flex-shrink-0'>
          <img src={phone} alt="Phone Image" className='h-28 w-20 mx-auto sm:mx-0' />
        </div>
        <div className='flex flex-col justify-center pl-0 sm:pl-3 mt-3 sm:mt-0 text-center sm:text-left'>
          <p>Apple iPhone 14 | 256 GB | Grey</p>
          <div className='flex flex-col md:flex-row items-start mt-2'>
            <div className='mr-4'>
              <label htmlFor="qty" className='mr-2'>Qty:</label>
              <select id="qty" name="qty" className='rounded px-2 py-1 bg-[#F6F6F6]'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className='mt-2 md:mt-0 md:ml-4'>
              <label htmlFor="size" className='mr-2'>Size:</label>
              <select id="size" name="size" className='rounded px-2 py-1 bg-[#F6F6F6]'>
                <option value="64gb">64 GB</option>
                <option value="128gb">128 GB</option>
                <option value="256gb">256 GB</option>
                <option value="512gb">512 GB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</>

  )
}

export default Orders