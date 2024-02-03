import React from 'react';
import Header from './Header';
import backgroundimage from '../assets/BG.png'
import easypaisa from '../assets/easypaisa.png'
import jazzcash from '../assets/jazzcash.png'
import { FileUp } from 'lucide-react';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import nayapay from '../assets/nayapay.png'
import sadapay from '../assets/sadapay.png'
const style = {
    main_bg: {
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",

    },
};


const Information = () => {
    const [activeCard, setActiveCard] = useState(null);

  
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
    return (
        <>
            <div className="relative bg-black">
                {/* ----------- HEADER ----------- */}
                <Header />

                {/* ----------- HERO SECTION ----------- */}
                <form onSubmit={handleSubmit} style={style.main_bg} className="px-6 py-4  sm:px-10 md:px-16 lg:px-44  lg:py-2 ">

                    <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="150" alt="" srcSet="" />

                    <div className="flex flex-wrap justify-center items-baseline gap-0.5 ">
                        <div className="border-b w-16 border-gray-500 "></div>
                        <img src="CROWN.png" alt="Crown icon" />
                        <div className="border-b w-16 border-gray-500"></div>
                    </div>
                    <h4 className="text-xl md:text-3xl font-bold text-white text-center py-3">Enter Your Information</h4>


                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-6`}>
                        <div>
                            <label className="block mb-2 text-md font-medium text-white ">Enter Your Name *</label>
                            <input required type="text" placeholder="Enter Your Name" value={formData.name}
                                onChange={(e) => handleChange(e, "name")} className="block w-full px-5 py-4 mt-2 rounded-sm text-gray-500 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border border-[#B600D4]  focus:outline-none " />
                        </div>


                        <div>
                            <label className="block mb-2 text-md font-medium text-white ">Enter Your Mobile Number *</label>
                            <input required type="tel" placeholder="Enter Your Mobile Number" value={formData.mobileNumber}
                                onChange={(e) => handleChange(e, "mobileNumber")} className="block w-full px-5 py-4 rounded-sm mt-2 text-gray-500 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border border-[#B600D4]  focus:outline-none" />
                        </div>
                        <div>
                            <label className="block mb-2 text-md font-medium text-white ">Bet Amount</label>
                            <input required type="number" placeholder="Bet Amount" value={formData.betAmount}
                                onChange={(e) => handleChange(e, "betAmount")}  className="block w-full px-5 py-4 mt-2 rounded-sm text-gray-500 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border border-[#B600D4]  focus:outline-none" />
                        </div>


                    </div>
                    <h4 className="text-lg md:text-2xl font-medium text-white text-center">Recevied Win Fund</h4>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 py-6`}>
                        <div>
                            <label className="block mb-2 text-md font-semibold text-white ">Account No *</label>
                            <input required type="tel" placeholder="Account No" value={formData.accountNumber}
                                onChange={(e) => handleChange(e, "accountNumber")}  className="block w-full rounded-sm px-5 py-4 mt-2 text-gray-500 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border border-[#B600D4]  focus:outline-none" />
                        </div>


                        <div>
                            <label className="block mb-2 text-md font-medium text-white ">Account Tittle *</label>
                            <input required type="text" placeholder="Account Title " value={formData.accountTitle}
                                onChange={(e) => handleChange(e, "accountTitle")} className="block w-full rounded-sm px-5 py-4 mt-2 text-gray-500 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border border-[#B600D4]  focus:outline-none" />
                        </div>


                    </div>
                    <div className={`grid grid-cols-2 sm:grid-cols-4  gap-3 py-2`}>

                        <label htmlFor="hs-radio-on-right" className="flex gap-3 items-center block w-full  rounded-lg text-sm ">
                                <img className='rounded-md  h-8 w-8  ' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                            <span className="text-lg  text-gray-500 ]">Jazz Cash</span>

                            <input type="radio" required name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]" id="hs-radio-on-right" />
                        </label>

                        <label htmlFor="hs-radioradio-on-right" className="flex gap-3  items-center block  w-full  rounded-lg text-sm ">
                                <img className='rounded-md  h-8 w-8 ' src={sadapay} alt="" />
                            <span className="text-lg  text-gray-500 ]">Sada Pay</span>

                            <input type="radio" required name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4] " id="hs-radioradio-on-right" />
                        </label>
                        <label htmlFor="hs-radio-on-right" className="flex gap-3 items-center block w-full  rounded-lg text-sm ">
                                <img className='rounded-md  h-8 w-8 ' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                            <span className="text-lg  text-gray-500 ]">Jazz Cash</span>

                            <input type="radio" required name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4] " id="hs-radio-on-right" />
                        </label>

                        <label htmlFor="hs-radioradio-on-right" className="flex gap-3 items-center block w-full  rounded-lg text-sm ">
                                <img className='rounded-md  h-8 w-8 ' src={nayapay} alt="" />
                            <span className="text-lg  text-gray-500 ]">Naya Pay</span>

                            <input type="radio" required name="hs-radio-on-right" className="mt-0.5 border-gray-200 rounded-full  accent-[#B600D4] " id="hs-radioradio-on-right" />
                        </label>

                    </div>

                    <h4 className="text-lg md:text-2xl font-medium text-white text-center py-3">Send Money</h4>
                    <p className='text-md sm:text-md font-normal text-white text-center py-1'>Send bet amount on this Account and upload the payment configuration Screenshot</p>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6`}>
                    <div className="flex gap-6 items-center">
                        <div className={`block w-full rounded-md border ${activeCard === 'easypaisa' ? 'border-[#B600D4]' : 'border-transparent'} bg-[#474747] px-2 py-2 cursor-pointer`} onClick={() => handleCardClick('easypaisa')}>
                            <img className='rounded-sm w-15 h-10 pb-2' src={easypaisa} alt="" />
                            <p className='text-white font-medium text-md '>Account Number</p>
                            <p className='text-gray-400'>03895754</p>
                            <p className='text-white font-medium text-md'>Account Title</p>
                            <p className='text-gray-400'>Umer</p>
                        </div>

                        <div className={`block w-full rounded-sm border ${activeCard === 'jazzcash' ? 'border-[#B600D4]' : 'border-transparent'} bg-[#474747] px-2 py-2 cursor-pointer`} onClick={() => handleCardClick('jazzcash')}>
                            <img className='rounded-md w-15 h-10 pb-2' src={jazzcash} alt="" />
                            <p className='text-white text-md'>Account Number</p>
                            <p className='text-gray-400'>03895754</p>
                            <p className='text-white text-md'>Account Title</p>
                            <p className='text-gray-400'>Umer</p>
                        </div>
                    </div>
    <div className='grid  lg:col-span-2 '>
    <div className="  block w-full flex  items-center justify-center rounded-sm bg-[#474747] ">
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
          <Button type='submit' radius="sm" className="gradent px-8 py-2.5 rounded-md text-lg sm:text-xl font-semibold text-white">
            Submit
          </Button>
        </div>


                </form>
            </div>
        </>
    );
};

export default Information;
