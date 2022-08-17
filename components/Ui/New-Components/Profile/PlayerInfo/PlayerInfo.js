import React, { useEffect, useState } from "react";
import Profile from "../../universal/Profile/Profile";
import Image from "next/image";
import { useSelector } from "react-redux";
import Classess from "./PlayerInfo.module.css";
const PlayerInfo = (props) => {
    const champion = useSelector((state) => state.champMostPlayed.champions);

    const [championId, setChampionId] = useState();

    useEffect(() => {
        if (champion) {
            if (champion[0]) {
                setChampionId(champion[0].championId);
            }
        }
    }, [champion]);

    return (
        <section className="relative">
            {/* bottom shadow  */}
            <div className={Classess.profileMask}></div>
            {/* content container  */}
            <div
                className=" container overflow-x-hidden max-w-sm-container h-[245px] flex items-center relative 
              "
            >
                <Profile
                    btnDetails={props?.btnDetails}
                    summonerName={props?.summonerName}
                    profileIcon={props?.profileIcon}
                    lastModified={props?.lastModified}
                    summonerLevel={props?.summonerLevel}
                    region={props?.region}
                />
                {/* background image  */}
                <div className=" w-screen max-w-[1536px] h-[245px] absolute left-[124px] top-0 ">
                    {/* cover photo  */}
                    {championId && (
                        <div
                            className={` w-full h-full absolute right-0 top-0 `}
                        >
                            {championId && (
                                <Image
                                    src={`/assets/new-images/Profile/championBackgrounds/champId ${championId}.png`}
                                    alt="cover image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            )}
                        </div>
                    )}
                    {/* cover photo mask  */}
                    <div className={Classess.bgImgMask}></div>
                </div>
            </div>
        </section>
    );
};

export default PlayerInfo;
