import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <div className="cont bg-transparent text-white py-4 pb-6 flex justify-between items-center flex-col sm:flex-row">
            <div className="flex justify-center items-center">
                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" alt="Lucky Logo" className="w-44" />
            </div>
            <div className="flex flex-col w-full ml-0 sm:ml-4 mt-5 sm:mt-0">
                <div className="flex space-x-2 justify-center sm:justify-end">
                    <a href="#" className="p-1.5 rounded-full text-white bg-[#B600D4] hover:bg-[#7212D4]"><Facebook size={20} /></a>
                    <a href="#" className="p-1.5 rounded-full text-white bg-[#B600D4] hover:bg-[#7212D4]"><Twitter size={20} /></a>
                    <a href="#" className="p-1.5 rounded-full text-white bg-[#B600D4] hover:bg-[#7212D4]"><Instagram size={20} /></a>
                    <a href="#" className="p-1.5 rounded-full text-white bg-[#B600D4] hover:bg-[#7212D4]"><Youtube size={20} /></a>
                </div>
                <hr class="my-3 border-gray-200 dark:border-gray-100" />
                <p className='text-center text-gray-300 font-light text-xs'>©2024 Stonefly Systems, Inc. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
