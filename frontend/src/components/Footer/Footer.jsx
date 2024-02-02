import React from 'react';

const Footer = () => {
    return (
        <div className="main_cont bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" alt="Lucky Logo" className="w-32 mr-4" />
                <p>©2024 Stonefly Systems, Inc. All rights reserved.</p>
            </div>
            <div className="flex space-x-2">
                <a href="#" className="text-purple-500 hover:text-purple-700"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-purple-500 hover:text-purple-700"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-purple-500 hover:text-purple-700"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-purple-500 hover:text-purple-700"><i className='fas fa-envelope'></i></a>
            </div>
        </div>
    );
}

export default Footer;
