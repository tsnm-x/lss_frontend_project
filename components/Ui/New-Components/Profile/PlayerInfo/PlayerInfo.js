import React, { useEffect, useState } from "react";
import Profile from "../../universal/Profile/Profile";
import Image from "next/image";
import { useSelector } from "react-redux";
import Classess from './PlayerInfo.module.css'
const PlayerInfo = (props) => {
    const champion = useSelector((state)=> state.champMostPlayed.champions);

    const [championId, setChampionId] = useState();

    useEffect(()=>{
        if(champion){
            if(champion[0]){
                setChampionId(champion[0].championId)
            }
        }
    }, [champion])

    return (
        <section className="relative">
            {/* bottom shadow  */}
            <div className={Classess.profileMask}>

            </div>
            {/* content container  */}
            <div
                className=" container max-w-sm-container relative z-40 flex items-end 
             pt-[25px] pb-[60px] "
            >
                <Profile
                    btnDetails={props?.btnDetails}
                    summonerName={props?.summonerName}
                    profileIcon={props?.profileIcon}
                    summonerLevel={props?.summonerLevel}
                    region={props?.region}
                />
            </div>
            {/* cover photo  */}
            {championId && <div
                className={` w-[80%] h-full absolute right-0 top-0 `}
                
            >
              {championId && <Image
                src={`/assets/new-images/Profile/championBackgrounds/champId ${championId}.png`}
                alt="cover image"
                layout="fill"
                objectFit="cover"
              /> } 
            </div>}
                
            
            {/* cover photo mask  */}
            <div className={Classess.bgImgMask}></div>
        </section>
    );
};

export default PlayerInfo;
