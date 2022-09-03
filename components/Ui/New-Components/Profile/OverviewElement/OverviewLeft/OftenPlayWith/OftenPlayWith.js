import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { BsPerson } from "react-icons/bs";
import Classess from "./OftenPlayWith.module.css";

const PlayerRow = (props) => {
    useEffect(() => {}, [props]);

    return (
        <div
            className=" grid grid-cols-[100px_60px_48px]
         justify-between bg-profileBorder pl-[16px] pr-[14px]
          rounded-[5px] py-1 "
        >
            {/* name  */}
            <div className=" flex items-center ">
                <BsPerson className=" text-white text-[14px] mr-[14px]  " />
                <h6
                    className={`${Classess.whiteHead} capitalize `}
                    title={props.summonerName}
                >
                    {/* {props.summonerName} */}
                    {props?.summonerName?.slice(0, 7)}
                    {props?.summonerName?.length >= 7 && "..."}
                </h6>
            </div>
            {/* kda  */}
            <div>
                <h1 className={`${Classess.whiteHead} uppercase `}>
                    {props.totalDeaths
                        ? (
                              (props.totalAssists + props.totalKills) /
                              props.totalDeaths
                          ).toFixed(2)
                        : "Perfect"}{" "}
                    kda
                </h1>
                <h2 className={` ${Classess.smallHead}`}>
                    {props.totalKills}/{props.totalDeaths}/{props.totalAssists}
                </h2>
            </div>
            {/* games  */}
            <div>
                <h1 className={`${Classess.whiteHead} uppercase `}>
                    {(
                        (props.winCount / (props.winCount + props.lossCount)) *
                        100
                    ).toFixed(0)}{" "}
                    %
                </h1>
                <h2 className={` ${Classess.smallHead}`}>
                    {props.winCount + props.lossCount} Games
                </h2>
            </div>
            {/* <div
                className="  laptop:relative laptop:w-[20px] laptop:h-[20px] laptop:border laptop:border-mix-white-black rounded-full
             smDesktop:w-[26px] smDesktop:h-[26px]"
            >
                <Image
                    src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${props.profileIcon}.png`}
                    alt="profile image"
                    layout="fill"
                    className="rounded-full"
                />
            </div> */}
            {/* <div>
                <h6
                    className="laptop:gotham-mid-9 laptop:text-light-text laptop:italic capitalize 
                smDesktop:text-[10px] smDesktop:leading-[11px] "
                    title={props.summonerName}
                > */}
            {/* {props.summonerName} */}
            {/* {props?.summonerName?.slice(0, 7)}
                    {props?.summonerName?.length >= 7 && "..."}
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] desktop:text-[7px] desktop:leading-[9px] ">
                    Ladder Rank: {props.ladderRank}
                </p>
            </div> */}
            {/* <div>
                <h6 className=" italic laptop:gotham-mid-9 laptop:text-light-text laptop:uppercase  ">
                    <span
                        className={`${
                            props.totalDeaths
                                ? (
                                      (props.totalAssists + props.totalKills) /
                                      props.totalDeaths
                                  ).toFixed(2) >= 5
                                    ? "text-accent-color-2"
                                    : (
                                          (props.totalAssists +
                                              props.totalKills) /
                                          props.totalDeaths
                                      ).toFixed(2) >= 2
                                    ? "text-accent-color-4"
                                    : "text-light-text"
                                : "text-accent-color-2"
                        }`}
                    >
                        {props.totalDeaths
                            ? (
                                  (props.totalAssists + props.totalKills) /
                                  props.totalDeaths
                              ).toFixed(2)
                            : "Perfect"}
                    </span>
                    {props.totalDeaths ? ":1" : ""} kda
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] desktop:text-[7px] desktop:leading-[9px]  ">
                    {props.totalKills}/{props.totalDeaths}/{props.totalAssists}
                </p>
            </div> */}
            {/* <div className="">
                <h6
                    className={`laptop:gotham-mid-9  laptop:italic laptop:uppercase  ${
                        (props.winCount / (props.winCount + props.lossCount)) *
                            100 >=
                        50
                            ? "laptop:text-accent-color-2"
                            : " laptop:text-nav-btn"
                    }`}
                >
                    {(
                        (props.winCount / (props.winCount + props.lossCount)) *
                        100
                    ).toFixed(0)}
                    %
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] desktop:text-[7px] desktop:leading-[9px] ">
                    {props.winCount + props.lossCount} games
                </p>
            </div> */}
        </div>
    );
};

