import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import backgroundimage from "../assets/BG.png";
import easypaisa from "../assets/easypaisa.png";
import easy_pasia_logo from "../assets/easy_pasia_logo.png";
import jazzcash from "../assets/jazzcash.png";
import { FileUp } from "lucide-react";
import { Button } from "@nextui-org/button";
import nayapay from "../assets/nayapay.png";
import sadapay from "../assets/sadapay.png";
import crown from "../assets/CROWN.png";
import { Link, useParams } from "react-router-dom";
import ThankYou from "../common/ThankYou/ThankYou";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBetAsync } from "../features/placeBetSlice";

const TextData = () => {
  return (
    <p className="px-10">
      Welcome to Lucky Bet Shot – Where Luck Meets Opportunity! Unleash the
      thrill of betting on our platform. Your journey to excitement and winning
      starts here. Bet wisely, win big!
    </p>
  );
};

const style = {
  main_bg: {
    backgroundImage:
      'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/BG.png?v=1706958005")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  shadowBlue: {
    WebkitBoxShadow: "0px -6px 70px 25px rgba(11,63,219,0.75)",
    MozBoxShadow: "0px -6px 70px 25px rgba(11,63,219,0.75)",
    boxShadow: "0px -6px 70px 25px rgba(11,63,219,0.75)",
  },
};

