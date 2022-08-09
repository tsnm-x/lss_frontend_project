import React from "react";
import Image from "next/image";
import ProfileImg from "../../../../../public/assets/new-images/Profile/Jhin.png";
import DefeatCoverImg from "../../../../../public/assets/new-images/Profile/defeat-cover.png";
import Classess from "./ProfileIntro.module.css";

const ProfileIntro = (props) => {
    const profileDetails = {
        name: "defeat",
        rank: {
            solo: "38:48",
            day: 3,
        },
        rankStyle: [
            { name: "Aggression" },
            { name: "Solo Kill" },
            { name: "Good CS" },
            { name: "" },
            { name: "" },
            { name: "" },
            { name: "" },
        ],
    };

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
        <>
            <section className=" relative ">
                <div className="container flex h-[225px] items-center relative z-50 pl-[90px]  ">
                    {/* left side img  */}
                    <div className=" rounded-[15px] relative w-[110px] h-[110px] border border-white mr-[35px] ">
                        {props.mainPlayer && (
                            <Image
                                src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${props.mainPlayer?.championName}.png`}
                                alt=" profile image"
                                layout="fill"
                                className=" rounded-[15px] "
                            />
                        )}
                    </div>
                    {/* right side  */}
                    <div>
                        <h1 className=" font-sf-pro-text font-[700] text-white text-[30px] leading-[35.5px] capitalize ">
                            {props.mainPlayer?.win ? "Victory" : "Defeat"}
                        </h1>
                        <p className=" font-sf-pro-text font-[500] text-[18px] leading-[21.5px] text-[#AAA0A8] capitalize mt-1 ">
                            {selectGameType()} .{" "}
                            {convertHMS(props.match?.duration)} .{" "}
                            {getGameStart(props.match?.gameStartTimestamp)}
                        </p>
                        <div className=" grid grid-cols-4 grid-rows-2 mt-[10px] ">
                            {profileDetails.rankStyle.map((item, index) => {
                                return (
                                    <div
                                        className={`${
                                            Classess.profileRankOption
                                        } ${
                                            index >= 4
                                                ? index === 4
                                                    ? "bg-[#D58A54]"
                                                    : " bg-accent-color "
                                                : "bg-[#5d7cf6]"
                                        }`}
                                        key={index}
                                    >
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className={` w-[80%] h-full absolute right-0 top-0 z-30 `}>
                    <Image
                        src={DefeatCoverImg}
                        alt="cover image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className={`${Classess.bgImgMask}  z-40`}></div>
            </section>
        </>
    );
};

export default ProfileIntro;
