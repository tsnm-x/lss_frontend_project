import React, { useState } from "react";
import classes from './ProfileSearch.module.css'
import { FiSearch } from 'react-icons/fi'
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'

const ProfileSearch = (props) => {
    const [search, setSearch] = useState("");
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const searchInput = (input) => {
        setSearch(input.target.value);
    };

    // const selectionNameList = ["na", "euw", "eun", "kr", "jp", "lan", "las"];
    const selectionNameList = [
        {
            name: "na",
            active: true,
        },
        {
            name: "euw",
            active: false,
        },
        {
            name: "eun",
            active: false,
        },
        {
            name: "kr",
            active: false,
        },
        {
            name: "jp",
            active: false,
        },
        {
            name: "lan",
            active: false,
        },
        {
            name: "las",
            active: false,
        },
    ];

    const btnActiveHandler = (index) => {
        setActiveItemIndex(index);
    };

    return (
        <>
            {/* small screen  */}
            <div
                className={`w-full ${props.className ? props.className : null}`}
            >
                <form action="/" className="w-full">
                    <div className="realtive">
                        {/* country select box  */}
                        <div className={`${classes.selectedWrap}`}>
                            <h4 className={`${classes.selectedName}`}>NA</h4>
                            <BiCaretDown className=" text-white text-[20px] " />
                        </div>
                        {/* sumonner name box  */}
                        <input
                            type="text"
                            onChange={searchInput}
                            value={search}
                            placeholder="Search your Summoner Name..."
                            className={`${classes.searchBox}`}
                        />
                        <button className="absolute right-3 top-[10px] desktop:hidden">
                            <FiSearch width={"20px"} size="20px" />
                        </button>
                    </div>
                </form>

                {/* search btn lists  */}
                <div className="grid grid-cols-4 mt-[10px] gap-x-2 gap-y-1 desktop:hidden">
                    {selectionNameList.map((item, index) => {
                        return (
                            <button
                                onClick={() => btnActiveHandler(index)}
                                className={` 
                                    font-sf-pro-text text-[9px] leading-3 font-bold py-[2px]
                                    uppercase rounded-5px ${
                                        activeItemIndex === index
                                            ? "bg-[#D55460] text-white"
                                            : "bg-white text-black"
                                    } `}
                                key={"btn-" + index}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ProfileSearch;
