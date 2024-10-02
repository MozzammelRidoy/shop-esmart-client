import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const AnyReactComponent = ({ lat, lng, text }) => {
  const handleClick = () => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
    <div
      className="flex-col flex items-center text-nowrap text-[#ff3811] text-4xl cursor-pointer"
      onClick={handleClick}
    >
      <FaMapMarkerAlt />
      <span className="text-xl">{text}</span>
    </div>
  );
};

const Location = () => {
  const defaultProps = {
    center: {
      lat: 23.8048,
      lng: 90.3667,
    },
    zoom: 14,
  };

  return (
    <div
      className="md:max-w-6xl md:mx-auto my-5"
      style={{ height: "75vh", width: "100%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="Shop Esmart"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Location;
