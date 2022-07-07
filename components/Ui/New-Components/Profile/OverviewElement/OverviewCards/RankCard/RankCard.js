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

    const mythicHighlighter = (id) => {
        switch(id){
            case 4644:
            case 6632:
            case 6691:
            case 6692:
            case 3001:
            case 6656:
            case 6662:
            case 6671:
            case 6630:
            case 3152:
            case 6673:
            case 4005:
            case 6672:
            case 6653:
            case 3190:
            case 6655:
            case 6617:
            case 4636:
            case 6693:
            case 4633:
            case 2065:
            case 6631:
            case 3068:
            case 3078:
            case 6664:
                console.log(id);
                return true;
            default:
                return false;

        }
    }

    return (
        <div
            className={` ${
                props.className
                    ? props.className
                    : "px-[17px] py-[27px] grid grid-cols-4 gap-3 content-center bg-card-&-content-box border-r border-background smDesktop:px-[18px] desktop:px-5 "
            }`}
        >
            {[mainPlayer?.item0, mainPlayer?.item1, mainPlayer?.item2, mainPlayer?.item3, mainPlayer?.item4, mainPlayer?.item5].map((item, index) => {
                return (
                    <div
                        className={`relative rounded-full bg-[#2f2936] ${mythicHighlighter(item)? "border-2 border-white": ""} ${
                            props.imgClassName
                                ? props.imgClassName
                                : "w-[32px] h-[32px] desktop:w-[40px] desktop:h-[40px] "
                        }`}
                        key={index}
                    >
                        {item !== 0 && (
                            <Image className={`rounded-full`} src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`} alt="batch image" layout="fill" />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default RankCard;
