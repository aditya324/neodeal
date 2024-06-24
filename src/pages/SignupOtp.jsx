import React, { useRef, useState } from "react";
import login from "../assets/loginimg.png";
import loginwheel from "../assets/loginwheel.png";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import reset from "../assets/reset.png"

const SignupOtp = () => {
    const [inputs, setInputs] = useState(['', '', '', '','','']);
    const inputRefs = useRef([]);

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);

            if (value !== '' && index < inputs.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && inputs[index] === '') {
            const newInputs = [...inputs];
            newInputs[index - 1] = '';
            setInputs(newInputs);
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text');
        if (/^\d{4}$/.test(text)) {
            const newInputs = text.split('');
            setInputs(newInputs);
            newInputs.forEach((value, index) => {
                inputRefs.current[index].value = value;
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic here
        console.log('Submitting OTP:', inputs.join(''));
    };
  return (
    <>
      <div
        className="bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${login})` }}
      >
        <div
          style={{
            backgroundImage: `url(${loginwheel})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="min-h-screen flex justify-center items-center">
            <div className="bg-white lg:mx-4 p-8 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3 py-14 ">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-[#5356FB]">Enter The Otp</h1>
                <img src={logo} className="h-10" alt="Logo" />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <img src={reset} className="h-5 w-5" alt="Reset icon" />
                <p className="text-sm">
                Enter the OTP, sent to your registered Email ID, be careful 
                not to share the code with anyone.
                </p>
              </div>
              <form id="otp-form" onSubmit={handleSubmit}>
                <div className="flex items-center justify-center gap-3 mt-5">
                  {inputs.map((value, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                      maxLength="1"
                      value={value}
                      onChange={(e) => handleInputChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={handlePaste}
                    />
                  ))}
                </div>
                <div className="mb-4 mt-5 text-center">
                  <a className="text-gray-600 hover:text-gray-800 lg:ml-36">
                    Didn't receive the OTP?{" "}
                    <a href="#" className="text-[#5356FB]">
                      Resend
                    </a>
                  </a>
                </div>
                <div className="mb-6">
                  <Button
                    name="Login"
                    style="bg-[#5356FB] hover:bg-blue-600 text-white font-bold py-2 w-full rounded-full mt-6"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupOtp