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
import useHttp from "../../../../../../../hook/useHttp";
import GbatchImg from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/g-batch.png";
import RoundBatch1 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/round-batch-1.png";
import RoundBatch2 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/round-batch-2.png";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PlayerRow = (props) => {
	const [active, setActive] = useState(false);
	const [rank, setRank] = useState([]);
	const { sendRequest } = useHttp();
	const [activeStyle, setActiveStyle] = useState(false);
	const router = useRouter();
    const items = useSelector((state) => state.items.items);
    const champions = useSelector((state) => state.champions.champions);


    const getChampion = (player) => {
        return champions[player]?.image;
    }

    const getItem = (item) => {
        if(items && item){
            return items[item]?.image
        }
    }

	const matchTimelineData = props.matchTimelineData;
	const frames = matchTimelineData?.frames;
	const matchMetaData = matchTimelineData?.metaData;
	const selectedFrame = props.selectedFrame;

	const frameDetails = frames ? frames[selectedFrame] : null;

	const LastFrame = frames ? frames[frames.length - 2] : null;

	const getMaxDamageDealtInTimeline = () => {
		if (LastFrame) {
			const participants = [
				LastFrame.participant1,
				LastFrame.participant2,
				LastFrame.participant3,
				LastFrame.participant4,
				LastFrame.participant5,
				LastFrame.participant6,
				LastFrame.participant7,
				LastFrame.participant8,
				LastFrame.participant9,
				LastFrame.participant10,
			];

			let maxDamage = participants[0]?.totalDamageDoneToChampions;

			participants.forEach((participant, index) => {
				if (index !== participants.length - 1) {
					if (maxDamage <= participants[index + 1]?.totalDamageDoneToChampions) {
						maxDamage = participants[index + 1]?.totalDamageDoneToChampions;
					}
					return;
				}
				return;
			});
			return maxDamage;
		}
		return 0;
	};

	const correctParticipant = frames
		? frames[selectedFrame][`participant${props.player.standingId}`]
		: {};

	const renderedItems = correctParticipant?.items


	function convertM(value) {
		const sec = parseInt(value); // convert value to number if it's string
		let minutes = Math.floor(sec / 60); // get minutes
		return minutes;
	}

	// useEffect(() => {
	// 	props.player.summonerId === props.selectedPlayer.summonerId ||
	// 	props.player.summonerId === props.simulatorPlayers.summonerId
	// 		? setActiveStyle(true)
	// 		: setActiveStyle(false);
	// });


	// useEffect(() => {
	// 	if (active) {
	// 		if (props.showRunes) {
	// 			props.setSelectedPlayer(props.player);
	// 		} else {
	// 			props.setSelectedPlayer({});
	// 			props.setSimulatorPlayers(props.player);
	// 		}
	// 	}
	// }, [active]);

	// useEffect(() => {
	// 	props.selectedPlayer.summonerId === props.player.summonerId
	// 		? setActive(true)
	// 		: setActive(false);
	// }, [props.selectedPlayer]);


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

	return (
        <div
            className={`  grid items-center rounded-[5px]  ${
                props.reverce
                    ? `grid-cols-[1.2fr_1fr_1fr_2fr_1.2fr] ${
                        props.simulatorPlayer.summonerName === props.player.summonerName ? "bg-[#5D7CF6]" : "bg-[#191531]"
                      } `
                    : `grid-cols-[1.2fr_2fr_1fr_1fr_1.2fr] ${
                        props.simulatorPlayer.summonerName === props.player.summonerName ? " bg-[#D55460]" : "bg-[#251122]"
                      } `
            }`}

            onClick={() => props.setSimulatorPlayer(props.player)}
        >
            {/* damage dealt  */}
            <div
                className={` ${
                    props.reverce ? "order-5" : "order-1"
                }  flex-col jutify-center`}
            >
                <h1 className=" sf-bold-14 text-white text-center  ">
                    {correctParticipant.totalDamageDoneToChampions}
                </h1>
                <div
                    className={`w-4/6 h-[6.5px] rounded-full bg-[#706a76] mt-[6px] justify-self-center mx-auto`}
                >
                    <div
                        className={`h-full rounded-full ${
                            props.reverce
                                ? " bg-accent-color-2"
                                : " bg-accent-color"
                        }`}
                        style={{
                            width: `${
                                getMaxDamageDealtInTimeline()
                                    ? (correctParticipant?.totalDamageDoneToChampions /
                                          getMaxDamageDealtInTimeline()) *
                                      100
                                    : (correctParticipant?.totalDamageDoneToChampions /
                                          1) *
                                      100
                            }%`,
                        }}
                    ></div>
                </div>
            </div>
            {/* batches  */}
            <div
                className={` flex gap-x-[3px] ${
                    props.reverce ? "order-4 justify-end " : "order-2"
                }`}
            >
                {[0, 1, 2, 3, 4, 5].map((index) => {
                    return (
                        <div
                            key={index}
                            className=" bg-[#372534] w-[25px] h-[25px] rounded-[5px] relative  "
                        >
                            {renderedItems && renderedItems[index] && getItem(renderedItems[index])?.sprite ? (
                                <div
                                    className="rounded-[5px]"
                                    style={{
                                        background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${getItem(renderedItems[index])?.sprite}') no-repeat`,
                                        width: `${getItem(renderedItems[index])?.w}px`,
                                        height: `${getItem(renderedItems[index])?.h}px`,
                                        backgroundPosition: `-${getItem(renderedItems[index])?.x}px -${getItem(renderedItems[index])?.y}px`,
                                        // backgroundSize: "contain",
                                        zoom: `0.522`
                                    }}
                                ></div>) : null}
                        </div>
                    );
                })}
            </div>
            {/* kda  */}
            <div
                className={` ${
                    props.reverce ? "order-3 text-right " : "order-3"
                }`}
            >
                <h1 className=" sf-bold-14 text-white   ">
                    {correctParticipant?.stats?.kill}/
                    {correctParticipant?.stats?.death}/
                    {correctParticipant?.stats?.assist}
                </h1>
                <h1 className=" sf-bold-10 text-grayed-text   ">
                    KDA{" "}
                    {correctParticipant?.stats?.death
                        ? (
                              (correctParticipant?.stats?.assist +
                                  correctParticipant?.stats?.kill) /
                              correctParticipant?.stats?.death
                          ).toFixed(2)
                        : "Perfect"}
                </h1>
            </div>
            {/* cs  */}
            <div
                className={` ${
                    props.reverce ? "order-2 text-right " : "order-4"
                }`}
            >
                <h1 className=" sf-bold-14 text-white   ">
                    {correctParticipant?.stats?.creepScore} cs
                </h1>
                <h1 className=" sf-bold-10 text-grayed-text   ">
                    {(
                        correctParticipant?.stats?.creepScore /
                        props.selectedFrame
                    )?.toFixed(1)}{" "}
                    cs/min
                </h1>
            </div>
            {/* profile with batch  */}
            <div
                className={` flex gap-x-2 ${
                    props.reverce ? "order-1 flex-row-reverse" : "order-5"
                }`}
            >
                {/* profile  */}
                <div className=" relative w-[45px] h-[45px] rounded-[5px]  ">
                {getChampion(props?.player?.championName) && <div
                    className="rounded-[5px]"
                    style={{
                        background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${getChampion(props?.player?.championName)?.sprite}') no-repeat`,
                        width: `${getChampion(props?.player?.championName)?.w}px`,
                        height: `${getChampion(props?.player?.championName)?.h}px`,
                        backgroundPosition: `-${getChampion(props?.player?.championName)?.x}px -${getChampion(props?.player?.championName)?.y}px`,
                        // backgroundSize: "1000% 300%",
                        zoom: `0.95`
                    }}
                ></div>} 
                    {/* batch  */}
                    <div className=" flex justify-center absolute -bottom-1 left-0 w-full ">
                        <div className=" font-sf-pro-text text-[9px] leading-[11px] font-[500]  w-[15px] h-[15px] rounded-full border border-grayed-text flex justify-center items-center text-white bg-card-border ">
                            {correctParticipant?.level}
                        </div>
                    </div>
                </div>
                {/* power  */}
                <div>
                    {[props.player?.summoner1Id, props.player?.summoner2Id].map(
                        (img, index) => {
                            return (
                                <div
                                    className=" relative w-[22px] h-[22px] rounded-[5px] "
                                    key={index}
                                >
                                    {selectSpell(img) && (
                                        <Image
                                            src={selectSpell(img)}
                                            alt=" power img"
                                            layout="fill"
                                            className=" rounded-[5px] "
                                        />
                                    )}
                                </div>
                            );
                        }
                    )}
                </div>
                {/* batch  */}
                <div>
                    <div className=" relative w-[22px] h-[22px] rounded-[5px] ">
                        {selectStyleIcons(
                            props?.player?.perks?.styles[0]?.selections[0]?.perk
                        ) && (
                            <Image
                                src={selectStyleIcons(
                                    props?.player?.perks?.styles[0]
                                        ?.selections[0]?.perk
                                )}
                                alt=" batch img"
                                layout="fill"
                                className=" rounded-[5px] "
                            />
                        )}
                    </div>
                    <div className=" relative w-[22px] h-[22px] rounded-[5px] ">
                        {styleSelector(
                            props.player?.perks?.styles[1]?.style
                        ) && (
                            <Image
                                src={styleSelector(
                                    props.player?.perks?.styles[1]?.style
                                )}
                                alt=" batch img"
                                layout="fill"
                                className=" rounded-[5px] "
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerRow;
