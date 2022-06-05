import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../../../../components/shared/profileCard/ProfileCard";
import Header from "../../../../components/shared/header/Header";
import classes from "../../../../styles/livesimulator.module.css";
import ProfileWithRank from "../../../../components/shared/ProfileWithRank/ProfileWithRank";
import LivePageLoading from "../../../../components/shared/LivePageLoading/LivePageLoading";
import LiveContentCard from "../../../../components/shared/LiveContentCard/LiveContentCard";

const LiveSimulator = () => {
    const matches = useSelector((state) => state.profile.profile);
    let mainPlayer = matches[0]?.players.find((player) => {
        return player.mainPlayer == true;
    });
	const [btnChange, setBtnChange] = useState(true);
	
	const btnDetails = [
        { text: "refresh", url: "" },
        { text: "historic games", url: "" },
    ];
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            <main className={`${classes.main} pt-[70px] pb-10 `}>
                <ProfileWithRank btn={btnDetails} />
            </main>
            {/* {!loaded && <LivePageLoading className="bg-white" />} */}
            {true && (
                <LiveContentCard className=" bg-liquid-white-50 pb-[70px] " />
            )}
        </>
    );
};

export default LiveSimulator;
