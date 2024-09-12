import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { GiBanknote } from "react-icons/gi";
import useSSLcommerz from "../../../hooks/useSSLcommerz";
import WaitingLoader from "../../../Component/WaitingLoader/WaitingLoader";

const PaymentMethod = ({ orderData, shippingInfo }) => {
  const [payment, setPayment] = useState("");
  const [loading, setLoading] = useState(false);
  const {sslCommerzPayment} = useSSLcommerz({setLoading});

  const isCashNowPay = orderData.shippingValue;
  const isCashDue = orderData.finalAmount - isCashNowPay;

  const isCardNowPay = orderData.finalAmount;
  const isCardDue = orderData.finalAmount - isCardNowPay;

  const isMobileNowPay = orderData.finalAmount;
  const isMobileDue = orderData.finalAmount - isMobileNowPay;

  const handlePaymentMethod = (e) => {
    setPayment(e.target.value);
  };
  // console.log(payment);

  const handleOrderPlace = async () => {
    if (Object.keys(shippingInfo).length === 0) {
      return alert("Shiipind Addess Add korun");
    }
    if(payment === 'cash'){
      const newOrder = { ...orderData, ...shippingInfo, paid : isCashNowPay, due : isCashDue , paymentMethod : payment };
      
       sslCommerzPayment(newOrder)
      

      
    }
    else if(payment === 'card'){

      const newOrder = { ...orderData, ...shippingInfo, paid : isCardNowPay, due : isCardDue, paymentMethod : payment };

    }
   
    else if(payment === 'mobileBanking'){

      const newOrder = { ...orderData, ...shippingInfo, paid : isMobileNowPay, due : isMobileDue, paymentMethod : payment };
    }
  };
  return (
    <div className="px-2 md:px-0">
      {loading && <WaitingLoader></WaitingLoader>}
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
          <div className="text-xl">
            <div className="flex justify-between items-center">
              <span>Shipping Charge Pay Now</span>
              <span>{isCashNowPay} tk</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Due Amount</span>
              <span>{isCashDue} tk</span>
            </div>
          </div>
        )}
        {payment === "card" && (
          <div className="text-xl">
            <div className="flex justify-between items-center">
              <span>Total Pay Now</span>
              <span>{isCardNowPay} tk</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Due Amount</span>
              <span>{isCardDue} tk</span>
            </div>
          </div>
        )}
        {payment === "mobileBanking" && (
          <div className="text-xl">
            <div className="flex justify-between items-center">
              <span>Total Pay Now</span>
              <span>{isMobileNowPay} tk</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Due Amount</span>
              <span>{isMobileDue} tk</span>
            </div>
          </div>
        )}
        <div className="divider"></div>
      </div>

      <div>
        {payment ? (
          <button
            onClick={handleOrderPlace}
            className="btn-block bg-[#ff3811] hover:bg-red-800 text-white py-2"
          >
            Order Place
          </button>
        ) : (
          <button
            disabled
            className="btn-block bg-gray-300 btn-disabled text-white py-2"
          >
            Order Place
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
