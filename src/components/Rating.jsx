import React, { useState } from 'react';

const Rating = ({ rating, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    onRating(index);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          className={`cursor-pointer  ${index <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          ★
        </div>
      ))}
    </div>
  );
};

export default Rating;
