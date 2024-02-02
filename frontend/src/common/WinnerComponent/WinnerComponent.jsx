import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const WinnerToday = ({ isOpen, onClose }) => {
    const tableData = [
        {
            id: 1,
            name: 'Umer Javaid',
            betNo: [1, 2, 3],
            betAmount: '100 PKR',
            phoneNumber: '0332 4700802'
        },
        {
            id: 2,
            name: 'Umer Javaid',
            betNo: [1, 2, 3],
            betAmount: '200 PKR',
            phoneNumber: '0332 4700802'
        },
        {
            id: 3,
            name: 'Umer Javaid',
            betNo: [1, 2, 3],
            betAmount: '100 PKR',
            phoneNumber: '0332 4700802'
        },
        {
            id: 4,
            name: 'Umer Javaid',
            betNo: [1, 2, 3],
            betAmount: '500 PKR',
            phoneNumber: '0336 4700802'
        },
        {
            id: 5,
            name: 'Umer Javaid',
            betNo: [1, 2, 3],
            betAmount: '100 PKR',
            phoneNumber: '0332 4700802'
        },
        {
            id: 6,
            name: 'Umer Javaid',
            betNo: [1, 2, 3],
            betAmount: '100 PKR',
            phoneNumber: '0332 4700802'
        }
        // Add more objects as needed
    ];

    return (
        <Modal backdrop="blur" size='2xl' placement="top-center" isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <>
                    <ModalHeader className=" text-black">
                        <div className="div">    </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col gap-4 px-8 py-8">
                            {tableData.map((rowData, index) => (
                                <div key={index} className="flex justify-between items-center gap-1 border-b border-red py-3">
                                    <span className="block text-md lg:text-md text-black">{rowData.name}</span>
                                    <div className="flex items-center  gap-3">
                                        {rowData.betNo.map((bet, index) => (
                                            <button key={index} className="border-2 border-[#B600D4] bg-transparent h-9 w-9 rounded-lg text-lg font-semibold text-[#B600D4] dark:text-gray-200 cursor-text">{bet}</button>
                                        ))}
                                    </div>
                                    <span className="block text-md lg:text-md font-semibold text-gray-800 dark:text-gray-200">{rowData.phoneNumber}</span>
                                </div>
                            ))}
                        </div>
                    </ModalBody>
                </>
            </ModalContent>
        </Modal>
    );
}

export default WinnerToday;
