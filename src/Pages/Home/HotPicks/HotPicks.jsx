import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import ProductsSlider from "../../../Component/ProductsSlider/ProductsSlider";

const HotPicks = () => {
    

    return (
        <section>
            <div className="flex justify-between mb-3 md:mb-5">
                <h2 className="md:text-3xl text-xl font-bold flex items-center gap-2">Hot Picks <span className="text-[#FF3811] text-2xl"><FaFire />    </span>            </h2>
                <Link to={'/'}><button className="border px-3 md:px-5 py-1 md:py-2 border-[#FF3811] text-center text-[#FF3811] hover:bg-[#FF3811] hover:text-white">See More</button></Link>
            </div>

            <div>

            {/* TODO :    <ProductsSlider collections={"hotPicks"}/> */}
                <ProductsSlider collections={"products"}/>
            </div>
            
        </section>
    );
};

export default HotPicks;