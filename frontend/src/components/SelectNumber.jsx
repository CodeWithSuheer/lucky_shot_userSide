import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Toaster, toast } from "react-hot-toast";
import WinnerToday from "../common/WinnerComponent/WinnerComponent";
import ThankYou from "../common/ThankYou/ThankYou";

export default function SelectNumber() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [Modal, setModal] = useState(false); // Initialize Modal as false

  const handleNumberClick = (number) => {
    if (selectedNumbers.length < 3) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      // Show toast message when user tries to select more than three numbers
      toast.error("You can select only three numbers");
    }
  };

  const handleCloseModal = () => {
    setModal(false); // Close modal
  };

  const handleOpenModal = () => {
    setModal(true); // Open modal
  };
  const handleRemoveNumber = () => {
    setSelectedNumbers(selectedNumbers.slice(0, -1)); // Remove the last selected number
  };
 
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap justify-center items-baseline gap-0.5 my-5">
          <div className="border-b w-8 border-gray-500 "></div>
          <img src="CROWN.png" alt="Crown icon" />
          <div className="border-b w-8  border-gray-500"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <h4 className="text-xl  sm:text-2xl font-bold text-white text-center">Select Your Max 3 Numbers</h4>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className={`bg-[#474747] border-2 border-[#B600D4] border-dashed rounded-sm px-2 sm:px-5 py-3 sm:py-5 my-3 sm:my-5 grid grid-cols-4  sm:grid-cols-4 gap-3`}>
          {[1, 5, 2, 0, 4, 9, 3, 6, 8, 7].map((number, index) => (
            <div key={number} onClick={() => handleNumberClick(number)} className={`relative bg-[#B600D4] rounded-full  px-8 sm:px-10 py-8 sm:py-10 flex justify-center items-center ${selectedNumbers.includes(number) ? "opacity-50" : ""}`}>
              <div className="absolute t-0 bg-white rounded-full w-8 h-8 sm:w-8 sm:h-8 flex justify-center items-center">
                <span className="text-xl font-bold text-[#B600D4]">{number}</span>
              </div>
              {index === 9 && (
                <div className="absolute bottom-2 sm:bottom-5 left-40 sm:left-44 bg-gray-500 rounded-full w-8 h-8 sm:w-8 sm:h-8 flex justify-center items-center ">
                  <Button onClick={handleRemoveNumber}  size="small" variant="text">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          {selectedNumbers.map((selectedNumber, index) => (
            <Button key={index} radius="sm" className="bg-[#474747] text-lg sm:text-xl font-bold text-white px-2 sm:px-12">
              {selectedNumber}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex justify-center items-center my-5">
          <Button onClick={() => setModal(!Modal)} radius="sm" className="gradent px-8 py-2.5 rounded-md text-lg sm:text-xl font-semibold text-white">
            Next
          </Button>
        </div>
      </div>
      <Toaster />
      {Modal && <ThankYou isOpen={handleOpenModal} onClose={handleCloseModal} />}
    </>
  );
}
