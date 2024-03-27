import React from "react";

  


const Card = () => {
  return (
    <div className="flex border border-gray-400 p-2 rounded-lg" >
      <img
        className="w-[35%] h-[20vh] object-cover "
        src="https://c.files.bbci.co.uk/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg"
        alt=""
      />

      <div className="w-[65%] h-[20vh] ml-5 text-lg font-semibold">
        <p>Product name:</p>
        <p>Quantity:</p>
        <p>Price:</p>
      </div>
    </div>
  );
};

export default Card;
