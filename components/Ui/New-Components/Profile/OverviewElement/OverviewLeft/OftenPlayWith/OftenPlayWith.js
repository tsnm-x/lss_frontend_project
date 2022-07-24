import React, { useEffect, useState } from "react";
import Image from "next/image";
import {  useSelector } from "react-redux";

const PlayerRow = (props) => {

    useEffect(()=>{
        console.log(props.winCount + props.lossCount);
    }, [props])

    return (
        <div className=" laptop:grid laptop:grid-cols-[repeat(4,1fr)] laptop:mb-2 last:laptop:mb-0 smDesktop:grid-cols-[2fr_3fr_3fr_1.5fr] ">
            <div
                className="  laptop:relative laptop:w-[20px] laptop:h-[20px] laptop:border laptop:border-mix-white-black rounded-full
             smDesktop:w-[26px] smDesktop:h-[26px]"
            >
                <Image
                    src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${props.profileIcon}.png`}
                    alt="profile image"
                    layout="fill"
                    className="rounded-full"
                />
            </div>
            <div>
                <h6
                    className="laptop:gotham-mid-9 laptop:text-light-text laptop:italic capitalize 
                smDesktop:text-[10px] smDesktop:leading-[11px] "
                    title={props.summonerName}
                >
                    {/* {props.summonerName} */}
                    {props?.summonerName?.slice(0, 7)}
                    {props?.summonerName?.length >= 7 && "..."}
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] desktop:text-[7px] desktop:leading-[9px] ">
                    Ladder Rank: {props.ladderRank}
                </p>
            </div>
            <div>
                <h6 className=" italic laptop:gotham-mid-9 laptop:text-light-text laptop:uppercase  ">
                    <span
                        className={`${
                            props.totalDeaths ?
                            (
                                (props.totalAssists + props.totalKills) /
                                (props.totalDeaths)
                            ).toFixed(2) >= 5
                                ? "text-accent-color-2"
                                : (
                                      (props.totalAssists + props.totalKills) /
                                      (props.totalDeaths)
                                  ).toFixed(2) >= 2
                                ? "text-accent-color-4"
                                : "text-light-text"
                                : "text-accent-color-2"
                        }`}
                    >
                        {props.totalDeaths ? (
                            (props.totalAssists + props.totalKills) /
                            (props.totalDeaths)
                        ).toFixed(2) : "Perfect"}
                    </span>
                    {props.totalDeaths ? ":1" : ""} kda
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] desktop:text-[7px] desktop:leading-[9px]  ">
                    {props.totalKills}/{props.totalDeaths}/{props.totalAssists}
                </p>
            </div>
            <div className="">
                <h6
                    className={`laptop:gotham-mid-9  laptop:italic laptop:uppercase  ${
                        (props.winCount / (props.winCount + props.lossCount)) *
                            100 >=
                        50
                            ? "laptop:text-accent-color-2"
                            : " laptop:text-nav-btn"
                    }`}
                >
                    {(
                        (props.winCount / (props.winCount + props.lossCount)) *
                        100
                    ).toFixed(0)}
                    %
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] desktop:text-[7px] desktop:leading-[9px] ">
                    {props.winCount + props.lossCount} games
                </p>
            </div>
        </div>
    );
};

const OftenPlayWith = () => {
    const matches = useSelector((state) => state.profile.profile)
	const playersArr = []
	const [players, setPlayers] = useState([]);
	const [mostPlayedWithList, setMostPlayedWithList] = useState([])
	
	useEffect(()=>{
        setMostPlayedWithList([]);
		matches?.forEach((match)=>{
			const mainPlayer = match.players.find((player) => player.mainPlayer);
            mainPlayer.win? playersArr.push(...match.players.filter((player) => player.win && !player.mainPlayer))
            : playersArr.push(...match.players.filter((player) => !player.win && !player.mainPlayer))
			
		});

		setPlayers(playersArr);
	}, [matches]);


	useEffect(()=>{

		let maxcount = 0;
		let deaths = 0;
		let assists = 0;
		let kills = 0;
		let winCount = 0;
		let lossCount = 0;

		for (let i = 0; i < players.length; i++) {
			let count = 0;
			for (let j = 0; j < players.length; j++) {

				if ((players[i].summonerName === players[j].summonerName) && !players[i].mainPlayer){
					count++;
					deaths = deaths + players[j].deaths;
					assists = assists + players[j].assists;
					kills = kills + players[j].kills;
					players[j].win? winCount++ : lossCount++;
					
				}
			}

			if (count > maxcount) {
				maxcount = count;
				if(maxcount > 1 && !players[i].mainPlayer){
                    setMostPlayedWithList([...mostPlayedWithList,{ ...players[i], totalDeaths: deaths, totalAssists: assists, totalKills: kills, winCount, lossCount}]);
                }
			}

			deaths = 0;
			assists = 0;
			kills = 0;
			winCount = 0;
			lossCount = 0;


		}
	}, [players]);

	useEffect(()=>{

		if(mostPlayedWithList.length){
            const newPlayers = players.filter((player)=> player?.summonerName !== mostPlayedWithList[mostPlayedWithList?.length-1]?.summonerName);

            if(newPlayers[0]){
                setPlayers(newPlayers);
            }
        }

	}, [mostPlayedWithList])

    return (
        <div
            className=" px-[13px] py-[17px] rounded-5px bg-card-&-content-box laptop:mt-[10px]
         smDesktop:mt-[50px] smDesktop:py-[22px] smDesktop:px-4  "
        >
            <h6
                className="font-sf-pro-text text-[11px] font-medium leading-[13px] text-grayed-text 
             smDesktop:text-[14px]  "
            >
                You often play with
            </h6>
            {/* card container  */}
            <div className="laptop:mt-[13px] smDesktop:mt-[17px] ">
                {mostPlayedWithList.length >= 10
                    ? mostPlayedWithList.slice(0, 10).map((player, index) => {
                          return <PlayerRow key={index} {...player} />;
                      })
                    : mostPlayedWithList.map((player, index) => {
                          return <PlayerRow key={index} {...player} />;
                      })}
            </div>
        </div>
    );
};

export default OftenPlayWith;
