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
import Link from "next/link";

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
		let maxDamageDealt = props.match?.players[0]?.totalDamageDealtToChampions;

		props.match?.players.forEach((player, index) => {
			if (index !== props.match?.players?.length - 1) {
				if (
					maxDamageDealt <= props.match?.players[index + 1]?.totalDamageDealtToChampions
				) {
					maxDamageDealt = props.match?.players[index + 1]?.totalDamageDealtToChampions;
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
                style={{ color: color? color : "#706A76" }}
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
            case 'CHALLENGER':
                RankCompGenerator("#3C8DB4", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()}`);
                break;
            case 'IRON':
                RankCompGenerator("#534B4B", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            case 'BRONZE':
                RankCompGenerator("#D09989", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            case 'SILVER':
                RankCompGenerator("#848CA3", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            case 'GOLD':
                RankCompGenerator("#CFAA69", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            case 'DIAMOND':
                RankCompGenerator("#4FADDF", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            case 'GRANDMASTER':
                RankCompGenerator("#EB3649", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()}`);
            break;
            case 'MASTER':
                RankCompGenerator("#CA70F2", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()}`);
                break;
            case 'PLATINUM':
                RankCompGenerator("#4DC7BE", `${rank?.charAt(0) + rank?.slice(1).toLowerCase()} ${rankConverter(rankSolo?.rank)}`);
                break;
            default:
                RankCompGenerator('', '');
        }
    }, [rankSolo]);

    function convertM(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
        
        return minutes
    }

    const selectStyleIcons = (id) => {
        switch(id) {
            case 8112:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/Electrocute/Electrocute.png"
            case 8124:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/Predator/Predator.png"
            case 8128:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
            case 9923:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
            case 8126:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/CheapShot/CheapShot.png"
            case 8139:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
            case 8143:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png"
            case 8136:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/ZombieWard/ZombieWard.png"
            case 8120:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/GhostPoro/GhostPoro.png"
            case 8138:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
            case 8135:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png"
            case 8134:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png"
            case 8105:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png"
            case 8106:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png"
            case 8351:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
            case 8360:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png"
            case 8369:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
            case 8306:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png"
            case 8304:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
            case 8313:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png"
            case 8321:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png"
            case 8316:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
            case 8345:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
            case 8347:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
            case 8410:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png"
            case 8352:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png" 
            case 8005:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"

            case 8008:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
            case 8021:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
            case 8010:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
            
            case 9101:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Overheal.png"
        
            case 9111:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Triumph.png"
        
            case 8009:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
        
            case 9104:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
        
            case 9105:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
        
            case 9103:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
        
            case 8014:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
        
            case 8017:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CutDown/CutDown.png"
        
            case 8299:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
            case 8437:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
        
            case 8439:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
        
            case 8465:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Guardian/Guardian.png"
        
            case 8446:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Demolish/Demolish.png"
        
            case 8463:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png"
        
            case 8401:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png"
        
            case 8429:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Conditioning/Conditioning.png"
        
            case 8444:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png"
        
            case 8473:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
        
            case 8451:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png"
        
            case 8453:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Revitalize/Revitalize.png"
        
            case 8242:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
            case 8214:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
            case 8229:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
            case 8230:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
            case 8224:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png"
            case 8226:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png"
        
            case 8275:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png"
        
            case 8210:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
        
            case 8234:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Celerity/CelerityTemp.png"
        
            case 8233:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png"
        
            case 8237:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Scorch/Scorch.png"
        
            case 8232:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png"
        
            case 8236:
                return "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png"
        }
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
                        <div
                            className=" relative w-[21px] h-[21px] rounded-full "
                        >
                            {selectStyleIcons(props?.perks?.styles[0]?.selections[0]?.perk) && <Image
                                src={selectStyleIcons(props?.perks?.styles[0]?.selections[0]?.perk)}
                                alt="rank image"
                                layout="fill"
                                className=" rounded-full "
                            />}
                        </div>
                        <div
                            className=" relative w-[21px] h-[21px] rounded-full "
                        >
                            {styleSelector(props.perks?.styles[1]?.style) && <Image
                                src={styleSelector(props.perks?.styles[1]?.style)}
                                alt="rank image"
                                layout="fill"
                                className=" rounded-full "
                            />}
                        </div>
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
                    <Link href={{
                        pathname: "/summoner/[region]/[summonerName]",
                        query: {region: router?.query?.region, summonerName: props?.summonerName}
                    }}>
                        <h1 className={`${Classes.cellTitle} capitalize cursor-pointer`}>
                            {props?.summonerName?.length >= 7? `${props?.summonerName?.slice(0,7)}...` : props?.summonerName}
                        </h1>
                    </Link>
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
                <h1 className={Classes.cellTitle}>{props?.totalDamageDealtToChampions}</h1>
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
                            width: `${getMaxDamageDealt() ?
                                ((props?.totalDamageDealtToChampions / (getMaxDamageDealt())) *
                                100)
                                : ((props?.totalDamageDealtToChampions / (1)) *
                                100)
                            }%`,
                        }}
                    ></div>
                </div>
            </div>
            <div className=" ml-2 flex flex-col justify-center ">
                <h1 className={Classes.cellTitle}>{(props?.goldEarned/ 1000).toFixed(1)}k Gold</h1>
                <h1 className={`${Classes.secTitle}`}>
                    Unspent: {Math.abs(props?.goldEarned - props?.goldSpent)}
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