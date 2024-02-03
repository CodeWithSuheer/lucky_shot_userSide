import { useState } from 'react';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Header from './Header';
import backgroundimage from '../assets/BG.png'
import easypaisa from '../assets/easypaisa.png'
import easy_pasia_logo from '../assets/easy_pasia_logo.png'
import jazzcash from '../assets/jazzcash.png'
import { FileUp } from 'lucide-react';
import { Button } from '@nextui-org/button';
import nayapay from '../assets/nayapay.png'
import sadapay from '../assets/sadapay.png'
import crown from '../assets/CROWN.png';
import { Link } from 'react-router-dom';
import ThankYou from "../common/ThankYou/ThankYou";


const TextData = () => {
    return (
        <p>
            I can be a React component, multiple React hello this is marquee
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

const Information = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [Modal, setModal] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        mobileNumber: "",
        betAmount: "",
        accountNumber: "",
        accountTitle: "",
        additionalFile: null, // Store file data here
    });

    const handleChange = (e, field) => {
        if (field === "AdditionalFile") {
            // Handle file input separately
            setFormData({ ...formData, additionalFile: e.target.files[0] });
        } else {
            setFormData({ ...formData, [field]: e.target.value });
        }
    };

    const handleSubmit = () => {
        // Implement your form submission logic here
    };

    const handleCardClick = (card) => {
        setActiveCard(card);
    };


    // HANDLE CLOSE MODAL
    const handleCloseModal = () => {
        setModal(false); // Close modal
    };

    // HANDLE OPEN MODAL
    const handleOpenModal = () => {
        setModal(true); // Open modal
    };

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

                {/* ----------- HERO SECTION ----------- */}
                <form onSubmit={handleSubmit} className="cont pt-16 ">

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


                    <h4 className="text-xl md:text-4xl tracking-wider font-bold text-white text-center py-3">Enter Your Information</h4>

                    {/* --------- FIRST ROW --------- */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-6`}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-200 ">Enter Your Name <span className='text-red-500'>*</span></label>
                            <input required type="text" placeholder="Enter Your Name" value={formData.name}
                                onChange={(e) => handleChange(e, "name")} className="block w-full px-5 py-4 mt-2 rounded-md text-gray-200 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none " />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-200 ">Enter Your Mobile Number <span className='text-red-500'>*</span></label>
                            <input required type="tel" placeholder="Enter Your Mobile Number" value={formData.mobileNumber}
                                onChange={(e) => handleChange(e, "mobileNumber")} className="block w-full px-5 py-4 rounded-md mt-2 text-gray-200 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-200 ">Bet Amount</label>
                            <input required type="number" placeholder="Bet Amount" value={formData.betAmount}
                                onChange={(e) => handleChange(e, "betAmount")} className="block w-full px-5 py-4 mt-2 rounded-md text-gray-200 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none" />
                        </div>
                    </div>

                    <h4 className="text-lg md:text-2xl mt-4 font-normal text-white text-center">Recevied Win Fund</h4>

                    {/* --------- SECOND ROW --------- */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 pt-4 pb-7`}>
                        <div>
                            <label className="block mb-2  text-sm font-medium text-gray-200">Account No <span className='text-red-500'>*</span></label>
                            <input required type="tel" placeholder="Account No" value={formData.accountNumber}
                                onChange={(e) => handleChange(e, "accountNumber")} className="block w-full rounded-md px-5 py-4 mt-2 text-gray-100 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none" />
                        </div>


                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-200">Account Tittle <span className='text-red-500'>*</span></label>
                            <input required type="text" placeholder="Account Title " value={formData.accountTitle}
                                onChange={(e) => handleChange(e, "accountTitle")} className="block w-full rounded-md px-5 py-4 mt-2 text-gray-100 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none" />
                        </div>


                    </div>

                    {/* --------- THIRD ROW --------- */}
                    <div className={`grid grid-cols-1 sm:grid-cols-4  gap-3 py-2`}>

                        <label htmlFor="hs-radio-on-right" className="flex gap-3 items-center w-full  rounded-lg text-sm ">
                            <img className='rounded-md  h-8 w-8  ' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                            <span className="text-lg  text-gray-500 ]">Jazz Cash</span>

                            <input type="radio" required name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]" id="hs-radio-on-right" />
                        </label>

                        <label htmlFor="hs-radioradio-on-right" className="flex gap-3  items-center  w-full  rounded-lg text-sm ">
                            <img className='rounded-md  h-8 w-8 ' src={sadapay} alt="" />
                            <span className="text-lg  text-gray-500 ]">Sada Pay</span>

                            <input type="radio" required name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4] " id="hs-radioradio-on-right" />
                        </label>
                        <label htmlFor="hs-radio-on-right11" className="flex gap-3 items-center w-full  rounded-lg text-sm ">
                            <img className='rounded-md  h-8 w-8 ' src={easy_pasia_logo} alt="" />
                            <span className="text-lg  text-gray-500 ]">Easy Paisa</span>
                            <input type="radio" required name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4] " id="hs-radio-on-right11" />
                        </label>

                        <label htmlFor="hs-radioradio-on-right22" className="flex gap-3 items-center w-full  rounded-lg text-sm ">
                            <img className='rounded-md  h-8 w-8 ' src={nayapay} alt="" />
                            <span className="text-lg  text-gray-500 ]">Naya Pay</span>
                            <input type="radio" required name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full  accent-[#B600D4] " id="hs-radioradio-on-right22" />
                        </label>

                    </div>

                    <h4 className="text-lg md:text-2xl font-medium text-white text-center mt-9 mb-3">Send Money</h4>
                    {/* <p className='text-sm sm:text-md text-gray-100 text-center py-1' style={{ fontWeight: '100' }}>Please select the account in which you are sending amount</p> */}
                    <p className='text-sm sm:text-md text-gray-200 text-center py-1' style={{ fontWeight: '100' }}>Send bet amount on this Account and upload the payment configuration Screenshot</p>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6`}>
                        <div className="flex gap-3 sm:gap-5 items-center">
                            <div className={`block w-full rounded-md border ${activeCard === 'easypaisa' ? 'border-[#B600D4]' : 'border-transparent'} bg-[#474747] px-2 py-5 cursor-pointer`} onClick={() => handleCardClick('easypaisa')}>
                                <img className='rounded-sm w-15 h-10 pb-2' src={easypaisa} alt="" />
                                <p className='text-white font-medium text-sm '>Account Number:</p>
                                <p className='text-gray-200 text-sm font-light my-1'>0332 2323232</p>
                                <p className='text-white mt-2 font-medium text-md'>Account Title:</p>
                                <p className='text-gray-200 text-sm'>Umer</p>
                            </div>

                            <div className={`block w-full rounded-md border ${activeCard === 'jazzcash' ? 'border-[#B600D4]' : 'border-transparent'} bg-[#474747] px-2 py-5 cursor-pointer`} onClick={() => handleCardClick('jazzcash')}>
                                <img className='rounded-md w-15 h-10 pb-2' src={jazzcash} alt="" />
                                <p className='text-white text-sm'>Account Number:</p>
                                <p className='text-gray-200 text-sm font-light my-1'>0332 2323232</p>
                                <p className='text-white mt-2 text-md'>Account Title:</p>
                                <p className='text-gray-200 text-sm'>Suheer Zahid</p>
                            </div>
                        </div>
                        <div className='grid  lg:col-span-2 '>
                            <div className="w-full flex  items-center justify-center rounded-sm bg-[#474747] ">
                                <label
                                    className=" cursor-pointer p-4  "
                                >
                                    <input
                                        type="file"
                                        id="AdditionalFile"
                                        name="AdditionalFile"
                                        className="ModelFileDropField absolute w-58 h-10 opacity-0 cursor-pointer"
                                        onChange={(e) => handleChange(e, "AdditionalFile")}
                                        required
                                    />
                                    <div className=" flex gap-1 items-center">
                                        <FileUp size={25} />
                                        <span className="text-gray-300 font-normal">
                                            {formData.additionalFile
                                                ? formData.additionalFile.name
                                                : "Upload Screenshot"}

                                        </span>
                                    </div>
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center items-center py-5">
                        <Button onClick={() => setModal(!Modal)} className='gradent rounded-md text-md px-8 tracking-wider text-white font-medium' variant="solid">
                            Submit
                        </Button>
                    </div>
                </form>
            </section>

            {Modal && <ThankYou isOpen={handleOpenModal} onClose={handleCloseModal} />}
        </>
    );
};

export default Information;
