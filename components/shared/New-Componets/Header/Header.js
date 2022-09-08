import React, { useState, useEffect, useContext } from "react";
import SearchBar from "./SearchBar";
import LanguageSelect from "../HeaderWithSearchbar/LanguageSelect/LanguageSelect";
import Image from "next/image";
import TopHeaderContext from "../../../../Context/TopHeaderContext";
import LandingPageContext from "../../../../Context/LandingPageContext";
// components
import Logo from "../../../Ui/New-Components/universal/logo/Logo";

const Header = (props) => {
    const menuBtnHandler = () => {
        props.menuBtnClick();
    };

    const landingContext = useContext(LandingPageContext);

    const [options, setShowOptions] = useState({
        countryList: false,
        largeCountryList: false,
        languageList: false,
    });

    useEffect(() => {
        if (landingContext) {
            if (landingContext.search) {
                setShowOptions({
                    countryList: false,
                    largeCountryList: false,
                    languageList: false,
                });
            }
        }
    }, [landingContext]);

    const handler = (indicator) => {
        switch (indicator) {
            case "smc":
                landingContext?.barHandler(false);
                setShowOptions((prev) => {
                    return {
                        countryList: !prev.countryList,
                        largeCountryList: false,
                        languageList: false,
                    };
                });
                break;
            case "lan":
                landingContext?.barHandler(false);
                setShowOptions((prev) => {
                    return {
                        countryList: false,
                        largeCountryList: false,
                        languageList: !prev.languageList,
                    };
                });
                break;
        }
    };

    useEffect(() => {
        document.querySelector("body").onclick = () => {
            if (landingContext) {
                landingContext.barHandler(false);
            }
            setShowOptions((prev) => {
                return {
                    countryList: false,
                    largeCountryList: false,
                    languageList: false,
                };
            });
        };
    }, []);

    const selectGameType = () => {
        switch (props?.match?.queueId) {
            case 76:
                return "Ultra Rapid Fire";
            case 100:
                return "5v5 ARAM";
            case 400:
                return "5v5 Draft Pick";
            case 420:
                return "Ranked Solo";
            case 430:
                return "5v5 Blind Pick";
            case 440:
                return "Ranked Flex";
            case 450:
                return "5v5 ARAM";
            case 470:
                return "3v3 Ranked Flex";
            case 900:
                return "URF";

            default:
                return "Normal Game";
        }
    };

    function convertHMS(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
        let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds; // Return is MM : SS
    }

    function getGameStart(gameStartInitialDate) {
        let gameStartDate = new Date(gameStartInitialDate);

        const diffTime = Math.abs(Date.now() - gameStartDate);
        // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

        let gameStart;
        if (diffHours >= 24) {
            gameStart = `${(diffHours / 24).toFixed(0)} Days Ago`;
        } else if (diffHours < 24) {
            gameStart = `${diffHours.toFixed(0)} Hours Ago`;
        } else {
            gameStart = "Unmeasurable";
        }
        return gameStart;
    }

    return (
        <header className=" h-[54px] border-b border-[#282728] relative  ">
            <div className=" h-full px-[22px] flex items-center relative z-30 ">
                <div className=" w-[150px] flex items-center border-r border-headBorder h-full  ">
                    <div className=" w-[14px] h-[11px] mr-[11px] ">
                        <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 11"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14 0H0v1h14V0ZM0 5h14v1H0V5Zm0 5h14v1H0v-1Z"
                                fill="#FF4256"
                            />
                        </svg>
                    </div>
                    <Logo className=" text-[19px] leading-[18px] " />
                </div>
                {/* right searchbar and language bar */}
                <div className=" flex justify-between w-full pl-[15px] ">
                    <TopHeaderContext.Provider
                        value={{
                            option: options,
                            handler: handler,
                        }}
                    >
                        <SearchBar />
                        <LanguageSelect />
                    </TopHeaderContext.Provider>
                </div>
            </div>
            {props.profile ? (
                <div className=" w-full h-full absolute left-0 top-0 flex items-center justify-center gap-x-[10px] z-20 ">
                    {/* image  */}
                    <div className=" rounded-[7px] relative w-[25px] h-[25px] border border-red">
                        {props.mainPlayer && (
                            <Image
                                src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${props.mainPlayer?.championName}.png`}
                                alt=" profile image"
                                layout="fill"
                                className=" rounded-[15px] "
                            />
                        )}
                    </div>
                    <p className=" mazin-mid-15 text-white">
                        {selectGameType()} . {convertHMS(props.match?.duration)}{" "}
                        . {getGameStart(props.match?.gameStartTimestamp)}
                    </p>
                    <div
                        className=" h-[27px] px-[14px] rounded-[3px] flex items-center
                     justify-center mazin-mid-15 font-bold text-red bg-[rgba(255,66,86,0.2)] "
                    >
                        Defeat
                    </div>
                </div>
            ) : null}
        </header>
    );
};

export default Header;
