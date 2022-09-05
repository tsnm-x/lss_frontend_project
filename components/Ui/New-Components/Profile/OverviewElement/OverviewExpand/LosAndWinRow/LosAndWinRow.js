import React, { useEffect, useState } from "react";
import { SiNuxtdotjs } from "react-icons/si";
import Image from "next/image";
import ProfileImg from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";

import KiloIconRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/kilo-r.png";
import AlienRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-dragon-r.png";
import baronRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-baron-r.png";
import towerRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-tower-r.png";
import roundRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/round-r.png";
import KiloIconBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/kilo.png";
import AlienBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-dragon-r.png";
import baronBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-baron-r.png";
import towerBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-tower-r.png";
import roundBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/round.png";

const IconAndCount = (props) => {
    let setIcon = undefined;
    switch (props.type) {
        case "baron":
            setIcon = (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.987 11.023C9.987 10.8094 10.0503 10.6006 10.169 10.423C10.2877 10.2454 10.4564 10.107 10.6537 10.0252C10.851 9.94349 11.0682 9.9221 11.2777 9.96377C11.4872 10.0054 11.6796 10.1083 11.8307 10.2593C11.9817 10.4104 12.0846 10.6028 12.1262 10.8123C12.1679 11.0218 12.1465 11.239 12.0648 11.4363C11.983 11.6337 11.8446 11.8023 11.667 11.921C11.4894 12.0397 11.2806 12.103 11.067 12.103C10.7806 12.103 10.5059 11.9892 10.3033 11.7867C10.1008 11.5842 9.987 11.3095 9.987 11.023ZM7.828 8.85902C7.828 8.64542 7.89134 8.43661 8.01001 8.25901C8.12868 8.0814 8.29735 7.94298 8.4947 7.86123C8.69204 7.77949 8.90919 7.7581 9.11869 7.79977C9.32819 7.84145 9.52063 7.94431 9.67167 8.09535C9.82271 8.24639 9.92557 8.43883 9.96724 8.64832C10.0089 8.85782 9.98753 9.07498 9.90579 9.27232C9.82404 9.46966 9.68562 9.63834 9.50801 9.75701C9.33041 9.87568 9.1216 9.93902 8.908 9.93902C8.76617 9.93902 8.62573 9.91109 8.4947 9.85681C8.36367 9.80254 8.24461 9.72299 8.14432 9.6227C8.04403 9.52241 7.96448 9.40335 7.91021 9.27232C7.85593 9.14129 7.828 9.00085 7.828 8.85902ZM7.828 13.177C7.828 12.9634 7.89134 12.7546 8.01001 12.577C8.12868 12.3994 8.29735 12.261 8.4947 12.1792C8.69204 12.0975 8.90919 12.0761 9.11869 12.1178C9.32819 12.1594 9.52063 12.2623 9.67167 12.4133C9.82271 12.5644 9.92557 12.7568 9.96724 12.9663C10.0089 13.1758 9.98753 13.393 9.90579 13.5903C9.82404 13.7877 9.68562 13.9563 9.50801 14.075C9.33041 14.1937 9.1216 14.257 8.908 14.257C8.62156 14.257 8.34686 14.1432 8.14432 13.9407C7.94178 13.7382 7.828 13.4635 7.828 13.177ZM5.671 11.023C5.671 10.8094 5.73434 10.6006 5.85301 10.423C5.97168 10.2454 6.14035 10.107 6.3377 10.0252C6.53504 9.94349 6.75219 9.9221 6.96169 9.96377C7.17119 10.0054 7.36363 10.1083 7.51467 10.2593C7.66571 10.4104 7.76857 10.6028 7.81024 10.8123C7.85192 11.0218 7.83053 11.239 7.74879 11.4363C7.66704 11.6337 7.52862 11.8023 7.35101 11.921C7.17341 12.0397 6.9646 12.103 6.751 12.103C6.46456 12.103 6.18986 11.9892 5.98732 11.7867C5.78478 11.5842 5.671 11.3095 5.671 11.023ZM11.071 0.223022L13.23 4.54102L12.146 5.62302H9.987L8.907 4.54302L7.828 5.62302H5.671L4.591 4.54302L6.748 0.223022L0.270996 4.54102L2.43 8.85902L5.671 17.495L6.751 16.415H11.071L12.151 17.495L15.39 8.85902L17.549 4.54102L11.071 0.223022Z"
                        fill={props.red ? "#ff4256" : "#4d65ca"}
                    />
                </svg>
            );
            break;

        case "dragon":
            setIcon = (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.636 0.223022L6.477 4.54102L3.239 1.30302V5.62302H0L3.239 8.85902V12.098L7.557 17.498H9.716L14.034 12.098V8.85902L17.272 5.62302H14.034V1.30302L10.8 4.54102L8.636 0.223022ZM10.8 9.93902L12.959 8.85902L11.875 11.023L9.716 12.103L10.8 9.93902ZM5.4 11.023L4.318 8.85902L6.477 9.93902L7.557 12.098L5.4 11.023Z"
                        fill={props.red ? "#ff4256" : "#4d65ca"}
                    />
                </svg>
            );
            break;

        case "tower":
            setIcon = (
                <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.2189 8.04798L8.20691 16.095H4.18291L2.17191 8.04798L6.19491 12.071L10.2189 8.04798ZM6.19491 0.000976562L10.2179 4.02398L9.20991 5.03198H12.2299L6.19491 11.065L0.159912 5.02998H3.17691L2.17691 4.02398L6.19491 0.000976562ZM6.19491 2.41498L4.58591 4.02398L6.19491 5.63398L7.80491 4.02398L6.19491 2.41498Z"
                        fill={props.red ? "#ff4256" : "#4d65ca"}
                    />
                </svg>
            );

            break;
        case "gold":
            setIcon = (
                <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19 16"
                >
                    <path
                        d="M10.857.833c4.048-.306 7.5 1.655 7.686 4.344.147 1.972-1.518 3.806-4.017 4.755.08.239.13.487.147.738.2 2.688-2.91 5-6.979 5.293-4.069.293-7.485-1.55-7.686-4.238-.137-1.972 1.518-3.806 4.017-4.755a2.957 2.957 0 0 1-.147-.738c-.2-2.688 2.931-5.092 6.979-5.4v.001ZM2.001 11.344c-.179 1.265 1.877 3.047 5.587 2.741 3.71-.306 4.839-1.834 4.281-3.553l-.1.012c-.075.012-.15.018-.225.02a8.602 8.602 0 0 1-6.431-1.908 3.744 3.744 0 0 0-3.11 2.688h-.002Z"
                        fill={props.red ? "#ff4256" : "#4d65ca"}
                    />
                </svg>
            );
            break;
        case "circle":
            setIcon = (
                <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.97289 0.322998C7.34337 0.322998 5.75044 0.806207 4.39555 1.71152C3.04065 2.61683 1.98464 3.90359 1.36105 5.40907C0.737457 6.91455 0.574297 8.57114 0.8922 10.1693C1.2101 11.7676 1.99479 13.2356 3.14704 14.3879C4.29928 15.5401 5.76733 16.3248 7.36554 16.6427C8.96375 16.9606 10.6203 16.7974 12.1258 16.1738C13.6313 15.5503 14.9181 14.4942 15.8234 13.1393C16.7287 11.7844 17.2119 10.1915 17.2119 8.562C17.2119 6.37688 16.3439 4.28126 14.7987 2.73615C13.2536 1.19103 11.158 0.322998 8.97289 0.322998ZM8.97289 14.741C7.7508 14.741 6.55615 14.3786 5.54002 13.6996C4.52389 13.0207 3.73191 12.0557 3.26424 10.9266C2.79657 9.79753 2.6742 8.55514 2.91262 7.35653C3.15104 6.15793 3.73953 5.05693 4.60368 4.19279C5.46783 3.32864 6.56882 2.74014 7.76743 2.50173C8.96604 2.26331 10.2084 2.38567 11.3375 2.85335C12.4666 3.32102 13.4316 4.113 14.1105 5.12913C14.7895 6.14526 15.1519 7.33991 15.1519 8.562C15.1527 9.37366 14.9934 10.1775 14.6831 10.9275C14.3729 11.6776 13.9178 12.359 13.3439 12.933C12.7699 13.5069 12.0885 13.962 11.3384 14.2723C10.5884 14.5825 9.78455 14.7418 8.97289 14.741ZM8.97289 12.307L5.22789 8.562L8.97289 4.817L12.7179 8.562L8.97289 12.307Z"
                        fill={props.red ? "#ff4256" : "#4d65ca"}
                    />
                </svg>
            );
            break;
        default:
            setIcon = (
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.657 0.427994L16.057 0.0939941L15.669 4.43699C15.669 4.43699 6.52998 12.037 6.49398 12.067C7.05298 12.622 7.82398 13.4 8.36098 13.934C8.09198 14.201 7.88598 14.411 7.63498 14.66C7.02198 14.044 6.18198 13.212 5.53498 12.56C4.34398 13.772 3.14998 14.924 1.99698 16.098L0.000976562 14.101C1.17698 12.946 2.35198 11.731 3.53798 10.564C2.88798 9.91699 2.05598 9.07999 1.42798 8.45399C1.68798 8.19399 1.90498 7.97899 2.15398 7.72799C2.68498 8.26399 3.46798 9.03699 4.03298 9.60699"
                        fill={props.red ? "#ff4256" : "#4d65ca"}
                    />
                </svg>
            );

            break;
    }

    return (
        <div className={` flex smDesktop:items-center ${props.className}`}>
            <div className={` relative ${props.imgClassName}`}>{setIcon}</div>
            <p className=" font-sf-pro-text text-[14px] leading-[16.7px] text-white font-bold   ">
                {props.txt}
            </p>
        </div>
    );
    // return null;
};

