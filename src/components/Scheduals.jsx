import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import logo from "../components/utilities/images.png";
import usBlogo from "../components/utilities/images2.png";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Scheduals = () => {
  return (
    <div className="py-2  ml-10">
      <div className="flex justify-between justify-center items-center">
        <BiSolidLeftArrow className="text-2xl text-red-600"></BiSolidLeftArrow>
        <h1 className="text-2xl font-bold">Flights from Dhaka to Chottagong</h1>
        <BiSolidRightArrow className="text-2xl text-red-600"></BiSolidRightArrow>
      </div>

      <div className="flex justify-between shadow-lg rounded-lg border-2 border-gray-200 p-4 mt-5 gap-5">
        <div className="bg-gray-200 rounded p-2 ">
          <h1 className="text-lg font-semibold">Cheapest</h1>
          <p>To get the cheapest available flights</p>
        </div>
        <div className="grid grid-cols-3 divide-x">
          <div></div>
          <div></div>
        </div>
        <div className="p-2 mb-5">
          <h1 className="text-lg font-semibold">Shortest</h1>
          <p>To get the shortest available flights</p>
        </div>
      </div>
      <div className="flex gap-4 my-5 shadow-lg rounded-lg border-2 border-gray-200 p-5 justify-between">
        <div>
          <img className="h-auto max-h-16" src={logo} alt="" />
          <p className="text-gray-400">Biman Bangladesh Airlines</p>
          <br />

          <p className="text-gray-400">Price</p>
          <p className="font-semibold">BDT 3,202</p>
          <p className="text-green-600">Partially Refundable</p>
        </div>
        <div>
          <p className="text-gray-400">Depart</p>
          <p className="font-semibold">19:00</p>
          <p>Sat, 13 Jan 2024</p>
          <p className="text-gray-400">Dhaka (DAC)</p>
        </div>
        <div>
          <p className="text-gray-400">45 minutes</p>
          <HiOutlineArrowLongRight className="text-red-600" />

          <p>Non Stop</p>
        </div>
        <div>
          <p className="text-gray-400">Arrive</p>
          <p className="font-semibold">19:45</p>
          <p>Sat, 13 Jan 2024</p>
          <p>Chittagong (CGP)</p>
          <br />

          <button className="btn bg-red-600 text-white">Book Now</button>
          <p className="text-red-600 font-semibold">Flight Details</p>
        </div>
      </div>
      <div className="flex gap-4 my-5 shadow-lg rounded-lg border-2 border-gray-200 p-5 justify-between">
        <div>
          <img className="h-auto max-h-16" src={logo} alt="" />
          <p className="text-gray-400">Biman Bangladesh Airlines</p>
          <br />

          <p className="text-gray-400">Price</p>
          <p className="font-semibold">BDT 3,202</p>
          <p className="text-green-600">Partially Refundable</p>
        </div>
        <div>
          <p className="text-gray-400">Depart</p>
          <p className="font-semibold">22:00</p>
          <p>Sat, 13 Jan 2024</p>
          <p className="text-gray-400">Dhaka (DAC)</p>
        </div>
        <div>
          <p className="text-gray-400">45 minutes</p>
          <HiOutlineArrowLongRight className="text-red-600" />

          <p>Non Stop</p>
        </div>
        <div>
          <p className="text-gray-400">Arrive</p>
          <p className="font-semibold">22:45</p>
          <p>Sat, 13 Jan 2024</p>
          <p>Chittagong (CGP)</p>
          <br />

          <button className="btn bg-red-600 text-white">Book Now</button>
          <p className="text-red-600 font-semibold">Flight Details</p>
        </div>
      </div>
      <div className="flex gap-4 my-5 shadow-lg rounded-lg border-2 border-gray-200 p-5 justify-between">
        <div>
          <img className="h-auto max-h-16" src={logo} alt="" />
          <p className="text-gray-400">Biman Bangladesh Airlines</p>
          <br />

          <p className="text-gray-400">Price</p>
          <p className="font-semibold">BDT 3,641</p>
          <p className="text-green-600">Partially Refundable</p>
        </div>
        <div>
          <p className="text-gray-400">Depart</p>
          <p className="font-semibold">07:45</p>
          <p>Sat, 13 Jan 2024</p>
          <p className="text-gray-400">Dhaka (DAC)</p>
        </div>
        <div>
          <p className="text-gray-400">45 minutes</p>
          <HiOutlineArrowLongRight className="text-red-600" />

          <p>Non Stop</p>
        </div>
        <div>
          <p className="text-gray-400">Arrive</p>
          <p className="font-semibold">08:45</p>
          <p>Sat, 13 Jan 2024</p>
          <p>Chittagong (CGP)</p>
          <br />

          <button className="btn bg-red-600 text-white">Book Now</button>
          <p className="text-red-600 font-semibold">Flight Details</p>
        </div>
      </div>
      <div className="flex gap-4 my-5 shadow-lg rounded-lg border-2 border-gray-200 p-5 justify-between">
        <div>
          <img className="h-auto max-h-16" src={usBlogo} alt="" />
          <p className="text-gray-400">Biman Bangladesh Airlines</p>
          <br />

          <p className="text-gray-400">Price</p>
          <p className="font-semibold">BDT 3,954</p>
          <p className="text-green-600">Partially Refundable</p>
        </div>
        <div>
          <p className="text-gray-400">Depart</p>
          <p className="font-semibold">07:15</p>
          <p>Sat, 13 Jan 2024</p>
          <p className="text-gray-400">Dhaka (DAC)</p>
        </div>
        <div>
          <p className="text-gray-400">45 minutes</p>
          <HiOutlineArrowLongRight className="text-red-600" />

          <p>Non Stop</p>
        </div>
        <div>
          <p className="text-gray-400">Arrive</p>
          <p className="font-semibold">08:10</p>
          <p>Sat, 13 Jan 2024</p>
          <p>Chittagong (CGP)</p>
          <br />

          <button className="btn bg-red-600 text-white">Book Now</button>
          <p className="text-red-600 font-semibold">Flight Details</p>
        </div>
      </div>
    </div>
  );
};

export default Scheduals;
