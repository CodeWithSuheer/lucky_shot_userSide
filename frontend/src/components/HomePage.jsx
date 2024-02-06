import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import crown from "../assets/CROWN.png";
import PKR100 from "../assets/PKR100.png";
import PKR500 from "../assets/PKR500.png";
import medal from "../assets/medal.png";
import Marquee from "react-fast-marquee";
import WinnerToday from "../common/WinnerComponent/WinnerComponent";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBetResultsAsync } from "../features/BetResutsSlice";

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
      'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/gRADAINT_1.png?v=1707083850")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  left_div: {
    backgroundImage:
      'url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Mask_group_4.png?v=1707135177")',
    backgroundSize: "cover",
    backgroundPosition: "top ",
    backgroundRepeat: "no-repeat",
    height: "",
    width: "100%",
  },
  box_div: {
    backgroundImage:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsfwQWdHYvjItuWwtrlH-E55U9woDrZ2o6BeY1pvsxQ&s")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "13.5rem",
    width: "100%",
  },
  shadowBlue: {
    WebkitBoxShadow: "0px -6px 70px 25px rgba(11,63,219,0.75)",
    MozBoxShadow: "0px -6px 70px 25px rgba(11,63,219,0.75)",
    boxShadow: "0px -6px 70px 25px rgba(11,63,219,0.75)",
  },
};

