import React, { useState } from "react";
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
	const [selectedPlayer, setSelectedPlayer] = useState({});
	const { hasError, sendRequest } = useHttp();
	const router = useRouter();
	const [showRunes, setShowRunes] = useState(false);
	const [matchTimelineData, setMatchTimelineData] = useState({});
	const [selectedFrame, setSelectedFrame] = useState(
		matchTimelineData?.frames?.length - 2 || 0
	);
	const [showSimulatedGraph, setShowSimulateGraph] = useState(false);

	const showRunesHandler = (btnState) => {
		setShowRunes(btnState);
	};

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

	return (
		<div className=" relative">
			{/* top row  */}
			<div className="mr-[5px]">
				{/* defeat and build card  */}
				<div className=" grid grid-cols-[420px_800px] smDesktop:grid-cols-[468px_auto] ">
					<StatusCard {...props} />
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
						selectedPlayer={selectedPlayer}
						setSelectedPlayer={setSelectedPlayer}
						matchTimelineData={matchTimelineData?.matchTimeline}
						selectedFrame={selectedFrame}
						showRunes={showRunes}
						{...props}
						showSimulatedGraph={showSimulatedGraph}
					/>
				</RunesContext.Provider>
				{/* simulate btn and simulation card  */}
				<div className=" text-center mt-16 pb-[73px] mb-4 ">
					{!showSimulatedGraph ? (
						<SimulateBtn click={simulateDataHandler} />
					) : (
						<Simulation
							selectedPlayer={selectedPlayer}
							frames={matchTimelineData?.matchTimeline?.frames}
							frameChange={frameChange}
						/>
					)}
				</div>
			</div>
			<div className=" absolute right-0 top-0 w-[2px] h-full bg-accent-color "></div>
		</div>
	);
};

export default ExpandCard;
