import React, { useState } from "react";
import Image from "next/image";

const RewardCard = (props) => {
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

    function largestMultiKill(largestMultiKill) {
        switch (largestMultiKill) {
            case 0:
            case 1:
                return "";
            case 2:
                return "Double Kill";
            case 3:
                return "Triple Kill";
            case 4:
                return "Quadra Kill";
            case 5:
                return "Penta Kill";
        }
    }

    return (
        <div className=" bg-full-dark w-full ml-[19px] p-[6px_13px_13px_14px] rounded-8px   ">
            {/* reward  */}
            <div className=" flex gap-x-[4px] mb-[6px] ">
                {props.items.map((item, index) => {
                    if (item === 0)
                        return null;
                    return (
                        <div
                            className=" w-[15px] h-[16px] relative "
                            key={index}
                        >
                            <Image
                                className=" rounded-full "
                                src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`}
                                alt="reward item"
                                layout="fill"
                            />
                        </div>
                    );
                })}
            </div>
            {/* kill reward  */}
            <div className=" flex gap-x-[1px] relative ">
                {props.summonerSpellsId.map((spellId, index) => {
                    // console.log(selectSpell(spellId))
                    if (!spellId) {
                        return <div className=" w-[11px] h-[11px]"></div>;
                    }
                    return (
                        <div
                            className=" w-[11px] h-[11px] relative rounded-[2px] "
                            key={"reward" + index}
                        >
                            <Image
                                src={selectSpell(spellId)}
                                alt="kill reward item"
                                layout="fill"
                            />
                        </div>
                    );
                })}
                {props.largestMultiKill > 1 ? (
                    <button className=" bg-red-yellow px-3 py-[3px] rounded-[6px] font-gotham-mid text-[4px] leading-[5px] font-medium text-[#F3F4F8] absolute right-[0px] ">
                        {largestMultiKill(props.largestMultiKill)}
                    </button>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default RewardCard;
