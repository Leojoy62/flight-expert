import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoSwapHorizontal } from "react-icons/io5";
const Header = () => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isDatePickerOpen2, setIsDatePickerOpen2] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [kids, setKids] = useState(0);
  const [infant, setInfant] = useState(0);
  const [travelers, setTravelers] = useState(1);

  useEffect(() => {
    const total = adults + children + kids + infant;
    setTravelers(total);
  }, [adults, children, kids, infant]);

  const [fromInfo, setFromInfo] = useState({
    location: "Dhaka",
    airport: "Hazrat Shahjalal International Airport",
  });

  const [toInfo, setToInfo] = useState({
    location: "Chittagong",
    airport: "Shah Amanat International Airport",
  });

  const handleSwap = () => {
    const temp = { ...fromInfo };
    setFromInfo({ ...toInfo });
    setToInfo({ ...temp });
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const [buttonText, setButtonText] = useState(formatDate(new Date()));
  const [buttonText2, setButtonText2] = useState(
    "Tab to book return \n ticket"
  );

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  const toggleDatePicker2 = () => {
    setIsDatePickerOpen2(!isDatePickerOpen2);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setButtonText(formatDate(date));
    toggleDatePicker(); // Close the dropdown after selecting a date
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
    setButtonText2(formatDate(date));
    toggleDatePicker2(); // Close the dropdown after selecting a date
  };

  const handleDecrese = (type) => {
    if (type === "adults" && adults > 0) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    } else if (type === "kids" && kids > 0) {
      setKids(kids - 1);
    } else if (type === "infant" && infant > 0) {
      setInfant(infant - 1);
    }
  };
  const handleIncrease = (type) => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "children") {
      setChildren(children + 1);
    } else if (type === "kids") {
      setKids(kids + 1);
    } else if (type === "infant") {
      setInfant(infant + 1);
    }
  };

  return (
    <>
      <div className="md:flex justify-between items-center mb-5 gap-4 px-2">
        <div>
          <h1 className="text-2xl text-red-600 font-bold ">flight expert</h1>
          <p className="text-red-600 font-bold">all about your journey</p>
        </div>
        <button className="bg-red-600 px-2 py-0 rounded-lg text-white h-10">
          Sign in
        </button>
      </div>

      <div className="mb-10 py-2 px-6 shadow-lg rounded-lg border-2 border-gray-200 relative">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="radio-11"
              className="radio radio-sm checked:bg-red-500"
            />
            <label className="label cursor-pointer">
              <span className="label-text">One Way</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio-11"
              className="radio radio-sm checked:bg-red-500"
            />
            <label className="label cursor-pointer">
              <span className="label-text">Round Trip</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio-11"
              className="radio radio-sm checked:bg-red-500"
            />
            <label className="label cursor-pointer">
              <span className="label-text">Multi City</span>
            </label>
          </div>
        </div>
        <div className="md:flex justify-between  items-center ">
          <div className="md:flex  relative">
            <div className="sm:w-full border-2 border-gray-300 rounded-xl py-4 px-6 shadow-gray-400 shadow-xs md:w-64 h-[125px] xs:w-full">
              <p>From</p>
              <h1 className="text-xl text-gray-500 font-bold">
                {fromInfo.location}
              </h1>
              <p>{fromInfo.airport}</p>
            </div>
            <div className="sm:w-full border-2 border-gray-300 rounded-xl py-4 px-6 shadow-gray-400 shadow-xs md:w-64 h-[125px] xs:w-full">
              <p>To</p>
              <h1 className="text-xl text-gray-500 font-bold">
                {toInfo.location}
              </h1>
              <p>{toInfo.airport}</p>
            </div>
            <IoSwapHorizontal
              onClick={handleSwap}
              className="text-4xl bg-white border-2 border-gray-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600"
            />
          </div>

          <div className="md:flex gap-0">
            <div className="sm:w-full border-2 border-gray-300 rounded-xl py-4 px-6 shadow-gray-400 shadow-xs  md:w-52 h-[125px] xs:w-full">
              <div className="dropdown relative">
                <div tabIndex={0} role="button" onClick={toggleDatePicker}>
                  <p>Departure</p>
                  <h1>{buttonText}</h1>
                </div>
                {isDatePickerOpen && (
                  <div>
                    <ReactDatePicker
                      onChange={handleDateChange}
                      selected={selectedDate}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className=" border-2 border-gray-300 rounded-xl py-4 px-6 shadow-gray-400 shadow-xs md:w-52 h-[125px] xs:w-full">
              <div className="dropdown relative">
                <div tabIndex={0} role="button" onClick={toggleDatePicker2}>
                  <p>Return</p>
                  <h1>{buttonText2}</h1>
                </div>
                {isDatePickerOpen2 && (
                  <div>
                    <ReactDatePicker
                      onChange={handleDateChange2}
                      selected={selectedDate2}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className=" border-2 border-gray-300 rounded-xl py-4 px-6 shadow-gray-400 shadow-xs md:w-60 h-[125px] xs:w-full  ">
            <label htmlFor="my_modal_7">
              <p>Travels & Booking Class</p>
              <h1 className="text-xl text-gray-500 font-bold">
                {travelers} Traveler
              </h1>
              <p>Economy</p>
            </label>

            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <p className="text-red-600 font-semibold">Travelers</p>

                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="text-xl text-gray-400">Adults</h3>
                    <p>12 years and above</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDecrese("adults")}
                      className="text-4xl text-red-600 bg-gray-300 px-2"
                    >
                      -
                    </button>
                    <p className="text-xl w-8 ml-3">{adults}</p>
                    <button
                      onClick={() => handleIncrease("adults")}
                      className="text-4xl text-red-600 bg-gray-300 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl text-gray-400">Children</h3>
                    <p>5 years - 12 years</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDecrese("children")}
                      className="text-4xl text-red-600 bg-gray-300 px-2"
                    >
                      -
                    </button>
                    <p className="text-xl w-8 ml-3">{children}</p>
                    <button
                      onClick={() => handleIncrease("children")}
                      className="text-4xl text-red-600 bg-gray-300 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between my-2">
                  <div>
                    <h3 className="text-xl text-gray-400">Kids</h3>
                    <p>2 years - under 5 years</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDecrese("kids")}
                      className="text-4xl text-red-600 bg-gray-300 px-2"
                    >
                      -
                    </button>
                    <p className="text-xl w-8 ml-3">{kids}</p>
                    <button
                      onClick={() => handleIncrease("kids")}
                      className="text-4xl text-red-600 bg-gray-300 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl text-gray-400">Infant</h3>
                    <p>below 2 years</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleDecrese("infant")}
                      className="text-4xl text-red-600 bg-gray-300 px-2"
                    >
                      -
                    </button>
                    <p className="text-xl w-8 ml-3">{infant}</p>
                    <button
                      onClick={() => handleIncrease("infant")}
                      className="text-4xl text-red-600 bg-gray-300 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <h2 className="mr-5">Fare Type:</h2>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-sm checked:bg-red-500"
            />
            <label className="label cursor-pointer">
              <span className="label-text">Regular Fare</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-sm checked:bg-red-500"
            />
            <label className="label cursor-pointer">
              <span className="label-text">Seaman Fare</span>
            </label>
          </div>
        </div>

        <div className="absolute left-1/2 sm:left-1/2 md:left-1/2">
          <button className="bg-red-600 text-white p-2 rounded">
            Modify Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
