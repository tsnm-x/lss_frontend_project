import React from "react";
import Image from "next/image";
import ProfileImage from "../../../../../public/assets/new-images/Profile/profile-pic.png";
import { useDispatch } from "react-redux";
import { profileAction } from "../../../../../store/profile";
import useHttp from "../../../../../hook/useHttp";
import Link from "next/link";
const Profile = (props) => {
    const dispatch = useDispatch();
    const {sendRequest} = useHttp();

    const refreshHandler = () => {
        const requestHandler = (res) => {
            console.log(res, "new res");
            if(res){
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
                body: { region: props?.region, summonerName: props?.summonerName },
            },
            requestHandler
        );
    };

    return (
        <div className=" flex ">
            {/* profile image  */}
            <div className="laptop:w-[140px] laptop:h-[138px] relative laptop:mr-[20px] ">
                <div className=" relative overflow-hidden border-[2px] laptop:w-full laptop:h-full laptop:rounded-[23px]  ">
                    <Image
                        src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${props.profileIcon}.png`}
                        alt="profile image"
                        layout="fill"
                    />
                </div>
                <div
                    className=" text-white laptop:gotham-mid-12 laptop:w-[33px] 
                laptop:h-[33px] laptop:rounded-full laptop:border laptop:flex laptop:justify-center laptop:items-center
                laptop:font-medium laptop:italic laptop:mx-auto laptop:absolute laptop:left-[40%] laptop:-bottom-[15px]
                 laptop:bg-background"
                >
                    {props.summonerLevel}
                </div>
            </div>
            {/* profile details  */}
            <div>
                <h2 className=" laptop:gotham-mid-50 laptop:text-light-text italic  ">
                    {props?.summonerName}
                </h2>
                <p
                    className=" laptop:sf-mid-14 laptop:text-[#AAA0A8] capitalize
                laptop:mt-[10px] 
                "
                >
                    ladder rank: 42.123
                </p>
                {/* buttons  */}
                <div className=" mt-[13px] ">
                    <button className=" btn text-white bg-accent-color laptop:mr-[9px] " onClick={refreshHandler}>
                        {props?.btnDetails[0].text}
                    </button>
                    <Link href={`${props?.btnDetails[1].url}`}><button className=" btn bg-white ">{props?.btnDetails[1].text}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
