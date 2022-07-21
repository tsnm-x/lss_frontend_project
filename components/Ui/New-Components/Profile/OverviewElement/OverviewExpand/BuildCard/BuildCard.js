import React, { useEffect, useState } from "react";
import Image from "next/image";

const BuildCard = (props) => {
    const [mainPlayer, setMainPlayer] = useState({});

    useEffect(() => {
        let main = props?.match?.players.find((player) => {
            return player.mainPlayer == true;
        });
        setMainPlayer(main);
    }, [props.match]);

    useEffect(()=>{
        console.log(mainPlayer)
    }, [mainPlayer])

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
        <div className=" px-5 py-4 bg-[#241e2c] ">
            <h3 className=" text-accent-color font-sf-pro-text font-bold text-[15px] capitalize leading-[18px] ">
                build
            </h3>
            <div className=" flex justify-center gap-x-3 mt-5 ">
                {/* large  */}
                {[
                    mainPlayer?.item0,
                    mainPlayer?.item1,
                    mainPlayer?.item2,
                    mainPlayer?.item3,
                    mainPlayer?.item4,
                    mainPlayer?.item5
                ].map((img, index) => {
                    return (
                        <div
                            key={index}
                            className= {`w-[46px] h-[46px] rounded-full relative bg-[#2f2937]  ${
                                mythicHighlighter(img)
                                    ? "border-2 border-[#D55460]"
                                    : ""
                            } `}
                        >
                            {img ? (
                                <Image
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${img}.png`}
                                    alt="image"
                                    layout="fill"
                                    className=" rounded-full "
                                />
                            ) : null}
                        </div>
                    );
                })}
                {/* small img  */}
                {mainPlayer?.item6 && <div className=" w-[33px] h-[33px] relative rounded-full ">
                    <Image
                        src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${mainPlayer?.item6}.png`}
                        alt=" rank img"
                        layout="fill"
                        className=" rounded-full"
                    />
                </div>}
            </div>
        </div>
    );
};

export default BuildCard;
