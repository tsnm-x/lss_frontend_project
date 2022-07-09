import React, { useEffect, useState } from "react";
import Image from "next/image";
import Jayce from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/CenterPrecisionAndEnspiration/Jayce.png";
import Tristana from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/CenterPrecisionAndEnspiration/Tristana.png";
import Qbatch from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/CenterPrecisionAndEnspiration/TristanaQ.png";
import Rbatch from "../../../../../../../../public/assets/new-images/Profile/card/CardExpand/CenterPrecisionAndEnspiration/TristanaR.png";

import Unity, { UnityContext } from "react-unity-webgl";
// import { SendMessage } from "react-unity-webgl";

const unityContext = new UnityContext({
	loaderUrl: "/assets/unity/WebGL.loader.js",
	dataUrl: "/assets/unity/WebGL.data.unityweb",
	frameworkUrl: "/assets/unity/WebGL.framework.js.unityweb",
	codeUrl: "/assets/unity/WebGL.wasm.unityweb",
});
// child component that supporting main component ---------------------------------------
const Buttons = (props) => {
	const [btns, setBtns] = useState([
		{
			text: "overview",
			active: true,
		},
		{
			text: "skirmish log",
			active: false,
		},
	]);

	const btnClickHandler = (btnTxt) => {
		// console.log(btnTxt)
		setBtns((prevState) => {
			const modifyedState = [];
			prevState.forEach((item) => {
				item.text === btnTxt ? (item.active = true) : (item.active = false);
				modifyedState.push(item);
			});
			return modifyedState;
		});
	};

	return (
		<div className=" flex ml-[28px] ">
			{btns.map((btn, index) => {
				return (
					<div className=" mr-10 flex flex-col mt-[14px] " key={index}>
						<button
							onClick={() => btnClickHandler(btn.text)}
							className={` sf-bold-11 capitalize ${
								btn.active ? "text-accent-color" : "text-grayed-text"
							}`}
						>
							{btn.text}
						</button>
						{btn.active && (
							<div className=" bg-accent-color w-3/6 h-[1px] mx-auto mt-1 "></div>
						)}
					</div>
				);
			})}
		</div>
	);
};

const ProfileRow = (props) => {
	const { reverce, profile, batch } = props;
	return (
		<div className=" w-full flex justify-between items-center px-4 mb-5 last:mb-0 ">
			<div
				className={`relative w-11 h-11 ${reverce ? "order-4 ml-2" : "mr-2"}`}
			>
				<Image src={profile} alt="profile image" layout="fill" />
			</div>
			{/* progress bar  */}
			<div className={`flex-grow ${reverce ? "order-2" : null}`}>
				{/* top progress  */}
				<div className=" flex h-3 ">
					<div className=" w-3/12 h-full bg-accent-color"></div>
					<div className=" w-6/12 h-full  bg-accent-color-2"></div>
					<div className=" w-3/12 h-full bg-light-text"></div>
				</div>
				<div className=" flex mt-2 ">
					<p className=" w-3/12 font-bold font-gotham text-[8px] leading-[9px] uppercase italic text-accent-color ">
						ad 412
					</p>
					<p className=" w-6/12 font-bold font-gotham text-[8px] leading-[9px] uppercase italic text-accent-color-2 ">
						ap 645
					</p>
					<p className=" w-3/12 font-bold font-gotham text-[8px] leading-[9px] uppercase italic text-light-text ">
						td 12
					</p>
				</div>
			</div>
			{/* batch  */}
			<div className={` ${reverce ? "order-1 mr-6" : "ml-6"}`}>
				{batch.map((batch, index) => {
					return (
						<div className=" flex items-center " key={index}>
							<div className=" relative w-[15px] h-[15px] rounded-full  ">
								<Image
									src={batch.img}
									alt="q batch"
									layout="fill"
									className="full"
								/>
							</div>
							<p className=" ml-1 font-gotham text-[6px] leading-[7px] text-grayed-text ">
								{batch.txt}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

// the main component that rendering -------------------------------------------------------------------------------------------
const SimulationData = (props) => {
	const ProfileData = [
		{
			reverce: false,
			profile: Jayce,
			batch: [
				{
					img: Qbatch,
					txt: 257,
				},
				{
					img: Rbatch,
					txt: 711,
				},
			],
		},
		{
			reverce: true,
			profile: Tristana,
			batch: [
				{
					img: Qbatch,
					txt: 257,
				},
				{
					img: Rbatch,
					txt: 687,
				},
			],
		},
	];

	const player1 = { champName: "ashe", level: 18 };
	const player2 = { champName: "olaf", level: 18 };

	const data = {
		APIMatchInfo: {
			version: "12.10.1",
			championInfo: [
				{ champName: "Ashe", champLevel: 18 },
				{
					champName: `${props.selectedPlayer?.championName || "Garen"}`,
					champLevel: 18,
				},
			],
		},
	};

	const clicked = () => {
		unityContext.send("Simulator Manager", "LoadData", JSON.stringify(data));
	};

	useEffect(() => {
		window.alert = console.log;

		// returned function will be called on component unmount
		return () => {
			// unityContext.quitUnityInstance();
		};
	}, []);

	return (
		<>
			<div className="  rounded-5px bg-[#4777fc0f] w-[325px] h-[371px]  ">
				<button onClick={clicked}>Start Sim</button>
				<Unity
					style={{
						width: "100%",
						height: "100%",
						background: "#231F20",
						justifySelf: "center",
						alignSelf: "center",
					}}
					unityContext={unityContext}
				/>
			</div>
		</>
	);

	return (
		<div className="  rounded-5px bg-[#4777fc0f] w-[325px] h-[371px]  ">
			<h4 className=" sf-bold-19 text-light-text capitalize pt-[24px] pl-[25px] ">
				simulation data
			</h4>
			<Buttons />
			{/* damage card  */}
			<div className=" w-full rounded-5px bg-card-&-content-box  px-[45px] py-2 italic mt-3 ">
				<div className=" grid grid-cols-2">
					<h6 className=" font-gotham text-[8px] leading-[9px] font-bold text-grayed-text capitalize">
						damage type
					</h6>
					<h6 className=" font-gotham text-[8px] leading-[9px] font-bold text-grayed-text capitalize">
						fight length
					</h6>
				</div>
				<div className=" grid grid-cols-2 font-gotham text-[11px] leading-[12px] text-light-text font-bold mt-[10px] ">
					<div className="">
						<span className=" text-accent-color mr-1 ">38%</span>
						<span className=" text-accent-color-2 mr-1 ">62%</span>
						<span className=" ">0%</span>
					</div>
					<p>8.58s</p>
				</div>

				<div className=" grid grid-cols-2 mt-5">
					<p className=" font-gotham text-[8px] leading-[9px] text-grayed-text font-bold">
						CC Duration{" "}
					</p>
					<p className=" font-gotham text-[11px] leading-[12px] text-light-text font-bold">
						8.58s
					</p>
				</div>
			</div>
			{/* selected profile view  */}
			<div className=" mt-6">
				{ProfileData.map((item, index) => {
					return <ProfileRow key={index} {...item} />;
				})}
			</div>
			{/* bottom dot  */}
			<div className=" flex justify-center items-center mt-6 ">
				<div className=" w-[5px] h-[5px] rounded-full bg-accent-color "></div>
				<div className=" w-[5px] h-[5px] rounded-full bg-grayed-text ml-6 "></div>
			</div>
		</div>
	);
};

export default SimulationData;
