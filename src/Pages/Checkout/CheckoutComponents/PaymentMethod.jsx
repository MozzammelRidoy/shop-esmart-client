import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { GiBanknote } from "react-icons/gi";

const PaymentMethod = () => {
  const [payment, setPayment] = useState("");

  const handlePaymentMethod = (e) => {
    setPayment(e.target.value);
  };
  console.log(payment);
  return (
    <div className="px-2 md:px-0">
      <h2 className="md:text-2xl text-lg mb-3">Payment Method</h2>
      <div>
        <form
          onChange={handlePaymentMethod}
          className="md:flex justify-between"
        >
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className="radio-sm"
              name="payment"
              value={"card"}
              id=""
            />{" "}
            <span className="text-2xl">
              <FaRegCreditCard />
            </span>
            <span>Card</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className="radio-sm"
              name="payment"
              value={"mobileBanking"}
              id=""
            />{" "}
            <span className="text-2xl">
              <AiFillBank />
            </span>
            <span className="text-nowrap">Mobile Banking</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className="radio-sm"
              name="payment"
              value={"cash"}
              id=""
            />{" "}
            <span className="text-2xl">
              <GiBanknote />
            </span>
            <span className="text-nowrap">Cash</span>
          </div>
        </form>
      </div>
      <div>
        <div className="divider"></div>
        {payment === "cash" && (
          <div>
            <div className="flex justify-between items-center">
              <span>Shipping Charge Pay Now</span>
              <span>150 tk</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Due Amount</span>
              <span>1200 tk</span>
            </div>
          </div>
        )}
        {payment === "card" && (
          <div>
            <div className="flex justify-between items-center">
              <span>Total Pay Now</span>
              <span>1350 tk</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Due Amount</span>
              <span>00 tk</span>
            </div>
          </div>
        )}
        {payment === "mobileBanking" && (
          <div>
            <div className="flex justify-between items-center">
              <span>Total Pay Now</span>
              <span>1350 tk</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Due Amount</span>
              <span>00 tk</span>
            </div>
          </div>
        )}
        <div className="divider"></div>
      </div>

      <div>
        {payment ? (
          <button className="btn-block bg-[#ff3811] hover:bg-red-800 text-white py-2">
            Order Place
          </button>
        ) : (
          <button className="btn-block bg-gray-300 btn-disabled text-white py-2">
            Order Place
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
