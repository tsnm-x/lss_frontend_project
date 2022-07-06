import React, { useEffect, useState } from "react";
import { SiNuxtdotjs } from "react-icons/si";
import Image from "next/image";
import ProfileImg from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";

import KiloIconRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/kilo.png";
import AlienRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-dragon-r.png";
import baronRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-baron-r.png";
import towerRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-tower-r.png";
import roundRed from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/round.png";
import KiloIconBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/kilo.png";
import AlienBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-dragon-r.png";
import baronBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-baron-r.png";
import towerBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-tower-r.png";
import roundBlue from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/round.png";

const IconAndCount = (props) => {
    return (
        <div className={` flex first:mr-[10px] ${props.className}`}>
            <div className={` relative w-4 h-4 mr-3 ${props.imgClassName}`}>
                <Image src={props.img} alt="icon" layout="fill" />
            </div>
            <p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text ">
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
    const [mainPlayer, setMainPlayer] = useState({})

    useEffect(()=>{

        console.log(props.match.players[0].goldEarned);

    }, [props.match.teams])

    useEffect(()=>{
        setLostTeam(props.match.teams.filter((team) => !team.win)[0]);
        setWinnerTeam(props.match.teams.filter((team) => team.win)[0]);
        setLostTeamPlayers(props.match.players.filter((player) => !player.win));
        setWinningTeamPlayers(props.match.players.filter((player) => player.win));
        setMainPlayer(props.match.players.filter((player) => player.mainPlayer)[0])
    }, [props.match.teams])

    useEffect(()=>{
        let totalDeaths = 0;
        let totalKills = 0;
        let totalAssists = 0;
        let totalGold = 0;
        lostTeamPlayers.forEach((player) => {
            totalDeaths = totalDeaths + player.deaths;
            totalKills = totalKills + player.kills;
            totalAssists = totalAssists + player.assists;
            totalGold = totalGold + player.goldEarned
        })

        setLostTeamStats({totalDeaths, totalKills, totalAssists, totalGold});
    }, [lostTeamPlayers])

    useEffect(()=>{
        let totalDeaths = 0;
        let totalKills = 0;
        let totalAssists = 0;
        let totalGold = 0;
        winningTeamPlayers.forEach((player) => {
            totalDeaths = totalDeaths + player.deaths;
            totalKills = totalKills + player.kills;
            totalAssists = totalAssists + player.assists;
            totalGold = parseInt(totalGold) + player.goldEarned
        })

        setWinningTeamStats({totalDeaths, totalKills, totalAssists, totalGold});
    }, [winningTeamPlayers])
    return (
        <div className=" mb-[37px] bg-card-&-content-box px-[25px] h-10 flex justify-center items-center gap-x-10 ">
            {/* loss  */}
            { lostTeam && lostTeamStats &&
                (
                    <div className=" text-accent-color flex justify-between items-center w-3/6 font-bold ">
                        <div>
                            <IconAndCount txt={`${lostTeamStats.totalGold}`} img={KiloIconRed} />
                        </div>
                        <div className=" flex items-center gap-x-5 ">
                            <IconAndCount txt={`${lostTeam.objectives?.dragon?.kills}`} img={AlienRed} />
                            <IconAndCount txt={`${lostTeam.objectives?.baron?.kills}`} img={baronRed} />
                        </div>
                        <div className=" flex items-center gap-x-5 ">
                            <IconAndCount txt={`${lostTeam.objectives?.tower?.kills}`} img={towerRed} />
                            <IconAndCount txt={`${lostTeam.objectives?.inhibitor?.kills}`} img={roundRed} />
                        </div>
                        <p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
                            {lostTeamStats.totalKills}/{lostTeamStats.totalDeaths}/{lostTeamStats.totalAssists}
                        </p>
                        {/* indicator  */}
                    </div>
                )
            }
            {/* los and wind  */}
            {props.showProfile && mainPlayer ? (
                <div className=" relative overflow-hidden rounded w-10 h-10 ">
                    <Image src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${mainPlayer.profileIcon}.png`} alt="Profile image" layout="fill" />
                </div>
            ) : (
                <div className=" flex gap-x-12 items-center">
                    <p className=" font-sf-pro-text text-[14px] leading-[16px] text-accent-color font-bold  ">
                        Loss
                    </p>
                    <p className=" font-sf-pro-text text-[14px] leading-[16px] text-accent-color-2 font-bold  ">
                        Win
                    </p>
                </div>
            )}

            {/* win  */}
            { winnerTeam && winningTeamStats && 
                (
                    <div className=" text-accent-color-2 flex justify-between items-center w-3/6 font-bold ">
                        {/* indicator  */}
                        <p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
                            {winningTeamStats.totalKills}/{winningTeamStats.totalDeaths}/{winningTeamStats.totalAssists}
                        </p>
                        <div className=" flex items-center gap-x-5 ">
                            <IconAndCount txt={`${winnerTeam.objectives?.inhibitor?.kills}`} img={roundBlue} />
                            <IconAndCount txt={`${winnerTeam.objectives?.tower?.kills}`} img={towerBlue} />
                        </div>
                        <div className=" flex items-center gap-x-5 ">
                            <IconAndCount txt={`${winnerTeam.objectives?.baron?.kills}`} img={baronBlue} />
                            <IconAndCount txt={`${winnerTeam.objectives?.dragon?.kills}`} img={AlienBlue} />
                        </div>
                        <div>
                            <IconAndCount txt={`${winningTeamStats.totalGold}`} img={KiloIconBlue} />
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default LosAndWinRow;
