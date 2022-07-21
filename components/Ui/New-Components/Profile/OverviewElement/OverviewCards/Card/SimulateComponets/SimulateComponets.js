import React, { useState } from "react";
import Image from "next/image";
import Classes from "./SimulateComponents.module.css";
// green icons
import SordB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/sord-r.png";
import BaronB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-baron-r.png";
import DragonB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-dragon-r.png";
import TowerB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/icon-tower-r.png";
import KiloB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/kilo.png";
import RoundB from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/blue/round.png";
// Red icons
import SordR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/sord-r.png";
import BaronR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-baron-r.png";
import DragonR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-dragon-r.png";
import TowerR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/icon-tower-r.png";
import KiloR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/kilo-r.png";
import RoundR from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/Icons/header/red/round-r.png";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Batch = (props) => {
    const [red, setRed] = useState(true);

    useEffect(() => {
        props.type === "victory" ? setRed(false) : setRed(true);
    }, [props.type])

    return (
        <div
            className={` w-[200px] py-[15px] px-[20px] rounded-[5px] grid
             grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-y-3 ${
                 props.type === "victory" ? "bg-[#181631]" : "bg-[#251122]"
             } `}
        >
            {/* sord  */}
            <div className=" flex ">
                <div className=" relative w-[12.5px] h-[12.5px] mr-[10px] ">
                    <Image
                        src={red ? SordR : SordB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>{props?.teamStats?.totalKills}</h6>
            </div>
            {/* tower  */}
            <div className=" flex ">
                <div className=" relative w-[9.5px] h-[12.5px] mr-[6px] ">
                    <Image
                        src={red ? TowerR : TowerB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>{props?.team?.objectives?.tower?.kills}</h6>
            </div>
            {/* round b  */}
            <div className=" flex ">
                <div className=" relative w-[12.5px] h-[12.5px] mr-[6px] ">
                    <Image
                        src={red ? RoundR : RoundB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>{props?.team?.objectives?.inhibitor?.kills}</h6>
            </div>
            {/* kilo  */}
            <div className=" flex ">
                <div className=" relative w-[14.5px] h-[11.8px] mr-[10px] ">
                    <Image
                        src={red ? KiloR : KiloB}
                        alt="Kilo icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>{(props?.teamStats?.totalGold / 1000).toFixed(1)}k</h6>
            </div>
            {/* dragon  */}
            <div className=" flex ">
                <div className=" relative w-[9.5px] h-[12.5px] mr-[6px] ">
                    <Image
                        src={red ? DragonR : DragonB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>{props?.team?.objectives?.dragon?.kills}</h6>
            </div>
            {/* barn  */}
            <div className=" flex ">
                <div className=" relative w-[12.5px] h-[12.5px] mr-[6px] ">
                    <Image
                        src={red ? BaronR : BaronB}
                        alt="sord icon"
                        layout="fill"
                    />
                </div>
                <h6 className={Classes.text}>{props?.team?.objectives?.baron?.kills}</h6>
            </div>
        </div>
    );
};

const SimulateComponets = (props) => {

    const [lostTeam, setLostTeam] = useState({});
	const [winnerTeam, setWinnerTeam] = useState({});
	const [lostTeamPlayers, setLostTeamPlayers] = useState([]);
	const [winningTeamPlayers, setWinningTeamPlayers] = useState([]);
	const [lostTeamStats, setLostTeamStats] = useState({});
	const [winningTeamStats, setWinningTeamStats] = useState({});

    useEffect(() => {
		
        setLostTeam(props.match?.teams?.filter((team) => !team.win)[0]);
        setWinnerTeam(props.match?.teams?.filter((team) => team.win)[0]);
        setLostTeamPlayers(props.match?.players?.filter((player) => !player.win));
        setWinningTeamPlayers(props.match?.players?.filter((player) => player.win));
		
	}, [props.showSimulatedGraph, props.selectedFrame, props.matchTimelineData]);

	useEffect(() => {
		let totalDeaths = 0;
		let totalKills = 0;
		let totalAssists = 0;
		let totalGold = 0;

        lostTeamPlayers.forEach((player) => {
            totalDeaths = totalDeaths + player?.deaths;
            totalKills = totalKills + player?.kills;
            totalAssists = totalAssists + player?.assists;
            totalGold = totalGold + player?.goldEarned;
        });

        setLostTeamStats({ totalDeaths, totalKills, totalAssists, totalGold });
    
	}, [lostTeamPlayers]);

	useEffect(() => {
		let totalDeaths = 0;
		let totalKills = 0;
		let totalAssists = 0;
		let totalGold = 0;
		
        winningTeamPlayers.forEach((player) => {
            totalDeaths = totalDeaths + player?.deaths;
            totalKills = totalKills + player?.kills;
            totalAssists = totalAssists + player?.assists;
            totalGold = parseInt(totalGold) + player?.goldEarned;
        });

        setWinningTeamStats({
            totalDeaths,
            totalKills,
            totalAssists,
            totalGold,
        });
		
	}, [winningTeamPlayers]);

    const router = useRouter();

    return (
        <div className=" flex justify-around items-center my-3 ">
            <Batch team={lostTeam} teamStats={lostTeamStats}/>
            {/* simulate btn  */}
            <Link href={{
                pathname: `/summoner/[region]/[summonerName]/[matchId]`,
                query: {
                    region: router.query?.region,
                    summonerName: router.query?.summonerName,
                    matchId: props.match?.matchId?.substr(router.query?.region?.length+1)
                }
            }}>
            <button className=" font-sf-pro-text text-[14px] leading-[16px] font-bold 
             capitalize px-[25px] py-[15px] rounded-[5px]
              bg-accent-color text-light-text ">
                simulate game
            </button>
            </Link>
            <Batch type={"victory"}  team={winnerTeam} teamStats={winningTeamStats}/>
        </div>
    );
};

export default SimulateComponets;
