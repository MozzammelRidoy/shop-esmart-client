// import { useState } from "react";
import { IoGridSharp, IoListSharp } from "react-icons/io5";

const PageViewMode = ({viewMode, setViewMode}) => {
    

    return (
        <div className="flex gap-x-1">
                <button onClick={()=>setViewMode('grid')} className={`${viewMode === 'grid' && 'text-[#FF3811] '} text-2xl`}><IoGridSharp />
                </button>
                <button onClick={()=>setViewMode('list')} className={`${viewMode === 'list' && 'text-[#FF3811] '} text-3xl`}  ><IoListSharp />  </button>
        </div>
    );
};

export default PageViewMode;