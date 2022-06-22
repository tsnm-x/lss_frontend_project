import React from "react";
import Image from "next/image";
import ProfileImage from "../../../../../public/assets/new-images/Profile/profile-pic.png";

const Profile = () => {
    return (
        <div className=" flex ">
            {/* profile image  */}
            <div className="laptop:w-[140px] laptop:h-[138px] relative laptop:mr-[20px] ">
                <div className=" relative overflow-hidden border-[2px] laptop:w-full laptop:h-full laptop:rounded-[23px]  ">
                    <Image
                        src={ProfileImage}
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
                    92
                </div>
            </div>
            {/* profile details  */}
            <div>
                <h2 className=" laptop:gotham-mid-50 laptop:text-light-text italic  ">
                    Beanovi
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
                    <button className=" btn text-white bg-accent-color laptop:mr-[9px] ">
                        refresh
                    </button>
                    <button className=" btn bg-white ">refresh</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
