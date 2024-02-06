import React, { useEffect, useRef, useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Marquee from 'react-fast-marquee';
import backgroundimage from '../assets/BG.png'
import easypaisa from '../assets/easypaisa.png'
import easy_pasia_logo from '../assets/easy_pasia_logo.png'
import jazzcash from '../assets/jazzcash.png'
import { FileUp } from 'lucide-react';
import nayapay from '../assets/nayapay.png'
import sadapay from '../assets/sadapay.png'
import crown from '../assets/CROWN.png';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBetAsync } from '../features/placeBetSlice';
import { getAccountsAsync, updateAccountLimitAsync } from '../features/getAccountsSlice';
import { Snippet } from "@nextui-org/react";
import { Trash2 } from 'lucide-react';



const TextData = () => {
    return (
        <p className='px-10'>
            Welcome to Lucky Bet Shot – Where Luck Meets Opportunity! Unleash the thrill of betting on our platform. Your journey to excitement and winning starts here. Bet wisely, win big!
        </p>
    );
};

const style = {
    main_bg: {
        backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_1001.png?v=1707077440")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    mobile_view: {
        backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/bg_gradaint.png?v=1707160504")',
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
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const [Modal1, setModal1] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const amount = id.split("-")[0];  // USER BET AMOUNT  
    const bet_number = id.split("-")[1]; // USER BET NUMBER


    const accountsDetails = useSelector((state) => state.accounts.allAccounts);

    let jazzCashAccounts, easyPaisaAccounts;

    if (accountsDetails) {
        jazzCashAccounts = accountsDetails.filter(account => account.paymentMethod === 'Jazz Cash');
        easyPaisaAccounts = accountsDetails.filter(account => account.paymentMethod === 'Easy Paisa');
    } else {
        console.log('No account details available.');
    }

    useEffect(() => {
        dispatch(getAccountsAsync());
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [formData, setFormData] = useState({
        betAmount: parseInt(amount),
        betNumber: parseInt(bet_number),
        name: '',
        mobileNumber: '',
        prizeAcntInfo: {
            acntTitle: '',
            acntNumber: '',
            paymentMethod: '',
        },
        accountUsed: {
            Id: '',
            number: '',
        },
        image: '',
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
    };

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFormData({ ...formData, image: reader.result });
        };
    };

    const handleChange = (e, field) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: e.target.value,
        }));
    };

    const handleRadioChange = (e, field) => {
        handleChange(e, field);
    };

    const handlePaymentMethodChange = (method) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            prizeAcntInfo: {
                ...prevFormData.prizeAcntInfo,
                paymentMethod: method,
            },
        }));
    };

    const handleNestedChange = (parentField, childField, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [parentField]: {
                ...prevFormData[parentField],
                [childField]: value,
            },
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            additionalFile: e.target.files[0],
        }));
    };

    useEffect(() => {
        // console.log('Updated accountsDetails:', accountsDetails);

        let filteredAccounts;
        if (activeCard === 'jazzcash') {
            filteredAccounts = accountsDetails.filter(account => account.paymentMethod === 'Jazz Cash');
        } else if (activeCard === 'easypaisa') {
            filteredAccounts = accountsDetails.filter(account => account.paymentMethod === 'Easy Paisa');
        }

        if (filteredAccounts && filteredAccounts.length > 0) {
            const latestAccount = filteredAccounts[0];

            setFormData((prevFormData) => ({
                ...prevFormData,
                accountUsed: {
                    Id: latestAccount.id,
                    number: latestAccount.accountNumber,
                },
            }));
        }
    }, [accountsDetails, activeCard]);

    const handleCardClick = async (accountType) => {
        setActiveCard(accountType);
        setLoading(true);

        const accountNumbers = {
            jazzcash: 'Jazz Cash',
            easypaisa: 'Easy Paisa',
        };

        try {
            let selectedAccount;

            if (accountType === 'jazzcash') {
                selectedAccount = jazzCashAccounts[0];
            } else {
                selectedAccount = easyPaisaAccounts[0];
            }

            const newUsedLimit = selectedAccount.usedLimit + formData.betAmount;

            if (newUsedLimit > selectedAccount.limit) {
                await dispatch(updateAccountLimitAsync(selectedAccount.id));
                await dispatch(getAccountsAsync());
                setLoading(false);
                console.log('ACCOUNT LIMIT FULL');
            } else {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    accountUsed: {
                        Id: selectedAccount.id,
                        number: selectedAccount.accountNumber,
                    },
                }));
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const renderAccountDetails = () => {
        let selectedAccounts;

        if (activeCard === 'easypaisa') {
            selectedAccounts = easyPaisaAccounts;
        } else if (activeCard === 'jazzcash') {
            selectedAccounts = jazzCashAccounts;
        }

        if (selectedAccounts && selectedAccounts.length > 0) {
            const firstAccount = selectedAccounts[0];

            return (
                <>
                    {loading ? (
                        <div className={`flex justify-center items-center text-center w-full h-48 rounded-md bg-[#474747] px-2 py-5`}>
                            <div className={`block animate-pulse w-full rounded-md border border-transparent bg-[#474747] px-4 py-5`}>
                                <p className='bg-gray-500 rounded-lg h-3 w-44 my-3'></p>
                                <p className='bg-gray-500 rounded-lg h-3 w-56 my-3'></p>
                                <p className='bg-gray-500 rounded-lg h-3 w-44 my-3'></p>
                                <p className='bg-gray-500 rounded-lg h-3 w-56 my-3'></p>
                            </div>
                        </div>

                    ) : (
                        <div className={`block w-full rounded-md border ${activeCard === 'easypaisa' ? 'border-[#B600D4]' : 'border-transparent'} bg-[#474747] px-4 py-5`} onClick={() => handleCardClick(activeCard)}>
                            <img className='rounded-sm w-15 h-12 pb-2' src={activeCard === 'easypaisa' ? easypaisa : jazzcash} alt="" />
                            <p className='text-white font-medium text-sm'>Account Number:</p>
                            <Snippet symbol="" className='text-gray-200 bg-transparent text-md pl-0 font-normal py-0'>{firstAccount.accountNumber}</Snippet>
                            <p className='text-white mt-2 font-medium text-md'>Account Title:</p>
                            <p className='text-gray-200 text-sm'>{firstAccount.accountTitle}</p>
                        </div>
                    )}
                </>

            );
        } else {
            return (
                <div className={`flex justify-center items-center text-center w-full h-48 rounded-md border ${activeCard === 'easypaisa' ? 'border-[#B600D4]' : 'border-transparent'} bg-[#474747] px-2 py-5 cursor-pointer`} onClick={() => handleCardClick(activeCard)}>
                    <p className='text-lg md:text-md lg:text-lg tracking-wide'>Choose any account for more details</p>
                </div>
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            console.log(formData);
            const res = await dispatch(createBetAsync(formData));
            console.log('res', res);

            if (res.payload?.msg === 'Bet Placed Successfully') {
                handleOpenModal();

                setFormData({
                    betAmount: '',
                    betNumber: '',
                    name: '',
                    mobileNumber: '',
                    prizeAcntInfo: {
                        acntTitle: '',
                        acntNumber: '',
                        paymentMethod: '',
                    },
                    accountUsed: {
                        Id: '',
                        number: '',
                    },
                    image: '',
                });
            }
        } catch (error) {
            console.error('Error placing the bet:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setModal1(false);
        navigate("/")
        window.scroll(0, 0);
    };

    const handleOpenModal = () => {
        setModal1(true);
    };

    const resetImage = () => {
        setFormData({ ...formData, image: '' });
        fileInputRef.current.value = '';
    };

    return (
        <>
            <section className="relative" style={isMobile ? style.mobile_view : style.main_bg}>
                {/* ----------- HEADER ----------- */}
                <div style={{ ...style.shadowBlue, zIndex: 999 }} className="absolute w-full header bg-[#0035D4] text-white py-2 text-sm">
                    <Marquee speed={70}>
                        <TextData />
                        <TextData />
                    </Marquee>
                </div>

                {/* ----------- HERO SECTION ----------- */}
                <form onSubmit={handleSubmit} className="number_info_width pt-16 ">

                    {/* ----------- LOGO IMAGE ----------- */}
                    <div className="overflow-hidden flex justify-center md:justify-start mb-8">
                        <Link to="/">
                            <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="150" alt="" srcSet="" />
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
                            <input required type="number" placeholder="Bet Amount" value={amount} disabled
                                className="block w-full px-5 py-4 mt-2 rounded-md text-gray-200 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none" />
                        </div>
                    </div>

                    <h4 className="text-lg md:text-2xl mt-4 font-normal text-white text-center">Recevied Win Fund</h4>

                    {/* --------- SECOND ROW --------- */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 pt-4 pb-7`}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-200">Account Title <span className='text-red-500'>*</span></label>
                            <input
                                required
                                type="text"
                                placeholder="Account Title"
                                value={formData.prizeAcntInfo.acntTitle}
                                onChange={(e) => handleNestedChange('prizeAcntInfo', 'acntTitle', e.target.value)}
                                className="block w-full rounded-md px-5 py-4 mt-2 text-gray-100 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block mb-2  text-sm font-medium text-gray-200">Account No <span className='text-red-500'>*</span></label>
                            <input
                                required
                                type="tel"
                                placeholder="Account Title"
                                value={formData.prizeAcntInfo.acntNumber}
                                onChange={(e) => handleNestedChange('prizeAcntInfo', 'acntNumber', e.target.value)}
                                className="block w-full rounded-md px-5 py-4 mt-2 text-gray-100 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* --------- THIRD ROW --------- */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-3 py-2`}>
                        <label htmlFor="hs-radio-on-right" className="flex gap-3 items-center w-full rounded-lg text-sm ">
                            <img className='rounded-md h-8 w-8' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                            <span className="text-lg  text-gray-500 w-24">Jazz Cash</span>
                            <input
                                type="radio"
                                required
                                name="hs-radio-on-right"
                                className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]"
                                id="hs-radio-on-right"
                                onChange={() => handlePaymentMethodChange('Jazz Cash')}
                            />
                        </label>

                        <label htmlFor="hs-radioradio-on-right" className="flex gap-3 items-center w-full rounded-lg text-sm ">
                            <img className='rounded-md h-8 w-8' src={sadapay} alt="" />
                            <span className="text-lg  text-gray-500 w-24">Sada Pay</span>
                            <input
                                type="radio"
                                required
                                name="hs-radio-on-right"
                                className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]"
                                id="hs-radioradio-on-right"
                                onChange={() => handlePaymentMethodChange('Sadapay')}
                            />
                        </label>

                        <label htmlFor="hs-radio-on-right11" className="flex gap-3 items-center w-full rounded-lg text-sm ">
                            <img className='rounded-md h-8 w-8' src={easy_pasia_logo} alt="" />
                            <span className="text-lg  text-gray-500 w-24">Easy Paisa</span>
                            <input
                                type="radio"
                                required
                                name="hs-radio-on-right"
                                className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]"
                                id="hs-radio-on-right11"
                                onChange={() => handlePaymentMethodChange('Easy Paisa')}
                            />
                        </label>

                        <label htmlFor="hs-radioradio-on-right22" className="flex gap-3 items-center w-full rounded-lg text-sm ">
                            <img className='rounded-md h-8 w-8' src={nayapay} alt="" />
                            <span className="text-lg  text-gray-500 w-24">Naya Pay</span>
                            <input
                                type="radio"
                                required
                                name="hs-radio-on-right"
                                className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]"
                                id="hs-radioradio-on-right22"
                                onChange={() => handlePaymentMethodChange('Nayapay')}
                            />
                        </label>
                    </div>

                    <h4 className="text-lg md:text-3xl font-medium text-white text-center mt-12 mb-3">Send Money</h4>
                    <p className='text-sm sm:text-md text-gray-200 text-center py-1' style={{ fontWeight: '100' }}>Send bet amount on this Account and upload the payment configuration Screenshot</p>


                    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                        <legend className="sr-only">Accounts</legend>
                        <div>
                            <label
                                htmlFor="jazzcash"
                                className="flex cursor-pointer justify-between gap-4 rounded-lg border border-[#B600D4] bg-transparent  p-4 px-4 text-sm font-medium shadow-sm"
                            >
                                <div>
                                    <p className="text-white flex items-center text-xl">
                                        <img className='rounded-sm w-12 h-7 mr-2' src={jazzcash} alt="" />
                                        Jazz Cash
                                    </p>
                                </div>

                                <input
                                    type="radio"
                                    name="accountType"
                                    value="jazzcash"
                                    id="jazzcash"
                                    className="h-5 w-5 border-gray-300 text-blue-500"
                                    onChange={() => handleCardClick('jazzcash')}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="easypaisa"
                                className="flex cursor-pointer justify-between gap-4 rounded-lg border border-[#B600D4] bg-transparent p-4 px-4 text-sm font-medium shadow-sm"
                            >
                                <div>
                                    <p className="text-white flex items-center text-xl">
                                        <img className='rounded-sm w-7 h-7 mr-2' src={easypaisa} alt="" />
                                        EasyPaisa
                                    </p>
                                </div>

                                <input
                                    type="radio"
                                    name="accountType"
                                    value="easypaisa"
                                    id="easypaisa"
                                    className="h-5 w-5 border-gray-300 text-blue-500"
                                    onChange={() => handleCardClick('easypaisa')}
                                />
                            </label>
                        </div>
                    </fieldset>


                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6`}>
                        <div className="flex gap-3 sm:gap-5 items-center">
                            {renderAccountDetails()}
                        </div>

                        <div className='col-span-1 lg:col-span-2'>
                            <div className="relative w-full flex items-center justify-center rounded-md bg-[#474747]">
                                {formData.image ? (
                                    <div className="py-3 h-32 sm:h-48">
                                        <div className="absolute inset-0 overflow-hidden rounded-md flex justify-center items-center">
                                            <img
                                                src={formData.image}
                                                alt="Selected"
                                                className=""
                                                style={{ backgroundSize: 'contain', backgroundPosition: 'center', }}
                                            />
                                        </div>
                                        <button className="absolute bottom-3 right-3 bg-red-600 rounded-full p-2 flex justify-center items-center" onClick={resetImage}>
                                            <Trash2 />
                                        </button>
                                    </div>
                                ) : (
                                    <label className="cursor-pointer h-32 sm:h-48">
                                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full pt-4 sm:py-10 mx-auto  mt-2 text-center border-dashed cursor-pointer rounded-xl">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-8 h-8 text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                            </svg>

                                            <h2 class="mt-1 font-medium tracking-wide text-gray-100">Upload File</h2>

                                            <p class="mt-1 text-xs tracking-wide text-gray-200">Upload or darg & drop PNG, JPG </p>

                                            <input id="dropzone-file" ref={fileInputRef} type="file" class="hidden" onChange={handleImageChange} />
                                        </label>
                                        {/* <input
                                            type="file"
                                            id="file"
                                            className="ModelFileDropField absolute opacity-0 cursor-pointer"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            ref={fileInputRef}
                                        />
                                        <div className="flex gap-1 items-center cursor-pointer">
                                            <FileUp size={25} />
                                            <span className="text-gray-300 font-normal cursor-pointer">
                                                {formData.image
                                                    ? formData.additionalFile
                                                    : "Upload Screenshot"}
                                            </span>
                                        </div> */}
                                    </label>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center py-5">
                        <Button type='submit' isLoading={loading}
                            className='gradent rounded-md text-md px-8 tracking-wider text-white font-medium' variant="solid">
                            Submit
                        </Button>
                    </div>
                </form>
            </section>

            {/* {Modal && <ThankYou isOpen={handleOpenModal} onClose={handleCloseModal} />} */}

            {Modal1 &&
                <Modal backdrop="blur" size='sm' placement="center" isOpen={Modal} onClose={handleCloseModal} className="flex flex-wrap flex-col justify-center items-center px-2 py-1 md:px-5">
                    <ModalContent>
                        <>
                            <ModalHeader >
                                <img src={'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454'} className="mt-3 w-40 h-20" />
                            </ModalHeader>
                            <ModalBody className="text-center">
                                <p className="text-3xl font-extrabold text-black ">Thank You</p>
                                <p className="text-sm md:text-xl font-medium  text-black ">Your bet has been Placed</p>
                                <p className="text-sm lg:text-md  font-medium  text-black">Wait For Lucky Draw <span className="text-md  uppercase font-bold text-[#B600D4]"> Best of Luck </span></p>
                            </ModalBody>
                            <ModalFooter>
                                <div className="flex flex-wrap justify-center items-baseline gap-0.5 ">
                                    <img className='h-7' src={crown} alt="" />
                                </div>
                            </ModalFooter>
                        </>
                    </ModalContent>
                </Modal>
            }

        </>
    );
};

export default Information;
