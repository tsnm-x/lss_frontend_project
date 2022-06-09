import React, { useEffect } from "react";
import NowPlayingImg from "../../../../public/assets/Live/now-playing.png";
import Image from "next/image";
import NowPlayingContent from "./NowPlayingContent";
import { useSelector } from "react-redux";


const NowPlaying = () => {

    const matches = useSelector((state) => state.profile.profile);
	let mainPlayer = matches[0]?.players.find((player) => {
		return player.mainPlayer == true;
	});

    return (
        <div className=" relative w-[180px] ">
            {/* Now playing card  */}
            <NowPlayingContent hocStyle="absolute right-0 top-0 w-[200px] px-[24px] py-[16px] w-[100px]  " championName={mainPlayer?.championName} ingameTime={matches[0]?.duration} />
            {/* image  */}
            <div className=" relative w-[112px] h-[112px] ">
                {/* <Image src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${mainPlayer?.championName}.png`} alt="Playing image"  layout="fill" /> */}
                <Image src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${mainPlayer?.championName}.png`} alt="Playing image"  layout="fill" />
            </div>
        </div>
    );
};

export default NowPlaying;
