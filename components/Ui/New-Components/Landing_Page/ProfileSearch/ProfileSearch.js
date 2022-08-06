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
    const [hideSearch, setHideSearch] = useState(false);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [showCountryList, setShowCountryList] = useState(false);
    const [selectionNameList, setSelectionName] = useState([
        {
            name: "NA",
            serverName: "NA1",
            active: true,
            fullName: "North America",
        },
        {
            name: "euw",
            serverName: "EUW1",
            active: false,
            fullName: "Europe West",
        },
        {
            name: "eun",
            serverName: "EUN1",
            active: false,
            fullName: "EU Nord/East",
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
            fullName: "Latin America N",
        },
        {
            name: "las",
            serverName: "LA2",
            active: false,
            fullName: "Latin America S",
        },
    ]);

    const [activeListDetails, setActiveListDetails] = useState({
        selectedItem: selectionNameList[0],
        showList: false,
        index: 0,
    });

    useEffect(() => {
        if (window.localStorage.getItem("region")) {
            const finder = selectionNameList.find(
                (regionObj) =>
                    regionObj.serverName ===
                    window.localStorage.getItem("region")
            );
            const oldList = [...selectionNameList];
            const modifyedList = [];
            setActiveListDetails((prevState) => {
                return {
                    selectedItem: finder,
                    showList: false,
                    index: 0,
                };
            });
            setSelectionName(() => {
                oldList.forEach((list, listIndex) => {
                    if (
                        list.serverName ===
                        window.localStorage.getItem("region")
                    ) {
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
    }, []);

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
        setHideSearch(true);
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
            <div className={` w-[500px] h-[70px] mx-auto `}>
                {/* search form  */}
                <form action="/" className="w-full ">
                    <div className=" relative ">
                        {/* country box list  */}
                        {activeListDetails.showList && (
                            <div
                                className={` absolute left-0 top-[65px] bg-[#e7e6e9] 
                                flex flex-col items-center gap-y-[5px] w-[111px] p-[10px] pt-[21px]`}
                            >
                                {selectionNameList.map((country, index) => {
                                    return (
                                        <div
                                            key={"country " + country.name}
                                            onClick={() =>
                                                btnActiveHandler(index)
                                            }
                                            className={` w-full h-[25px] rounded-5px cursor-pointer
                                             flex items-center justify-center ${
                                                 country.active
                                                     ? " bg-[#d55460] rounded text-white"
                                                     : " bg-[#AAA0A826] text-[#AAA0A8]"
                                             }`}
                                        >
                                            <p className=" mazin-bold-10 text-center capitalize ">
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
                            className={` absolute bg-[#d55460] cursor-pointer w-[111px] h-[70px] rounded-5px flex justify-center items-center gap-x-2 `}
                        >
                            <h4
                                className={` text-white uppercase inter-bold-14 `}
                            >
                                {activeListDetails.selectedItem?.name}
                            </h4>
                            <BiCaretDown className=" text-white text-[16px] " />
                        </div>
                        {/* sumonner name box  */}
                        <input
                            disabled={hideSearch}
                            style={{backgroundColor: 'white'}}
                            type="search"
                            onChange={searchInput}
                            value={search}
                            placeholder="Find your Summoner name..."
                            className={` rounded-5px w-[500px] h-[70px] pl-[147px] 
                            font-mazin font-[600] text-[16px] leading-[20.4px] text-[rgba(0,0,0,0.5)] `}
                        />

                        <button
                            onClick={(e) => searchHandler(e)}
                            className="absolute top-[20px] right-[26px]  "
                        >
                            {hideSearch ? (
                                <div className=" flex gap-x-[3px] mt-[6px] ">
                                    {["", "", ""].map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`w-[10px] h-5 ${classes.indicator}`}
                                            ></div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <FiSearch className=" text-[#D55460] text-[28px] " />
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfileSearch;
