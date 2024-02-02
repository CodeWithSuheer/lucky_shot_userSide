import React from 'react';
import Header from './Header';
import crown from '../assets/CROWN.png';
import PKR100 from '../assets/PKR100.png';
import PKR500 from '../assets/PKR500.png';
import medal from '../assets/medal.png';

const style = {
    main_bg: {
        backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/IAMGES.png?v=1706878558")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "93.8%",
        width: "100%",
    },
    left_div: {
        backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/gRADAINT.png?v=1706879142")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "50%",
    },
}

const HomePage = () => {
    return (
        <>
            <div className="h-screen">
                {/* ----------- HEADER ----------- */}
                <Header />

                {/* ----------- HERO SECTION ----------- */}
                <section style={style.main_bg}>
                    <div className="" style={style.left_div}>
                        <div className="main_cont">
                            <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="150" alt="" srcset="" />
                            <h2 className='hero_title mb-4 text-5xl font-bold'>Play With <br /> Lucky Bet Shot</h2>
                            <p className='hero_text mb-4 text-md font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi praesentium, possimus fugit porro optio explicabo provident similique incidunt odio nihil.</p>
                            <button type="submit" className='gradent px-7 py-2 rounded-md text-md font-medium'>BET NOW</button>
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


                        <div class="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {/* LEFT IMAGE */}
                            <div class="w-full max-w-xs text-center">
                                <img class="object-cover object-center w-full mx-auto rounded-lg" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/LEFT_IMAGE.png?v=1706881540" alt="avatar" />
                            </div>

                            {/* MIDDLE DATA */}
                            <div class="w-full max-w-xs text-center">
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
                                <div className="timer_100 mb-8">
                                    <div className="relative border border-white rounded-lg p-4 text-white text-center font-bold bg-black w-full">
                                        <h2 className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black py-1 rounded-3xl'>
                                            <span className='flex justify-center items-center w-48'><img className='px-1' src={medal} alt="" /> Today Winners</span>
                                        </h2>

                                        <div className="timer_clock my-4 flex flex-col items-center justify-center">
                                            <div className="flex justify-between items-center gap-7 text-sm font-normal">
                                                <span className='flex items-center'><img className='px-1 h-4' src={medal} alt="" />Umer Javiad</span>
                                                <span>1122</span>
                                                <span>*********3232</span>
                                            </div>

                                            <div className='bg-gray-400 h-[1px] my-2 w-full'></div>
                                        </div>
                                    </div>
                                </div>
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
                            <div class="w-full max-w-xs text-center">
                                <img class="object-cover object-center w-full mx-auto rounded-lg" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/RIGHT_IMAGE.png?v=1706881546" alt="avatar" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
