import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MySingleCoupons from "./MySingleCoupons";

const MyCoupons = () => {
    const [myCoupons, setMyCoupons] = useState([]); 
    const axiosSecure = useAxiosSecure(); 
    
    useEffect(()=>{
        axiosSecure.get('/coupons').then(res => setMyCoupons(res.data))
    },[axiosSecure])

    const sortedCoupons = myCoupons.sort((a, b) => {
        const currentDate = new Date();
        const aEndDate = new Date(a.end_date); // End date of coupon 'a'
        const bEndDate = new Date(b.end_date); // End date of coupon 'b'
        
        // Check if 'a' is expired
        const isAExpired = currentDate > aEndDate;
        // Check if 'b' is expired
        const isBExpired = currentDate > bEndDate;

        // If 'a' is valid and 'b' is expired, 'a' should come before 'b'
        if (!isAExpired && isBExpired) return -1;
        // If 'a' is expired and 'b' is valid, 'a' should come after 'b'
        if (isAExpired && !isBExpired) return 1;
        // Otherwise, keep the current order
        return 0;
    });

    return (
        <div className="min-h-96 md:max-w-6xl md:mx-auto mx-2">
            <h2 className="text-center text-2xl md:text-4xl font-semibold md:my-6 my-3">{myCoupons?.length}-Coupons For Me</h2>

            <div className="grid md:grid-cols-1 grid-cols-1 gap-3">
                {
                    sortedCoupons.map(coupon => <MySingleCoupons coupon={coupon} key={coupon._id}></MySingleCoupons>)
                }
            </div>
        </div>
    );
};

export default MyCoupons;