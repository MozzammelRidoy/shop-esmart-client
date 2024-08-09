import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./image.gallary.style.css";
import { Rating } from "@smastrom/react-rating";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const stockUpdate = "available";
 
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/product/${id}`).then((res) => setProductDetail(res.data));
  }, [axiosPublic, id]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  // console.log(productDetail);
  const images = productDetail.img
    ? [
        { original: productDetail.img, thumbnail: productDetail.img },
        { original: productDetail.img, thumbnail: productDetail.img },
        { original: productDetail.img, thumbnail: productDetail.img },
        { original: productDetail.img, thumbnail: productDetail.img },
        { original: productDetail.img, thumbnail: productDetail.img },
        { original: productDetail.img, thumbnail: productDetail.img },
        { original: productDetail.img, thumbnail: productDetail.img },
      ]
    : [];

  console.log(productDetail);

  const handleQuantityMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddtoCart = () => {
    const cartInfo = { id: productDetail._id, name: productDetail.name, quantity : quantity };
    console.log(cartInfo);
  };

  return (
    <div className="md:max-w-6xl mx-auto mt-3 ">
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
        <div className=" md:w-1/2 w-full p-2 flex flex-col justify-between md:space-y-2 space-y-1 ">
          {/* product heading or headline or title  */}
          <div>
            <h2 className="md:text-3xl text-xl">{productDetail.name}</h2>
            <p className="font-semibold">
              <span className="text-green-500">Stock : </span>
              {stockUpdate === "available" ? (
                <span className="text-green-500">Available</span>
              ) : (
                <span className="text-[#ff3811]">Unavailable</span>
              )}
            </p>
          </div>

          {/* product price and ratings  */}
          <div className="flex justify-between items-center ">
            <p className="text-sm md:text-lg  text-[#ff3811]">
              Price :{" "}
              <span className="md:text-xl text-lg">{productDetail.price}</span>{" "}
              Tk
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
              <span className="font-bold">Details : </span>Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nesciunt voluptatem omnis illo
              quaerat fugit molestias consequatur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eos quibusdam labore, magni at quia
              quos pariatur a fugit deserunt adipisci 
            </p>
          </div>
          {/* product action button  */}
          <div className="space-y-3">
            <hr className="w-full" />
            <div className="flex items-center space-x-3">
              <p>Quantity :</p>
              <button
                onClick={handleQuantityMinus}
                className={`${
                  quantity === 1
                    ? "btn-disabled text-gray-300"
                    : "text-[#ff3811]  hover:text-[#c6290a]"
                }  rounded-full text-xl md:text-2xl`}
              >
                <FaMinusCircle></FaMinusCircle>
              </button>
              <span className=" text-base w-6 text-center md:text-xl -mt-1">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className={`${
                  stockUpdate === "available"
                    ? "text-[#ff3811] hover:text-[#c6290a] "
                    : "btn-disabled text-gray-300"
                }  rounded-full  text-xl md:text-2xl`}
              >
                <FaPlusCircle></FaPlusCircle>
              </button>
            </div>
            <div className="flex gap-2 justify-evenly">
              <button
                onClick={handleAddtoCart}
                className={`${
                  stockUpdate === "available"
                    ? "text-[#ff3811]  hover:bg-[#ff3811] hover:text-white"
                    : "btn-disabled text-gray-300"
                } w-1/2 md:py-2 py-1 bg-slate-100 `}
              >
                Add to Cart
              </button>
              {stockUpdate === "available" ? (
                <Link
                  className={`w-1/2 md:py-2 py-1 text-white bg-[#ff3811] text-center hover:bg-[#c6290a]`}
                  to={`checkout/${productDetail._id}`}
                >
                  <button className=" ">Buy Now</button>
                </Link>
              ) : (
                <button
                  className={`w-1/2 md:py-2 py-1 btn-disabled text-white bg-gray-300 text-center`}
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
        </div>
        {/* delivery information  */}

        <DeliveryInfo></DeliveryInfo>
      </div>
    </div>
  );
};

export default ProductDetailPage;

// const renderItem = (item) => (
//   <ReactImageMagnify
//     {...{
//       smallImage: {
//         alt: item.originalAlt || "product Image",
//         isFluidWidth: true,
//         src: item.original || "",

//       },
//       largeImage: {
//         src: item.original || "",
//         width: 1426,
//         height: 2000,

//       },

//       enlargedImagePortalId: "portal",
//       isEnlargedImagePortalEnabledForTouch	: false,

//       enlargedImageContainerDimensions: {
//         width: "300%",
//         height: "300%",
//       },
//     }}
//   />
// );
// return (
//   <div className="md:max-w-6xl mx-auto md:flex">
//     {/* image component  */}
//     <div className="md:w-1/4">
//       <ImageGallery
//         items={images}
//         renderItem={renderItem}
//         showNav={false}
//         showThumbnails={true}
//         showFullscreenButton={false}
//         showPlayButton={false}
//         thumbnailPosition="bottom"
//         slideOnThumbnailOver={true}
//       />
//     </div>

//     {/* instruction  */}

//     <div className="md:w-9/12 border relative">
//       <div id="portal" className="absolute  w-full h-full">
//         {/* portal content */}
//       </div>

//       <div className="text-4xl">{productDetail.name}</div>
//     </div>
//     <div style={{height: '1000px'}} />
//   </div>
// );
// };
