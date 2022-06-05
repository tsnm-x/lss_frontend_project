import React from "react";
import NowPlayingImg from "../../../../public/assets/Live/now-playing.png";
import Image from "next/image";
import NowPlayingContent from "./NowPlayingContent";

const NowPlaying = () => {
    return (
        <div className=" relative w-[370px] ">
            {/* Now playing card  */}
            <NowPlayingContent hocStyle="absolute right-0 top-0 w-[200px] px-10 py-6 rounded-[50px] " />
            {/* image  */}
            <div className=" w-40 ">
                <Image src={NowPlayingImg} alt="Playing image" />
            </div>
        </div>
    );
};

export default NowPlaying;
