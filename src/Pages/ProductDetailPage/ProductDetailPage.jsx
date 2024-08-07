import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./image.gallary.style.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

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

  return (
    <div className="md:max-w-6xl mx-auto">
      <div className="md:flex md:gap-4 gap-2">
        {/* for image  */}
      <div className="md:w-1/3">
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
      <div className="border w-1/2 ">
        <h2>{productDetail.name}</h2>
      </div>
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
