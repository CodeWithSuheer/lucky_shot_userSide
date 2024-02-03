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
                <section style={style.main_bg} className="  px-32 py-5 ">
                 
                        <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="150" alt="" srcSet="" />
                    
                    <div className="flex flex-wrap justify-center items-baseline gap-0.5 my-3">
                        <div className="border-b w-16 border-gray-500 "></div>
                        <img src="CROWN.png" alt="Crown icon" />
                        <div className="border-b w-16 border-gray-500"></div>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white text-center">Enter Your Information</h4>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-5`}>
                        <Input
                            type="email"
                            label="Email"
                            labelPlacement='outside'
                            defaultValue="junior@nextui.org"
                            className="max-w-xs text-white"
                        />
                        <Input
                            type="email"
                            label="Email"
                            labelPlacement='outside'
                            defaultValue="junior@nextui.org"
                            className="max-w-xs text-white"
                        />
                        <Input
                            type="email"
                            label="Email"
                            labelPlacement='outside'
                            defaultValue="junior@nextui.org"
                            className="max-w-xs text-white"
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Information;
