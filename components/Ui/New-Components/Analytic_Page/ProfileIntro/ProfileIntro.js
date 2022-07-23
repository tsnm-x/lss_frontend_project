import React from "react";
import Image from "next/image";
import ProfileImg from "../../../../../public/assets/new-images/Profile/Jhin.png";
import Classess from './ProfileIntro.module.css'



const ProfileIntro = () => {
    const profileDetails = {
        name: "defeat",
        rank: {
            solo: "38:48",
            day: 3,
        },
        rankStyle: [
            { name: "Aggression" },
            { name: "Solo Kill" },
            { name: "Good CS" },
            { name: "" },
            { name: "" },
            { name: "" },
            { name: "" },
        ],
    };

    return (
        <section>
            <div className="container flex ">
                {/* left side img  */}
                <div className=" rounded-[15px] relative w-[110px] h-[110px] border border-white mr-[35px] ">
                    <Image
                        src={ProfileImg}
                        alt=" profile image"
                        layout="fill"
                        className=" rounded-[15px] "
                    />
                </div>
                {/* right side  */}
                <div>
                    <h1 className=" font-sf-pro-text font-[700] text-white text-[30px] leading-[35.5px] capitalize ">
                        {profileDetails.name}
                    </h1>
                    <p className=" font-sf-pro-text font-[500] text-[18px] leading-[21.5px] text-[#AAA0A8] capitalize mt-1 ">
                        Ranked Solo . {profileDetails.rank.solo} .{" "}
                        {profileDetails.rank.day} days ago
                    </p>
                    <div className=" grid grid-cols-4 grid-rows-2 mt-[10px] ">
                        {profileDetails.rankStyle.map((item, index) => {
                            return (
                                <div
                                    className={`${Classess.profileRankOption} ${
                                        index >= 4
                                            ? index === 4
                                                ? "bg-[#D58A54]"
                                                : " bg-accent-color "
                                            : "bg-[#5d7cf6]"
                                    }`}
                                    key={index}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileIntro;
