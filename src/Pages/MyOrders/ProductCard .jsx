
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ProductCard = ({ product, setIsModalOpen, setSelectedProduct, order_status }) => {
  const axiosSecure = useAxiosSecure(); 
  const { productIamge, productPrice, quantity, product_id } = product;

  const [checkReview, setCheckReview] = useState({}); 
  console.log(checkReview)


  // check reviews.

  useEffect(() => {
    const checkReviewStatus = async (id) => {
      try {
        const response = await axiosSecure.get(`/products-review-check/${product_id}`);
        setCheckReview(prevState => ({
          ...prevState,
          [id]: response.data
        }));
      } catch (error) {
        console.error('Error checking review status', error);
      }
    };

    checkReviewStatus();
  }, [axiosSecure, product_id]);
 

  const handleReviewClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  

  return (
    <div className="border  rounded-lg shadow-lg flex items-center gap-3 p-3">
      <div className="h-40 w-[40%]">
        <img
          src={productIamge}
          alt="Product Image"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="">
        <p className="text-sm font-bold">Price: {productPrice} BDT</p>
        <p className="text-sm">Quantity: {quantity}</p>
        <Link
          to={`/product/${product_id}`}
          className="mt-2 inline-block text-blue-500 hover:underline"
        >
          View Product
        </Link>
        {order_status === "Delivered" && <>{checkReview.ratingSubmit ? <button className="block text-base py-1 px-2  mt-2 bg-[#ff3811] hover:bg-red-700 text-white" onClick={()=>handleReviewClick(product)}>Get Review</button> : <div>Already Submit</div>} </>}
      </div>
    </div>
  );
};

export default ProductCard;
