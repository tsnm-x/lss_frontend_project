import React, { useState } from "react";
import classes from "./ProfileSearch.module.css";
import { FiSearch } from "react-icons/fi";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const ProfileSearch = (props) => {
    const [search, setSearch] = useState("");
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [showCountryList, setShowCountryList] = useState(false);

    const CountryListHandler = () => {
        setShowCountryList(!showCountryList)
    }

    const searchInput = (input) => {
        setSearch(input.target.value);
    };

    // const selectionNameList = ["na", "euw", "eun", "kr", "jp", "lan", "las"];
    const selectionNameList = [
        {
            name: "na",
            active: true,
            fullName: "north america",
        },
        {
            name: "euw",
            active: false,
            fullName: "europe west",
        },
        {
            name: "eun",
            active: false,
            fullName: "Eu Nordic and East",
        },
        {
            name: "kr",
            active: false,
            fullName: "Korea",
        },
        {
            name: "jp",
            active: false,
            fullName: "Japan",
        },
        {
            name: "lan",
            active: false,
            fullName: "Latin America North",
        },
        {
            name: "las",
            active: false,
            fullName: "Latin America South",
        },
    ];

    const btnActiveHandler = (index) => {
        setActiveItemIndex(index);
        console.log(selectionNameList);
    };

    return (
        <>
            {/* small screen  */}
            <div
                className={`w-full ${props.className ? props.className : null}`}
            >
                {/* search form  */}
                <form action="/" className="w-full">
                    <div className="realtive">
                        {/* country box list  */}
                        {showCountryList && (
                            <div className={`${classes.countryList}`}>
                                {selectionNameList.map((country, index) => {
                                    return (
                                        <div
                                            key={"country " + country.name}
                                            onClick={() =>
                                                btnActiveHandler(index)
                                            }
                                            className={` py-2 mb-[6px] cursor-pointer last:mb-0 ${
                                                country.active
                                                    ? " bg-accent-color rounded text-white"
                                                    : " bg-[#AAA0A826] text-[#AAA0A8]"
                                            }`}
                                        >
                                            <p className=" sf-bold-15 capitalize text-center ">
                                                {country.fullName}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        {/* country select box  */}
                        <div onClick={CountryListHandler} className={`${classes.selectedWrap}`}>
                            <h4
                                className={` desktop:gotham-mid-25 text-white mr-[16px]`}
                            >
                                NA
                            </h4>
                            <BiCaretDown className=" text-white text-[20px] " />
                        </div>
                        {/* sumonner name box  */}
                        <input
                            type="text"
                            onChange={searchInput}
                            value={search}
                            placeholder="Find your Summoner name..."
                            className={` desktop:gotham-mid-25 tablet:nedgen-regular-10 ${classes.searchBox}`}
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
