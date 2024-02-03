import React from 'react';
import Header from './Header';
import backgroundimage from '../assets/BG.png'
import { Input } from '@nextui-org/react';

const style = {
    main_bg: {
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "93.8%",
        width: "100%",
      
    },
};


const Information = () => {
    return (
        <>
            <div className="h-screen">
                {/* ----------- HEADER ----------- */}
                <Header />

                {/* ----------- HERO SECTION ----------- */}
                <section style={style.main_bg} className=" px-6 md:px-36 py-2 ">
                 
                        <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="150" alt="" srcSet="" />
                    
                    <div className="flex flex-wrap justify-center items-baseline gap-0.5 ">
                        <div className="border-b w-16 border-gray-500 "></div>
                        <img src="CROWN.png" alt="Crown icon" />
                        <div className="border-b w-16 border-gray-500"></div>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white text-center">Enter Your Information</h4>


                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-4`}>
                    <div>
                            <label className="block mb-2 text-md font-medium text-white ">Account Number</label>
                            <input type="text" placeholder="Enter Your Name" className="block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-[#474747] border border-[#B600D4] rounded-lg focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>


                        <div>
                            <label className="block mb-2 text-md font-medium text-white ">Account Number</label>
                            <input type="text" placeholder="Enter Your Name" className="block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-[#474747] border border-[#B600D4] rounded-lg focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                            <label className="block mb-2 text-md font-medium text-white ">Account Number</label>
                            <input type="text" placeholder="Enter Your Name" className="block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-[#474747] border border-[#B600D4] rounded-lg focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white text-center">Recevied Win Fund</h4>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 my-4`}>
                    <div>
                            <label className="block mb-2 text-md font-medium text-white ">Account Number</label>
                            <input type="text" placeholder="Enter Your Name" className="block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-[#474747] border border-[#B600D4] rounded-lg focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>


                        <div>
                            <label className="block mb-2 text-md font-medium text-white ">Account Number</label>
                            <input type="text" placeholder="Enter Your Name" className="block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-[#474747] border border-[#B600D4] rounded-lg focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                       

                    </div>
                    <div className={`grid grid-cols-2 sm:grid-cols-4  gap-3 my-4`}>
                 
                            <label htmlFor="hs-radio-on-right" className="flex items-center p-3 w-full  rounded-lg text-sm ">
                                <span className='h-8 w-8 p-[3px] bg-white rounded-md mr-2'>
                                    <img className='rounded-md' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                                </span>
                                <span className="text-lg mr-3 text-gray-500 dark:text-[#cfcfcf]">Jazz Cash</span>

                                <input type="radio" name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-on-right" />
                            </label>

                            <label htmlFor="hs-radioradio-on-right" className="flex items-center p-3 w-full  rounded-lg text-sm ">
                                <span className='h-8 w-8 p-[3px] bg-white rounded-md mr-2'>
                                    <img className='rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OMeGQnlZ-I81VAAluwyoYy7-62iQP11lGtti4qaxg&s" alt="" />
                                </span>
                                <span className="text-lg mr-3 text-gray-500 dark:text-[#cfcfcf]">Easy Paisa</span>

                                <input type="radio" name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radioradio-on-right" />
                            </label>
                            <label htmlFor="hs-radio-on-right" className="flex items-center p-3 w-full  rounded-lg text-sm ">
                                <span className='h-8 w-8 p-[3px] md:bg-white rounded-md mr-2'>
                                    <img className='rounded-md' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                                </span>
                                <span className="text-lg mr-3 text-gray-500 dark:text-[#cfcfcf]">Jazz Cash</span>

                                <input type="radio" name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-on-right" />
                            </label>

                            <label htmlFor="hs-radioradio-on-right" className="flex items-center p-3 w-full  rounded-lg text-sm ">
                                <span className='h-8 w-8 p-[3px] bg-white rounded-md mr-2'>
                                    <img className='rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OMeGQnlZ-I81VAAluwyoYy7-62iQP11lGtti4qaxg&s" alt="" />
                                </span>
                                <span className="text-lg mr-3 text-gray-500 dark:text-[#cfcfcf]">Easy Paisa</span>

                                <input type="radio" name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radioradio-on-right" />
                            </label>
                   
</div>
                </section>
            </div>
        </>
    );
};

export default Information;
