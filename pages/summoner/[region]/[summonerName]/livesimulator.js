import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../../../components/shared/Old-Shared-Components//header/Header";
import classes from "../../../../styles/livesimulator.module.css";
import ProfileWithRank from "../../../../components/shared/ProfileWithRank/ProfileWithRank";
import LiveContentCard from "../../../../components/shared/LiveContentCard/LiveContentCard";
import { useRouter } from "next/router";

const LiveSimulator = () => {
    const router = useRouter()
    const matches = useSelector((state) => state.profile.profile);
    let mainPlayer = matches[0]?.players.find((player) => {
        return player.mainPlayer == true;
    });
	const [btnChange, setBtnChange] = useState(true);
	
	const btnDetails = [
        { text: "refresh", url: "" },
        { text: "historic games", url: {pathname: `/summoner/[region]/[summonerName]`, query: {region: router.query?.region, summonerName: router.query?.summonerName}} },
    ];
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log(matches[0]);
    }, [matches]);

    return (
        <>
            <Header />
            <main className={`${classes.main} pt-[70px] pb-10 `}>
                <ProfileWithRank 
                    className="mx-auto max-w-[735px] gap-x-0 justify-between "
					btn={btnDetails}
					summonerName={mainPlayer?.summonerName}
					profileIcon={mainPlayer?.profileIcon}
					summonerLevel={mainPlayer?.summonerLevel}
					region={router.query?.region}
				/>
            </main>
            {/* {!loaded && <LivePageLoading className="bg-white" />} */}
            {true && (
                <LiveContentCard 
					className=" bg-liquid-white-50 pb-[70px] mb-[200px]  "
					summonerName={mainPlayer?.summonerName}
					profileIcon={mainPlayer?.profileIcon}
                    players={matches[0]?.players}
				/>
            )}
        </>
    );
};

export default LiveSimulator;
