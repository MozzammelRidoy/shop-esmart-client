import { Link, useNavigate, useParams } from "react-router-dom";
import HomeAndBackButton from "../../Component/HomeAndBackButton/HomeAndBackButton";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ImageGallery from "react-image-gallery";
import { Rating } from "@smastrom/react-rating";
import {
  confirmAlert,
  confirmationAlert,
  failedAlert,
} from "../../Component/SweetAlart/SweelAlart";
import { timeCoverterGMTtoLocal } from "../../utils/modules";

const AdminProductDetailsPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  console.log(productDetail);

  useEffect(() => {
    axiosSecure
      .get(`/products/admin/${id}`)
      .then((res) => setProductDetail(res.data));
  }, [axiosSecure, id]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  const handleDelete = (_id) => {
    confirmationAlert({ detailsText: "Do you want to delete it ?" }).then(
      async (res) => {
        if (res.isConfirmed) {
          const res = await axiosSecure.delete(`/products/delete/${_id}`);
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            confirmAlert("Delete Success !");
            navigate(-1);
          } else {
            failedAlert("Failed to Delete Product!");
          }
        }
      }
    );
  };

  const images = productDetail.images.map(image => ({original : image.image_url, thumbnail : image.image_url}));
    

  return (
    <div className="md:max-w-6xl mx-auto mt-3 ">
      <HomeAndBackButton></HomeAndBackButton>
      <div className="md:flex md:gap-4 gap-2  ">
        {/* for image  */}
        <div className="md:w-[30%] w-full ">
          <ImageGallery
            items={images}
            showNav={false}
            showThumbnails={true}
            showFullscreenButton={false}
            showPlayButton={false}
            thumbnailPosition="bottom"
            slideOnThumbnailOver={true}
          />
        </div>

        {/* for others content or details  */}
        <div className=" md:[70%] w-full p-2 flex flex-col justify-between md:space-y-2 space-y-1 ">
          {/* product heading or headline or title  */}
          <div>
            <h2 className="md:text-3xl text-xl capitalize ">
              {productDetail.productName.toLowerCase()}
            </h2>
            <div className="flex gap-5 mt-2 font-semibold">
            <p className="">
              <span className="text-green-500">Stock : </span>
              {productDetail.stockStatus && productDetail.stockQuantity ? (
                <span className="text-green-500">Available</span>
              ) : (
                <span className="text-[#ff3811]">Unavailable</span>
              )}
            </p>
            <p className="text-blue-400">
                Stock Quantiy : <span>{productDetail.stockQuantity}</span>
            </p>
            <p className="text-yellow-500 capitalize">
                Category : {productDetail.productCategory[1]}
            </p>
            </div>
          </div>

          {/* product price and ratings  */}
          <div className="  ">
            <p className="text-sm md:text-lg  text-[#ff3811]">
              Cost Price :{" "}
              <span className="md:text-xl text-lg">
                {productDetail.costPrice}
              </span>{" "}
              Tk
            </p>
            <p className="text-sm md:text-lg  text-[#ff3811]">
              Sell Price :{" "}
              <span className="md:text-xl text-lg">
                {productDetail.sellPrice}
              </span>{" "}
              Tk
            </p>

            <p className="text-sm md:text-lg  text-[#ff3811]">
              Discount Percent :{" "}
              <span className="md:text-xl text-lg">
                {productDetail.discountPercent}
              </span>
              %
            </p>

            <p className="text-sm md:text-lg  text-[#ff3811]">
              Discount Amount :{" "}
              <span className="md:text-xl text-lg">
                {productDetail.discountAmount}
              </span>{" "}
              Tk
            </p>

            <p className="text-sm md:text-lg  text-[#ff3811]">
              Final Price :{" "}
              <span className="md:text-xl text-lg">
                {productDetail.finalPrice}
              </span>{" "}
              Tk
            </p>

            <p className="text-sm md:text-lg  text-[#ff3811]">
              Publish Date :{" "}
              <span className="md:text-xl text-lg">
                {
                    timeCoverterGMTtoLocal(productDetail.createdAt)
                }
              </span>{" "}
              BD
            </p>

            {productDetail?.ratings && (
              <p className="flex items-center gap-1">
                <span className="text-sm md:text-lg">Ratings : </span>
                <span className="flex items-center text-xs md:text-lg">
                  <Rating
                    className="md:max-w-20 max-w-16"
                    value={productDetail.ratings}
                    readOnly
                  />
                  <span className="text-[9px] md:text-[11px]">
                    ({productDetail.ratingsCount})
                  </span>
                </span>
              </p>
            )}
          </div>

          {/* product details or description  */}
          <div className="flex-grow">
            <p className="text-justify">
              <span className="font-bold">Details : </span>
              {productDetail.productDetails}
            </p>
            <div>
                <span className="text-xl">Tags : </span> {
                productDetail.productTags.map((tag, index) => <p className="inline-block" key={index}>{index+1}. {tag}</p>)
            }
            </div>
          </div>
          {/* product action button  */}
          <div className="space-y-3">
            <hr className="w-full" />

            <div className="flex gap-2 justify-evenly">
              <button
                onClick={() => handleDelete(productDetail._id)}
                className={`text-[#ff3811]  hover:bg-[#ff3811] hover:text-white w-1/2 md:py-2 py-1 bg-slate-100 `}
              >
                Delete it
              </button>

              <Link
                to={`/update/${productDetail._id}`}
                className={`w-1/2 md:py-2 py-1 text-white bg-[#ff3811] text-center hover:bg-[#c6290a]`}
              >
                <button className=" ">Update it</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetailsPage;
