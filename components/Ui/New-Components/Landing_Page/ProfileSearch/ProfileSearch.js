import React, { useEffect, useState } from "react";
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

    useEffect(()=>{
        if(window.localStorage.getItem('region')){
            const finder = selectionNameList.find((regionObj) => regionObj.serverName === window.localStorage.getItem('region'));
            const oldList = [...selectionNameList];
            const modifyedList = [];
            setActiveListDetails((prevState)=>{
                return {
                    selectedItem: finder,
                    showList: false,
                    index: 0,
                }
            })
            setSelectionName(() => {
                oldList.forEach((list, listIndex) => {
                    if (list.serverName === window.localStorage.getItem('region')) {
                        list.active = true;
                        // change active item state
                        setActiveListDetails((prevState) => {
                            return {
                                selectedItem: list,
                                showList: false,
                                index: listIndex,
                            };
                        });
                    } else {
                        list.active = false;
                    }
                    modifyedList.push(list);
                });
                return modifyedList;
            });
        }
    }, [])

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
                profile: [],
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
        e.preventDefault();
        console.log("Entered!");
        console.log(activeListDetails.selectedItem.serverName);
        sendRequest(
            {
                url: "/summonerName",
                method: "GET",
                params: {
                    region: activeListDetails.selectedItem.serverName,
                    summonerName: search,
                },
            },
            requestHandler
        );
    }

    return (
        <>
            {/* small screen  */}
            <div className={` w-[500px] h-[70px] `}>
                {/* search form  */}
                <form action="/" className="w-full ">
                    <div className=" relative ">
                        {/* country box list  */}
                        {activeListDetails.showList && (
                            <div
                                className={` 
                                            absolute left-0 top-[100px] bg-light-text rounded p-[10px_12px] smTablet:w-[175px] smTablet:top-[70px]
                                            tablet:py-[7px] tablet:px-[10px]
                                            `}
                            >
                                {selectionNameList.map((country, index) => {
                                    return (
                                        <div
                                            key={"country " + country.name}
                                            onClick={() =>
                                                btnActiveHandler(index)
                                            }
                                            className={` py-[6px] mb-1 cursor-pointer last:mb-0 ${
                                                country.active
                                                    ? " bg-accent-color rounded text-white"
                                                    : " bg-[#AAA0A826] text-[#AAA0A8]"
                                            }`}
                                        >
                                            <p className=" sf-bold-15 capitalize text-center smTablet:sf-bold-10 laptop:text-[11px]  ">
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
                            className={` absolute bg-[#d55460] w-[111px] h-[70px] rounded-5px flex justify-center items-center `}
                        >
                            <h4
                                className={` text-white mr-[16px] uppercase  smTablet:gotham-mid-15 `}
                            >
                                {activeListDetails.selectedItem?.name}
                            </h4>
                            <BiCaretDown className=" text-white text-[20px] " />
                        </div>
                        {/* sumonner name box  */}
                        <input
                            type="search"
                            onChange={searchInput}
                            value={search}
                            placeholder="Find your Summoner name..."
                            className={` rounded-5px w-[500px] h-[70px] pl-[147px] 
                            font-mazin font-[600] text-[16px] leading-[20.4px] text-[rgba(0,0,0,0.5)] `}
                        />
                        {!props.hideSearch && (
                            <button
                                onClick={(e) => searchHandler(e)}
                                className="absolute top-[20px] right-[26px]  "
                            >
                                <FiSearch className=" text-[#D55460] text-[28px] " />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfileSearch;
