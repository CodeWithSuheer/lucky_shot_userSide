import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <div className="cont bg-black text-white py-4 pb-6 flex justify-between items-center">
            <div className="flex items-center">
                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" alt="Lucky Logo" className="w-44 mr-4" />
            </div>
            <div className="flex flex-col w-full ml-4">
                <div className="flex space-x-2 justify-end">
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
