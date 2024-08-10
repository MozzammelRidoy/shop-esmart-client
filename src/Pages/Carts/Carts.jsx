import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import HomeAndBackButton from "../../Component/HomeAndBackButton/HomeAndBackButton";
import { RxCross2 } from "react-icons/rx";
import SubTotal from "./SubTotal/SubTotal";

const Carts = () => {
  const axiosPublic = useAxiosPublic();

  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axiosPublic.get("/products").then((res) => setCarts(res.data.slice(0, 3)));
  }, [axiosPublic]);

  console.log(carts);

  const handleItemDelete = (_id) => {
    console.log(_id);
  };

  return (
    <div className="md:max-w-6xl mx-auto mt-3">
      <HomeAndBackButton></HomeAndBackButton>
      <div className="md:flex gap-3 ">
        {/* carts table  */}
        <div className="overflow-x-auto  md:w-3/4 ">
          <table className="table">
            <thead className="md:text-2xl text-base">
              <tr>
                <th className="!p-1">Item</th>
                <th className="!p-1">Price</th>
                <th className="!p-1">Qauntity</th>
                <th className="!p-1">Total</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr className="hover relative" key={cart._id}>
                  <td className="!p-1">
                    <Link to={`/product/${cart._id}`}>
                      <div className="flex items-center gap-1 md:gap-3">
                        <div className="md:w-32 w-16 h-16 md:h-32 overflow-hidden flex-shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            src={cart?.img}
                          />{" "}
                        </div>
                        <div className="text-xs  md:text-lg capitalize">
                          <p>
                            {cart?.name.length > 15
                              ? `${cart?.name.slice(0, 15).toLowerCase()}...`
                              : cart?.name.toLowerCase()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className=" text-nowrap md:text-lg !p-1">
                    {cart?.price} Tk
                  </td>
                  <td className="!p-1">
                    <div className="space-x-3 flex items-center">
                      <button
                        className={`${
                          cart?.quantity === 1
                            ? "btn-disabled text-gray-300"
                            : "text-[#ff3811]  hover:text-[#c6290a]"
                        }  rounded-full text-lg md:text-2xl`}
                      >
                        <FaMinusCircle></FaMinusCircle>
                      </button>
                      <span className=" text-base text-center md:w-6 w-4 md:text-lg">
                        {cart?.quantity}
                      </span>
                      <button
                        className={`
                     text-[#ff3811] hover:text-[#c6290a] 
                     rounded-full  text-lg md:text-2xl`}
                      >
                        <FaPlusCircle></FaPlusCircle>
                      </button>
                    </div>
                  </td>
                  <td className="!p-1">
                    {" "}
                    <div>
                      <p className=" text-nowrap text-sm md:text-lg">
                        {cart.price * 1} Tk
                      </p>{" "}
                      <button
                        onClick={() => handleItemDelete(cart._id)}
                        className="absolute top-1 right-1 text-xl rounded-full md:text-3xl text-[#ff3811] hover:text-[#929090]"
                      >
                        <RxCross2 />{" "}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sub total or Summery  */}
        <SubTotal></SubTotal>
      </div>
    </div>
  );
};

export default Carts;
