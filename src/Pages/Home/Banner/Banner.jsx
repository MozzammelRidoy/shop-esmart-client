import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.style.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



//image import
import slide1 from "../../../assets/slider/slide 1.png";
import slide2 from "../../../assets/slider/slide 2.png";
import slide3 from "../../../assets/slider/slide 3.png";
import slide4 from "../../../assets/slider/slide 4.png";
import slide5 from "../../../assets/slider/slide 5.png";
import { useRef } from "react";

const Banner = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const sliders = [
    { id: 1, image: slide1 },
    { id: 2, image: slide2 },
    { id: 3, image: slide3 },
    { id: 4, image: slide4 },
    { id: 5, image: slide5 },
  ];

  
  

  return (
    <div data-aos="fade-left" data-aos-duration="1500" className="md:col-span-3 col-span-4 md:order-2 order-1">
       <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          
        }}
        pagination={{
          clickable: true,
          
        }}
        
        
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {
            sliders.map(image => <SwiperSlide  key={image.id}><img className="md:h-[420px] w-full" src={image.image} alt="" /></SwiperSlide>)
        }

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