// const Icon = (props) => {
//     return (
//         <div className={` relative ${props.className}`}>
//             <Image src={props.img} alt="icon" layout="fill" />
//         </div>
//     );
// };

const LosAndWinRow = (props) => {
    const [lostTeam, setLostTeam] = useState({});
    const [winnerTeam, setWinnerTeam] = useState({});
    const [lostTeamPlayers, setLostTeamPlayers] = useState([]);
    const [winningTeamPlayers, setWinningTeamPlayers] = useState([]);
    const [lostTeamStats, setLostTeamStats] = useState({});
    const [winningTeamStats, setWinningTeamStats] = useState({});
    const [mainPlayer, setMainPlayer] = useState({});

    const frame = props?.frames
        ? props?.frames[props?.selectedFrame]
        : undefined;

    useEffect(() => {
        if (frame) {
            // console.log(frame)
            const lastFrame =
                props.matchTimelineData.frames[
                    props.matchTimelineData.frames.length - 1
                ];
            if (lastFrame.teamId === 200) {
                setWinnerTeam(frame?.redTeam);
                setLostTeam(frame?.blueTeam);
                setLostTeamPlayers([
                    frame?.participant1,
                    frame?.participant2,
                    frame?.participant3,
                    frame?.participant4,
                    frame?.participant5,
                ]);
                setWinningTeamPlayers([
                    frame?.participant6,
                    frame?.participant7,
                    frame?.participant8,
                    frame?.participant9,
                    frame?.participant10,
                ]);
            } else {
                setLostTeam(frame?.redTeam);
                setWinnerTeam(frame?.blueTeam);
                setWinningTeamPlayers([
                    frame?.participant1,
                    frame?.participant2,
                    frame?.participant3,
                    frame?.participant4,
                    frame?.participant5,
                ]);
                setLostTeamPlayers([
                    frame?.participant6,
                    frame?.participant7,
                    frame?.participant8,
                    frame?.participant9,
                    frame?.participant10,
                ]);
            }
        }
    }, [props.selectedFrame, props.matchTimelineData, frame]);

    useEffect(() => {
        let totalDeaths = 0;
        let totalKills = 0;
        let totalAssists = 0;

        lostTeamPlayers.forEach((player) => {
            totalDeaths = totalDeaths + player?.stats?.death;
            totalKills = totalKills + player?.stats?.kill;
            totalAssists = totalAssists + player?.stats?.assist;
        });

        setLostTeamStats({
            totalDeaths,
            totalKills,
            totalAssists,
            totalGold: lostTeam?.gold,
        });
    }, [lostTeamPlayers]);

    useEffect(() => {
        let totalDeaths = 0;
        let totalKills = 0;
        let totalAssists = 0;

        winningTeamPlayers.forEach((player) => {
            totalDeaths = totalDeaths + player?.stats?.death;
            totalKills = totalKills + player?.stats?.kill;
            totalAssists = totalAssists + player?.stats?.assist;
        });

        setWinningTeamStats({
            totalDeaths,
            totalKills,
            totalAssists,
            totalGold: winnerTeam?.gold,
        });
    }, [winningTeamPlayers]);

    return (
        <div
            className=" bg-card-&-content-box h-10 flex justify-center w-[1340px] mx-auto
                                items-center mt-[3px]   
                                "
        >
            {/* loss  */}
            {lostTeam && lostTeamStats && (
                <div className=" flex justify-start items-center font-bold w-[658px] pl-[18px] ">
                    <div className=" w-[127px] ">
                        <IconAndCount
                            txt={`${
                                (lostTeamStats?.totalGold / 1000).toFixed(1)
                                    ? (lostTeamStats?.totalGold / 1000).toFixed(
                                          1
                                      )
                                    : 0
                            }k`}
                            imgClassName=" w-[18.55px] h-[15.19px] mr-[8.4px] "
                            type="gold"
                            red={true}
                        />
                    </div>
                    <div className=" flex items-center gap-x-5 w-[186px] ">
                        <IconAndCount
                            imgClassName=" w-[17.27px] h-[17.27px] mr-[6.2px] "
                            txt={`${
                                lostTeam?.Dragon?.kills
                                    ? lostTeam?.Dragon?.kills
                                    : 0
                            }`}
                            type="dragon"
                            red={true}
                        />
                        <IconAndCount
                            imgClassName=" w-[17.28px] h-[17.27px] mr-[3.92px] "
                            txt={`${
                                lostTeam?.Baron?.kills
                                    ? lostTeam?.Baron?.kills
                                    : 0
                            }`}
                            type="baron"
                            red={true}
                        />
                        <IconAndCount
                            imgClassName=" w-[17.28px] h-[17.27px] mr-[3.92px] "
                            txt={`${
                                lostTeam?.Baron?.kills
                                    ? lostTeam?.Baron?.kills
                                    : 0
                            }`}
                            type="baron"
                            red={true}
                        />
                    </div>
                    <div className=" flex items-center gap-x-5 w-[156px] ">
                        <IconAndCount
                            imgClassName=" w-[12.07px] h-[16.09px] mr-[11.25px] "
                            txt={`${
                                lostTeam?.Tower?.kills
                                    ? lostTeam?.Tower?.kills
                                    : 0
                            }`}
                            type="tower"
                            red={true}
                        />
                        <IconAndCount
                            imgClassName=" w-[16.48px] h-[16.48px] mr-[12.27px] "
                            txt={`${
                                lostTeam?.Inhibitor?.kills
                                    ? lostTeam?.Inhibitor?.kills
                                    : 0
                            }`}
                            type="circle"
                            red={true}
                        />
                    </div>
                    <div className=" w-[90px] ">
                        <IconAndCount
                            imgClassName=" w-[16.48px] h-[16.48px] mr-[12.84px] "
                            txt={`${
                                lostTeam?.Inhibitor?.kills
                                    ? lostTeam?.Inhibitor?.kills
                                    : 0
                            }`}
                            red={true}
                        />
                    </div>
                    <div className=" text-right w-[51px] ">
                        <p className=" font-sf-pro-text text-[14px] leading-[17px] font-bold text-red  ">
                            Defeat
                        </p>
                    </div>
                </div>
            )}
            {/* los and wind  */}
            {/* {props.showProfile && mainPlayer ? (
                <div className=" relative overflow-hidden rounded w-10 h-10 ">
                    <Image
                        src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${mainPlayer.profileIcon}.png`}
                        alt="Profile image"
                        layout="fill"
                    />
                </div>
            ) : (
                <div className=" flex gap-x-[27px] items-center font-sf-pro-text text-[14px] leading-[17px] font-bold  ">
                    <p className=" text-red">Defeat</p>
                    <p className=" text-blue">Victory</p>
                </div>
            )} */}

            {/* win  */}
            {winnerTeam && winningTeamStats && (
                <div className=" flex justify-end items-center w-[658px] pr-[18px] ">
                    <div className=" w-[51px] ">
                        <p className=" font-sf-pro-text text-[14px] leading-[17px] font-bold text-blue ">
                            Victory
                        </p>
                    </div>
                    <div className=" w-[90px] flex justify-end items-center ">
                        <IconAndCount
                            imgClassName=" w-[16.48px] h-[16.48px] mr-[12.84px] "
                            txt={`${
                                lostTeam?.Inhibitor?.kills
                                    ? lostTeam?.Inhibitor?.kills
                                    : 0
                            }`}
                        />
                    </div>
                    <div className=" flex items-center justify-end gap-x-5 w-[156px] ">
                        <IconAndCount
                            imgClassName=" w-[12.07px] h-[16.09px] mr-[11.25px] "
                            txt={`${
                                lostTeam?.Tower?.kills
                                    ? lostTeam?.Tower?.kills
                                    : 0
                            }`}
                            type="tower"
                        />
                        <IconAndCount
                            imgClassName=" w-[16.48px] h-[16.48px] mr-[12.27px] "
                            txt={`${
                                lostTeam?.Inhibitor?.kills
                                    ? lostTeam?.Inhibitor?.kills
                                    : 0
                            }`}
                            type="circle"
                        />
                    </div>
                    <div className=" flex items-center justify-end gap-x-5 w-[186px] ">
                        <IconAndCount
                            imgClassName=" w-[17.27px] h-[17.27px] mr-[6.2px] "
                            txt={`${
                                lostTeam?.Dragon?.kills
                                    ? lostTeam?.Dragon?.kills
                                    : 0
                            }`}
                            type="dragon"
                            red={true}
                        />
                        <IconAndCount
                            imgClassName=" w-[17.28px] h-[17.27px] mr-[3.92px] "
                            txt={`${
                                lostTeam?.Baron?.kills
                                    ? lostTeam?.Baron?.kills
                                    : 0
                            }`}
                            type="baron"
                            red={true}
                        />
                        <IconAndCount
                            imgClassName=" w-[17.28px] h-[17.27px] mr-[3.92px] "
                            txt={`${
                                lostTeam?.Baron?.kills
                                    ? lostTeam?.Baron?.kills
                                    : 0
                            }`}
                            type="baron"
                            red={true}
                        />
                    </div>
                    <div className=" w-[127px] flex items-center justify-end ">
                        <IconAndCount
                            txt={`${
                                (lostTeamStats?.totalGold / 1000).toFixed(1)
                                    ? (lostTeamStats?.totalGold / 1000).toFixed(
                                          1
                                      )
                                    : 0
                            }k`}
                            imgClassName=" w-[18.55px] h-[15.19px] mr-[8.4px] "
                            type="gold"
                        />
                    </div>
                    {/* <div className=" flex items-center gap-x-5 ">
                        <IconAndCount
                            imgClassName=" desktop:w-[20px] desktop:h-[20px] "
                            txt={`${
                                winnerTeam?.Inhibitor?.kills
                                    ? winnerTeam?.Inhibitor?.kills
                                    : 0
                            }`}
                            img={roundBlue}
                        />
                        <IconAndCount
                            imgClassName=" desktop:w-[20px] desktop:h-[20px] "
                            txt={`${
                                winnerTeam?.Tower?.kills
                                    ? winnerTeam?.Tower?.kills
                                    : 0
                            }`}
                            img={towerBlue}
                        />
                    </div>
                    <div className=" flex items-center gap-x-5 ">
                        <IconAndCount
                            imgClassName=" desktop:w-[20px] desktop:h-[20px] "
                            txt={`${
                                winnerTeam?.Baron?.kills
                                    ? winnerTeam?.Baron?.kills
                                    : 0
                            }`}
                            img={baronBlue}
                        />
                        <IconAndCount
                            imgClassName=" desktop:w-[20px] desktop:h-[20px] "
                            txt={`${
                                winnerTeam?.Baron?.kills
                                    ? winnerTeam?.Baron?.kills
                                    : 0
                            }`}
                            img={baronBlue}
                        />
                        <IconAndCount
                            imgClassName=" desktop:w-[20px] desktop:h-[20px] "
                            txt={`${
                                winnerTeam?.Dragon?.kills
                                    ? winnerTeam?.Dragon?.kills
                                    : 0
                            }`}
                            img={AlienBlue}
                        />
                    </div>
                    <div>
                        <IconAndCount
                            imgClassName=" desktop:w-[24px] desktop:h-[20px] "
                            txt={`${
                                (winningTeamStats?.totalGold / 1000).toFixed(1)
                                    ? (
                                          winningTeamStats?.totalGold / 1000
                                      ).toFixed(1)
                                    : 0
                            }k`}
                            img={KiloIconBlue}
                        />
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default LosAndWinRow;
