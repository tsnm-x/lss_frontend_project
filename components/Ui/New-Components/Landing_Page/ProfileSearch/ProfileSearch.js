import React, { useState } from "react";
import classes from "./ProfileSearch.module.css";
import { FiSearch } from "react-icons/fi";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import useHttp from "../../../../../hook/useHttp";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { profileAction } from "../../../../../store/profile";

const ProfileSearch = (props) => {
    const [search, setSearch] = useState("");
    const { sendRequest } = useHttp();
    const dispatch = useDispatch();
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [showCountryList, setShowCountryList] = useState(false);
    const [selectionNameList, setSelectionName] = useState([
        {
            name: "NA",
            serverName: "NA1",
            active: true,
            fullName: "north america",
        },
        {
            name: "euw",
            serverName: "EUW1",
            active: false,
            fullName: "europe west",
        },
        {
            name: "eun",
            serverName: "EUN1",
            active: false,
            fullName: "Eu Nordic and East",
        },
        {
            name: "kr",
            serverName: "KR",
            active: false,
            fullName: "Korea",
        },
        {
            name: "jp",
            serverName: "JP1",
            active: false,
            fullName: "Japan",
        },
        {
            name: "lan",
            serverName: "LA1",
            active: false,
            fullName: "Latin America North",
        },
        {
            name: "las",
            serverName: "LA2",
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

    function requestHandler(res) {
        if (!res) {
            console.log(res, "no response from the server");
            console.log(selectionNameList);
            Router.push({
                pathname: "/summoner/summonerNotFound",
                query: {
                    summonerName: search,
                    reqServers: [
                        selectionNameList[0].serverName,
                        selectionNameList[1].serverName,
                        selectionNameList[2].serverName,
                        selectionNameList[3].serverName,
                        selectionNameList[4].serverName,
                        selectionNameList[5].serverName,
                        selectionNameList[6].serverName,
                    ],
                    regionFullName: JSON.stringify({
                        [selectionNameList[0].serverName]:
                            selectionNameList[0].fullName,
                        [selectionNameList[1].serverName]:
                            selectionNameList[1].fullName,
                        [selectionNameList[2].serverName]:
                            selectionNameList[2].fullName,
                        [selectionNameList[3].serverName]:
                            selectionNameList[3].fullName,
                        [selectionNameList[4].serverName]:
                            selectionNameList[4].fullName,
                        [selectionNameList[5].serverName]:
                            selectionNameList[5].fullName,
                        [selectionNameList[6].serverName]:
                            selectionNameList[6].fullName,
                    }),
                },
            });
            setSearch("");
            return;
        }

        dispatch(
            profileAction.setProfileDataPage({
                profile: res.data.matches,
                // region,
                region: activeListDetails.selectedItem.serverName,
                summonerName: search,
            })
        );
        Router.push({
            pathname: "/summoner/[region]/[summonerName]",
            query: {
                region: activeListDetails.selectedItem.serverName,
                summonerName: search,
            },
        });
        setSearch("");
    }

    function searchHandler(e) {
        if (e.key === "Enter") {
            console.log("Entered!");
            console.log(activeListDetails.selectedItem.serverName);
            e.preventDefault();
            sendRequest(
                {
                    url: "/summonerByName",
                    method: "POST",
                    body: {
                        region: activeListDetails.selectedItem.serverName,
                        summonerName: search,
                    },
                },
                requestHandler
            );
        }
    }

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
                                className={` 
                                            absolute left-0 top-[100px] bg-light-text rounded p-[10px_12px] smTablet:w-[175px] smTablet:top-[70px]
                                            tablet:py-[7px] tablet:px-[10px] desktop:top-[105px] desktop:w-[250px] desktop:py-[10px] desktop:px-[12px]
                                            `}
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
                                            <p className=" sf-bold-15 capitalize text-center smTablet:sf-bold-10 laptop:text-[11px] desktop:text-[15px] desktop:leading-[20px] ">
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
                            className={` absolute h-full hidden justify-center items-center bg-accent-color w-[250px] rounded cursor-pointer smTablet:flex smTablet:w-[161px] smTablet:py-[20px] tablet:py-[22px] desktop:py-[32px] desktop:w-[250px] `}
                        >
                            <h4
                                className={` text-white mr-[16px] uppercase  smTablet:gotham-mid-15 desktop:gotham-mid-25`}
                            >
                                {activeListDetails.selectedItem.name}
                            </h4>
                            <BiCaretDown className=" text-white text-[20px] " />
                        </div>
                        {/* sumonner name box  */}
                        <input
                            type="search"
                            onChange={searchInput}
                            onKeyDown={(event) => searchHandler(event)}
                            value={search}
                            placeholder="Find your Summoner name..."
                            className={` w-full py-[10px] pl-[12px] bg-white rounded-[5px] mobile:sf-regular-14 mobile:p-[8px_11px] smTablet:gotham-mid-18 smTablet:mr-[10px] smTablet:py-[20px] smTablet:pl-[195px] desktop:gotham-mid-25 ${classes.searchBox} ${props.searchBox}`}
                        />
                        {!props.hideSearch && (
                            <button className="absolute right-3 top-[10px] mobile:top-[5px] smTablet:top-[15px] desktop:top-[23px] desktop:right-[25px] ">
                                <FiSearch className=" text-[#AAA0A8] text-[20px] smTablet:text-[28px] desktop:text-[42px] " />
                            </button>
                        )}
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
