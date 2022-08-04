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

    return (
        <div className=" flex gap-x-[35px] ">
            {/* profile image  */}
            <div className=" relative w-[115px] h-[115px] ">
                <div className=" relative overflow-hidden border-[2px] laptop:w-full laptop:h-full laptop:rounded-[23px]  ">
                    <Image
                        src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/${props.profileIcon}.png`}
                        alt="profile image"
                        layout="fill"
                        className=" rounded-[20px]"
                    />
                </div>
                <div
                    className=" w-[35px] h-[35px] rounded-full border-[#F5F5F5] border flex 
                items-center justify-center font-sf-pro-text font-[500] text-[14px] leading-[17px]
                text-white mx-auto -mt-[10px] bg-[#140a22] relative  "
                >
                    {props.summonerLevel}
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
                        className=" w-[90px] h-[50px] flex items-center justify-center rounded-5px bg-[#D55460] font-sf-pro-text font-[500] text-[15px] leading-[18px] text-white capitalize "
                        onClick={refreshHandler}
                    >
                        {props?.btnDetails[0].text}
                    </button>
                    <Link href={props?.btnDetails[1].url}>
                        <button className=" w-[140px] h-[50px] flex items-center justify-center rounded-5px bg-[#f5f5f5] font-sf-pro-text font-[500] text-[15px] leading-[18px] text-[#140A22] capitalize  ">
                            {props?.btnDetails[1].text}
                        </button>
                    </Link>
                </div>
                {/* last update  */}
                <div className=" rounded-full border-white border px-4 py-[6px] inline-flex items-center gap-x-2 mt-[15px] ">
                    <RiHistoryLine className=" text-[#d55460] text-[18px] " />
                    <p className=" text-white sf-regular-14">
                        Last Updated: 2 days ago
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
