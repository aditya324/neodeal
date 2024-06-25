import React from 'react';
import bag from "../assets/bag.png";
import wheel from "../assets/wheel.png";
import cup from "../assets/cup.png";

const Schemes = [
  {
    id: 1,
    img: bag,
    text: "Buy any product from this scheme",
  },
  {
    id: 2,
    img: wheel,
    text: "Spin the wheel and get a lucky number",
  },
  {
    id: 3,
    img: cup,
    text: "If your number is chosen the prize is all yours",
  },
];

const SchemeCard = () => {
  return (
    <>
      <div>
        <div className="flex justify-start ml-20">
          <p className="text-[#374557] font-bold  text-xl pt-4">
            How Do Schemes Work?
          </p>
        </div>
        <div className="bg-[#DEDFF3] w-full flex flex-wrap justify-evenly mt-8 ">
          {Schemes.map((scheme) => {
            return (
              <div key={scheme.id} className="max-w-xs rounded overflow-hidden m-4 flex-shrink-0">
                <div className="w-16 h-16 mx-auto mt-4 rounded-full overflow-hidden">
                  <img
                    src={scheme.img}
                    alt={scheme.text}
                    className="w-full h-full object-cover bg-white p-4"
                  />
                </div>
                <div className="text-center px-6 py-2">
                  <p className="text-[#374557] font-medium text-lg mb-1">
                    {scheme.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SchemeCard;
