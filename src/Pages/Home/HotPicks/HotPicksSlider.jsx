import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const HotPicksSlider = ({ collections }) => {
  return (
    <Swiper
      freeMode={true}
      breakpoints={{
        640: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4.5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5.5,
          spaceBetween: 10,
        },
      }}
      slidesPerView={2.5}
      spaceBetween={10}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {collections.slice(0, 9).map((product) => (
        <SwiperSlide
          className=" bg-gray-100 dark:bg-gray-900 "
          key={product._id}
        >
          <Link to={`product/${product._id}`}>
            <div className="flex flex-col  text-left">
              <img
                src={product.img}
                className="w-full h-38 object-cover"
                alt=""
              />

              <div className="md:h-20 h-16 px-1 py-1 flex flex-col justify-between">
                <h2 className="md:text-sm break-all  text-xs font-bold ">
                  {product.name?.length > 29
                    ? `${product.name.slice(0, 29)}...`
                    : product.name}
                </h2>
                <div className="flex justify-between align-bottom">
                  <p className=" ">Tk: {product.price}</p>

                  {product?.ratings && (
                    <span className="flex items-center text-xs md:text-lg">
                      <Rating
                        className="md:max-w-20 max-w-10"
                        value={product.ratings}
                        readOnly
                      />{" "}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <SwiperSlide className="">
        <Link to={"/"}>
          <div className="h-[210px] md:h-[278px] flex justify-center items-center">
            <button className="md:text-xl text-base flex items-center gap-x-2">
              See All{" "}
              <span className="text-[#FF3811]">
                <FaArrowRightLong />{" "}
              </span>
            </button>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default HotPicksSlider;