const Information = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [Modal, setModal] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const { id } = useParams();
  const amount = id.split("-")[0]; // USER BET AMOUNT
  const bet_number = id.split("-")[1]; // USER BET NUMBER

  const [formData, setFormData] = useState({
    betAmount: parseInt(amount),
    betNumber: parseInt(bet_number),
    name: "",
    mobileNumber: "",
    prizeAcntInfo: {
      acntTitle: "",
      acntNumber: "",
      paymentMethod: "",
    },
    accountUsed: {
      Id: "65be584d641dc8c13cd31e3a",
      number: "",
    },
    image: "",
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

  const handleCardClick = (accountType) => {
    setActiveCard(accountType);

    // Update the account number in formData based on the selected account type
    const accountNumbers = {
      jazzcash: "0332 2323232", // Replace with the actual Jazz Cash account number
      easypaisa: "0332 2323232", // Replace with the actual EasyPaisa account number
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      accountUsed: {
        ...prevFormData.accountUsed,
        number: accountNumbers[accountType] || "", // Set the account number based on the selected account type
      },
    }));
  };

  const renderAccountDetails = () => {
    if (activeCard === "easypaisa") {
      return (
        <div
          className={`block w-full rounded-md border ${
            activeCard === "easypaisa"
              ? "border-[#B600D4]"
              : "border-transparent"
          } bg-[#474747] px-2 py-5 cursor-pointer`}
          onClick={() => handleCardClick("easypaisa")}
        >
          <img className="rounded-sm w-15 h-10 pb-2" src={easypaisa} alt="" />
          <p className="text-white font-medium text-sm ">Account Number:</p>
          <p className="text-gray-200 text-sm font-light my-1">0332 2323232</p>
          <p className="text-white mt-2 font-medium text-md">Account Title:</p>
          <p className="text-gray-200 text-sm">Umer EasyPaisa</p>
        </div>
      );
    } else if (activeCard === "jazzcash") {
      return (
        <div
          className={`block w-full rounded-md border ${
            activeCard === "jazzcash"
              ? "border-[#B600D4]"
              : "border-transparent"
          } bg-[#474747] px-2 py-5 cursor-pointer`}
          onClick={() => handleCardClick("jazzcash")}
        >
          <img className="rounded-md w-15 h-10 pb-2" src={jazzcash} alt="" />
          <p className="text-white text-sm">Account Number:</p>
          <p className="text-gray-200 text-sm font-light my-1">0332 2323232</p>
          <p className="text-white mt-2 text-md">Account Title:</p>
          <p className="text-gray-200 text-sm">Suheer Jazz Cash</p>
        </div>
      );
    } else {
      return (
        <div
          className={`flex justify-center items-center text-center w-full h-48 rounded-md border ${
            activeCard === "easypaisa"
              ? "border-[#B600D4]"
              : "border-transparent"
          } bg-[#474747] px-2 py-5 cursor-pointer`}
          onClick={() => handleCardClick("easypaisa")}
        >
          <p className="text-lg md:text-md lg:text-lg tracking-wide">
            Choose any account for more details
          </p>
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
      dispatch(createBetAsync(formData))
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
      <section className="relative" style={style.main_bg}>
        {/* ----------- HEADER ----------- */}
        <div
          style={{ ...style.shadowBlue, zIndex: 999 }}
          className="absolute w-full header bg-[#0035D4] text-white py-2 text-sm"
        >
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
              <img
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454"
                width="150"
                alt=""
                srcSet=""
              />
            </Link>
          </div>

          {/* ----------- DIVIDER ----------- */}
          <span className="relative mb-5 max-w-md mx-auto flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-75"></div>
            <span className="relative bg-black z-10 px-2">
              <img className="h-7" src={crown} alt="" />
            </span>
          </span>

          <h4 className="text-xl md:text-4xl tracking-wider font-bold text-white text-center py-3">
            Enter Your Information
          </h4>

          {/* --------- FIRST ROW --------- */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-6`}
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200 ">
                Enter Your Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) => handleChange(e, "name")}
                className="block w-full px-5 py-4 mt-2 rounded-md text-gray-200 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none "
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200 ">
                Enter Your Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="tel"
                placeholder="Enter Your Mobile Number"
                value={formData.mobileNumber}
                onChange={(e) => handleChange(e, "mobileNumber")}
                className="block w-full px-5 py-4 rounded-md mt-2 text-gray-200 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200 ">
                Bet Amount
              </label>
              <input
                required
                type="number"
                placeholder="Bet Amount"
                value={amount}
                disabled
                className="block w-full px-5 py-4 mt-2 rounded-md text-gray-200 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none"
              />
            </div>
          </div>

          <h4 className="text-lg md:text-2xl mt-4 font-normal text-white text-center">
            Recevied Win Fund
          </h4>

          {/* --------- SECOND ROW --------- */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 pt-4 pb-7`}
          >
            <div>
              <label className="block mb-2  text-sm font-medium text-gray-200">
                Account No <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Account Title"
                value={formData.prizeAcntInfo.acntNumber}
                onChange={(e) =>
                  handleNestedChange(
                    "prizeAcntInfo",
                    "acntNumber",
                    e.target.value
                  )
                }
                className="block w-full rounded-md px-5 py-4 mt-2 text-gray-100 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">
                Account Title <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Account Title"
                value={formData.prizeAcntInfo.acntTitle}
                onChange={(e) =>
                  handleNestedChange(
                    "prizeAcntInfo",
                    "acntTitle",
                    e.target.value
                  )
                }
                className="block w-full rounded-md px-5 py-4 mt-2 text-gray-100 placeholder-gray-500 bg-[#474747] border border-[#B600D4]  focus:border  focus:outline-none"
              />
            </div>
          </div>

          {/* --------- THIRD ROW --------- */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-3 py-2`}
          >
            <label
              htmlFor="hs-radio-on-right"
              className="flex gap-3 items-center w-full rounded-lg text-sm "
            >
              <img
                className="rounded-md h-8 w-8"
                src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk"
                alt=""
              />
              <span className="text-lg  text-gray-500 w-24">Jazz Cash</span>
              <input
                type="radio"
                required
                name="hs-radio-on-right"
                className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]"
                id="hs-radio-on-right"
                onChange={() => handlePaymentMethodChange("Jazz Cash")}
              />
            </label>

            <label
              htmlFor="hs-radioradio-on-right"
              className="flex gap-3 items-center w-full rounded-lg text-sm "
            >
              <img className="rounded-md h-8 w-8" src={sadapay} alt="" />
              <span className="text-lg  text-gray-500 w-24">Sada Pay</span>
              <input
                type="radio"
                required
                name="hs-radio-on-right"
                className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]"
                id="hs-radioradio-on-right"
                onChange={() => handlePaymentMethodChange("Sadapay")}
              />
            </label>

            <label
              htmlFor="hs-radio-on-right11"
              className="flex gap-3 items-center w-full rounded-lg text-sm "
            >
              <img
                className="rounded-md h-8 w-8"
                src={easy_pasia_logo}
                alt=""
              />
              <span className="text-lg  text-gray-500 w-24">Easy Paisa</span>
              <input
                type="radio"
                required
                name="hs-radio-on-right"
                className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]"
                id="hs-radio-on-right11"
                onChange={() => handlePaymentMethodChange("Easy Paisa")}
              />
            </label>

            <label
              htmlFor="hs-radioradio-on-right22"
              className="flex gap-3 items-center w-full rounded-lg text-sm "
            >
              <img className="rounded-md h-8 w-8" src={nayapay} alt="" />
              <span className="text-lg  text-gray-500 w-24">Naya Pay</span>
              <input
                type="radio"
                required
                name="hs-radio-on-right"
                className="mt-0.5 border-gray-200 rounded-full accent-[#B600D4]"
                id="hs-radioradio-on-right22"
                onChange={() => handlePaymentMethodChange("Naya Pay")}
              />
            </label>
          </div>

          <h4 className="text-lg md:text-3xl font-medium text-white text-center mt-12 mb-3">
            Send Money
          </h4>
          <p
            className="text-sm sm:text-md text-gray-200 text-center py-1"
            style={{ fontWeight: "100" }}
          >
            Send bet amount on this Account and upload the payment configuration
            Screenshot
          </p>

          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
            <legend className="sr-only">Accounts</legend>

            <div>
              <label
                htmlFor="jazzcash"
                className="flex cursor-pointer justify-between gap-4 rounded-lg border border-[#B600D4] bg-transparent  p-4 px-4 text-sm font-medium shadow-sm"
              >
                <div>
                  <p className="text-white flex items-center text-xl">
                    <img
                      className="rounded-sm w-12 h-7 mr-2"
                      src={jazzcash}
                      alt=""
                    />
                    Jazz Cash
                  </p>
                </div>

                <input
                  type="radio"
                  name="accountType"
                  value="jazzcash"
                  id="jazzcash"
                  className="h-5 w-5 border-gray-300 text-blue-500"
                  onChange={() => handleCardClick("jazzcash")}
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
                    <img
                      className="rounded-sm w-7 h-7 mr-2"
                      src={easypaisa}
                      alt=""
                    />
                    EasyPaisa
                  </p>
                </div>

                <input
                  type="radio"
                  name="accountType"
                  value="easypaisa"
                  id="easypaisa"
                  className="h-5 w-5 border-gray-300 text-blue-500"
                  onChange={() => handleCardClick("easypaisa")}
                />
              </label>
            </div>
          </fieldset>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6`}
          >
            <div className="flex gap-3 sm:gap-5 items-center">
              {renderAccountDetails()}
            </div>

            <div className="col-span-1 lg:col-span-2">
              <div className="w-full flex items-center justify-center h-16 md:h-48 rounded-md bg-[#474747]">
                <label className="cursor-pointer p-4">
                  <input
                    type="file"
                    id="file"
                    className="ModelFileDropField absolute w-[100px] h-10 opacity-0 cursor-pointer"
                    onChange={handleImageChange}
                    accept="image/*"
                    ref={fileInputRef}
                  />
                  <div className="flex gap-1 items-center">
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
            <Button
              type="submit"
              // onClick={() => setModal(!Modal)}
              className="gradent rounded-md text-md px-8 tracking-wider text-white font-medium"
              variant="solid"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>

      {Modal && (
        <ThankYou isOpen={handleOpenModal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Information;