const HomePage = () => {
  const [Modal, setModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dispatch = useDispatch();
  const results = useSelector((state) => state.betResults.AllBetResults);
  console.log(results);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("bet_boxes");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // HANDLE CLOSE MODAL
  const handleCloseModal = () => {
    setModal(false); // Close modal
  };

  // HANDLE OPEN MODAL
  const handleOpenModal = () => {
    setModal(true); // Open modal
  };

  const startTime100 = new Date();
  startTime100.setHours(14, 0, 0, 0); // 2:00 PM
  const endTime100 = new Date(startTime100);
  endTime100.setDate(endTime100.getDate() + 1); 

  const startTime200 = new Date();
  startTime200.setHours(18, 0, 0, 0); // 6:00 PM
  const endTime200 = new Date(startTime200);
  endTime200.setDate(endTime200.getDate() + 1);

  const startTime500 = new Date();
  startTime500.setHours(22, 0, 0, 0); // 10:00 PM
  const endTime500 = new Date(startTime500);
  endTime500.setDate(endTime500.getDate() + 1);

  const calculateTimeRemaining = (endTime) => {
    const now = new Date();
    let timeRemaining = endTime - now;
    if (timeRemaining < 0) {
      timeRemaining = 0;
    }
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    return { hours, minutes, seconds };
  };

  const [timeRemaining100, setTimeRemaining100] = useState(
    calculateTimeRemaining(endTime100)
  );
  const [timeRemaining200, setTimeRemaining200] = useState(
    calculateTimeRemaining(endTime200)
  );
  const [timeRemaining500, setTimeRemaining500] = useState(
    calculateTimeRemaining(endTime500)
  );

  useEffect(() => {
    const timer100 = setTimeout(() => {
      setTimeRemaining100(calculateTimeRemaining(endTime100));
      if (
        timeRemaining100.hours === 0 &&
        timeRemaining100.minutes === 0 &&
        timeRemaining100.seconds === 0
      ) {
        fetchResults();
      }
    }, 1000);
    const timer200 = setTimeout(() => {
      setTimeRemaining200(calculateTimeRemaining(endTime200));

      if (
        timeRemaining200.hours === 0 &&
        timeRemaining200.minutes === 0 &&
        timeRemaining200.seconds === 0
      ) {
        fetchResults();
      }
    }, 1000);
    const timer500 = setTimeout(() => {
      setTimeRemaining500(calculateTimeRemaining(endTime500));

      if (
        timeRemaining500.hours === 0 &&
        timeRemaining500.minutes === 0 &&
        timeRemaining500.seconds === 0
      ) {
        fetchResults();
      }
    }, 1000);

    return () => {
      clearTimeout(timer100);
      clearTimeout(timer200);
      clearTimeout(timer500);
    };
  });

  const fetchResults = () => {
    dispatch(getBetResultsAsync());
  };

  const betResult100 = results.filter((bet)=>bet.betAmount === 100);
  const betResult200 = results.filter((bet)=>bet.betAmount === 200);
  const betResult500 = results.filter((bet)=>bet.betAmount === 500);

  

  return (
    <>
      <div className="relative">
        {/* ----------- HEADER ----------- */}
        <div
          style={{ ...style.shadowBlue, zIndex: 999 }}
          className="absolute w-full header bg-[#0035D4] text-white py-2 text-sm"
        >
          <Marquee speed={70}>
            <TextData />
          </Marquee>
        </div>

        {/* ----------- HERO SECTION ----------- */}
        <section
          className="lg:px-0 pt-20 lg:pt-16 pb-20 lg:pb-44 mx-auto"
          style={isMobile ? null : style.main_bg}
        >
          <div className="items-center hero_cont lg:flex">
            <div
              className="px-5 w-full lg:w-1/2"
              style={isMobile ? style.left_div : null}
            >
              <div className="lg:max-w-lg text-start md:text-start">
                <img
                  className="overflow-hidden mx-auto md:mx-0"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454"
                  width="150"
                  alt=""
                  srcSet=""
                />

                <h2 className="hero_title mb-4">
                  Play With <br /> Lucky Bet Shot
                </h2>
                <p className="hero_text mt-3 text-md md:text-sm lg:text-md xl:text-md text-gray-300 mb-5">
                  Discover the excitement at Lucky Bet Shot! Place your bets and
                  test your luck for big wins. A trusted platform for thrilling
                  experiences. Join us now!
                </p>
                <Button
                  onClick={scrollToSection}
                  className="gradent px-6 rounded-md text-sm tracking-wider text-white font-medium"
                  variant="solid"
                >
                  BET NOW
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-14 -mb-20 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-[330px] flex md:hidden lg:max-w-3xl"
                style={{ objectFit: "cover" }}
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_71.jpg?v=1707132317"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </section>

        {/* ----------- DRAW TIMER ----------- */}
        <section className="md:px-2 text-center bg-black text-white py-14">
          <div className="cont">
            {/* DIVIDER */}
            <span className="flex items-center w-48 md:w-72 mb-5 mx-auto">
              <span className="h-px mt-3 flex-1 bg-gray-300 opacity-75"></span>
              <span className="shrink-0 px-2">
                <img className="h-7" src={crown} alt="" />
              </span>
              <span className="h-px mt-3 flex-1 bg-gray-300 opacity-75"></span>
            </span>
            {/* DIVIDER - END*/}
            <h2 className="text-4xl tracking-wide font-bold mt-3 mb-7 xl:mb-14">
              Draw Timer
            </h2>

            <div className="grid gap-8 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center">
              {/* LEFT IMAGE */}
              <div className="w-full md:px-0 text-center">
                <img
                  className="px-6 lg:px-0 mx-auto w-full h-full"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/LEFT_IMAGE_1.png?v=1707131696"
                  alt="avatar"
                />
              </div>

              {/* MIDDLE DATA */}
              <div className="w-full md:px-0 text-center mt-10 sm:mt-0">
                {/* ----------- FIRST TABLE FOR 100 PKR ----------- */}
                {betResult100?.length > 0 ? 
                 <div className="timer_100 px-6 lg:px-0 mb-8">
                  <div className="relative border border-white rounded-2xl p-4 text-white text-center font-bold bg-black w-full">
                    <h2 className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black py-1 rounded-3xl">
                      <span className="flex justify-center items-center w-48">
                        <img className="px-1" src={medal} alt="" /> Today
                        Winners
                      </span>
                    </h2>

                    <div className="timer_clock mt-4 mb-0 flex flex-col items-center justify-center">
                      <div className="flex justify-between items-center gap-7 text-xs md:text-xs lg:text-xs font-normal">
                        <span className="flex items-center">
                          <img className="px-1 h-4" src={medal} alt="" />
                          UmerJaviad
                        </span>
                        <span>112</span>
                        <span>*********3232</span>
                      </div>
                      <div className="bg-gray-400 h-[1px] my-2 w-full"></div>
                      <div className="flex justify-between items-center gap-7 text-xs md:text-xs lg:text-xs font-normal">
                        <span className="flex items-center">
                          <img className="px-1 h-4" src={medal} alt="" />
                          UmerJaviad
                        </span>
                        <span>1122</span>
                        <span>*********3232</span>
                      </div>
                      <div className="bg-gray-400 h-[1px] my-2 w-full"></div>
                      <p
                        className="text-sm font-light underline underline-offset-4 cursor-pointer"
                        onClick={handleOpenModal}
                      >
                        View all
                      </p>
                    </div>
                  </div>
                </div> : 
                <div className="timer_100 px-6 lg:px-0 pt-0 md:pt-9 lg:pt-7 xl:pt-3 mb-8">
                  <div className="relative border border-white rounded-2xl p-2 text-white text-center font-bold bg-black w-full">
                    <h2 className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-1 rounded-3xl">
                      <span className="flex justify-center items-center">
                        Draw
                        <img className="px-1" src={PKR100} alt="" /> 100PKR
                      </span>
                    </h2>

                    <div className="timer_clock pt-8 pb-4 md:pt-4 md:pb-2 lg:pt-4 lg:pb-1 xl:pt-8 xl:pb-5 flex items-center justify-center">
                      <div className="ma">
                        <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">
                          {timeRemaining100.hours}
                        </span>
                        <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">
                          HOURS
                        </span>
                      </div>
                      <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">
                        :
                      </div>
                      <div className="ma">
                        <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">
                          {timeRemaining100.minutes}
                        </span>
                        <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">
                          MINTS
                        </span>
                      </div>
                      <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">
                        :
                      </div>
                      <div className="ma">
                        <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">
                          {timeRemaining100.seconds}
                        </span>
                        <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">
                          SECONDS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                }

                {/* ----------- FIRST TABLE FOR 200 PKR ----------- */}

                {betResult200?.length > 0 ? 
                 <div className="timer_100 px-6 lg:px-0 mb-8">
                  <div className="relative border border-white rounded-2xl p-4 text-white text-center font-bold bg-black w-full">
                    <h2 className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black py-1 rounded-3xl">
                      <span className="flex justify-center items-center w-48">
                        <img className="px-1" src={medal} alt="" /> Today
                        Winners
                      </span>
                    </h2>

                    <div className="timer_clock mt-4 mb-0 flex flex-col items-center justify-center">
                      <div className="flex justify-between items-center gap-7 text-xs md:text-xs lg:text-xs font-normal">
                        <span className="flex items-center">
                          <img className="px-1 h-4" src={medal} alt="" />
                          UmerJaviad
                        </span>
                        <span>112</span>
                        <span>*********3232</span>
                      </div>
                      <div className="bg-gray-400 h-[1px] my-2 w-full"></div>
                      <div className="flex justify-between items-center gap-7 text-xs md:text-xs lg:text-xs font-normal">
                        <span className="flex items-center">
                          <img className="px-1 h-4" src={medal} alt="" />
                          UmerJaviad
                        </span>
                        <span>1122</span>
                        <span>*********3232</span>
                      </div>
                      <div className="bg-gray-400 h-[1px] my-2 w-full"></div>
                      <p
                        className="text-sm font-light underline underline-offset-4 cursor-pointer"
                        onClick={handleOpenModal}
                      >
                        View all
                      </p>
                    </div>
                  </div>
                </div> : 

                <div className="timer_100 px-6 lg:px-0 mb-8">
                  <div className="relative border border-white rounded-2xl p-2 text-white text-center font-bold bg-black w-full">
                    <h2 className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-1 rounded-3xl">
                      <span className="flex justify-center items-center">
                        Draw
                        <img className="px-1" src={PKR100} alt="" /> 200PKR
                      </span>
                    </h2>

                    <div className="timer_clock pt-8 pb-4 md:pt-4 md:pb-2 lg:pt-4 lg:pb-1 xl:pt-8 xl:pb-5 flex items-center justify-center">
                      <div className="ma">
                        <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">
                          {timeRemaining200.hours}
                        </span>
                        <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">
                          HOURS
                        </span>
                      </div>
                      <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">
                        :
                      </div>
                      <div className="ma">
                        <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">
                          {timeRemaining200.minutes}
                        </span>
                        <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">
                          MINTS
                        </span>
                      </div>
                      <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">
                        :
                      </div>
                      <div className="ma">
                        <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">
                          {timeRemaining200.seconds}
                        </span>
                        <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">
                          SECONDS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>}

                {/* ----------- FIRST TABLE FOR 500 PKR ----------- */}

                {betResult500?.length > 0 ? 
                 <div className="timer_100 px-6 lg:px-0 mb-8">
                  <div className="relative border border-white rounded-2xl p-4 text-white text-center font-bold bg-black w-full">
                    <h2 className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black py-1 rounded-3xl">
                      <span className="flex justify-center items-center w-48">
                        <img className="px-1" src={medal} alt="" /> Today
                        Winners
                      </span>
                    </h2>

                    <div className="timer_clock mt-4 mb-0 flex flex-col items-center justify-center">
                      <div className="flex justify-between items-center gap-7 text-xs md:text-xs lg:text-xs font-normal">
                        <span className="flex items-center">
                          <img className="px-1 h-4" src={medal} alt="" />
                          UmerJaviad
                        </span>
                        <span>112</span>
                        <span>*********3232</span>
                      </div>
                      <div className="bg-gray-400 h-[1px] my-2 w-full"></div>
                      <div className="flex justify-between items-center gap-7 text-xs md:text-xs lg:text-xs font-normal">
                        <span className="flex items-center">
                          <img className="px-1 h-4" src={medal} alt="" />
                          UmerJaviad
                        </span>
                        <span>1122</span>
                        <span>*********3232</span>
                      </div>
                      <div className="bg-gray-400 h-[1px] my-2 w-full"></div>
                      <p
                        className="text-sm font-light underline underline-offset-4 cursor-pointer"
                        onClick={handleOpenModal}
                      >
                        View all
                      </p>
                    </div>
                  </div>
                </div> : 
                <div className="timer_100 px-6 lg:px-0 mb-8">
                  <div className="relative border border-white rounded-2xl p-2 text-white text-center font-bold bg-black w-full">
                    <h2 className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-1 rounded-3xl">
                      <span className="flex justify-center items-center">
                        Draw
                        <img className="px-1" src={PKR500} alt="" /> 500PKR
                      </span>
                    </h2>

                    <div className="timer_clock pt-8 pb-4 md:pt-4 md:pb-2 lg:pt-4 lg:pb-1 xl:pt-8 xl:pb-5 flex items-center justify-center">
                      <div className="ma">
                        <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">
                          {timeRemaining500.hours}
                        </span>
                        <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">
                          HOURS
                        </span>
                      </div>
                      <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">
                        :
                      </div>
                      <div className="ma">
                        <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">
                          {timeRemaining500.minutes}
                        </span>
                        <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">
                          MINTS
                        </span>
                      </div>
                      <div className="hours text-white px-2 py-2 mb-5 text-lg rounded-md">
                        :
                      </div>
                      <div className="ma">
                        <span className="hours bg-[#B600D4] text-white h-12 md:h-11 lg:h-12 w-[53px] md:w-[50px] lg:w-[53px] text-3xl md:text-2xl rounded-md flex items-center justify-center">
                          {timeRemaining500.seconds}
                        </span>
                        <span className="text-white h-12 w-12 text-sm md:text-xs lg:text-xs font-light">
                          SECONDS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>}
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full md:px-0 text-center">
                <img
                  className="px-6 lg:px-0 mx-auto w-full h-full"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/RIGHT_IMAGE_1.png?v=1707131698"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ----------- BET BOXES ----------- */}
        <section
          id="bet_boxes"
          className="px-6 md:px-2 text-center bg-black text-white py-10"
        >
          <div className="cont">
            <div className="grid gap-8 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {/* 100 PKR */}
              <div
                style={style.box_div}
                className="relative my-3 md:my-0 flex justify-center items-center flex-col  border-[4px] sm:border-[5px] border-dashed border-[#B600D4] rounded-lg text-center"
              >
                <p className="absolute top-0 bg-[#B600D4] px-6 py-2 rounded-b-lg text-sm font-light mb-1">
                  BASIC BET
                </p>
                <h4 className="text-xl font-medium mt-4 mb-1">Bet 100 PKR</h4>
                <h2 className="text-2xl tracking-wide font-semibold mb-2.5">
                  Win 5000 PKR
                </h2>
                <Link
                  to="/selectNumber/bet-100"
                  onClick={() => window.scroll(0, 0)}
                  className="gradent px-6 py-2 rounded-md text-sm font-medium"
                >
                  BET NOW
                </Link>
              </div>
              {/* 200 PKR */}
              <div
                style={style.box_div}
                className="relative my-3 md:my-0 flex justify-center items-center flex-col border-[4px] sm:border-[5px] border-dashed border-[#B600D4] rounded-lg text-center"
              >
                <p className="absolute top-0 bg-[#B600D4] px-6 py-2 rounded-b-lg text-sm font-light mb-1">
                  STANDARD BET
                </p>
                <h4 className="text-xl font-medium mt-4 mb-1">Bet 200 PKR</h4>
                <h2 className="text-2xl tracking-wide font-semibold mb-2.5">
                  Win 10000 PKR
                </h2>
                <Link
                  to="/selectNumber/bet-200"
                  onClick={() => window.scroll(0, 0)}
                  className="gradent px-6 py-2 rounded-md text-sm font-medium"
                >
                  BET NOW
                </Link>
              </div>
              {/* 500 PKR */}
              <div
                style={style.box_div}
                className="relative my-3 md:my-0 flex justify-center items-center flex-col border-[4px] sm:border-[5px] border-dashed border-[#B600D4] rounded-lg text-center"
              >
                <p className="absolute top-0 bg-[#B600D4] px-6 py-2 rounded-b-lg text-sm font-light mb-1">
                  PREMIUM BET
                </p>
                <h4 className="text-xl font-medium mt-4 mb-1">Bet 500 PKR</h4>
                <h2 className="text-2xl tracking-wide font-semibold mb-2.5">
                  Win 25000 PKR
                </h2>
                <Link
                  to="/selectNumber/bet-500"
                  onClick={() => window.scroll(0, 0)}
                  className="gradent px-6 py-2 rounded-md text-sm font-medium"
                >
                  BET NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {Modal && (
        <WinnerToday isOpen={handleOpenModal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default HomePage;
