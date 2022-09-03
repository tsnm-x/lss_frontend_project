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
        <section className="relative h-[215px] ">
            {/* background image mask  */}
            <div className={`${Classess.bgImgMask}`}></div>
            {/* content container  */}
            {/* background image  */}
            <div className=" w-screen max-w-[1480px] h-[215px] absolute right-[0px] top-0 ">
                {/* cover photo  */}
                {championId && (
                    <div className={` w-full h-full absolute right-0 top-0 `}>
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

            {/* profile container  */}
            <div className=" w-full h-full absolute left-0 top-0">
                <div className=" relative z-50 h-full flex items-center mx-auto max-w-sm-container ">
                    <Profile
                        btnDetails={props?.btnDetails}
                        summonerName={props?.summonerName}
                        profileIcon={props?.profileIcon}
                        lastModified={props?.lastModified}
                        summonerLevel={props?.summonerLevel}
                        region={props?.region}
                    />
                </div>
            </div>
        </section>
    );
};

export default PlayerInfo;
