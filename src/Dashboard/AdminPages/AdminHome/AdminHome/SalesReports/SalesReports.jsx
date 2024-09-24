
const SalesReports = () => {
    return (
        <div className="grid md:grid-cols-4  gap-3 grid-cols-1">
            <div className="min-h-20 rounded-md hover:bg-red-700 bg-red-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">Revenue</h2>
            </div>
            <div className="min-h-20 rounded-md hover:bg-green-700 bg-green-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">Profit</h2>
            </div>
            <div className="min-h-20 rounded-md hover:bg-yellow-700 bg-yellow-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">Coupon</h2>
            </div>
            <div className="min-h-20 rounded-md hover:bg-blue-700 bg-blue-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">Discount</h2>
            </div>
            <div className="min-h-20 rounded-md hover:bg-pink-700 bg-pink-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">Complete</h2>
            </div>
            <div className="min-h-20 rounded-md hover:bg-red-700 bg-red-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">Cancel</h2>
            </div>
            
        </div>
    );
};

export default SalesReports;