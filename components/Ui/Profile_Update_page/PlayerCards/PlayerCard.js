import React, { useState, useReducer } from "react";
import classes from "./PlayerCards.module.css";
import ProfileImage from "../../../../public/assets/season most played champs/leeSin.png";

import { BiExpand } from "react-icons/bi";
import ProfileWithBatch from "../../ProfileWithBatch/ProfileWithBatch";
import RewardCard from "../RewardCard/RewardCard";
import ProfileCardPlayersList from "../ProfileCardPlayersList/ProfileCardPlayersList";
import PlayerRankCard from "../PlayerRankCard/PlayerRankCard";
import PlayerRankCardReverse from "../PlayerRankCard/PlayerRankCardReverse";
import Image from "next/image";
import LineGraph1 from "../../../../public/assets/graph/line-graph-1.png";
import LineGraph2 from "../../../../public/assets/graph/line-graph-2.png";
import ArchadeImg from "../../../../public/assets/graph/archade-img.png";

// bottom graph component

const GraphOneComponent = () => {
	return (
		<div className=" relative w-[800px] h-[320px] mx-auto ">
			<Image src={LineGraph1} layout="fill" alt="Line graph placeholder" />
		</div>
	);
};

const GraphTwoComponent = () => {
	return (
		<div className="relative w-[800px] h-[320px] mx-auto ">
			<Image src={LineGraph2} layout="fill" alt="Line graph placeholder" />
		</div>
	);
};

const ArchadeComponent = () => {
	return (
		<div className=" relative w-[150px] h-[205px] mx-auto ">
			<Image src={ArchadeImg} layout="fill" alt="archande image" />
		</div>
	);
};

