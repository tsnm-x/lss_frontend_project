import React, { useEffect, useState } from "react";
import ProfileImage from "../../../../public/assets/season most played champs/leeSin.png";

import { HiArrowDown } from "react-icons/hi";
import ProfileCardWrapHoc from "../../../HOC/ProfileCardWrapHoc";
import useHttp from "../../../../hook/useHttp";

import PlayerCard from "./PlayerCard";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../../../../store/profile";
import Loader from "../../../shared/loader/Loader";

const PlayerCards = (props) => {
	const [start, setStart] = useState(10);
	const [update, setUpdate] = useState(true);
	const matches = useSelector((state) => state.profile.profile);
	const region = useSelector((state) => state.profile.region);
	const summonerName = useSelector((state) => state.profile.summonerName);
	const dispatch = useDispatch();
	const { hasError, sendRequest } = useHttp();
	const loader = useSelector((state) => state.loader.loader);
	function requestHandler(res) {
		if (res?.status === 200) {
			dispatch(
				profileAction.setMoreMatches({
					profile: res.data.matches,
				})
			);
			setUpdate(!update);
		}
	}
	const getMoreMatches = () => {
		if (start === 100) {
			return;
		}
		sendRequest(
			{
				url: "/summonerByName",
				method: "POST",
				body: { region, summonerName, start },
			},
			requestHandler
		);
		setStart(start + 10);
	};

	function convertHMS(value) {
		const sec = parseInt(value, 10); // convert value to number if it's string
		let hours = Math.floor(sec / 3600); // get hours
		let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
		let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
		// add 0 if value < 10; Example: 2 => 02
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		return minutes + ":" + seconds; // Return is MM : SS
	}

	function getGameStart(gameStartInitialDate) {
		let gameStartDate = new Date(gameStartInitialDate);

		const diffTime = Math.abs(Date.now() - gameStartDate);
		// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

		let gameStart;
		if (diffHours >= 24) {
			gameStart = `${(diffHours / 24).toFixed(0)} Days Ago`;
		} else if (diffHours < 24) {
			gameStart = `${diffHours.toFixed(0)} Hours Ago`;
		} else {
			gameStart = "Unmeasurable";
		}
		return gameStart;
	}

	const selectGameType = (queueId) => {
		switch (queueId) {
			case 420:
				return "ranked solo";
			case 440:
				return "ranked flex";
			default:
				return "normals";
		}
	};

	let sortedMatches = [...matches];

	sortedMatches?.sort(function (x, y) {
		return y.gameStartTimestamp - x.gameStartTimestamp;
	});

	return (
		<div>
			{/* lists */}
			<div className=" flex flex-col gap-y-5 ">
				{sortedMatches.map((match, index) => {
					const mainPlayer = match.players.find(
						(player) => player.mainPlayer === true
					);

					const matchType = mainPlayer?.win ? "victory" : "defeat";
					let indicatorTypeColor =
						matchType === "victory" ? "white-blue" : "red-yellow-gold";
					if (props.selectedMatchType === "all") {
						return (
							<PlayerCard
								key={index}
								color={indicatorTypeColor}
								type={matchType}
								mainPlayer={mainPlayer}
								playerList={match.players}
								duration={convertHMS(match.duration)}
								gameStartDate={getGameStart(match.gameStartTimestamp)}
								queueId={match.queueId}
							/>
						);
					} else if (props.selectedMatchType === "normals") {
						if (selectGameType(match.queueId) === "normals") {
							return (
								<PlayerCard
									key={index}
									color={indicatorTypeColor}
									type={matchType}
									mainPlayer={mainPlayer}
									playerList={match.players}
									duration={convertHMS(match.duration)}
									gameStartDate={getGameStart(match.gameStartTimestamp)}
									queueId={match.queueId}
								/>
							);
						} else return <></>;
					} else if (props.selectedMatchType === "ranked solo") {
						if (selectGameType(match.queueId) === "ranked solo") {
							return (
								<PlayerCard
									key={index}
									color={indicatorTypeColor}
									type={matchType}
									mainPlayer={mainPlayer}
									playerList={match.players}
									duration={convertHMS(match.duration)}
									gameStartDate={getGameStart(match.gameStartTimestamp)}
									queueId={match.queueId}
								/>
							);
						} else return <></>;
					} else if (props.selectedMatchType === "ranked flex") {
						if (selectGameType(match.queueId) === "ranked flex") {
							return (
								<PlayerCard
									key={index}
									color={indicatorTypeColor}
									type={matchType}
									mainPlayer={mainPlayer}
									playerList={match.players}
									duration={convertHMS(match.duration)}
									gameStartDate={getGameStart(match.gameStartTimestamp)}
									queueId={match.queueId}
								/>
							);
						} else return <></>;
					}
				})}
			</div>
			<div className=" pt-[56px] pb-[228px] ">
				{!hasError?.msg && (
					<button
						onClick={getMoreMatches}
						className=" btn rounded-full w-12 h-12 p-0 flex justify-center items-center border-0 cursor-pointer mx-auto mt-5 hover:bg-btn-hover "
					>
						<Loader />
						{!loader && <HiArrowDown className="hover:rotate-45 text-[22px]" />}
					</button>
				)}
				{hasError?.msg && (
					<small className="flex justify-center text-white">
						{hasError.msg}
					</small>
				)}
			</div>
		</div>
	);
};

export default ProfileCardWrapHoc(PlayerCards);
