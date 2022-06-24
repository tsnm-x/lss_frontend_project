import React from "react";
import Image from "next/image";
import Player1img from "../../../../../../../public/assets/new-images/Profile/Often_play_with/player-1.png";
import Player2img from "../../../../../../../public/assets/new-images/Profile/Often_play_with/player-2.png";
import Player3img from "../../../../../../../public/assets/new-images/Profile/Often_play_with/player-3.png";

const PlayerRow = (props) => {
    // profileImg: Player1img,
    //           name: "nexos",
    //           ladderRank: 42.123,
    //           kda: 2.37,
    //           kdaRatio: 1,
    //           kdaDate: 7.3 / 5.3 / 5.0,
    //           success: 54,
    //           game: 32,

    return (
        <div className=" laptop:grid laptop:grid-cols-[repeat(4,1fr)] laptop:mb-2 last:laptop:mb-0 ">
            <div className=" laptop:relative laptop:w-[20px] laptop:h-[20px] laptop:border laptop:border-mix-white-black rounded-full ">
                <Image
                    src={props.profileImg}
                    alt="profile image"
                    layout="fill"
                    className="rounded-full"
                />
            </div>
            <div>
                <h6 className=" laptop:gotham-mid-9 laptop:text-light-text laptop:italic capitalize">
                    {props.name}
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] ">
                    Ladder Rank: {props.ladderRank}
                </p>
            </div>
            <div>
                <h6 className=" italic laptop:gotham-mid-9 laptop:text-light-text laptop:uppercase">
                    <span
                        className={`text-accent-color-2 ${
                            props.kda >= 5
                                ? "text-accent-color-4"
                                : props.kda >= 2
                                ? "text-accent-color-2"
                                : "text-light-text"
                        }`}
                    >
                        {props.kda}
                    </span>
                    :{props.kdaRatio} kda
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] ">
                    {props.kdaDate}
                </p>
            </div>
            <div>
                <h6
                    className={`laptop:gotham-mid-9  laptop:italic laptop:uppercase ${
                        props.success >= 50
                            ? "laptop:text-accent-color-2"
                            : " laptop:text-nav-btn"
                    }`}
                >
                    {props.success}%
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] ">
                    {props.game}games played
                </p>
            </div>
        </div>
    );
};

const OftenPlayWith = () => {
    const oftenPlayerData = [
        {
            profileImg: Player1img,
            name: "nexos",
            ladderRank: 42.123,
            kda: 2.37,
            kdaRatio: 1,
            kdaDate: 7.3 / 5.3 / 5.0,
            success: 54,
            game: 32,
        },
        {
            profileImg: Player2img,
            name: "웅오레",
            ladderRank: 12.123,
            kda: 7.31,
            kdaRatio: 1,
            kdaDate: 7.3 / 5.3 / 5.0,
            success: 44,
            game: 12,
        },
        {
            profileImg: Player3img,
            name: "면계집",
            ladderRank: 56.236,
            kda: 1.12,
            kdaRatio: 1,
            kdaDate: 7.3 / 5.3 / 5.0,
            success: 31,
            game: 9,
        },
        {
            profileImg: Player1img,
            name: "nexos",
            ladderRank: 42.123,
            kda: 2.37,
            kdaRatio: 1,
            kdaDate: 7.3 / 5.3 / 5.0,
            success: 54,
            game: 32,
        },
        {
            profileImg: Player2img,
            name: "웅오레",
            ladderRank: 12.123,
            kda: 7.31,
            kdaRatio: 1,
            kdaDate: 7.3 / 5.3 / 5.0,
            success: 44,
            game: 12,
        },
        {
            profileImg: Player3img,
            name: "면계집",
            ladderRank: 56.236,
            kda: 1.12,
            kdaRatio: 1,
            kdaDate: 7.3 / 5.3 / 5.0,
            success: 31,
            game: 9,
        },
    ];

    return (
        <div className=" px-[13px] py-[17px] rounded-5px bg-card-&-content-box laptop:mt-[10px] ">
            <h6 className=" font-sf-pro-text text-[11px] font-medium leading-[13px] text-grayed-text ">
                You often play with
            </h6>
            {/* card container  */}
            <div className=" laptop:mt-[13px]">
                {oftenPlayerData.map((player, index) => {
                    return <PlayerRow key={index} {...player} />;
                })}
            </div>
        </div>
    );
};

export default OftenPlayWith;
