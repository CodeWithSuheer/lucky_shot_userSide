import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import crown from '../assets/CROWN.png';
import PKR100 from '../assets/PKR100.png';
import PKR500 from '../assets/PKR500.png';
import medal from '../assets/medal.png';
import Marquee from 'react-fast-marquee';

const TextData = () => {
    return (
        <p>
            I can be a React component, multiple React hello this is marquee
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
        width: "50%",
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
    const scrollToSection = () => {
        const section = document.getElementById('bet_boxes');

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
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
                <section className='overflow-visible' style={{ ...style.main_bg, paddingTop: '2rem' }}>
                    <div className="" style={style.left_div}>
                        <div className="main_cont ">
                            <img className='overflow-hidden' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="150" alt="" srcset="" />
                            <h2 className='hero_title mb-4'>Play With <br /> Lucky Bet Shot</h2>
                            <p className='hero_text mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi praesentium, possimus fugit porro optio explicabo provident similique incidunt odio nihil.</p>
                            {/* <button onClick={scrollToSection} type="submit" className='gradent px-7 py-2 rounded-md text-md font-medium'>BET NOW</button> */}
                            <Button onClick={scrollToSection} className='gradent rounded-md text-sm tracking-wider text-white font-medium' variant="solid">
                                BET NOW
                            </Button>
                        </div>
                    </div>
                </section>

                {/* ----------- DRAW TIMER ----------- */}
                <section className='text-center bg-black text-white py-20'>
                    <div className="cont">
                        {/* DIVIDER */}
                        <span className="relative max-w-lg mx-auto flex justify-center">
                            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-75"></div>
                            <span className="relative bg-black z-10 px-2"><img className='h-7' src={crown} alt="" /></span>
                        </span>
                        {/* DIVIDER - END*/}
                        <h2 className='text-4xl font-bold mt-3 mb-7'>Draw Timer</h2>

                        <div className="flex flex-wrap justify-center gap-4 sm:gap-0 sm:justify-between items-center">
                            {/* LEFT IMAGE */}
                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full mx-auto rounded-lg" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/LEFT_IMAGE.png?v=1706881540" alt="avatar" />
                            </div>

                            {/* MIDDLE DATA */}
                            <div className="w-full max-w-xs text-center mt-10 sm:mt-0">
                                {/* ----------- FIRST TABLE FOR 100 PKR ----------- */}
                                <div className="timer_100 mb-8">
                                    <div className="relative border border-white rounded-lg p-4 text-white text-center font-bold bg-black w-full">
                                        <h2 className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-1 rounded-3xl'>
                                            <span className='flex justify-center items-center'>Draw<img className='px-1' src={PKR100} alt="" /> 100PKR</span>
                                        </h2>

                                        <div className="timer_clock my-4 flex items-center justify-center">
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 w-[53px] text-3xl rounded-md flex items-center justify-center">23</span>
                                                <span className=" text-white h-12 w-12 text-sm font-light">HOURS</span>
                                            </div>
                                            <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">:</div>
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 w-[53px] text-3xl rounded-md flex items-center justify-center">22</span>
                                                <span className=" text-white h-12 w-12 text-sm font-light">MINTS</span>
                                            </div>
                                            <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">:</div>
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 w-[53px] text-3xl rounded-md flex items-center justify-center">12</span>
                                                <span className=" text-white h-12 w-12 text-sm font-light">SECOND</span>
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
                                            <div className="flex justify-between items-center gap-7 text-sm font-normal">
                                                <span className='flex items-center'><img className='px-1 h-4' src={medal} alt="" />UmerJaviad</span>
                                                <span>1122</span>
                                                <span>*********3232</span>
                                            </div>
                                            <div className='bg-gray-400 h-[1px] my-2 w-full'></div>
                                            <div className="flex justify-between items-center gap-7 text-sm font-normal">
                                                <span className='flex items-center'><img className='px-1 h-4' src={medal} alt="" />UmerJaviad</span>
                                                <span>1122</span>
                                                <span>*********3232</span>
                                            </div>
                                            <div className='bg-gray-400 h-[1px] my-2 w-full'></div>
                                            <p className='text-sm font-light underline underline-offset-4 cursor-pointer'>View all</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ----------- FIRST TABLE FOR 500 PKR ----------- */}
                                <div className="timer_100 mb-8">
                                    <div className="relative border border-white rounded-lg p-4 text-white text-center font-bold bg-black w-full">
                                        <h2 className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-1 rounded-3xl'>
                                            <span className='flex justify-center items-center'>Draw<img className='px-1' src={PKR500} alt="" /> 500PKR</span>
                                        </h2>

                                        <div className="timer_clock my-4 flex items-center justify-center">
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 w-[53px] text-3xl rounded-md flex items-center justify-center">23</span>
                                                <span className=" text-white h-12 w-12 text-sm font-light">HOURS</span>
                                            </div>
                                            <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">:</div>
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 w-[53px] text-3xl rounded-md flex items-center justify-center">22</span>
                                                <span className=" text-white h-12 w-12 text-sm font-light">MINTS</span>
                                            </div>
                                            <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">:</div>
                                            <div className="ma">
                                                <span className="hours bg-[#B600D4] text-white h-12 w-[53px] text-3xl rounded-md flex items-center justify-center">12</span>
                                                <span className=" text-white h-12 w-12 text-sm font-light">SECOND</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full mx-auto rounded-lg" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/RIGHT_IMAGE.png?v=1706881546" alt="avatar" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ----------- BET BOXES ----------- */}
                <section id='bet_boxes' className='text-center bg-black text-white pb-10'>
                    <div className="cont">
                        <div className="flex flex-wrap justify-center items-center gap-3">
                            {/* 100 PKR */}
                            <div style={style.box_div} className="my-3 md:my-0 flex justify-center items-center flex-col max-w-xs border border-white rounded-lg text-center">
                                <p className='text-sm font-light mb-1'>BASIC BET</p>
                                <h4 className='text-xl font-medium mb-1'>Bet 100 PKR</h4>
                                <h2 className='text-2xl tracking-wide font-semibold mb-2.5'>Win 5000 PKR</h2>
                                <Link to="/selectNumber/bet-100" onClick={() => window.scroll(0, 0)} className='gradent px-7 py-2 rounded-md text-md font-medium'>BET NOW</Link>
                            </div>
                            {/* 200 PKR */}
                            <div style={style.box_div} className="my-3 md:my-0 flex justify-center items-center flex-col max-w-xs border border-white rounded-lg text-center">
                                <p className='text-sm font-light mb-1'>STANDARD BET</p>
                                <h4 className='text-xl font-medium mb-1'>Bet 200 PKR</h4>
                                <h2 className='text-2xl tracking-wide font-semibold mb-2.5'>Win 10000 PKR</h2>
                                <Link to="/selectNumber/bet-200" onClick={() => window.scroll(0, 0)} className='gradent px-7 py-2 rounded-md text-md font-medium'>BET NOW</Link>
                            </div>
                            {/* 500 PKR */}
                            <div style={style.box_div} className="my-3 md:my-0 flex justify-center items-center flex-col max-w-xs border border-white rounded-lg text-center">
                                <p className='text-sm font-light mb-1'>PREMIUM BET</p>
                                <h4 className='text-xl font-medium mb-1'>Bet 500 PKR</h4>
                                <h2 className='text-2xl tracking-wide font-semibold mb-2.5'>Win 25000 PKR</h2>
                                <Link to="/selectNumber/bet-500" onClick={() => window.scroll(0, 0)} className='gradent px-7 py-2 rounded-md text-md font-medium'>BET NOW</Link>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
