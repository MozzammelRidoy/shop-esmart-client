import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import HotPicksSlider from "./HotPicksSlider";

const HotPicks = () => {
    const axiosPublic = useAxiosPublic(); 
    const [hotPicks, setHotPicks] = useState([]);
    console.log(hotPicks);

    useEffect(()=>{
        axiosPublic.get('/products')
        .then(res => setHotPicks(res.data))
    },[axiosPublic])

    return (
        <section>
            <div className="flex justify-between mb-3 md:mb-5">
                <h2 className="md:text-3xl text-xl font-bold flex items-center gap-2">Hot Picks <span className="text-[#FF3811] text-2xl"><FaFire />    </span>            </h2>
                <Link to={'/'}><button className="border px-3 md:px-5 py-1 md:py-2 border-[#FF3811] text-center text-[#FF3811] hover:bg-[#FF3811] hover:text-white">See More</button></Link>
            </div>

            <div>
                <HotPicksSlider collections={hotPicks}/>
            </div>
            
        </section>
    );
};

export default HotPicks;