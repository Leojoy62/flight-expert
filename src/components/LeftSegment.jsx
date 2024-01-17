import "./LeftSegment.css";
import { BsSunrise } from "react-icons/bs";
import { PiSunDimLight, PiSunHorizonFill } from "react-icons/pi";

const LeftSegment = () => {
  return (
    <div className="py-2 px-6 shadow-lg rounded-lg border-2 border-gray-200">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold mb-3">Session Timeout in</h1>
        <div className="flex mb-3">
          <div>
            <h3 className="bg-red-600 text-white py-1 px-3 rounded">17</h3>
            <p className="text-center">min</p>
          </div>
          <p className="text-red-600 mx-1 p-2">:</p>
          <div>
            <h3 className="bg-red-600 text-white py-1 px-3 rounded">51</h3>
            <p className="text-center">sec</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-3">
        <h3>One Way Price</h3>
        <input
          type="range"
          min={0}
          max="100"
          value="100"
          className="range-thumb appearance-none w-full bg-red-600 h-1 rounded-md"
        />
        <h3 className="font-semibold">3,202 tk - 6,367 tk</h3>
      </div>
      <hr />
      <div className="my-3">
        <h3 className="mb-2 font-semibold text-lg">Departure time in Dhaka</h3>
        <div>
          <div className=" flex justify-between grid grid-cols-2 gap-3">
            <div className="mr-2 flex flex-col justify-center items-center border-2 border-black rounded-lg p-3">
              <BsSunrise className="text-3xl"></BsSunrise>
              <p className="font-semibold">Morning</p>
              <p>06:00 - 11:59 (5)</p>
            </div>
            <div className="mr-2 flex flex-col justify-center items-center border-2 border-black rounded-lg p-2">
              <PiSunDimLight className="text-3xl"></PiSunDimLight>
              <p className="font-semibold">After Noon</p>
              <p>12:00 - 17:59 (3)</p>
            </div>
            <div className="mr-2 flex flex-col justify-center items-center border-2 border-black rounded-lg p-2">
              <PiSunHorizonFill className="text-3xl"></PiSunHorizonFill>
              <p className="font-semibold">Evening</p>
              <p>18:00 - 23:59 (7)</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-2">
        <h1 className="font-semibold text-lg mb-3">Stops From Dhaka</h1>
        <div className="flex justify-between">
          <div className="flex  items-center gap-2">
            <input type="checkbox" className="checkbox-sm" />
            <label htmlFor="Non Stop">Non Stop (15)</label>
          </div>
          <h3>BDT 3,202</h3>
        </div>
      </div>
      <hr />
      <div className="my-2">
        <h1 className="font-semibold text-lg mb-3">
          Check in Baggage Allowance
        </h1>

        <div className="flex  items-center gap-2">
          <input type="checkbox" className="checkbox-sm" />
          <label htmlFor="Non Stop">20 KG (15)</label>
        </div>
      </div>
      <hr />
      <div className="my-2">
        <h1 className="font-semibold text-lg mb-3">Refundable</h1>

        <div className="flex  items-center gap-2">
          <input type="checkbox" className="checkbox-sm" />
          <label htmlFor="Non Stop">Partially Refundable (15)</label>
        </div>
      </div>
      <hr />
      <div className="my-2 flex gap-12">
        <div>
          <h1 className="font-semibold text-lg mb-3">Departing From</h1>
          <div className="flex  items-center gap-2">
            <input type="checkbox" className="checkbox-sm" />
            <label htmlFor="Non Stop">DAC</label>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-lg mb-3">Arriving at</h1>
          <div className="flex  items-center gap-2">
            <input type="checkbox" className="checkbox-sm" />
            <label htmlFor="Non Stop">CGP</label>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-2">
        <h1 className="font-semibold text-lg mb-3">Airlines</h1>
        <div className="flex justify-between">
          <div className="flex  items-center gap-2">
            <input type="checkbox" className="checkbox-sm" />
            <label htmlFor="Non Stop">Biman Bangladesh Airlines</label>
          </div>
          <h3>BDT 3,202</h3>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex  items-center gap-2">
            <input type="checkbox" className="checkbox-sm" />
            <label htmlFor="Non Stop">US Bangla Airlines</label>
          </div>
          <h3>BDT 3,954</h3>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex  items-center gap-2">
            <input type="checkbox" className="checkbox-sm" />
            <label htmlFor="Non Stop">Air Astra</label>
          </div>
          <h3>BDT 3,954</h3>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex  items-center gap-2">
            <input type="checkbox" className="checkbox-sm" />
            <label htmlFor="Non Stop">Novo Air</label>
          </div>
          <h3>BDT 3,202</h3>
        </div>
      </div>
      <hr />
      <div className="my-2">
        <h1 className="font-semibold text-lg mb-3">
          Transit Time in (Dhaka - Chittagong)
        </h1>

        <div className="flex  items-center gap-2">
          <input type="checkbox" className="checkbox-sm" />
          <label htmlFor="Non Stop">No Transit Time (15)</label>
        </div>
      </div>
      <button className="btn btn-outline w-full text-red-600 text-lg mt-10 mb-3">
        Clear Filters
      </button>
    </div>
  );
};

export default LeftSegment;
