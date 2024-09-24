
const ReportOption = () => {
    return (
        <div className="grid md:grid-cols-4  gap-3 grid-cols-1">

            <div className="min-h-20 rounded-md hover:bg-red-700 bg-red-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">Users</h2>
            </div>
            <div className="min-h-20 rounded-md hover:bg-green-700 bg-green-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">On Curiar</h2>
            </div>
            <div className="min-h-20 rounded-md hover:bg-yellow-700 bg-yellow-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">Pending</h2>
            </div>
            <div className="min-h-20 rounded-md hover:bg-blue-700 bg-blue-500 text-center flex items-center justify-center text-white">
                <h2 className="text-lg md:text-2xl">More</h2>
            </div>
            
        </div>
    );
};

export default ReportOption;