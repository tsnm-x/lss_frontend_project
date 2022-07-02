import React, { useState, useEffect } from "react";
import Image from "next/image";
import Emblem_Iron from "../../../../../../../public/assets/old-images/ranks/Emblem_Iron.png";
import Emblem_Bronze from "../../../../../../../public/assets/old-images/ranks/Emblem_Bronze.png";
import Emblem_Silver from "../../../../../../../public/assets/old-images/ranks/Emblem_Silver.png";
import Emblem_Gold from "../../../../../../../public/assets/old-images/ranks/Emblem_Gold.png";
import Emblem_Platinum from "../../../../../../../public/assets/old-images/ranks/Emblem_Platinum.png";
import Emblem_Diamond from "../../../../../../../public/assets/old-images/ranks/Emblem_Diamond.png";
import Emblem_Master from "../../../../../../../public/assets/old-images/ranks/Emblem_Master.png";
import Emblem_Grandmaster from "../../../../../../../public/assets/old-images/ranks/Emblem_Grandmaster.png";
import Emblem_Challenger from "../../../../../../../public/assets/old-images/ranks/Emblem_Challenger.png";
import SeasonBatch from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Season_2022_-_Gold.png";
import FlashBatch from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/SummonerFlash (1).png";
import TeleportBatch from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/SummonerTeleport.png";
import Jayce from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/Jayce.png";
import useHttp from "../../../../../../../hook/useHttp";

const PlayerRow = (props) => {
    const [active, setActive] = useState(false);
    const [ranks, setRanks] = useState([]);
    const {sendRequest} = useHttp();
    useEffect(() => {
        props.index == 3 ? setActive(true) : null;

        sendRequest(
            {
                url: "/summonerRanks",
                method: "POST",
                body: { region: props.region, summonerRiotId: props.player.summonerRiotId },
            },
            (res) => {
                if (res) {
                    setRanks(res.data.ranks);
                }
            }
        );
    }, []);

    const rankSolo = ranks?.find((el) => el.queueType === "RANKED_SOLO_5x5");

    const getRankbatch = (rank) =>{
        switch (rank.tier) {
            case "IRON":
                return Emblem_Iron;

            case "BRONZE":
                return Emblem_Bronze;

            case "SILVER":
                return Emblem_Silver;

            case "GOLD":
                return Emblem_Gold;

            case "PLATINUM":
                return Emblem_Platinum;

            case "DIAMOND":
                return Emblem_Diamond;

            case "MASTER":
                return Emblem_Master;

            case "GRANDMASTER":
                return Emblem_Grandmaster;

            case "CHALLENGER":
                return Emblem_Challenger;
        }
    }

    const getTierIntials = (rank) =>{
        switch (rank.tier) {
            case "IRON":
                return "IR";

            case "BRONZE":
                return "BR";

            case "SILVER":
                return "S";

            case "GOLD":
                return "G";

            case "PLATINUM":
                return "PL";

            case "DIAMOND":
                return "D";

            case "MASTER":
                return "M";

            case "GRANDMASTER":
                return "GR";

            case "CHALLENGER":
                return "CH";
        }
    }


    const rankConverter = (rank) => {
        switch (rank){
            case "I":
                return 1;

            case "II":
                return 2;

            case "III":
                return 3;

            case "IV":
                return 4;
        }
    }

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
    return (
        <div
            className={`flex justify-between w-full items-center relative mb-[10px] last:mb-0 rounded-[3px] ${
                props.reverse ? " pr-6 pl-4 " : "pr-4 pl-6 "
            } ${
                active
                    ? props.reverse
                        ? " bg-accent-color-2"
                        : "bg-accent-color "
                    : ""
            }`}
        >
            <div className={`${props.reverse ? "order-5" : "order-1"}`}>
                <h6 className=" sf-bold-12 text-light-text font-bold ">
                    {props?.player?.kills}/{props?.player?.deaths}/{props?.player?.assists}
                </h6>
                <p className=" sf-bold-6 text-light-text font-bold ">
                    kda: {(((props.player?.assists + props.player?.kills) / (props.player?.deaths? props.player?.deaths : 1)).toFixed(2))}:1
                </p>
            </div>
            {/* batches  */}
            <div className={`flex ${props.reverse ? "order-4" : "order-2"} `}>
                {[props.player.item0, props.player.item1, props.player.item2, props.player.item3, props.player.item4, props.player.item5].map((batch, index) => {
                    return (
                        <div
                            key={index}
                            className=" w-[22px] h-[22px] relative rounded-5px mr-1 last:mr-0 "
                        >
                            {batch !== 0 && <Image
                                src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${batch}.png`}
                                alt="batch image"
                                layout="fill"
                                className=" rounded-5px"
                            />}
                        </div>
                    );
                })}
            </div>
            {/* g batch  */}
            {rankSolo ? (
                <div
                    className={`flex items-center ${
                        props.reverse ? "order-3" : "order-3"
                    }`}
                >
                    <h6 className=" mr-[10px] sf-bold-15 text-[14px] leading-4 text-light-text ">
                        {getTierIntials(rankSolo)}{rankConverter(rankSolo.rank)}
                    </h6>
                    <div className=" relative w-10 h-10 ">
                        <Image
                            src={getRankbatch(rankSolo)}
                            alt="season batch"
                            layout="fill"
                        />
                    </div>
                </div>
            ) : null}

            {/* name  */}
            <h5
                className={`font-sf-pro-text text-[13px] leading-[15px] text-light-text font-bold ${
                    props.reverse ? "order-2" : "order-4"
                }`}
            >
                {props?.player?.summonerName}
            </h5>
            {/* profile image  */}
            <div className={` flex ${props.reverse ? "order-1" : "order-5"}`}>
                <div
                    className={` ${
                        props.reverse
                            ? "order-2 ml-[9px] "
                            : "order-2 mr-[9px] "
                    }`}
                >
                    <div className=" relative w-[20px] h-5">
                        <Image
                            src={selectSpell(props.player.summoner1Id)}
                            alt="flash batch"
                            layout="fill"
                        />
                    </div>
                    <div className=" relative w-[20px] h-5">
                        <Image
                            src={selectSpell(props.player.summoner2Id)}
                            alt="teleport batch"
                            layout="fill"
                        />
                    </div>
                </div>
                <div
                    className={`relative w-[40px] h-[40px] ${
                        props.reverse ? "order-1" : "order-2"
                    }`}
                >
                    {props?.player?.profileIcon && <Image
                            src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${props.player.profileIcon}.png`}
                            alt="profile Image"
                            layout="fill"
                        />}
                </div>
            </div>
            {/* indicator  */}
            <div
                className={`w-[9px] h-full rounded-[3px]  absolute top-0 ${
                    props.reverse ? "left-0" : "right-0"
                } ${
                    active
                        ? props.reverse
                            ? " bg-accent-color-2"
                            : "bg-accent-color "
                        : "bg-card-&-content-box"
                }`}
            ></div>
        </div>
    );
};

export default PlayerRow;
