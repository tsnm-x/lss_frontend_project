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
			console.log(res, "new res");
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

	function changePage(){
		if(!props.btnState){
			router.push(
				`${router.asPath}/livesimulator`
			)
		}
	}

	return (
		<div className={`flex items-end gap-x-[18px] ${props.className}`}>
			{/* profile  */}
			<div className={`${classes.profile}`}>
				{/* profile img  */}
				<div className={`${classes.profile_img}`}>
					<img
						src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${props.profileIcon}.png`}
						alt="profile image"
						layout="fill"
					/>
					<img src="" alt="" />
				</div>
				{/* profile bottom number  */}
				<div className={`${classes.profile_number}`}>{props.summonerLevel}</div>
			</div>
			{/* profile details  */}
			<div className={`${classes.profile_details}`}>
				<h2 className={`${classes.profile_name}`}>{props.summonerName}</h2>
				<p className={`${classes.profile_texts}`}>ladder rank 2.123</p>
				<div className=" flex gap-x-2 ">
					{!loader ? (
						<button className="btn" onClick={refreshHandler}>
							{props.btnOne}
						</button>
					) : (
						<button className="btn">
							<Loader />
						</button>
					)}

					<button className="btn bg-red-yellow" onClick={changePage}>{props.btnState ? 'Historic Games' : 'live simulator' }</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
