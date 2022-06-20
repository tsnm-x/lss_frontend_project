import React, { useState } from "react";
import classes from "./ProfileSearch.module.css";
import { FiSearch } from "react-icons/fi";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const ProfileSearch = (props) => {
    const [search, setSearch] = useState("");
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [showCountryList, setShowCountryList] = useState(false);
    const [selectionNameList, setSelectionName] = useState([
        {
            name: "NA",
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
    ]);

    const [activeListDetails, setActiveListDetails] = useState({
        selectedItem: selectionNameList[0],
        showList: false,
        index: 0,
    });

    const CountryListShowHideHandler = () => {
        setActiveListDetails((prevState) => {
            return {
                ...prevState,
                showList: !prevState.showList,
            };
        });
    };

    const searchInput = (input) => {
        setSearch(input.target.value);
    };

    const btnActiveHandler = (listNo) => {
        // setActiveItemIndex(index);
        // console.log(selectionNameList);
        const oldList = [...selectionNameList];
        const modifyedList = [];
        setSelectionName(() => {
            oldList.forEach((list, listIndex) => {
                if (listIndex === listNo) {
                    list.active = true;
                    // change active item state
                    setActiveListDetails((prevState) => {
                        return {
                            selectedItem: list,
                            showList: false,
                            index: listNo,
                        };
                    });
                } else {
                    list.active = false;
                }
                modifyedList.push(list);
            });
            return modifyedList;
        });
    };

    return (
        <>
            {/* small screen  */}
            <div
                className={`w-full ${props.className ? props.className : null}`}
            >
                {/* search form  */}
                <form action="/" className="w-full ">
                    <div className="realtive">
                        {/* country box list  */}
                        {activeListDetails.showList && (
                            <div
                                className={` absolute left-0 top-[100px] bg-light-text rounded w-[250px] p-[10px_12px] smTablet:w-[175px] smTablet:top-[70px] `}
                            >
                                {selectionNameList.map((country, index) => {
                                    return (
                                        <div
                                            key={"country " + country.name}
                                            onClick={() =>
                                                btnActiveHandler(index)
                                            }
                                            className={` py-[6px] mb-1 cursor-pointer last:mb-0 desktop:py-2 desktop:mb-[6px] ${
                                                country.active
                                                    ? " bg-accent-color rounded text-white"
                                                    : " bg-[#AAA0A826] text-[#AAA0A8]"
                                            }`}
                                        >
                                            <p className=" sf-bold-15 capitalize text-center smTablet:sf-bold-10 ">
                                                {country.fullName}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        {/* country select box  */}
                        <div
                            onClick={CountryListShowHideHandler}
                            className={` absolute h-full hidden justify-center items-center bg-accent-color w-[250px] rounded cursor-pointer smTablet:flex smTablet:w-[161px] smTablet:py-[20px] tablet:py-[22px] desktop:py-[32px] `}
                        >
                            <h4
                                className={` text-white mr-[16px] uppercase smTablet:italic smTablet:gotham-mid-15 desktop:gotham-mid-25`}
                            >
                                {activeListDetails.selectedItem.name}
                            </h4>
                            <BiCaretDown className=" text-white text-[20px] " />
                        </div>
                        {/* sumonner name box  */}
                        <input
                            type="text"
                            onChange={searchInput}
                            value={search}
                            placeholder="Find your Summoner name..."
                            className={` w-full py-[10px] pl-[12px] bg-white rounded-[5px] mobile:sf-regular-14 mobile:p-[8px_11px] smTablet:gotham-mid-18 smTablet:mr-[10px] smTablet:py-[20px] smTablet:pl-[195px] smTablet:italic desktop:gotham-mid-25  ${classes.searchBox} ${props.searchBox}`}
                        />
                        <button className="absolute right-3 top-[10px] mobile:top-[5px] smTablet:hidden desktop:hidden">
                            <FiSearch width={"20px"} size="20px" />
                        </button>
                    </div>
                </form>

                {/* search btn lists for small screen  */}
                <div className="grid grid-cols-4 mt-[10px] gap-x-2 gap-y-1 smTablet:hidden">
                    {selectionNameList.map((item, index) => {
                        return (
                            <button
                                onClick={() => btnActiveHandler(index)}
                                className={` 
                                    font-sf-pro-text text-[9px] leading-3 font-bold py-[2px]
                                    uppercase rounded-5px mobile:text-[7px] mobile:leading-[10px] ${
                                        activeListDetails.index === index
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
