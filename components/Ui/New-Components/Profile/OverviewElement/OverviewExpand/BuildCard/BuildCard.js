import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const BuildCard = (props) => {
    const [mainPlayer, setMainPlayer] = useState({});
    const items = useSelector((state) => state.items.items);

    const getItem = (item) => {
        if(items && item){
            return items[item]?.image
        }
    }

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
            className={`px-5 py-4 ${
                props?.convertM(props?.match?.duration) <= 5 ? "bg-yellow-900" : mainPlayer?.win ? " bg-winOpacity w-[518px] " : " bg-defeatOpacity w-[518px] "
            }`}
        >
            <h3 className={` sf-bold-12 capitalize ${
                props?.convertM(props?.match?.duration) <= 5 ? "text-yellow-50" : mainPlayer?.win
                ? "text-accent-color-2"
                : " text-nav-btn"
            }`}>
                build
            </h3>
            <div className=" flex ml-[10px] gap-x-[10px] mt-5 ">
                {/* large  */}
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
                            key={index}
                            className={`w-[50px] h-[50px] rounded-full relative bg-[#2f2937]  `}
                        >
                            {item !== 0 && getItem(item) && getItem(item)?.sprite && (<div
                                className={`rounded-full ${
                                    mythicHighlighter(item)
                                        ? props?.convertM(props?.match?.duration) <= 5 ? "border-2 border-[#FEFCE8]" :  mainPlayer?.win? "border-2 border-[#198cff]" : "border-2 border-[#D55460]"
                                        : ""
                                } `}
                                    style={{
                                        background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${getItem(item)?.sprite}') no-repeat`,
                                        width: `${getItem(item)?.w}px`,
                                        height: `${getItem(item)?.h}px`,
                                        backgroundPosition: `-${getItem(item)?.x}px -${getItem(item)?.y}px`,
                                        // backgroundSize: "contain",
                                        zoom: `1.05`
                                    }}
                                ></div>)}
                        </div>
                    );
                })}
                {/* small img  */}
                {mainPlayer?.item6 && (
                    <div className=" w-[30px] h-[30px] relative rounded-full ">
                        <Image
                            src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/item/${mainPlayer?.item6}.png`}
                            alt=" rank img"
                            layout="fill"
                            className=" rounded-full"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BuildCard;
