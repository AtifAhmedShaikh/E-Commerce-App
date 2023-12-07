import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const navigate = useNavigate();
  const [isProceedOrder, setIsProceedOrder] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const handleProceedOrder = () => {
    setIsProceedOrder(true);
  };
  const {
    totalProductQuantity,
    subTotal,
    salesTax,
    shippingCharges,
    grandTotal,
  } = orderDetails;
  return (
    <React.Fragment>
      {isProceedOrder && (
        <div className="w-96   bg-green-100 text-green-800 text-center font-medium me-2 px-5 py-3 rounded-lg dark:bg-gray-700 dark:text-blue-400 border border-green-400">
          Please check your Email to confirm your order
        </div>
      )}
      <div className="w-[75%] h-[25rem] rounded-md bg-gray-100 flex flex-col items-center">
        <h4 className="text-2xl mt-2 font-bold text-gray-700 text-center">
          Order Summary
        </h4>
        <div className="flex w-[75%] flex-col mt-5 py-1">
          <div className="flex justify-between px-4 py-3 border-b border-gray-500">
            <span>Total Items</span>
            <span>{totalProductQuantity}</span>
          </div>
          <div className="flex justify-between px-4 py-3 border-b border-gray-500">
            <span>Sub Total </span>
            <span>{subTotal}</span>
          </div>
          <div className="flex justify-between px-4 py-3 border-b border-gray-500">
            <span>Sales Tax</span>
            <span>
              {salesTax} <span className="text-[12px]">5%</span>
            </span>
          </div>
          <div className="flex justify-between px-4 py-3 border-b border-gray-500">
            <span>Shipping Charges</span>
            <span>
              {shippingCharges} <span className="text-[12px]">15%</span>{" "}
            </span>
          </div>
          <div className="flex justify-between px-4 py-3 border-b border-gray-500">
            <span className="font-bold">Grand Total</span>
            <span>{grandTotal}</span>
            </div>
          <div className="mt-2">
            <Button
              className="bg-green-700 hover:bg-green-600 rounded-[5px] min-w-fit  h-8 px-2 py-0 ml-2 text-gray-100"
              onClick={handleProceedOrder}
            >
              Proceed Order
            </Button>
            <Button
              className="bg-teal-700 hover:bg-teal-600 rounded-[5px] min-w-fit  h-8 px-2 py-0 ml-2 text-gray-100"
              onClick={() => navigate("/products")}
            >
              Shopping
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderSummary;
