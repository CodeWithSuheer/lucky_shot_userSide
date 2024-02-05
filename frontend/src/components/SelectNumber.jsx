import React, { useState } from "react";
import Marquee from 'react-fast-marquee';
import { Button } from "@nextui-org/react";
import { Toaster, toast } from "react-hot-toast";
import ThankYou from "../common/ThankYou/ThankYou";
import crown from '../assets/CROWN.png';
import BG from '../assets/BG.png';
import { Link, useNavigate, useParams } from "react-router-dom";


const TextData = () => {
  return (
    <p className='px-10'>
      Welcome to Lucky Bet Shot – Where Luck Meets Opportunity! Unleash the thrill of betting on our platform. Your journey to excitement and winning starts here. Bet wisely, win big!
    </p>
  );
};

const style = {
  main_bg: {
    backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/BG.png?v=1706958005")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  shadowBlue: {
    WebkitBoxShadow: '0px -6px 70px 25px rgba(11,63,219,0.75)',
    MozBoxShadow: '0px -6px 70px 25px rgba(11,63,219,0.75)',
    boxShadow: '0px -6px 70px 25px rgba(11,63,219,0.75)',
  },
}


export default function () {
  const { id } = useParams();
  const amount = id.split("-")[1];
  const navigate = useNavigate()
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [Modal, setModal] = useState(false); // Initialize Modal as false

  // HANDLE NUMBER CLICK
  const handleNumberClick = (number) => {
    if (selectedNumbers.length < 3) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      toast.error("You can select only three numbers");
    }
  };

  // HANDLE CLOSE MODAL
  const handleCloseModal = () => {
    setModal(false); // Close modal
  };

  // HANDLE OPEN MODAL
  const handleOpenModal = () => {
    setModal(true); // Open modal
  };

  // HANDLE REMOVE NUMBER
  const handleRemoveNumber = () => {
    if (selectedNumbers.length === 0) {
      toast.error("Please select a number first")
    }
    setSelectedNumbers(selectedNumbers.slice(0, -1));
  };

  const handleNavigate = () => {
    if (selectedNumbers.length === 3) {
      const join = selectedNumbers.join("");
      navigate(`/details/${amount}-${join}`)
      window.scroll(0, 0);
    }
    else {
      toast.error("Please choose 3 numbers")
    }
  }


  return (
    <>
      <section className="relative" style={style.main_bg}>
        {/* ----------- HEADER ----------- */}
        <div style={{ ...style.shadowBlue, zIndex: 999 }} className="absolute w-full header bg-[#0035D4] text-white py-2 text-sm">
          <Marquee speed={70}>
            <TextData />
            <TextData />
          </Marquee>
        </div>

        <div className="number_info_width pt-16 ">
          {/* ----------- LOGO IMAGE ----------- */}
          <div className="overflow-hidden flex justify-center md:justify-start mb-8">
            <Link to="/">
              <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="160" alt="" srcSet="" />
            </Link>
          </div>

          {/* ----------- DIVIDER ----------- */}
          <span className="relative mb-5 max-w-md mx-auto flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-75"></div>
            <span className="relative bg-black z-10 px-2"><img className='h-7' src={crown} alt="" /></span>
          </span>

          {/* HEADING */}
          <div className="flex flex-wrap justify-center items-center">
            <h4 className="text-xl sm:text-4xl tracking-wider font-bold text-white text-center">Select Your Max 3 Numbers</h4>
          </div>


          {/* NUMBER BOX */}
          <div className="sm:max-w-xl mx-auto">
            <div className="flex flex-wrap justify-center items-center">
              <div className={`bg-[#474747] border-2 border-[#B600D4] w-full border-dashed rounded-md px-2 sm:px-2 py-5 sm:py-10 my-3 sm:my-5 flex justify-center items-center flex-wrap`}>
                {[1, 5, 2, 0, 4, 9, 3, 6, 8, 7].map((number, index) => (
                  <div key={number}
                    onClick={() => handleNumberClick(number)}
                    className={`relative mx-2 sm:mx-2 bg-[#DB00FF] hover:bg-[#B600D4] rounded-full h-[68px] w-[68px] xs:h-[80px] xs:w-[80px] sm:h-[95px] sm:w-[95px] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px] mb-5 cursor-pointer flex justify-center items-center
                     `}>

                    <div className="absolute t-0 bg-white rounded-full h-[40px] w-[40px] xs:h-[60px] xs:w-[60px] sm:h-[61px] sm:w-[61px] md:h-[62px] md:w-[62px] lg:h-[65px] lg:w-[65px] flex justify-center items-center">
                      <span className="text-lg sm:text-3xl font-bold text-[#B600D4]">{number}</span>
                    </div>

                  </div >
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
                {/* <Button onClick={() => setModal(!Modal)} radius="sm" className="gradent px-8 py-2.5 rounded-md text-lg sm:text-xl font-semibold text-white">
                  Next
                </Button> */}
                <Button onClick={handleRemoveNumber} className='gradent rounded-md text-md mx-3 px-8 tracking-wider text-white font-medium' variant="solid">
                  Clear
                </Button>
                <Button onClick={handleNavigate} className='gradent rounded-md text-md mx-3 px-8 tracking-wider text-white font-medium' variant="solid">
                  Next
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section >

      <Toaster />
      {Modal && <ThankYou isOpen={handleOpenModal} onClose={handleCloseModal} />}
    </>
  );
}
