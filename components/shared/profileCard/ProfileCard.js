import React from "react";
import classes from "./profileCard.module.css";
import Image from "next/image";

import useHttp from "../../../hook/useHttp";
import { profileAction } from "../../../store/profile";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from "../loader/Loader";

import Link from "next/link";

const ProfileCard = (props) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { sendRequest, hasError } = useHttp();
	const { region, summonerName } = router.query;
	const loader = useSelector((state) => state.loader.loader);
	const refreshHandler = () => {
		const requestHandler = (res) => {
			dispatch(
				profileAction.setProfileDataPage({
					profile: res.data.matches,
					region,
					summonerName,
				})
			);
		};
		sendRequest(
			{
				url: "/summonerByName",
				method: "POST",
				body: { region, summonerName },
			},
			requestHandler
		);
	};

	return (
		<div className={`flex  ${props.className}`}>
			{/* profile  */}
			<div className={` mr-[18px] relative w-[86px] h-[86px]`}>
				{/* profile img  */}
				<div
					className={` w-[86px] h-[86px] relative rounded-[23px] overflow-hidden border border-[#707070]`}
				>
					<Image
						src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${props.profileIcon}.png`}
						alt="profile image"
						layout="fill"
					/>
				</div>
				{/* profile bottom number  */}
				<div
					className={` 
										w-[22px] h-[22px] rounded-full border border-[#707070]
										font-sf-pro text-[6px] text-liquid-white flex items-center justify-center absolute left-[33px] -bottom-[11px] bg-full-dark`}
				>
					{props.summonerLevel}
				</div>
			</div>
			{/* profile details  */}
			<div className={`${classes.profile_details}`}>
				<h2
					className={` font-gotham-mid text-[26px] leading-[28px] text-[#F3F4F8] ml-1 `}
				>
					{props.summonerName}
				</h2>
				<p
					className={` font-sf-pro text-[10px] leading-[14px] text-[#47516C] capitalize mb-[8px] `}
				>
					ladder rank 2.123
				</p>
				<div className=" flex ">
					{!loader ? (
						<button className="btn mr-[6px]" onClick={refreshHandler}>
							{props.btn[0].text}
						</button>
					) : (
						<button className="btn mr-[6px]">
							<Loader />
						</button>
					)}

					<Link href={props.btn[1].url}>
						<button className="btn bg-red-yellow">{props.btn[1].text}</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
