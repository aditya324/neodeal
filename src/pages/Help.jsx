import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-300 xl:px-32 px-3 py-5">
      <div className="mt-5 flex">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeftLong className="text-2xl" />
        </button>
        <p className="ml-2 text-xl font-semibold">Help center</p>
      </div>
      <div className="text-center mt-5">
        <p className="font-semibold text-2xl text-[#5356FB]">Help center</p>
        <p className="text-textGrey text-base font-bold lg:leading-8 mt-5">
          Neo deals Help center | 24/7 customer support
        </p>
        <p className="text-textGrey text-base font-normal lg:leading-8 mb-16">
          Neodeals is Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with
        </p>
      </div>
    </div>
  );
};

export default Help;
