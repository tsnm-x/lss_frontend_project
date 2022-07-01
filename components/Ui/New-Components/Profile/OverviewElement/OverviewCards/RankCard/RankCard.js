import React, { useEffect, useState } from "react";
import Image from "next/image";

const RankCard = (props) => {
    const [mainPlayer, setMainPlayer] = useState({});

    useEffect(()=>{
        let main = props?.match?.players.find((player) => {
            return player.mainPlayer == true;
        })
        setMainPlayer(main)
    }, [props.match])

    return (
        <div
            className={` ${
                props.className
                    ? props.className
                    : "px-[17px] py-[27px] grid grid-cols-4 grid-rows-2 gap-3 bg-card-&-content-box border-r border-background"
            }`}
        >
            {[mainPlayer?.item0, mainPlayer?.item1, mainPlayer?.item2, mainPlayer?.item3, mainPlayer?.item4, mainPlayer?.item5].map((item, index) => {
                return (
                    <div
                        className={`relative rounded-full bg-[#2f2936] ${
                            props.imgClassName
                                ? props.imgClassName
                                : "w-[32px] h-[32px] relative rounded-full bg-[#2f2936]"
                        }`}
                        key={index}
                    >
                        {item !== 0 && (
                            <Image className="rounded-full" src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`} alt="batch image" layout="fill" />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default RankCard;