const PlayerCards = (props) => {
	// reducer state for bottom graph component
	const initialGraphComponent = {
		component: <GraphOneComponent />,
		nextComponent: "graphTwo",
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "graphOne":
				return {
					component: <GraphOneComponent />,
					nextComponent: "graphTwo",
				};
			case "graphTwo":
				return {
					component: <GraphTwoComponent />,
					nextComponent: "archade",
				};
			case "archade":
				return {
					component: <ArchadeComponent />,
					nextComponent: "graphOne",
				};
		}
	};

	const [simulationDetails, setSimulationDetails] = useState(false);
	const [graphElement, graphDispath] = useReducer(
		reducer,
		initialGraphComponent
	);

	// other state
	const [cardDetailsExpand, setCardDetailsExpand] = useState(false);

	// onclick graph and card handler
	const expandHandler = () => {
		setCardDetailsExpand(!cardDetailsExpand);
		setSimulationDetails(false);
	};

	const simulateBtnHanlder = () => {
		!simulationDetails
			? setSimulationDetails(true)
			: graphDispath({ type: graphElement.nextComponent });
	};

	const selectGameType = () => {
		console.log(props.queueId, "queueId");
		switch (props.queueId) {
			case 76:
				return "Ultra Rapid Fire";
			case 100:
				return "5v5 ARAM";
			case 400:
				return "5v5 Draft Pick";
			case 420:
				return "5v5 Ranked Solo";
			case 430:
				return "5v5 Blind Pick";
			case 440:
				return "5v5 Ranked Flex";
			case 450:
				return "5v5 ARAM";
			case 470:
				return "3v3 Ranked Flex";
			case 900:
				return "ARURF";

			default:
				return "Normal Game";
		}
	};

	return (
		<React.Fragment>
			<div>
				<div className="relative rounded-bl-[35px]  ">
					<div className="relative flex flex-col gap-y-12 bg-full-dark rounded-[24px] ">
						{/* top section  */}
						<div className=" flex justify-between">
							{/* profile section  */}
							<div
								className={` relative grow shrink basis-0 pr-7 ${classes.card}`}
							>
								<div className={` ${props.color} ${classes.indicator}`}></div>
								<div
									className={` ml-[8px] py-4 pl-4 pr-12 pb-10  ${classes.card_content}`}
								>
									{/* left profile  */}
									<div>
										{/* small title  */}
										<div className=" flex ml-3 mb-4 ">
											<p className=" sf-7px-regular text-liquid-white capitalize ">
												{selectGameType()}
											</p>
											<p className=" sf-7px-regular capitalize text-mix-white-black-100 ml-4  ">
												{props.gameStartDate}
											</p>
										</div>
										{/* profile  */}
										<div className=" flex  gap-x-8 items-stretch ">
											{/* profile details  */}
											<div className=" w-56 ">
												<div className=" flex items-center gap-x-8 bg-full-dark pt-5 pb-4 pl-6 pr-8 rounded-3xl mb-3  ">
													{/* profile image  */}
													<ProfileWithBatch
														imgLink={props.mainPlayer?.championName}
														rune1={props.mainPlayer?.perks.styles[0].style}
														rune2={props.mainPlayer?.perks.styles[1].style}
														perks={props.mainPlayer?.perks}
													/>

													{/* date  */}
													<h2 className=" gotham-14px text-[22px] text-mix-white-black-100  ">
														<span className=" text-white-blue">
															{props.mainPlayer?.kills}
														</span>
														/
														<span className=" text-red-yellow-gold">
															{props.mainPlayer?.deaths}
														</span>
														/{props.mainPlayer?.assists}
													</h2>
												</div>
												{/* bottom status bar  */}
												<div
													className={` bg-full-dark rounded-full px-8 ${
														props.type === "victory"
															? "text-white-blue"
															: "text-red-700"
													} py-[6px] flex items-center justify-between `}
												>
													<p className=" capitalize ">{props.type}</p>
													<p className=" capitalize ">{props.duration}</p>
													<span className=" sf-7px-regular text-mix-white-black uppercase ">
														23:cs
													</span>
												</div>
											</div>
											{/* kill details  */}
											<RewardCard
												items={[
													props.mainPlayer?.item0,
													props.mainPlayer?.item1,
													props.mainPlayer?.item2,
													props.mainPlayer?.item3,
													props.mainPlayer?.item4,
													props.mainPlayer?.item5,
													props.mainPlayer?.item6,
												]}
												largestMultiKill={props.mainPlayer?.largestMultiKill}
												// killReward={[
												// 	props.mainPlayer?.item0,
												// 	props.mainPlayer?.item1,
												// ]}
												summonerSpellsId={[
													props.mainPlayer?.summoner1Id,
													props.mainPlayer?.summoner2Id,
												]}
												summonerRiotId={props.mainPlayer?.summonerRiotId}
												// still not founded this two images so is fack data
											/>
											{/* right side blank  */}
											{cardDetailsExpand && (
												<div className=" bg-full-dark rounded-3xl w-full"></div>
											)}
										</div>
									</div>
								</div>
							</div>
							{/* list section  */}
							{!cardDetailsExpand && (
								<ProfileCardPlayersList
									playerList={props.playerList}
									indicatorColor={props.color}
								/>
							)}
						</div>
						{/* player rank card  */}
						{cardDetailsExpand && (
							<div className=" grid grid-cols-2 gap-x-12 pl-6 mr-6 pb-12 max-w-[1000px] ">
								{<PlayerRankCard firstGroup={props.playerList.slice(0, 5)} />}
								{
									<PlayerRankCardReverse
										secondGroup={props.playerList.slice(5, 10)}
									/>
								}
							</div>
						)}
						{/* expand button  */}
						<button
							onClick={expandHandler}
							className={`w-5 h-5 flex justify-center items-center rounded-full absolute -bottom-2 right-16 text-black ${props.color}`}
						>
							<BiExpand className=" text-[12px] " />
						</button>
					</div>
					{/* right side indicator  */}
					<div
						className={` w-4 h-full absolute right-0 top-0 ${props.color}`}
					></div>
					{/* bottom button  */}
					{/* {cardDetailsExpand && (
                        <button
                            onClick={simulateBtnHanlder}
                            className=" px-5 py-2 rounded-xl bg-[#fc2300] text-white capitalize font-gotham-book text-[10px] absolute -bottom-[12px] left-[470px]  "
                        >
                            simulate game
                        </button>
                    )} */}
				</div>
				{/* bottom chart  */}
				{/* {simulationDetails && (
                    <div className=" mt-[70px] mb-[40px] ">
                        <div className=" relative w-[85%] mx-auto ">
                            {graphElement.component}
                        </div>
                    </div>
                )} */}
			</div>
		</React.Fragment>
	);
};

export default PlayerCards;
