import React, { useState } from "react";
import Classes from "./HeightExpand.module.css";
import Image from "next/image";
import SimulateComponets from "../SimulateComponets/SimulateComponets";
// items
import smallImg from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/3340.png";
import Items1 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/1028.png";
import Items2 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/1082.png";
import Items3 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/2055.png";
import Items4 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/3916.png";
import Items5 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/4633.png";

import ProfileImg from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/Sion.png";
import Rank1 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/rank.png";
import Rank2 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/rank2.png";
import RoundBatch1 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/round-batch.png";
import RoundBatch2 from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/HeightExpand/profile/round-batch2.png";
import { useEffect } from "react";
import useHttp from "../../../../../../../../hook/useHttp";
import { useRouter } from "next/router";

const Btns = () => {
    const [btns, setBtns] = useState([
        { text: "overview", active: true },
        { text: "Runes", active: false },
    ]);
    return (
        <div className=" flex justify-center py-5 ">
            {btns.map((btn, index) => {
                return (
                    <button
                        key={index}
                        className={`font-sf-pro-text font-bold text-[12px] leading-[14px] capitalize mx-[36px] ${
                            btn.active
                                ? "text-accent-color"
                                : " text-grayed-text"
                        }`}
                    >
                        {btn.text}
                    </button>
                );
            })}
        </div>
    );
};

// header bar
const HeaderBar = (props) => {
    return (
        <div className=" grid grid-cols-[4fr_2fr_2fr_4fr_2fr_2fr] py-4 bg-[#160f20] ">
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ml-[30px] ">
                <span className={` ${props.type === "Defeat" ? "text-accent-color" : "text-accent-color-2"} text-[12px] leading-[14px] `}>
                    {props.type}
                </span>{" "}
                {props.type === "Defeat" ? "(Red Team)": "(Blue Team)"}
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text text-center ">
                Creep Score
            </h1>
            <h1 className=" text-center font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                score
            </h1>
            <h1 className=" font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                items
            </h1>
            <h1 className=" text-center  font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                Damage Dealt
            </h1>
            <h1 className=" ml-2  font-sf-pro-text text-[10px] leading-[12px] font-bold capitalize text-grayed-text ">
                gold
            </h1>
        </div>
    );
};

