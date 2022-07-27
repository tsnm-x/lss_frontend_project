import React, { useState, useEffect } from "react";
import Image from "next/image";
import Classes from "./RunesOverview.module.css";

// precision component
const Precision = (props) => {
    useEffect(()=>{
        console.log(props.selectedPlayer);
    }, [props.selectedPlayer])

    const styleNameSelector = (id) =>{

        switch (id) {
			case 8100:
				return "Domination";
			case 8300:
				return "Inspiration";
			case 8000:
				return "Precision";
			case 8400:
				return "Resolve";
			case 8200:
				return "Sorcery";

			// todo: add image placeholder as default
			default:
				return "Precision";
		}

    }

    const styleSelector = (id) =>{

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
				return "https://ddragon.canisback.com/img/perk-images/Styles/7201_Precision.png";
		}

    }

    const selectStyleIcons = (mainId) => {
        switch (mainId){
            case 8100:
				return {
                    firstSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/Electrocute/Electrocute.png", id: 8112},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/Predator/Predator.png", id: 8124},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png", id: 8128},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png", id: 9923}
                    ],
                    secondSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/CheapShot/CheapShot.png", id: 8126},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png", id: 8139},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png", id: 8143}
                    ],
                    thirdSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/ZombieWard/ZombieWard.png", id: 8136},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/GhostPoro/GhostPoro.png", id: 8120},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png", id: 8138}
                    ],
                    fouthSlot:[
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png", id: 8135},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png", id: 8134},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png", id: 8105},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png", id: 8106}
                    ]
                }
			case 8300:
				return {
                    firstSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png", id: 8351},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png", id: 8360},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png", id: 8369}
                    ],
                    secondSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png", id: 8306},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png", id: 8304},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png", id: 8313}
                    ],
                    thirdSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png", id: 8321},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png", id: 8316},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png", id: 8345}
                    ],
                    fouthSlot:[
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png", id: 8347},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png", id: 8410},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png", id: 8352}
                    ]
                }
			case 8000:
				return {
                    firstSlot: [
                        {
                            id: 8005,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
                        },
                        {
                            id: 8008,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png",
                        },
                        {
                            id: 8021,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png",
                        },
                        {
                            id: 8010,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Conqueror/Conqueror.png",
                            
                        }
                    ],
                    secondSlot: [
                        {
                            id: 9101,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Overheal.png",
                        },
                        {
                            id: 9111,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Triumph.png",
                        },
                        {
                            id: 8009,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png",
                        }
                    ],
                    thirdSlot: [
                        {
                            id: 9104,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png",
                        },
                        {
                            id: 9105,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png",
                        },
                        {
                            id: 9103,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png",
                        }
                    ],
                    fouthSlot: [
                        {
                            id: 8014,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png",
                        },
                        {
                            id: 8017,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CutDown/CutDown.png",
                        },
                        {
                            id: 8299,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/LastStand/LastStand.png",
                        }
                    ]
                }
			case 8400:
				return {
                    firstSlot: [
                        {
                            id: 8437,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png",
                        },
                        {
                            id: 8439,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png",
                        },
                        {
                            id: 8465,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Guardian/Guardian.png",
                        }
                    ],
                    secondSlot: [
                        {
                            id: 8446,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Demolish/Demolish.png",
                        },
                        {
                            id: 8463,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png",
                        },
                        {
                            id: 8401,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png",
                        }
                    ],
                    thirdSlot: [
                        {
                            id: 8429,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Conditioning/Conditioning.png",
                        },
                        {
                            id: 8444,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png",
                        },
                        {
                            id: 8473,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png",
                        }

                    ],
                    fouthSlot: [
                        {
                            id: 8451,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png",
                        },
                        {
                            id: 8453,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Revitalize/Revitalize.png",
                        },
                        {
                            id: 8242,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png",
                        }
                    ]
                }
			case 8200:
				return {
                    firstSlot: [
                        {
                            id: 8214,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
                        },
                        {
                            id: 8229,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
                        },
                        {
                            id: 8230,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
                        }

                    ],
                    secondSlot: [
                        {
                            id: 8224,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png",
                        },
                        {
                            id: 8226,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png",
                        },
                        {
                            id: 8275,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png",
                        }
                    ],
                    thirdSlot: [
                        {
                            id: 8210,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png",
                        },
                        {
                            id: 8234,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Celerity/CelerityTemp.png",
                        },
                        {
                            id: 8233,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png",
                        }
                    ],
                    fouthSlot: [
                        {
                            id: 8237,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Scorch/Scorch.png",
                        },
                        {
                            id: 8232,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png",
                        },
                        {
                            id: 8236,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png",
                        }
                    ]
                }
                default:
                    return {
                        firstSlot: [
                            {
                                id: 8005,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
                            },
                            {
                                id: 8008,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png",
                            },
                            {
                                id: 8021,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png",
                            },
                            {
                                id: 8010,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Conqueror/Conqueror.png",
                                
                            }
                        ],
                        secondSlot: [
                            {
                                id: 9101,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Overheal.png",
                            },
                            {
                                id: 9111,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Triumph.png",
                            },
                            {
                                id: 8009,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png",
                            }
                        ],
                        thirdSlot: [
                            {
                                id: 9104,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png",
                            },
                            {
                                id: 9105,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png",
                            },
                            {
                                id: 9103,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png",
                            }
                        ],
                        fouthSlot: [
                            {
                                id: 8014,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png",
                            },
                            {
                                id: 8017,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CutDown/CutDown.png",
                            },
                            {
                                id: 8299,
                                image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/LastStand/LastStand.png",
                            }
                        ]
                    }
        }
    }

    const checkIconOpacity = (iconId) =>{
        if(props?.selectedPlayer?.perks?.styles[0]?.selections){
            if(props?.selectedPlayer?.perks?.styles[0]?.selections.find((icon) => icon.perk === iconId)) return true
        }

        return false
    }

    const selectClass = (id) => {
        switch (id) {
			case 8100:
				return `${Classes.DominationWrap}`
			case 8300:
				return `${Classes.InspirationWrap}`
			case 8000:
				return `${Classes.PrecisionWrap}`;
			case 8400:
				return `${Classes.ResolveWrap}`
			case 8200:
				return `${Classes.SorceryWrap}`

			// todo: add image placeholder as default
			default:
				return `${Classes.PrecisionWrap}`;
		}
    }

    return (
        <div
            className={`${Classes.PrecisionWrap} h-full p-[22px] rounded-5px desktop:pt-[32px] `}
            
        >
            <h1 className=" sf-bold-11 text-light-text capitalize text-center desktop:text-base">
                {styleNameSelector(props?.selectedPlayer?.perks?.styles[0]?.style)}
            </h1>
            {/* batches  */}
            <div className=" mt-10 flex flex-col items-center desktop:mt-[60px] ">
                <div className=" relative w-8 h-8 rounded-full border border-[#201929] smDesktop:w-[34px] smDesktop:h-[34px]
                    desktop:w-[43px] desktop:h-[43px]  ">
                    <Image
                        src={styleSelector(props?.selectedPlayer?.perks?.styles[0]?.style)}
                        alt="precision parent icon"
                        layout="fill"
                    />
                </div>
                {/* options  */}
                <div className=" flex mt-3 ">
                    {selectStyleIcons(props?.selectedPlayer?.perks?.styles[0]?.style).firstSlot.map((option, index) => {
                        return (
                            <div
                                className={` relative w-8 h-8 rounded-full mr-1 last:mr-0 
                                smDesktop:w-[35px] smDesktop:h-[35px] desktop:w-[43px] desktop:mr-[6px]
                                desktop:h-[43px] ${
                                    checkIconOpacity(option.id)
                                        ? "border border-nav-btn "
                                        :  "opacity-30"
                                }`}
                                key={index}
                            >
                                <Image
                                    src={option.image}
                                    alt="batch icon"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                </div>
                {/* all the batches  */}
                <div className=" grid grid-cols-3 grid-rows-3 gap-3 mt-3 desktop:gap-4 ">
                    {selectStyleIcons(props?.selectedPlayer?.perks?.styles[0]?.style).secondSlot.map((batch, index) => {
                        return (
                            <div
                                className={`relative w-7 h-7 rounded-full smDesktop:w-[30px] smDesktop:h-[30px] desktop:w-[35px] desktop:h-[35px] ${
                                    checkIconOpacity(batch.id)
                                        ? "border border-nav-btn"
                                        : " opacity-30"
                                }`}
                                key={index}
                            >
                                <Image
                                    src={batch.image}
                                    alt="batch image"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                    {selectStyleIcons(props?.selectedPlayer?.perks?.styles[0]?.style).thirdSlot.map((batch, index) => {
                        return (
                            <div
                                className={`relative w-7 h-7 rounded-full smDesktop:w-[30px] smDesktop:h-[30px] desktop:w-[35px] desktop:h-[35px] ${
                                    checkIconOpacity(batch.id)
                                        ? "border border-nav-btn"
                                        : " opacity-30"
                                }`}
                                key={index}
                            >
                                <Image
                                    src={batch.image}
                                    alt="batch image"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                    {selectStyleIcons(props?.selectedPlayer?.perks?.styles[0]?.style)?.fouthSlot && selectStyleIcons(props?.selectedPlayer?.perks?.styles[0]?.style)?.fouthSlot?.map((batch, index) => {
                        return (
                            <div
                                className={`relative w-7 h-7 rounded-full smDesktop:w-[30px] smDesktop:h-[30px] desktop:w-[35px] desktop:h-[35px] ${
                                    checkIconOpacity(batch.id)
                                        ? "border border-nav-btn"
                                        : " opacity-30"
                                }`}
                                key={index}
                            >
                                <Image
                                    src={batch.image}
                                    alt="batch image"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const Inspiration = (props) => {
    const styleNameSelector = (id) =>{

        switch (id) {
			case 8100:
				return "Domination";
			case 8300:
				return "Inspiration";
			case 8000:
				return "Precision";
			case 8400:
				return "Resolve";
			case 8200:
				return "Sorcery";

			// todo: add image placeholder as default
			default:
				return "Inspiration";
		}

    }

    const styleSelector = (id) =>{

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

    }

    const selectStyleIcons = (mainId) => {
        switch (mainId){
            case 8100:
				return {
                    firstSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/Electrocute/Electrocute.png", id: 8112},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/Predator/Predator.png", id: 8124},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png", id: 8128},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png", id: 9923}
                    ],
                    secondSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/CheapShot/CheapShot.png", id: 8126},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png", id: 8139},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png", id: 8143}
                    ],
                    thirdSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/ZombieWard/ZombieWard.png", id: 8136},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/GhostPoro/GhostPoro.png", id: 8120},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png", id: 8138}
                    ],
                    fouthSlot:[
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png", id: 8135},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png", id: 8134},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png", id: 8105},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png", id: 8106}
                    ]
                }
			case 8300:
				return {
                    firstSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png", id: 8351},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png", id: 8360},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png", id: 8369}
                    ],
                    secondSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png", id: 8306},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png", id: 8304},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png", id: 8313}
                    ],
                    thirdSlot: [
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png", id: 8321},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png", id: 8316},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png", id: 8345}
                    ],
                    fouthSlot:[
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png", id: 8347},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png", id: 8410},
                        {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png", id: 8352}
                    ]
                }
			case 8000:
				return {
                    firstSlot: [
                        {
                            id: 8005,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
                        },
                        {
                            id: 8008,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png",
                        },
                        {
                            id: 8021,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png",
                        },
                        {
                            id: 8010,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Conqueror/Conqueror.png",
                            
                        }
                    ],
                    secondSlot: [
                        {
                            id: 9101,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Overheal.png",
                        },
                        {
                            id: 9111,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/Triumph.png",
                        },
                        {
                            id: 8009,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png",
                        }
                    ],
                    thirdSlot: [
                        {
                            id: 9104,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png",
                        },
                        {
                            id: 9105,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png",
                        },
                        {
                            id: 9103,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png",
                        }
                    ],
                    fouthSlot: [
                        {
                            id: 8014,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png",
                        },
                        {
                            id: 8017,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Precision/CutDown/CutDown.png",
                        },
                        {
                            id: 8299,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/LastStand/LastStand.png",
                        }
                    ]
                }
			case 8400:
				return {
                    firstSlot: [
                        {
                            id: 8437,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png",
                        },
                        {
                            id: 8439,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png",
                        },
                        {
                            id: 8465,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Guardian/Guardian.png",
                        }
                    ],
                    secondSlot: [
                        {
                            id: 8446,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Demolish/Demolish.png",
                        },
                        {
                            id: 8463,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png",
                        },
                        {
                            id: 8401,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png",
                        }
                    ],
                    thirdSlot: [
                        {
                            id: 8429,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Conditioning/Conditioning.png",
                        },
                        {
                            id: 8444,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png",
                        },
                        {
                            id: 8473,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png",
                        }

                    ],
                    fouthSlot: [
                        {
                            id: 8451,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png",
                        },
                        {
                            id: 8453,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Revitalize/Revitalize.png",
                        },
                        {
                            id: 8242,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png",
                        }
                    ]
                }
			case 8200:
				return {
                    firstSlot: [
                        {
                            id: 8224,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png",
                        },
                        {
                            id: 8226,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png",
                        },
                        {
                            id: 8275,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png",
                        }
                    ],
                    secondSlot: [
                        {
                            id: 8210,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png",
                        },
                        {
                            id: 8234,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Celerity/CelerityTemp.png",
                        },
                        {
                            id: 8233,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png",
                        }
                    ],
                    thirdSlot: [
                        {
                            id: 8237,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Scorch/Scorch.png",
                        },
                        {
                            id: 8232,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png",
                        },
                        {
                            id: 8236,
                            image: "https://ddragon.canisback.com/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png",
                        }
                    ]
                }
                default:
                    return {
                        firstSlot: [
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png", id: 8351},
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png", id: 8360},
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png", id: 8369}
                        ],
                        secondSlot: [
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png", id: 8306},
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png", id: 8304},
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png", id: 8313}
                        ],
                        thirdSlot: [
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png", id: 8321},
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png", id: 8316},
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png", id: 8345}
                        ],
                        fouthSlot:[
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png", id: 8347},
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png", id: 8410},
                            {image: "https://ddragon.canisback.com/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png", id: 8352}
                        ]
                    }
        }
    }

    const checkIconOpacity = (iconId) =>{
        if(props?.selectedPlayer?.perks?.styles[1]?.selections){
            if(props?.selectedPlayer?.perks?.styles[1]?.selections.find((icon) => icon.perk === iconId)) return true
        }

        return false
    }

    return (
        <div
            className={`${Classes.InspirationWrap} h-full p-[22px] rounded-5px desktop:pt-[32px] `}
        >
            <h1 className=" sf-bold-11 text-light-text capitalize text-center desktop:text-base">
                {styleNameSelector(props?.selectedPlayer?.perks?.styles[1]?.style)}
            </h1>
            {/* batches  */}
            <div className=" mt-[74px] flex flex-col items-center desktop:mt-[100px] ">
                <div className=" relative w-8 h-8 rounded-full border border-[#201929] 
                smDesktop:w-[35px] smDesktop:h-[35px] smDesktop:mb-3
                 desktop:w-[43px] desktop:h-[43px]
                  ">
                    <Image
                        src={styleSelector(props?.selectedPlayer?.perks?.styles[1]?.style)}
                        alt="precision parent icon"
                        layout="fill"
                    />
                </div>
                {/* all the batches  */}
                <div className=" grid grid-cols-3 gap-3 mt-3 mb-0 desktop:mt-[14px] ">
                    {selectStyleIcons(props?.selectedPlayer?.perks?.styles[1]?.style).secondSlot.map((batch, index) => {
                        return (
                            <div
                                className={`relative w-5 h-5 rounded-full smDesktop:w-[22.5px] smDesktop:h-[22.5px] desktop:w-[27px] desktop:h-[27px] ${
                                    checkIconOpacity(batch.id)
                                        ? "border border-nav-btn"
                                        : " opacity-30"
                                }`}
                                key={index}
                            >
                                <Image
                                    src={batch.image}
                                    alt="batch image"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                     {selectStyleIcons(props?.selectedPlayer?.perks?.styles[1]?.style).thirdSlot.map((batch, index) => {
                        return (
                            <div
                                className={`relative w-5 h-5 rounded-full smDesktop:w-[22.5px] smDesktop:h-[22.5px] desktop:w-[27px] desktop:h-[27px] ${
                                    checkIconOpacity(batch.id)
                                        ? "border border-nav-btn"
                                        : " opacity-30"
                                }`}
                                key={index}
                            >
                                <Image
                                    src={batch.image}
                                    alt="batch image"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                     
                </div>
                <div className={` grid ${selectStyleIcons(props?.selectedPlayer?.perks?.styles[1]?.style)?.fouthSlot && selectStyleIcons(props?.selectedPlayer?.perks?.styles[1]?.style)?.fouthSlot.length === 4 ? "grid-cols-4" : "grid-cols-3"} gap-3 mt-3`}>
                    {selectStyleIcons(props?.selectedPlayer?.perks?.styles[1]?.style)?.fouthSlot && selectStyleIcons(props?.selectedPlayer?.perks?.styles[1]?.style)?.fouthSlot?.map((batch, index) => {
                        return (
                            <div
                                className={`relative w-5 h-5 rounded-full smDesktop:w-[22.5px] smDesktop:h-[22.5px] desktop:w-[27px] desktop:h-[27px] ${
                                    checkIconOpacity(batch.id)
                                        ? "border border-nav-btn"
                                        : " opacity-30"
                                }`}
                                key={index}
                            >
                                <Image
                                    src={batch.image}
                                    alt="batch image"
                                    layout="fill"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const RunesState = (props) => {
    const offense = [
        {
            name: "StatModsAdaptiveForceIcon",
            img: "https://ddragon.canisback.com/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
            id: 5008,
        },
        {
            name: "StatModsAttackSpeedIcon",
            img: "https://ddragon.canisback.com/img/perk-images/StatMods/StatModsAttackSpeedIcon.png",
            id: 5005
        },
        {
            name: "StatModsCDRScalingIcon",
            img: "https://ddragon.canisback.com/img/perk-images/StatMods/StatModsCDRScalingIcon.png",
            id: 5007
        },
    ];

    const defense = [
        {
            name: "StatModsHealthScalingIcon",
            img: "https://ddragon.canisback.com/img/perk-images/StatMods/StatModsHealthScalingIcon.png",
            id: 5001
        },
        {
            name: "StatModsArmorIcon",
            img: "https://ddragon.canisback.com/img/perk-images/StatMods/StatModsArmorIcon.png",
            id: 5002
        },
        {
            name: "StatModsMagicResIcon_MagicResist_Fix",
            img: "https://ddragon.canisback.com/img/perk-images/StatMods/StatModsMagicResIcon.MagicResist_Fix.png",
            id: 5003
        }, 
    ]

    const flex = [
        {
            name: "StatModsAdaptiveForceIcon",
            img: "https://ddragon.canisback.com/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png",
            id: 5008,
        },
        {
            name: "StatModsArmorIcon",
            img: "https://ddragon.canisback.com/img/perk-images/StatMods/StatModsArmorIcon.png",
            id: 5002
        },
        {
            name: "StatModsMagicResIcon_MagicResist_Fix",
            img: "https://ddragon.canisback.com/img/perk-images/StatMods/StatModsMagicResIcon.MagicResist_Fix.png",
            id: 5003
        }

    ];

    const checkIconOpacity = (iconId, type) =>{
        if(props?.selectedPlayer?.perks?.statPerks){
            if(type === "defense"){
                if(props?.selectedPlayer?.perks?.statPerks.defense === iconId) return true
            } else if (type === "offense"){
                if(props?.selectedPlayer?.perks?.statPerks.offense === iconId) return true
            } else if (type === "flex"){
                if(props?.selectedPlayer?.perks?.statPerks.flex === iconId) return true
            }
        }

        return false
    }

    return (
        <div
            className={`h-full p-[14px] rounded-5px flex flex-col justify-center  ${Classes.runesState} `}
            style={{
                background: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.selectedPlayer.championName}_0.jpg') no-repeat center center`,
                backgroundSize: "cover",
            }}
        >
            {/* all the batches  */}
            <div className=" grid grid-cols-3 grid-rows-3 gap-[6px] mt-3 relative z-50 desktop:gap-[10px] ">
                {offense.map((batch, index) => {
                    return (
                        <div
                            className={`relative w-4 h-4 rounded-full smDesktop:w-5 smDesktop:h-5 desktop:w-[22px] desktop:h-[22px] ${
                                checkIconOpacity(batch.id, "offense")
                                    ? "border border-nav-btn"
                                    : " opacity-40"
                            }`}
                            key={index}
                        >
                            <Image
                                src={batch.img}
                                alt="batch image"
                                layout="fill"
                            />
                        </div>
                    );
                })}
                {flex.map((batch, index) => {
                    return (
                        <div
                            className={`relative w-4 h-4 rounded-full desktop:w-[22px] desktop:h-[22px] ${
                                checkIconOpacity(batch.id, "flex")
                                    ? "border border-nav-btn"
                                    : " opacity-40"
                            }`}
                            key={index}
                        >
                            <Image
                                src={batch.img}
                                alt="batch image"
                                layout="fill"
                            />
                        </div>
                    );
                })}
                {defense.map((batch, index) => {
                    return (
                        <div
                            className={`relative w-4 h-4 rounded-full desktop:w-[22px] desktop:h-[22px] ${
                                checkIconOpacity(batch.id, "defense")
                                    ? "border border-nav-btn"
                                    : " opacity-40"
                            }`}
                            key={index}
                        >
                            <Image
                                src={batch.img}
                                alt="batch image"
                                layout="fill"
                            />
                        </div>
                    );
                })}
            </div>
            <p
                className=" font-sf-pro-text text-[#AAA0A8] text-[6px]
             leading-[7px] capitalize font-bold text-center mt-5 desktop:text-[10px]
              desktop:leading-[12px] "
            >
                rune stats
            </p>
        </div>
    );
};

// main component
const RunesOverview = (props) => {
    return (
        <div className=" text-2xl text-whit flex-grow grid grid-cols-[49%_31%_20%] ">
            <Precision {...props}/>
            <Inspiration {...props}/>
            <RunesState {...props} />
        </div>
    );
};

export default RunesOverview;
