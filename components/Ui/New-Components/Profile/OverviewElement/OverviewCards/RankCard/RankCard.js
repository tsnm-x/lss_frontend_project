import React, { useEffect, useState } from "react";
import Image from "next/image";
import SmallImg from "../../../../../../../public/assets/new-images/Profile/card/five.png";

const RankCard = (props) => {
    const [mainPlayer, setMainPlayer] = useState({});

    useEffect(() => {
        let main = props?.match?.players.find((player) => {
            return player.mainPlayer == true;
        });
        setMainPlayer(main);
    }, [props.match]);

    useEffect(() => {
        console.log(mainPlayer);
    }, [mainPlayer]);

    const mythicHighlighter = (id) => {
        switch (id) {
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
            case 7002:
            case 7000:
            case 7001:
            case 7015:
            case 7017:
            case 7016:
            case 7018:
            case 7024:
            case 7014:
            case 7013:
            case 7009:
            case 7012:
            case 7011:
            case 7010:
            case 7008:
            case 7006:
            case 7007:
            case 7023:
            case 7019:
            case 7022:
            case 7020:
            case 7021:
            case 7004:
            case 7005:
            case 7003:
                return true;
            default:
                return false;
        }
    };
    return (
        <div
            className={`${
                mainPlayer?.win ? " bg-winOpacity" : " bg-defeatOpacity"
            } px-[20px] py-4 border-r border-background
             `}
        >
            <h3 className=" font-sf-pro-text font-bold text-[12px] leading-[14.5px] text-nav-btn ">
                Build
            </h3>
            <div className=" flex mt-4 ">
                <div
                    className={` ${
                        props.className
                            ? props.className
                            : `grid grid-cols-3 gap-[10px] content-center justify-center`
                    } `}
                >
                    {[
                        mainPlayer?.item0,
                        mainPlayer?.item1,
                        mainPlayer?.item2,
                        mainPlayer?.item3,
                        mainPlayer?.item4,
                        mainPlayer?.item5,
                    ].map((item, index) => {
                        return (
                            <div
                                className={`relative rounded-full bg-[#2f2936] ${
                                    mythicHighlighter(item)
                                        ? "border-2 border-[#D55460]"
                                        : ""
                                } ${
                                    props.imgClassName
                                        ? props.imgClassName
                                        : `w-[30px] h-[30px]`
                                }`}
                                key={index}
                            >
                                {item !== 0 && (
                                    <Image
                                        className={`rounded-full`}
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`}
                                        alt="batch image"
                                        layout="fill"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className={`relative w-[25px] h-[25px] rounded-full ml-[10px]`}>
                    {mainPlayer?.item6 && (
                        <Image
                            src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${mainPlayer?.item6}.png`}
                            className="rounded-full"
                            alt="small img"
                            layout="fill"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default RankCard;
