import React, { useEffect, useState } from "react";
import StatusCard from "../../OverviewCards/StatusCard/StatusCard";
import BuildCard from "../BuildCard/BuildCard";
import OverviewAndRunBtns from "../OverviewAndRunBtns/OverviewAndRunBtns";
import LosAndWinRow from "../LosAndWinRow/LosAndWinRow";
import PlayerCompare from "../PlayerCompare/PlayerCompare";
import SimulateBtn from "../../../../universal/Btn/SimulateBtn/SimulateBtn";
import AnalyticsBtns from "../../SimulateGame/AnalyticsBtns/AnalyticsBtns";
import Simulation from "../../SimulateGame/Simulation/Simulation";
import HeaderOnSimulateGameMode from "../../SimulateGame/Simulation/HeaderOnSimulateGameMode/HeaderOnSimulateGameMode";
import useHttp from "../../../../../../../hook/useHttp";
import { useRouter } from "next/router";

// runes context menu
export const RunesContext = React.createContext();

const ExpandCard = (props) => {
	const [showRunes, setShowRunes] = useState(false);
	const [showSimulatedGraph, setShowSimulateGraph] = useState(false);
	const [selectedPlayer, setSelectedPlayer] = useState({});
	const [simulatorPlayerRed, setSimulatorPlayerRed] = useState({});
	const [simulatorPlayerBlue, setSimulatorPlayerBlue] = useState({});
	const [index, setIndex] = useState(0);
	const [leftTeam, setLeftTeam] = useState([]);
	const [rightTeam, setRightTeam] = useState([]);
	const { hasError, sendRequest } = useHttp();
	const router = useRouter();
	const [matchTimelineData, setMatchTimelineData] = useState({});
	const [selectedFrame, setSelectedFrame] = useState(
		matchTimelineData?.frames?.length - 2 || 0
	);
	const [mainExpand, setMainExpand] = useState(true)

	const players = JSON.parse(JSON.stringify(props.match?.players));

	for (let i = 0; i < players.length; i++) {
		players[i].standingId = i + 1;
	}

	useEffect(() => {
		setLeftTeam(players.filter((player) => !player.win));
		setRightTeam(players.filter((player) => player.win));
	}, [props.match.players]);

	useEffect(() => {
		leftTeam.find((player) => player.mainPlayer)
			? leftTeam.find((player, index) => {
					if (player.mainPlayer) {
						setIndex(index);
						return true;
					}
					return false;
			  })
			: rightTeam.find((player, index) => {
					if (player.mainPlayer) {
						setIndex(index);
						return true;
					}
					return false;
			  });
	}, [leftTeam, rightTeam]);

	useEffect(() => {
		if (!showRunes) {
			setSelectedPlayer({});
			if (index) {
				setSimulatorPlayerBlue(rightTeam[index]);
				setSimulatorPlayerRed(leftTeam[index]);
			}
		} else {
			setSimulatorPlayerBlue({});
			setSimulatorPlayerRed({});
			setSelectedPlayer(
				props.match.players.find((player) => player.mainPlayer)
			);
		}
	}, [showRunes, index]);

	const frameChange = (e) => {
		setSelectedFrame(e);
	};

	const simulateDataHandler = () => {
		sendRequest(
			{
				url: "/matchTimeline",
				method: "POST",
				body: { region: router.query?.region, matchId: props.match.matchId },
			},
			(res) => {
				if (res?.status === 200) {
					setMatchTimelineData(res.data.matchTimeline);
				}
			}
		);
		setShowSimulateGraph(true);
	};

	const showRunesHandler = (btnState) => {
		setShowRunes(btnState);
	};

	return (
		<div className=" relative">
			{/* top row  */}
			<div className="mr-[5px] desktop:mr-[15px] ">
				{/* defeat and build card  */}
				<div className=" grid grid-cols-[420px_800px] smDesktop:grid-cols-[468px_auto] desktop:rounded-[5px] desktop:overflow-hidden ">
					<StatusCard {...props} mainExpand={mainExpand} />
					<BuildCard {...props} />
				</div>
				<div>
					{!showSimulatedGraph ? (
						<>
							{/* overview and runes btn  */}
							<OverviewAndRunBtns
								runesHandler={showRunesHandler}
								currentRunes={showRunes}
							/>
							{/* los and win row  */}
							<LosAndWinRow showProfile={showRunes} {...props} />
						</>
					) : (
						<HeaderOnSimulateGameMode
							setShowSimulateGraph={setShowSimulateGraph}
							setExpand={props.setExpand}
							expand={props.expand}
						/>
					)}
				</div>
				{/* player compare  */}
				<RunesContext.Provider value={{ runes: showRunes }}>
					<PlayerCompare
						showRunes={showRunes}
						{...props}
						showSimulatedGraph={showSimulatedGraph}
						selectedPlayer={selectedPlayer}
						setSelectedPlayer={setSelectedPlayer}
						simulatorPlayerRed={simulatorPlayerRed}
						setSimulatorPlayerRed={setSimulatorPlayerRed}
						simulatorPlayerBlue={simulatorPlayerBlue}
						setSimulatorPlayerBlue={setSimulatorPlayerBlue}
						leftTeam={leftTeam}
						rightTeam={rightTeam}
						matchTimelineData={matchTimelineData?.matchTimeline}
						selectedFrame={selectedFrame}
					/>
				</RunesContext.Provider>
				{/* simulate btn and simulation card  */}
				<div className=" text-center mt-16 pb-[73px] mb-4 ">
					{!showSimulatedGraph ? (
						<SimulateBtn click={simulateDataHandler} showRunes={showRunes} />
					) : (
						<Simulation
							selectedPlayer={selectedPlayer}
							frames={matchTimelineData?.matchTimeline?.frames}
							frameChange={frameChange}
						/>
					)}
				</div>
			</div>
			<div className=" absolute right-0 top-0 w-[2px] h-full bg-accent-color rounded-tr rounded-br desktop:w-[15px] "></div>
		</div>
	);
};

export default ExpandCard;
