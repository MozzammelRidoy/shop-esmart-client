import { useRef } from "react";

const ProfilePicture = () => {
  const fileInputRef = useRef();

  const handleImageInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log("file change", file);
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-700 w-full h-96  flex flex-col justify-center  items-center gap-3">
      <div className="w-40 rounded-full">
        <img
          className="rounded-full "
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-bold text-2xl">Omuker Name</h2>
        <p>ID : 664#@fdc</p>
        <button
          onClick={handleImageInput}
          className="text-white py-1 w-full outline-none rounded-sm  bg-[#ff3811] hover:bg-red-800"
        >
          Change Image
        </button>

        {/* hide file input  */}
        <input
          type="file"
          accept="image/png"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
