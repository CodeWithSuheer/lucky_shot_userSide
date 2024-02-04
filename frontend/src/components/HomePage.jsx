import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import crown from '../assets/CROWN.png';
import PKR100 from '../assets/PKR100.png';
import PKR500 from '../assets/PKR500.png';
import medal from '../assets/medal.png';
import Marquee from 'react-fast-marquee';
import WinnerToday from '../common/WinnerComponent/WinnerComponent';
import { useState } from 'react';


const TextData = () => {
    return (
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nam
        </p>
    );
};

const style = {
    main_bg: {
        backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/IAMGES.png?v=1706878558")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    left_div: {
        backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/gRADAINT.png?v=1706879142")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
    },
    box_div: {
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsfwQWdHYvjItuWwtrlH-E55U9woDrZ2o6BeY1pvsxQ&s")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "13rem",
        width: "100%",
    },
    shadowBlue: {
        WebkitBoxShadow: '0px -6px 70px 25px rgba(11,63,219,0.75)',
        MozBoxShadow: '0px -6px 70px 25px rgba(11,63,219,0.75)',
        boxShadow: '0px -6px 70px 25px rgba(11,63,219,0.75)',
    },
}

const HomePage = () => {
    const [Modal, setModal] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');


    const scrollToSection = () => {
        const section = document.getElementById('bet_boxes');

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
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

    return (
        <>
            <div className="relative">
                {/* ----------- HEADER ----------- */}
                <div style={{ ...style.shadowBlue, zIndex: 999 }} className="absolute w-full header bg-[#0035D4] text-white py-2 text-sm">
                    <Marquee speed={70}>
                        <TextData />
                        <TextData />
                    </Marquee>
                </div>

                {/* ----------- HERO SECTION ----------- */}
                <div className="px-6 lg:px-0 pt-20 lg:pt-20 pb-16 mx-auto" >
                    <div className="items-center hero_cont lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <img className='overflow-hidden' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="150" alt="" srcSet="" />

                                <h2 className='hero_title mb-4'>Play With <br /> Lucky Bet Shot</h2>
                                <p className="hero_text mt-3 text-gray-400 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                                <Button onClick={scrollToSection} className='gradent px-6 rounded-md text-sm tracking-wider text-white font-medium' variant="solid">
                                    BET NOW
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-3xl" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/sm_bigWIn-removebg-preview.png?v=1706988115" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>

                {/* <section className='overflow-visible' style={{ ...style.main_bg, paddingTop: '2rem' }}>
                    <div className="" style={style.left_div}>
                        <div className="main_cont ">
                            <img className='overflow-hidden' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="150" alt="" srcSet="" />
                            <h2 className='hero_title mb-4'>Play With <br /> Lucky Bet Shot</h2>
                            <p className='hero_text mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi praesentium, possimus fugit porro optio explicabo provident similique incidunt odio nihil.</p>
                           
                            <Button onClick={scrollToSection} className='gradent rounded-md text-sm tracking-wider text-white font-medium' variant="solid">
                                BET NOW
                            </Button>
                        </div>
                    </div>
                </section> */}

                {/* ----------- DRAW TIMER ----------- */}
                <section className='text-center bg-black text-white py-14'>
                    <div className="cont">
                        {/* DIVIDER */}
                        <span className="relative max-w-lg mx-auto flex justify-center">
                            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-75"></div>
                            <span className="relative bg-black z-10 px-2"><img className='h-7' src={crown} alt="" /></span>
                        </span>
                        {/* DIVIDER - END*/}
                        <h2 className='text-4xl font-bold mt-3 mb-12'>Draw Timer</h2>

                        <div className="grid gap-8 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            {/* LEFT IMAGE */}
                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center mx-auto rounded-lg" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/LEFT_IMAGE.png?v=1706984254" alt="avatar" />
                            </div>

                            {/* MIDDLE DATA */}
                            <div className="w-full max-w-xs text-center mt-10 sm:mt-0">
                                {/* ----------- FIRST TABLE FOR 100 PKR ----------- */}
                                <div className="timer_100 mb-8">
                                    <div className="relative border border-white rounded-lg p-2 text-white text-center font-bold bg-black w-full">
                                        <h2 className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-1 rounded-3xl'>
                                            <span className='flex justify-center items-center'>Draw<img className='px-1' src={PKR100} alt="" /> 100PKR</span>
                                        </h2>

                                        <div className="timer_clock pt-4 pb-4 md:pt-4 md:pb-2 lg:pt-6 lg:pb-3 flex items-center justify-center">
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">{hours}</span>
                                                <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">HOURS</span>
                                            </div>
                                            <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">:</div>
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">{minutes}</span>
                                                <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">MINTS</span>
                                            </div>
                                            <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">:</div>
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">{seconds}</span>
                                                <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">SECONDS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ----------- FIRST TABLE FOR 200 PKR ----------- */}
                                <div className="timer_100 mb-8">
                                    <div className="relative border border-white rounded-lg p-4 text-white text-center font-bold bg-black w-full">
                                        <h2 className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black py-1 rounded-3xl'>
                                            <span className='flex justify-center items-center w-48'><img className='px-1' src={medal} alt="" /> Today Winners</span>
                                        </h2>

                                        <div className="timer_clock mt-4 mb-0 flex flex-col items-center justify-center">
                                            <div className="flex justify-between items-center gap-7 text-sm md:text-xs lg:text-xs font-normal">
                                                <span className='flex items-center'><img className='px-1 h-4' src={medal} alt="" />UmerJaviad</span>
                                                <span>1122</span>
                                                <span>*********3232</span>
                                            </div>
                                            <div className='bg-gray-400 h-[1px] my-2 w-full'></div>
                                            <div className="flex justify-between items-center gap-7 text-sm md:text-xs lg:text-xs font-normal">
                                                <span className='flex items-center'><img className='px-1 h-4' src={medal} alt="" />UmerJaviad</span>
                                                <span>1122</span>
                                                <span>*********3232</span>
                                            </div>
                                            <div className='bg-gray-400 h-[1px] my-2 w-full'></div>
                                            <p className='text-sm font-light underline underline-offset-4 cursor-pointer' onClick={handleOpenModal}>View all</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ----------- FIRST TABLE FOR 500 PKR ----------- */}
                                <div className="timer_100 mb-8">
                                    <div className="relative border border-white rounded-lg p-2 text-white text-center font-bold bg-black w-full">
                                        <h2 className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-1 rounded-3xl'>
                                            <span className='flex justify-center items-center'>Draw<img className='px-1' src={PKR500} alt="" /> 500PKR</span>
                                        </h2>

                                        <div className="timer_clock pt-4 pb-4 md:pt-4 md:pb-2 lg:pt-6 lg:pb-3 flex items-center justify-center">
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">{hours}</span>
                                                <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">HOURS</span>
                                            </div>
                                            <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">:</div>
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">{minutes}</span>
                                                <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">MINTS</span>
                                            </div>
                                            <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">:</div>
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">{seconds}</span>
                                                <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">SECONDS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full mx-auto rounded-lg" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/RIGHT_IMAGE.png?v=1706984256" alt="avatar" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ----------- BET BOXES ----------- */}
                <section id='bet_boxes' className='text-center bg-black text-white py-10'>
                    <div className="cont">
                        <div className="grid gap-8 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            {/* 100 PKR */}
                            <div style={style.box_div} className="my-3 md:my-0 flex justify-center items-center flex-col  border border-white rounded-lg text-center">
                                <p className='text-sm font-light mb-1'>BASIC BET</p>
                                <h4 className='text-xl font-medium mb-1'>Bet 100 PKR</h4>
                                <h2 className='text-2xl tracking-wide font-semibold mb-2.5'>Win 5000 PKR</h2>
                                <Link to="/selectNumber/bet-100" onClick={() => window.scroll(0, 0)} className='gradent px-6 py-2 rounded-md text-sm font-medium'>BET NOW</Link>
                            </div>
                            {/* 200 PKR */}
                            <div style={style.box_div} className="my-3 md:my-0 flex justify-center items-center flex-col  border border-white rounded-lg text-center">
                                <p className='text-sm font-light mb-1'>STANDARD BET</p>
                                <h4 className='text-xl font-medium mb-1'>Bet 200 PKR</h4>
                                <h2 className='text-2xl tracking-wide font-semibold mb-2.5'>Win 10000 PKR</h2>
                                <Link to="/selectNumber/bet-200" onClick={() => window.scroll(0, 0)} className='gradent px-6 py-2 rounded-md text-sm font-medium'>BET NOW</Link>
                            </div>
                            {/* 500 PKR */}
                            <div style={style.box_div} className="my-3 md:my-0 flex justify-center items-center flex-col  border border-white rounded-lg text-center">
                                <p className='text-sm font-light mb-1'>PREMIUM BET</p>
                                <h4 className='text-xl font-medium mb-1'>Bet 500 PKR</h4>
                                <h2 className='text-2xl tracking-wide font-semibold mb-2.5'>Win 25000 PKR</h2>
                                <Link to="/selectNumber/bet-500" onClick={() => window.scroll(0, 0)} className='gradent px-6 py-2 rounded-md text-sm font-medium'>BET NOW</Link>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
            {
                Modal && <WinnerToday isOpen={handleOpenModal} onClose={handleCloseModal} />
            }

        </>
    );
};

export default HomePage;
