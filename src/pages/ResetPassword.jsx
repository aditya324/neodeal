import React from 'react'

import login from "../assets/loginimg.png"
import loginwheel from "../assets/loginwheel.png"
import logo from "../assets/logo.png"
import Button from '../components/Button';

import reset from "../assets/reset.png"
const ResetPassword = () => {
  return (
    <>
    <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${login})` }}>
      <div style={{backgroundImage:`url(${loginwheel})`, 
      
      backgroundRepeat: "no-repeat"}}>
          
      
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white mx-4 p-8 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3">
          <div className='flex justify-between'>
          <h1 className="text-2xl font-bold mb-8 text-center text-[#5356FB]">Reset Passwword</h1>
          <img src={logo} className='h-10'/>
          </div>
          <div className="flex items-center gap-2 mt-1">
                <img src={reset} className="h-5 w-5" alt="Reset icon" />
                <p className="text-sm m-3">
                Set up your new password 
                </p>
              </div>
          <form>
          <div className="mb-4">
              <label className="block font-bold text-[#374557] mb-2" htmlFor="password">
                New Password
              </label>
              <input
                className="border rounded-full w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="Enter your password" />
              
            </div>
            <div className="mb-4">
              <label className="block font-bold text-[#374557] mb-2" htmlFor="password">
                Confirm Password
              </label>
              <input
                className="border rounded-full w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="Enter your password" />
              
            </div>
            <div className="mb-6">
              {/* <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Login
                
              </button> */}
              <Button name="Log in" style="bg-[#5356FB] hover:bg-blue-600 text-white font-bold py-2 w-full rounded-full mt-6"/>
            </div>
          </form>
          
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default ResetPassword