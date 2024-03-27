import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Shared/Button";
import Card from "../cart/Card";
import Thank from "../cart/Thank";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(orderPopup); // Update visible state when orderPopup changes
  }, [orderPopup]);

  const close = () => {
    setVisible(false);
  };
  const [shop, setShop] = React.useState(false);
  const success = () => {
    setShop(true);
  };

  return (
    <>
    
    {visible && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm ">
          <div className="w-[75vw] h-[80vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl z-20">
            {/* Header section */}
            <div className="flex items-center justify-between ">
              <h1 className="font-bold text-center text-2xl  w-[100vw] mb-2">
                Order Now
              </h1>
              <div>
                <IoCloseOutline
                  onClick={close}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>

            <div className="flex ">
              <div className="w-2/4 h-[70vh]  p-4 overflow-y-auto border border-red-800">
                <Card></Card>
                <br />
                <Card></Card>
                <br />
                <Card></Card>
                <br />
                <Card></Card>
                <br />
                <Card></Card>
                <br />
              </div>
              <div className="w-2/4 h-[70vh] rounded-lg border border-gray-700 flex justify-between flex-col p-2">
                <h1 className="text-center font-bold p-2 text-2xl ">
                  Price details
                </h1>
                <h3>Total MRP :</h3>
                <h3>Discount on MRP :</h3>
                <h2>Coupon Discount :</h2>
                <h4>Shipping fee :</h4>
                <hr />
                <h2>Total Amt : $</h2>
                <hr />
                <div className="mb-4 text-center">
                  <Button
                    text={"Place Order"}
                    bgColor="bg-primary"
                    textColor="text-white"
                    handler={success}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {shop&&<Thank/>}
    </>
  );
};

export default Popup;
