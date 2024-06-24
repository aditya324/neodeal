import React from 'react';
import login from "../assets/loginimg.png"
import loginwheel from "../assets/loginwheel.png"
import logo from "../assets/logo.png"
import Button from '../components/Button';


const LoginEmail = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${login})` }}>
        <div style={{backgroundImage:`url(${loginwheel})`, 
        
        backgroundRepeat: "no-repeat"}}>
            
        
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-white mx-4 p-8 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3">
            <div className='flex justify-between'>
            <h1 className="text-2xl font-bold mb-8 text-center text-[#5356FB]">Login</h1>
            <img src={logo} className='h-10'/>
            </div>

            <form>
              <div className="mb-4">
                <label className="block font-bold text-[#374557] mb-2" htmlFor="email">
                  Email/Ph no
                </label>
                <input
                  className="border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email" type="email" placeholder="Neo@gmail.com" />
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
            <div className='flex justify-between'>
                <p>Don't have an account? <a href="" className='text-custom-purple'>signup</a></p>
                
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default LoginEmail