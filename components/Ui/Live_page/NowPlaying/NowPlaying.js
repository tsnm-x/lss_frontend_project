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
        <div className=" relative w-[370px] ">
            {/* Now playing card  */}
            <NowPlayingContent hocStyle="absolute right-0 top-0 w-[200px] px-10 py-6 rounded-[50px] " championName={mainPlayer?.championName} ingameTime={matches[0]?.duration} />
            {/* image  */}
            <div className=" w-40 ">
                <Image src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${mainPlayer?.championName}.png`} alt="Playing image" height={"100%"} width={"100%"} />
            </div>
        </div>
    );
};

export default NowPlaying;
