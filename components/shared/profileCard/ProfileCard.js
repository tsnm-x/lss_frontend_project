import React from "react";
import classes from "./profileCard.module.css";
import Image from "next/image";
import ProfileLargeImg from "../../../public/assets/profile/profile-large.png";
import Link from "next/link";

const ProfileCard = (props) => {
	return (
		<div className={`flex items-end gap-x-[18px] ${props.className}`}>
			{/* profile  */}
			<div className={`${classes.profile}`}>
				{/* profile img  */}
				<div className={`${classes.profile_img}`}>
					<img
						src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/profileicon/${props.profileIcon}.png`}
						alt="profile image"
						layout="fill"
					/>
					<img src="" alt="" />
				</div>
				{/* profile bottom number  */}
				<div className={`${classes.profile_number}`}>92</div>
			</div>
			{/* profile details  */}
			<div className={`${classes.profile_details}`}>
				<h2 className={`${classes.profile_name}`}>{props.summonerName}</h2>
				<p className={`${classes.profile_texts}`}>ladder rank 2.123</p>
				<div className=" flex gap-x-2 ">
					<Link href="/summoner/profile-update" passHref>
						<button className="btn">{props.btnOne}</button>
					</Link>
					<button className="btn bg-red-yellow">live simulator</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
