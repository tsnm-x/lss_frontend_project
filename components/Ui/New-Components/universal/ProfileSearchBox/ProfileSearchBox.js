import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const ProfileSearchBox = (props) => {
    return (
        <>
            {/* small screen  */}
            <div className={` w-[160px] mx-auto relative ${props.className}`}>
                {/* country select box  */}
                <div
                    className={` absolute left-0 top-0 bg-accent-color w-[32px] flex py-[5px] 
                                px-[10px] rounded z-20 smTablet:w-[81px] smTablet:sf-mid-14 smTablet:py-[10px]
                                smTablet:justify-center tablet:w-[100px] tablet:py-3   `}
                >
                    <p className=" sf-regular-10 text-white uppercase smTablet:sf-mid-14 tablet:sf-mid-18 ">
                        na
                    </p>
                </div>
                {/* sumonner name box  */}
                <input
                    type="text"
                    placeholder="Search your profile ..."
                    className={` bg-white text-black placeholder:text-black rounded sf-regular-10 py-[5px] pl-[40px] absolute left-0 
                    top-0 z-10 w-[160px] smTablet:w-[340px] smTablet:py-[8px] smTablet:sf-bold-15 smTablet:pl-[110px] smTablet:text-[#707070] smTablet:placeholder:text-[#707070]
                    tablet:w-full tablet:sf-mid-18 tablet:py-[12px] tablet:pl-[164px]  ${props.searchBox}`}
                />
                <button className="absolute right-[6px] top-[5px] mobile:top-[5px] z-20 smTablet:hidden">
                    <FiSearch width={"12px"} size="12px" />
                </button>
            </div>
        </>
    );
};

export default ProfileSearchBox;
