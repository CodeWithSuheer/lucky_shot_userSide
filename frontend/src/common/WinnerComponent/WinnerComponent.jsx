import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import medalimage from '../../assets/medal.png'
import { useSelector } from "react-redux";
const WinnerToday = ({ isOpen, onClose }) => {

    const tableData = useSelector((state) => state.betResults.AllBetResults);
   
    return (

        <Modal backdrop="blur" size='3xl' placement="center" isOpen={isOpen} onClose={onClose} className=" flex flex-wrap flex-col py-1 px-0 sm:px-6">
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col justify-center items-center">

                        <img src={'	https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454'} className="my-2 w-40 h-16   sm:my-3 sm:w-40 sm:h-20" />

                        <div className="flex gap-5">
                            <img src={medalimage} className="w-6 h-6 sm:w-8 sm:h-8" />
                            <p className="text-2xl sm:text-3xl font-bold text-black text-center">Winner of the Day </p>
                            <img src={medalimage} className="w-6 h-6 sm:w-8 sm:h-8" />


                        </div>

                    </ModalHeader>
                    <ModalBody>

                        {tableData.map((rowData, index) => (
                            <div key={index} className="flex justify-between items-center px-0 md:px-2 md:gap-2 border-b border-red py-1">

                                <div className="flex items-center gap-1 sm:gap-1.5" >
                                    <img src={medalimage} className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="block text-xs md:text-[1.05rem] text-black">{rowData.name}</span>
                                </div>

                                <div className="flex items-center gap-0.5 sm:gap-3">
                                    {String(rowData.betNumber).split("").map((bet, index) => (
                                        <button key={index} className="border-1 sm:border-2 border-[#B600D4] bg-transparent h-5 w-5 sm:h-8 sm:w-8 rounded-lg text-sm md:text-lg font-medium text-[#000] dark:text-gray-200 cursor-text">{bet}</button>
                                    ))}
                                </div>

                                <span className="block text-xs md:text-[1.05rem] font-medium text-gray-800 dark:text-gray-200">{rowData.mobileNumber}</span>
                            </div>
                        ))}

                    </ModalBody>
                    <ModalFooter className="flex flex-col justify-center items-center">
                        <p className="text-xl sm:text-2xl font-bold text-black uppercase ">Thank You </p>
                        <p className="text-md sm:text-md font-medium text-black uppercase text-center"> If you want to Bet Again <span onClick={onClose} className="text-md sm:text-lg font-bold text-[#B600D4] text-center cursor-pointer">  Click Here </span> </p>

                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    );
}

export default WinnerToday;
