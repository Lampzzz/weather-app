import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

const Status = ({ humidity, wind }) => {
  return (
    <div className="mt-5 w-full grid grid-cols-2 gap-x-5 ">
      <div className="flex items-center">
        <WiHumidity size={50} />
        <div className="flex flex-col">
          <h3 className="font-bold">{humidity}%</h3>
          <small>Humidity</small>
        </div>
      </div>
      <div className="flex items-center">
        <FaWind size={25} />
        <div className="flex flex-col ms-3">
          <h3 className="font-bold">{wind} Kmh</h3>
          <small>Wind Speed</small>
        </div>
      </div>
    </div>
  );
};

export default Status;