const DataRow = (props) => {
    const [Rank, setRank] = useState();
    const [rankObj, setRankObj] = useState();
    const [rankSolo, setRankSolo] = useState();
    const [active, setActive] = useState(false);
	const { sendRequest } = useHttp();
    const router = useRouter();

    const getMaxDamageDealt = () => {
		let maxDamageDealt = props.match?.players[0]?.totalDamageDealt;

		props.match?.players.forEach((player, index) => {
			if (index !== props.match?.players?.length - 1) {
				if (
					maxDamageDealt <= props.match?.players[index + 1]?.totalDamageDealt
				) {
					maxDamageDealt = props.match?.players[index + 1]?.totalDamageDealt;
				}
			}
			return;
		});

		return maxDamageDealt;
	};

    const selectGameType = () => {
		switch (props?.match?.queueId) {
			case 420:
				return "RANKED_SOLO_5x5";
			case 440:
				return "RANKED_FLEX_SR";
			default:
				return "RANKED_SOLO_5x5";
		}
	};

    useEffect(() => {
		sendRequest(
			{
				url: "/summonerRanks",
				method: "POST",
				body: {
					region: router?.query?.region,
					summonerRiotId: props?.summonerId,
				},
			},
			(res) => {
				if (res) {
					setRankObj(res.data.ranks);
				}
			}
		);
	}, [props?.summonerName]);

    function RankCompGenerator(color, text) {
        let component = (
            <h1
                className={` capitalize ${Classes.secTitle}`}
                style={{ color: color? color : "#4DC7BE" }}
            >
                {text? text : `Level ${props?.summonerLevel}`}
            </h1>
        );
        setRank(component);
    }

    const rankConverter = (rank) => {
		switch (rank) {
			case "I":
				return 1;

			case "II":
				return 2;

			case "III":
				return 3;

			case "IV":
				return 4;
		}
	};

    const styleSelector = (id) => {
		switch (id) {
			case 8100:
				return "https://ddragon.canisback.com/img/perk-images/Styles/7200_Domination.png";
			case 8300:
				return "https://ddragon.canisback.com/img/perk-images/Styles/7203_Whimsy.png";
			case 8000:
				return "https://ddragon.canisback.com/img/perk-images/Styles/7201_Precision.png";
			case 8400:
				return "https://ddragon.canisback.com/img/perk-images/Styles/7204_Resolve.png";
			case 8200:
				return "https://ddragon.canisback.com/img/perk-images/Styles/7202_Sorcery.png";

			// todo: add image placeholder as default
			default:
				return "https://ddragon.canisback.com/img/perk-images/Styles/7203_Whimsy.png";
		}
	};

	const selectSpell = (id) => {
		switch (id) {
			case 21:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerBarrier.png";

			case 4:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerFlash.png";

			case 1:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerBoost.png";

			case 14:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerDot.png";

			case 3:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerExhaust.png";

			case 6:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerHaste.png";

			case 7:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerHeal.png";

			case 13:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerMana.png";

			case 30:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerPoroRecall.png";

			case 31:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerPoroThrow.png";

			case 11:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerSmite.png";

			case 39:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerSnowURFSnowball_Mark.png";

			case 32:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerSnowball.png";

			case 12:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerTeleport.png";

			case 54:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/Summoner_UltBookPlaceholder.png";

			case 55:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/Summoner_UltBookSmitePlaceholder.png";

			default:
				return "http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/SummonerBarrier.png";
		}
	};

    useEffect(()=>{
        setRankSolo(rankObj?.find((el) => el.queueType === "RANKED_SOLO_5x5"))
    }, [rankObj])

    useEffect(() => {
        const rank = `${rankSolo?.tier}`;
        console.log(rank);
        switch (rank) {
            case 'SILVER':
                RankCompGenerator("#858DA3", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            case 'GOLD':
                RankCompGenerator("#CFAA69", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            case 'DIAMOND':
                RankCompGenerator("#4FADDF", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            case 'GRANDMASTER':
                RankCompGenerator("#4FADDF", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
            break;
            case 'MASTER':
                RankCompGenerator("#CFAA69", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            case 'PLATINUM':
                RankCompGenerator("#4DC7BE", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            default:
                RankCompGenerator("", '');
        }
    }, [rankSolo]);

    function convertM(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
        
        return minutes
    }

    return (
        <div
            className={`grid grid-cols-[4fr_2fr_2fr_4fr_2fr_2fr] py-2 mb-1 last:mb-0 ${
                props.type === "Victory" ? "bg-[#181631]" : "bg-[#251122]"
            } `}
        >
            <div className=" flex pl-5  ">
                {/* left profile  */}
                <div className=" flex justify-between gap-x-2 mr-[20px] ">
                    {/* round  */}
                    <div>
                        {[props.perks?.styles[0]?.style, props.perks?.styles[1]?.style].map((img, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" relative w-[21px] h-[21px] rounded-full "
                                >
                                    {styleSelector(img) && <Image
                                        src={styleSelector(img)}
                                        alt="rank image"
                                        layout="fill"
                                        className=" rounded-full "
                                    />}
                                </div>
                            );
                        })}
                    </div>
                    {/* square  */}
                    <div>
                        {[props?.summoner1Id, props?.summoner2Id].map((img, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" relative w-[21px] h-[21px] rounded-[5px] "
                                >
                                    {selectSpell(img) && <Image
                                        src={selectSpell(img)}
                                        alt="rank image"
                                        layout="fill"
                                        className=" rounded-[5px] "
                                    />}
                                </div>
                            );
                        })}
                    </div>
                    {/* profile img  */}
                    <div>
                        <div className=" relative w-11 h-11 rounded-[5px] ">
                            {props?.championName && <Image
                                src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${props?.championName}.png`}
                                alt="profile img "
                                className=" rounded-[5px]"
                                layout="fill"
                            />}
                            {/* profile id  */}
                            <div className=" flex justify-center absolute -bottom-[5px] z-50 w-full ">
                                <div className={Classes.profileId}>
                                    {props?.champLevel}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div className=" flex flex-col justify-center ">
                    <h1 className={`${Classes.cellTitle} capitalize `}>
                        {props?.championName}
                    </h1>
                    {Rank}
                </div>
            </div>
            {/* cs  */}
            <div className=" flex flex-col justify-center ">
                <h1 className={` text-center ${Classes.cellTitle}`}>
                    {props?.totalMinionsKilled} cs
                </h1>
                <h1 className={` text-center ${Classes.secTitle}`}>
                {(
                    props?.totalMinionsKilled / convertM(props.match?.duration)
                )?.toFixed(1)} cs/min
                </h1>
            </div>
            {/* score  */}
            <div className=" flex flex-col justify-center ">
                <h1 className={Classes.cellTitle}>{props?.kills}/{props?.deaths}/
						{props?.assists}
                </h1>
                <h1 className={Classes.secTitle}>KDA: {props?.deaths ? (
							(props?.assists + props?.kills) /
							(props?.deaths)
						).toFixed(2) : "Perfect"}</h1>
            </div>

            <div className=" flex gap-x-[3px] items-center ">
                {[props?.item0, props?.item1, props?.item2, props?.item3, props?.item4, props?.item5].map((img, index) => {
                    return (
                        <div
                            key={index}
                            className=" relative rounded-[5px] w-[25px] h-[25px] bg-[#301d2d] "
                        >
                            {img ? (
                                <Image
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${img}.png`}
                                    alt="rank img"
                                    layout="fill"
                                    className=" rounded-[5px] "
                                />
                            ) : null}
                        </div>
                    );
                })}
                {
                    <div className=" relative w-5 h-5 rounded-[5px] ">
                        <Image
                            src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${props?.item6}.png`}
                            alt="small rank img"
                            layout="fill"
                            className=" rounded-[5px] "
                        />
                    </div>
                }
            </div>
            <div className=" flex flex-col justify-center items-center ">
                <h1 className={Classes.cellTitle}>{props?.totalDamageDealt}</h1>
                <div
                    className={`w-5/6 h-[6.5px] rounded-full bg-[#706a76] mt-[6px] `}
                    
                >
                    <div
                        className={`h-full rounded-full ${
                            props.type === "Victory"
                                ? " bg-accent-color-2"
                                : " bg-accent-color"
                        }`}
                        style={{
                            width: `${
                                (!props?.totalDamageDealt
                                    ? 50
                                    : props?.totalDamageDealt / (getMaxDamageDealt() ? getMaxDamageDealt() : 1)) *
                                100
                            }%`,
                        }}
                    ></div>
                </div>
            </div>
            <div className=" ml-2 flex flex-col justify-center ">
                <h1 className={Classes.cellTitle}>{props?.goldEarned}k</h1>
                <h1 className={`${Classes.secTitle}`}>
                    Unspent: {props?.goldEarned - props?.goldSpent}
                </h1>
            </div>
        </div>
    );
};

const ExpandDataRows = (props) => {

    return (
        <div>
            {/* header  */}
            <HeaderBar type={props.type} />
            <div className=" px-2 ">
                {props.team?.map((data, index) => {
                    return <DataRow key={index} {...data} type={props.type}  match={props.match}/>;
                })}
            </div>
        </div>
    );
};

const HeightExpand = (props) => {

    const [losingTeam, setLosingTeam] = useState([]);
	const [winningTeam, setWinningTeam] = useState([]);

    useEffect(() => {
		setLosingTeam(props.match?.players?.filter((player) => !player.win));
		setWinningTeam(props.match?.players?.filter((player) => player.win));
	}, [props.match?.players]);
    return (
        <div className=" mb-14 ">
            <Btns />
            <ExpandDataRows team={losingTeam} type={"Defeat"} match={props.match}/>
            <SimulateComponets match={props?.match}/>
            <ExpandDataRows team={winningTeam} type={"Victory"} match={props.match}/>
        </div>
    );
};

export default HeightExpand;
