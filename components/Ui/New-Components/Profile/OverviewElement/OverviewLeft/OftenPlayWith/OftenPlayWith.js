import React, { useEffect, useState } from "react";
import Image from "next/image";
import Player1img from "../../../../../../../public/assets/new-images/Profile/Often_play_with/player-1.png";
import Player2img from "../../../../../../../public/assets/new-images/Profile/Often_play_with/player-2.png";
import Player3img from "../../../../../../../public/assets/new-images/Profile/Often_play_with/player-3.png";
import useHttp from "../../../../../../../hook/useHttp";
import { useRouter } from "next/router";
import { moreMatchesAction } from "../../../../../../../store/moreMatches";
import { useDispatch, useSelector } from "react-redux";

const PlayerRow = (props) => {

    return (
        <div className=" laptop:grid laptop:grid-cols-[repeat(4,1fr)] laptop:mb-2 last:laptop:mb-0 ">
            <div className=" laptop:relative laptop:w-[20px] laptop:h-[20px] laptop:border laptop:border-mix-white-black rounded-full ">
                <Image
                    src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${props.profileIcon}.png`}
                    alt="profile image"
                    layout="fill"
                    className="rounded-full"
                />
            </div>
            <div>
                <h6 className=" laptop:gotham-mid-9 laptop:text-light-text laptop:italic capitalize">
                    {props.summonerName}
                </h6>
            </div>
            <div>
                <h6 className=" italic laptop:gotham-mid-9 laptop:text-light-text laptop:uppercase">
                    <span
                        className={`text-accent-color-2 ${
                            (((props.totalAssists + props.totalKills) / (props.totalDeaths? props.totalDeaths : 1)).toFixed(2)) >= 5
                                ? "text-accent-color-4"
                                : (((props.totalAssists + props.totalKills) / (props.totalDeaths? props.totalDeaths : 1)).toFixed(2)) >= 2
                                ? "text-accent-color-2"
                                : "text-light-text"
                        }`}
                    >
                        {(((props.totalAssists + props.totalKills) / (props.totalDeaths? props.totalDeaths : 1)).toFixed(2))}
                    </span>
                    :1 kda
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] ">
                    {props.totalKills}/{props.totalDeaths}/{props.totalAssists}
                </p>
            </div>
            <div>
                <h6
                    className={`laptop:gotham-mid-9  laptop:italic laptop:uppercase ${
                        (props.winCount / (props.winCount + props.lossCount) * 100) >= 50
                            ? "laptop:text-accent-color-2"
                            : " laptop:text-nav-btn"
                    }`}
                >
                    { (props.winCount / (props.winCount + props.lossCount) * 100).toFixed(0)}%
                </h6>
                <p className=" laptop:sf-mid-3 laptop:text-nav-text capitalize mt-[2px] ">
                    {(props.winCount + props.lossCount)}games played
                </p>
            </div>
        </div>
    );
};

const OftenPlayWith = () => {
    const moreMatches = useSelector((state) => state.matches.matches)
    const [matches, setMatches] = useState([]);
	const playersArr = []
	const [players, setPlayers] = useState([]);
	const [mostPlayedWithList, setMostPlayedWithList] = useState([])
	const {sendRequest, hasError} = useHttp();
    const dispatch = useDispatch();
	const router = useRouter();


	const requestHandler = (res) => {
		if(!res){
			console.log("no response from server");
			return;
		}

        dispatch(
            moreMatchesAction.setMoreMatches(res.data.matches)
        )
		
		setMatches(res.data?.matches);
	}

	useEffect(()=>{
        console.log(moreMatches)
		if(!moreMatches[0]){
            sendRequest(
                {
                    url: "/seasonMostPlayed",
                    method: "GET",
                    params: { region: router.query.region, summonerName: router.query.summonerName, count: 50},
                },
                requestHandler
            );
        } else {
            setMatches(moreMatches)
        }
	}, [router])
	
	useEffect(()=>{
		matches?.forEach((match)=>{
			match.players.forEach((player) => {
				if(!player.mainPlayer){
					playersArr.push(player)
				}
			})
			
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

		const newPlayers = players.filter((player)=> player.summonerName !== mostPlayedWithList[mostPlayedWithList.length-1].summonerName);

		if(newPlayers[0]){
			setPlayers(newPlayers);
		}

	}, [mostPlayedWithList])

    return (
        <div className=" px-[13px] py-[17px] rounded-5px bg-card-&-content-box laptop:mt-[10px] ">
            <h6 className=" font-sf-pro-text text-[11px] font-medium leading-[13px] text-grayed-text ">
                You often play with
            </h6>
            {/* card container  */}
            <div className=" laptop:mt-[13px]">
                {mostPlayedWithList.length >= 10 ? mostPlayedWithList.slice(0, 10).map((player, index) => {
                    return <PlayerRow key={index} {...player} />;
                }) : mostPlayedWithList.map((player, index) => {
                    return <PlayerRow key={index} {...player} />;
                })}
            </div>
        </div>
    );
};

export default OftenPlayWith;
