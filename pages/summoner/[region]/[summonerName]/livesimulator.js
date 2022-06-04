import ProfileCard from "../../../../components/shared/profileCard/ProfileCard";
import LiveContentWrap from "../../../../components/HOC/LiveContentWrapHoc/LiveContentWrapHoc";
import LiveWhiteCardWrapHoc from "../../../../components/HOC/LiveWhiteCardWrapHoc/LiveWhiteCardWrapHoc";
import { useSelector } from "react-redux";
import { useState } from "react";
import classes from "./profileUpdate.module.css";
import Header from "../../../../components/shared/header/Header";

const LiveSimulator = () => {

    const matches = useSelector((state) => state.profile.profile);
	let mainPlayer = matches[0]?.players.find((player) => {
		return player.mainPlayer == true;
	});
    const [btnChange, setBtnChange] = useState(true);

    return (
        <>
            <Header />
            <main className={`${classes.main}`}>
				<div className="container mx-auto z-30 relative px-4 flex gap-x-32 2xl:gap-x-[250px]  ">
					<ProfileCard
                        btnState={btnChange}
						btnOne="Refresh"
						summonerName={mainPlayer?.summonerName}
						profileIcon={mainPlayer?.profileIcon}
						summonerLevel={mainPlayer?.summonerLevel}
					/>
				</div>
			</main>
            <LiveContentWrap/>
            <LiveWhiteCardWrapHoc/>
        </>
    )

}

export default LiveSimulator;