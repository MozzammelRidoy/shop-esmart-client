import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ReviewOrder = () => {
  const [carts, setCarts] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/products").then((res) => setCarts(res.data.slice(0, 3)));
  }, [axiosPublic]);

  return (
    <div className="px-2 md:px-0">
      <h2 className="md:text-2xl text-lg mb-2">Review Your Order</h2>

      <div>
        {carts.map((item) => (
          <div key={item._id} className="flex items-center  gap-2 mb-2">
            <div className="w-14 h-14 md:w-20 md:h-20 flex-shrink-0 overflow-hidden">
              <img
                className="w-full h-full ovject-cover "
                src={item.img}
                alt=""
              />
            </div>
            <div className="text-left flex-grow ">
              <p>
                {item.name.length > 20
                  ? `${item.name.slice(0, 19)}...`
                  : item.name}
              </p>
              <p>Quantity : {item.quantity}</p>
            </div>
            <div>
              <p className="text-nowrap">{item.price} Tk</p>
            </div>
          </div>
        ))}
        <div className="">
          <div className="divider"></div>

          <div className="flex justify-between items-center">
            <span>Items</span>
            <span>1 pcs</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Shipping</span>
            <span>00 tk</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Discout</span>
            <span>00 tk</span>
          </div>
          <div className="flex justify-between items-center">
            <span>VAT+Tax</span>
            <span>00 tk</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Sub Total</span>
            <span>1200 tk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
