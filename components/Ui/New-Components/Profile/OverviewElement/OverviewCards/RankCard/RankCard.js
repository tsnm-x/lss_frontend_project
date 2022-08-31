import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import RankHover from "./RankHover";
import HoverDiscription from "../../Hover/HoverDiscription";

const RankCard = (props) => {
    const [mainPlayer, setMainPlayer] = useState({});
    const items = useSelector((state) => state.items.items);

    const getItem = (item) => {
        if (items && item) {
            return items[item]?.image;
        }
    };

    const getItemDetails = (item) => {
        if (items && item) {
            return (
                <div>
                    <h1>{items[item]?.name}</h1>
                    <p>{mythicHighlighter(item) ? "mythic" : "not mythic"}</p>
                    <small
                        dangerouslySetInnerHTML={{
                            __html: items[item]?.description,
                        }}
                    ></small>
                    <p>{items[item]?.gold?.total}G</p>
                </div>
            );
        }
    };

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
                props?.convertM(props?.match?.duration) <= 5
                    ? "bg-[#3a3242]"
                    : mainPlayer?.win
                    ? " bg-winOpacity"
                    : " bg-defeatOpacity"
            } px-[20px] py-4 border-r border-background
             `}
        >
            <h3
                className={` font-sf-pro-text font-bold text-[12px] leading-[14.5px] ${
                    props?.convertM(props?.match?.duration) <= 5
                        ? "text-yellow-50"
                        : mainPlayer?.win
                        ? "text-accent-color-2"
                        : " text-nav-btn"
                }`}
            >
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
                                className={`relative rounded-full bg-[rgba(217,217,217,0.1)]  ${
                                    props.imgClassName
                                        ? props.imgClassName
                                        : `w-[30px] h-[30px]`
                                }`}
                                key={index}
                            >
                                {item !== 0 &&
                                    getItem(item) &&
                                    getItem(item)?.sprite && (
                                        <div className="relative group">
                                            <div
                                                className={`rounded-full ${
                                                    mythicHighlighter(item)
                                                        ? props?.convertM(
                                                              props?.match
                                                                  ?.duration
                                                          ) <= 5
                                                            ? "border-2 border-[#FEFCE8]"
                                                            : mainPlayer?.win
                                                            ? "border-2 border-[#198cff]"
                                                            : "border-2 border-[#D55460]"
                                                        : ""
                                                }`}
                                                style={{
                                                    background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${
                                                        getItem(item)?.sprite
                                                    }') no-repeat`,
                                                    width: `${
                                                        getItem(item)?.w
                                                    }px`,
                                                    height: `${
                                                        getItem(item)?.h
                                                    }px`,
                                                    backgroundPosition: `-${
                                                        getItem(item)?.x
                                                    }px -${getItem(item)?.y}px`,
                                                    // backgroundSize: "contain",
                                                    zoom: `0.63`,
                                                }}
                                            ></div>
                                            {/* <RankHover
                                                item={item}
                                                index={index}
                                                imgPos={getItem(item)}
                                            /> */}
                                            {/* <div className="absolute left-1/2 transform -translate-x-1/2 border mt-2 transition-all ease-in-out duration-200 border-blue-gray w-125 text-center rounded-tiny p-2 text-2xs z-50 bg-white opacity-0 scale-y-0 group-hover:delay-1000 group-hover:opacity-100 group-hover:scale-y-100">
                                            <span>
                                                    {getItemDetails(item)}
                                                </span>
                                                <div className="absolute w-2.5 h-2.5 border-blue-gray border-t border-r transform left-1/2 -translate-1/2 bg-white" />
                                            </div> */}
                                            {/* hover style  */}

                                            <>
                                                <HoverDiscription
                                                    style={{
                                                        background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${
                                                            getItem(item)
                                                                ?.sprite
                                                        }') no-repeat`,
                                                        width: `${
                                                            getItem(item)?.w
                                                        }px`,
                                                        height: `${
                                                            getItem(item)?.h
                                                        }px`,
                                                        backgroundPosition: `-${
                                                            getItem(item)?.x
                                                        }px -${
                                                            getItem(item)?.y
                                                        }px`,
                                                        // backgroundSize: "contain",
                                                        zoom: `0.63`,
                                                    }}
                                                    items={items}
                                                    gold={
                                                        items[item].gold.total
                                                    }
                                                    name={items[item].name}
                                                    mythic={mythicHighlighter(
                                                        item
                                                    )}
                                                    dis={
                                                        items[item]?.description
                                                    }
                                                />
                                                {/* indicator  */}
                                                {/* <div
                                                    className={` transform  opacity-0 scale-y-0 group-hover:delay-1000 group-hover:opacity-100 group-hover:scale-y-100 mt-2 transition-all ease-in-out duration-200 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] w-[30px] h-[15px] bg-[#d9d9d9] border absolute left-277 top-[35px] z-20  `}
                                                ></div> */}
                                                {/* <div
                                                    className={`
                                                        w-[555px] border bg-[#241e2c] p-[17px_42px_27px_45px] absolute z-10
                                                         no-repeat -left-[260px] top-[50px] 
                                                         transform  opacity-0 scale-y-0 group-hover:delay-1000 group-hover:opacity-100 group-hover:scale-y-100 mt-2 transition-all ease-in-out duration-200
                                                          `}
                                                > */}
                                                {/* top header  */}
                                                {/* <div className=" flex items-center "> */}
                                                {/* img  */}
                                                {/* <div
                                                            className={`rounded-full ${
                                                                mythicHighlighter(
                                                                    item
                                                                )
                                                                    ? props?.convertM(
                                                                          props
                                                                              ?.match
                                                                              ?.duration
                                                                      ) <= 5
                                                                        ? "border-2 border-[#FEFCE8]"
                                                                        : mainPlayer?.win
                                                                        ? "border-2 border-[#198cff]"
                                                                        : "border-2 border-[#D55460]"
                                                                    : ""
                                                            }`}
                                                            style={{
                                                                background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${
                                                                    getItem(
                                                                        item
                                                                    )?.sprite
                                                                }') no-repeat`,
                                                                width: `${
                                                                    getItem(
                                                                        item
                                                                    )?.w
                                                                }px`,
                                                                height: `${
                                                                    getItem(
                                                                        item
                                                                    )?.h
                                                                }px`,
                                                                backgroundPosition: `-${
                                                                    getItem(
                                                                        item
                                                                    )?.x
                                                                }px -${
                                                                    getItem(
                                                                        item
                                                                    )?.y
                                                                }px`,
                                                                zoom: `0.63`,
                                                            }}
                                                        ></div> */}
                                                {/* <div className=" flex ml-3 ">
                                                            <h3 className=" font-sf-pro-text font-[700] text-[18px] leading-[22px] text-white mr-3 ">
                                                                {
                                                                    items[item]
                                                                        .name
                                                                }
                                                            </h3>
                                                            <p className=" font-sf-pro-text text-[9px] leading-[11px] font-[700] text-[#FF4256] capitalize ">
                                                                {mythicHighlighter(
                                                                    item
                                                                )
                                                                    ? "mythic"
                                                                    : null}
                                                            </p>
                                                        </div> */}
                                                {/* </div> */}
                                                {/* discription  */}
                                                {/* <div className=" hover-dis mt-3 ">
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: items[
                                                                    item
                                                                ]?.description,
                                                            }}
                                                        ></p>
                                                    </div> */}
                                                {/* <h2 className=" font-sf-pro-text text-[18px] leading-[22px] font-[700] text-[#CFB977] mt-[22px] ">
                                                        Cost:{" "}
                                                        {items[item].gold.total}
                                                        G
                                                    </h2> */}
                                                {/* </div> */}
                                            </>

                                            <div></div>
                                        </div>
                                    )}
                            </div>
                        );
                    })}
                </div>
                <div
                    className={`relative w-[25px] h-[25px] rounded-full ml-[10px]`}
                >
                    {mainPlayer?.item6 !== 0 &&
                        getItem(mainPlayer?.item6) &&
                        getItem(mainPlayer?.item6)?.sprite && (
                            <div
                                className={`rounded-full`}
                                style={{
                                    background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${
                                        getItem(mainPlayer?.item6)?.sprite
                                    }') no-repeat`,
                                    width: `${getItem(mainPlayer?.item6)?.w}px`,
                                    height: `${
                                        getItem(mainPlayer?.item6)?.h
                                    }px`,
                                    backgroundPosition: `-${
                                        getItem(mainPlayer?.item6)?.x
                                    }px -${getItem(mainPlayer?.item6)?.y}px`,
                                    // backgroundSize: "contain",
                                    zoom: `0.5`,
                                }}
                            ></div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default RankCard;