const OftenPlayWith = () => {
    const matches = useSelector((state) => state.profile.profile);
    const playersArr = [];
    const [players, setPlayers] = useState([]);
    const [mostPlayedWithList, setMostPlayedWithList] = useState([]);

    useEffect(() => {
        setMostPlayedWithList([]);
        matches?.forEach((match) => {
            const mainPlayer = match.players.find(
                (player) => player.mainPlayer
            );
            mainPlayer.win
                ? playersArr.push(
                      ...match.players.filter(
                          (player) => player.win && !player.mainPlayer
                      )
                  )
                : playersArr.push(
                      ...match.players.filter(
                          (player) => !player.win && !player.mainPlayer
                      )
                  );
        });

        setPlayers(playersArr);
    }, [matches]);

    useEffect(() => {
        let maxcount = 0;
        let deaths = 0;
        let assists = 0;
        let kills = 0;
        let winCount = 0;
        let lossCount = 0;

        for (let i = 0; i < players.length; i++) {
            let count = 0;
            for (let j = 0; j < players.length; j++) {
                if (
                    players[i].summonerName === players[j].summonerName &&
                    !players[i].mainPlayer
                ) {
                    count++;
                    deaths = deaths + players[j].deaths;
                    assists = assists + players[j].assists;
                    kills = kills + players[j].kills;
                    players[j].win ? winCount++ : lossCount++;
                }
            }

            if (count > maxcount) {
                maxcount = count;
                if (maxcount > 1 && !players[i].mainPlayer) {
                    setMostPlayedWithList([
                        ...mostPlayedWithList,
                        {
                            ...players[i],
                            totalDeaths: deaths,
                            totalAssists: assists,
                            totalKills: kills,
                            winCount,
                            lossCount,
                        },
                    ]);
                }
            }

            deaths = 0;
            assists = 0;
            kills = 0;
            winCount = 0;
            lossCount = 0;
        }
    }, [players]);

    useEffect(() => {
        if (mostPlayedWithList.length) {
            const newPlayers = players.filter(
                (player) =>
                    player?.summonerName !==
                    mostPlayedWithList[mostPlayedWithList?.length - 1]
                        ?.summonerName
            );

            if (newPlayers[0]) {
                setPlayers(newPlayers);
            }
        }
    }, [mostPlayedWithList]);

    return (
        <div className=" bg-cardBg rounded-5px mt-[27px] ">
            <div className=" flex items-center justify-between px-[16px] pt-[10px] pb-[15px] border-b border-headBorder ">
                <h6 className=" text-white font-mazin text-[15px] leading-[19.15px] font-medium  ">
                    You often play with
                </h6>
                <div className=" w-[24px] h-[24px] flex items-center justify-center mr-[5px] ">
                    <div className=" w-[14px] h-[2px] rounded-full bg-white "></div>
                </div>
            </div>
            {/* card container  */}
            <div
                className={`  px-[6px] flex flex-col gap-y-[2px] pb-[40px] pt-[10px] `}
            >
                {mostPlayedWithList.length >= 10
                    ? mostPlayedWithList.slice(0, 10).map((player, index) => {
                          return <PlayerRow key={index} {...player} />;
                      })
                    : mostPlayedWithList.map((player, index) => {
                          return <PlayerRow key={index} {...player} />;
                      })}
            </div>
        </div>
    );
};

export default OftenPlayWith;
