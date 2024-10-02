import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import MobileNavbar from "../Pages/Shared/Navbar/MobileNavbar/MobileNavbar";
import ScrollToTop from "react-scroll-to-top";
import { BiArrowToTop } from "react-icons/bi";
import ChatMessageButton from "../Pages/ChatMessage/ChatMessageButton";
import WaitingLoader from "../Component/WaitingLoader/WaitingLoader";
import { useEffect, useState } from "react";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(()=>{
    const timeOutId = setTimeout(()=>{
      setIsLoading(false)
    },1000); 

    return () => clearTimeout(timeOutId);
  },[])

  if(isLoading){
    return <WaitingLoader></WaitingLoader>
  }
  
  return (
    <div className="relative md:pb-0 pb-9">
      
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <div className="fixed bottom-0 w-full z-50 md:hidden">
        <MobileNavbar />
      </div>
      <ChatMessageButton/>
      <ScrollToTop
        data-aos="fade-up"
        smooth
        component={<BiArrowToTop className="text-white text-3xl" />}
        className="!z-50 !bg-[#ff3811] shadow-lg !rounded-full flex items-center justify-center !w-10 !h-10 !fixed !right-1 md:!bottom-10 !bottom-[60px]"
      />
    </div>
  );
};

export default Main;
