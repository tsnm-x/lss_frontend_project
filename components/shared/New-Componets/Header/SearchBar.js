import React, { useEffect, useState, useContext } from "react";
import classes from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import useHttp from "../../../../hook/useHttp";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { profileAction } from "../../../../store/profile";
import { HiChevronDown } from "react-icons/hi";
import TopHeaderContext from "../../../../Context/TopHeaderContext";

const SearchBar = (props) => {
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
        // console.log(activeListDetails.selectedItem.serverName);
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

    const context = useContext(TopHeaderContext);

    return (
        <>
            {/* small screen  */}
            <div className={` w-[280px] flex items-center justify-between `}>
                {/* search form  */}
                <form
                    action="/"
                    className="w-[205px] h-[42px] rounded-[7px] bg-headBorder hover:bg-btnHoverBg flex items-center "
                >
                    <div className=" flex items-center w-full h-full relative ">
                        <input
                            disabled={hideSearch}
                            style={{ background: "transparent" }}
                            type="text"
                            onChange={searchInput}
                            value={search}
                            placeholder="Find Summoner name..."
                            className=" w-full h-full rounded-[7px] 
                            absolute bg-transparent pl-[36px] mazin-bold-12 font-[600]
                         text-halfWhite focus-within:outline-none focus-within:border
                          focus:placeholder:text-white  "
                        />
                        <button
                            onClick={(e) => searchHandler(e)}
                            className=" absolute left-3 "
                        >
                            {hideSearch ? (
                                <div className=" flex gap-x-[2px] mt-[0px] ">
                                    {["", "", ""].map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`w-[4px] h-3 ${classes.indicator}`}
                                            ></div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <FiSearch className=" text-halfWhite text-[16px] " />
                            )}
                        </button>
                        {/* sumonner name box  */}
                        {/* <input
                            disabled={hideSearch}
                            style={{ background: "transparent" }}
                            type="search"
                            onChange={searchInput}
                            value={search}
                            placeholder="Find Summoner name..."
                            className={` mazin-bold-12 font-[600] ml-[10px] text-halfWhite focus-visible:outline-none `}
                        /> */}
                    </div>
                </form>
                {/* country list  */}
                <div className=" relative ">
                    {/* country box list  */}
                    {/* {activeListDetails.showList && ( */}
                    {context.option.countryList && (
                        <div
                            className={` absolute left-0 top-[45px] bg-headBorder 
                                flex flex-col items-center gap-y-[5px] w-[111px] p-[10px] z-[100] rounded-[7px]`}
                        >
                            {selectionNameList.map((country, index) => {
                                return (
                                    <div
                                        key={"country " + country.name}
                                        onClick={() => btnActiveHandler(index)}
                                        className={` w-full h-[25px] rounded-5px cursor-pointer
                                             flex items-center justify-center ${
                                                 country.active
                                                     ? " bg-red rounded text-white"
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
                        onClick={(event) => {
                            event.stopPropagation()
                            CountryListShowHideHandler();
                            context.handler("smc");
                        }}
                        className={` bg-headBorder hover:bg-btnHoverBg w-[70px] h-[42px] cursor-pointer rounded-[7px] flex justify-center items-center pl-[10px] `}
                    >
                        <h4
                            className={` text-halfWhite mazin-bold-12 font-[600] uppercase mr-1 `}
                        >
                            {activeListDetails.selectedItem?.name}
                        </h4>
                        <HiChevronDown
                            className={`text-halfWhite text-[16px] transition-transform ${
                                activeListDetails.showList
                                    ? " rotate-180 "
                                    : " rotate-0 "
                            }`}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;