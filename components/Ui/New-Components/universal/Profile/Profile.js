import React from "react";
import Image from "next/image";
import ProfileImage from "../../../../../public/assets/new-images/Profile/profile-pic.png";
import { useDispatch } from "react-redux";
import { profileAction } from "../../../../../store/profile";
import useHttp from "../../../../../hook/useHttp";
import Link from "next/link";
import { RiHistoryLine } from "react-icons/ri";

const Profile = (props) => {
    const dispatch = useDispatch();
    const { sendRequest } = useHttp();

    const refreshHandler = () => {
        const requestHandler = (res) => {
            console.log(res, "new res");
            if (res) {
                dispatch(
                    profileAction.setProfileDataPage({
                        profile: res.data.matches,
                        region: props?.region,
                        summonerName: props?.summonerName,
                    })
                );
            }
        };
        sendRequest(
            {
                url: "/summonerByName",
                method: "POST",
                body: {
                    region: props?.region,
                    summonerName: props?.summonerName,
                },
            },
            requestHandler
        );
    };

    const convertToDate = (timeStamp) => {
        if (timeStamp) {
            const now = new Date();
            const updateTime =
                (now.getTime() - new Date(timeStamp)?.getTime()) / 86400000;
            if (updateTime >= 1) {
                return Math.ceil(updateTime) + "days ago";
            } else {
                let hours = updateTime * 24;
                let minutes = hours * 24;
                let seconds = minutes * 24;

                if (hours >= 1) {
                    return Math.ceil(hours) + " hours ago";
                } else if (minutes >= 1) {
                    return Math.ceil(minutes) + " minutes ago";
                } else if (seconds >= 1) {
                    return Math.ceil(seconds) + " seconds ago";
                }
                return "just now";
            }
        }

        return "fetching...";
    };

    return (
        <div className=" flex gap-x-[35px] relative z-50 ">
            {/* profile image  */}
            <div className=" relative w-[115px] h-[115px] ">
                <div className=" relative overflow-hidden w-full h-full rounded-[20px] border border-[#242326]  ">
                    {props.profileIcon && (
                        <Image
                            src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/profileicon/${props.profileIcon}.png`}
                            alt="profile image"
                            layout="fill"
                            className=" rounded-[20px]"
                        />
                    )}
                </div>
                <div>
                    <div
                        className=" w-[53px] h-[23] bg-[#161416] flex items-center justify-center 
                    rounded-[3px] text-white sf-mid-14 py-[3px] border border-[#242326] mx-auto relative -top-[12px]
                     "
                    >
                        {props.summonerLevel}
                    </div>
                </div>
            </div>
            {/* profile details  */}
            <div>
                <h2 className=" mazin-bold-30 capitalize text-white  ">
                    {props?.summonerName}
                </h2>
                <p className=" sf-bold-14 font-[500] text-[#AAA0A8] capitalize ">
                    ladder rank: Unavailable
                </p>
                {/* buttons  */}
                <div className=" mt-[10px] flex gap-x-[10px] ">
                    <button
                        className=" w-[90px] h-[50px] flex items-center justify-center rounded-5px bg-[#D55460] font-sf-pro-text font-[500] text-[15px] leading-[18px] text-white capitalize hover:bg-[#793442] "
                        onClick={refreshHandler}
                    >
                        {props?.btnDetails[0].text}
                    </button>
                    {/* <Link href={props?.btnDetails[1].url}>
                        <button className=" w-[140px] h-[50px] flex items-center justify-center rounded-5px bg-[#f5f5f5] font-sf-pro-text font-[500] text-[15px] leading-[18px] text-[#140A22] capitalize hover:bg-[#8a8488]  ">
                            {props?.btnDetails[1].text}
                        </button>
                    </Link> */}
                </div>
                {/* last update  */}
                {/* <div className=" rounded-full border-white border px-4 py-[6px] inline-flex items-center gap-x-2 mt-[15px] ">
                    <RiHistoryLine className=" text-[#d55460] text-[18px] " />
                    <p className=" text-white sf-regular-14">
                        Last Updated: {convertToDate(props?.lastModified)}
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default Profile;
