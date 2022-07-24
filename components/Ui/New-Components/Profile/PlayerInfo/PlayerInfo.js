import React, { useEffect, useState } from "react";
import Profile from "../../universal/Profile/Profile";
import Image from "next/image";
import { useSelector } from "react-redux";
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
            <div
                className=" container relative z-30 laptop:flex laptop:items-end 
             laptop:pt-[67px] laptop:pb-[31px] desktop:pt-[150px]  "
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
                className={` w-full h-full absolute left-0 top-0 `}
                
            >
              {championId && <Image
                src={`/assets/new-images/Profile/championBackgrounds/champId ${championId}.png`}
                alt="cover image"
                layout="fill"
                objectFit="cover"
              /> } 
            </div>}
                
            
            {/* cover photo mask  */}
            <div className="w-full h-full absolute left-0 top-0 z-20 coverImg_mask"></div>
        </section>
    );
};

export default PlayerInfo;
