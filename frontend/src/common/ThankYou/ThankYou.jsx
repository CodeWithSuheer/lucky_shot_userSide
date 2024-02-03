import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import crown from '../../assets/CROWN.png';

const ThankYou = ({ isOpen, onClose }) => {


    return (
        <Modal backdrop="blur" size='sm' placement="center" isOpen={isOpen} onClose={onClose} className=" flex flex-wrap flex-col justify-center items-center px-2 py-1 md:px-5">
            <ModalContent>
                <>
                    <ModalHeader >
                        <img src={'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454'} className="mt-3 w-40 h-20" />
                    </ModalHeader>
                    <ModalBody className="text-center">
                        <p className="text-3xl font-extrabold text-black ">Thank You</p>
                        <p className="text-sm md:text-xl font-medium  text-black ">Your bet has been Placed</p>
                        <p className="text-sm lg:text-md  font-medium  text-black">Wait For Lucky Draw <span className="text-md  uppercase font-bold text-[#B600D4]"> Best of Luck </span></p>
                    </ModalBody>
                    <ModalFooter>
                        <div className="flex flex-wrap justify-center items-baseline gap-0.5 ">
                            <img className='h-7' src={crown} alt="" />
                        </div>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    );
}

export default ThankYou;
