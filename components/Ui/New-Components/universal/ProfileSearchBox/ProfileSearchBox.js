import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const ProfileSearchBox = (props) => {
    return (
        <>
            {/* small screen  */}
            <div className={` w-[160px] mx-auto relative ${props.className}`}>
                {/* country select box  */}
                <div
                    className={` absolute left-0 top-0 bg-accent-color w-[32px] flex py-[5px] px-[10px] rounded z-20  `}
                >
                    <p className=" sf-regular-10 text-white uppercase">na</p>
                </div>
                {/* sumonner name box  */}
                <input
                    type="text"
                    placeholder="Search your profile"
                    className={` bg-white text-black placeholder:text-black rounded sf-regular-10 py-[5px] pl-[40px] absolute left-0 top-0 z-10 w-[160px]  ${props.searchBox}`}
                />
                <button className="absolute right-[6px] top-[5px] mobile:top-[5px] z-20">
                    <FiSearch width={"12px"} size="12px" />
                </button>
            </div>
        </>
    );
};

export default ProfileSearchBox;
