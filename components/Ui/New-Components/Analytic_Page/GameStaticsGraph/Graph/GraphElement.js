import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import Classess from '../GameStaticsGraph.module.css'
// player img list
import ImgOne from "../../../../../../public/assets/new-images/Profile-Graph/one.png";
import ImgTwo from "../../../../../../public/assets/new-images/Profile-Graph/two.png";
import ImgThree from "../../../../../../public/assets/new-images/Profile-Graph/three.png";
import ImgFour from "../../../../../../public/assets/new-images/Profile-Graph/four.png";
import ImgFive from "../../../../../../public/assets/new-images/Profile-Graph/five.png";
import ImgSix from "../../../../../../public/assets/new-images/Profile-Graph/six.png";
import ImgSeven from "../../../../../../public/assets/new-images/Profile-Graph/deven.png";
import Image from "next/image";
import { useSelector } from "react-redux";

const GraphElement = (props) => {
    
    const colors = [
        "#D55460",
        "#5D7CF6",
        "#FEFCE8",
        "#5E22C5",
        "#A855F7",
        "#EC4899",
        "#2DD4BF",
        "#F97316",
        "#0EA5E9",
        "#6366F1"
    ]

    const [selectedColors, setSelectedColors] = useState([]);
    const [unselectedColors, setUnselectedColors] = useState(colors);
    const champions = useSelector((state) => state.champions.champions);
    const [selectedPlayers, setSelectedPlayers] = useState([props.mainPlayer]);
    const [btnList, setBtnList] = useState([
        {
            txt: "Damage Dealt",
            active: true,
        },
        {
            txt: "Creep Score",
            active: false,
        },
        {
            txt: "Gold",
            active: false,
        },
        {
            txt: "Experience",
            active: false,
        },
    ]);

    useEffect(()=> {
        shiftArr();
    }, [])


    useEffect(()=>{
        setSelectedPlayers([props.mainPlayer]);
        setSelectedColors([{[props?.mainPlayer?.summonerName]: colors[0]}])
    }, [props.mainPlayer])

    const shiftArr = () => {
        let unselected = [...unselectedColors];
        unselected.shift();
        setUnselectedColors(unselected)
    }

    const addToArr = (summonerName) => {
        let color = selectedColors?.find((colorObj) => Object.keys(colorObj)[0] === summonerName)?
        selectedColors?.find((colorObj) => Object.keys(colorObj)[0] === summonerName): {};

        if(Object.keys(color)){
            setUnselectedColors([...unselectedColors, color[summonerName]])
        }

    }

    useEffect(()=>{
        console.log(unselectedColors)
    }, [unselectedColors])

    const getBg = (member) => {
        const color = selectedColors?.find((obj) => Object.keys(obj)[0] === member?.summonerName)? 
        selectedColors.find((obj) => Object.keys(obj)[0] === member.summonerName) : {};

        console.log(color[member.summonerName])
        if(Object.keys(color)){
            return color[member.summonerName]
        }
    }

    const getBorder = () => {
        return 'border'
    }

    const getChampion = (player) => {
        return champions[player]?.image;
    };

    const addOrRemovePlayer = (player) => {
        const finder = selectedPlayers?.find((member) => member?.summonerName === player?.summonerName) ?
        selectedPlayers?.find((member) => member?.summonerName === player?.summonerName) : {};

        if(finder?.summonerName){
            setSelectedColors(selectedColors.filter((obj) => Object.keys(obj)[0] !== player.summonerName))
            addToArr(player?.summonerName);
            setSelectedPlayers(selectedPlayers.filter((member) => member?.summonerName !== player?.summonerName))

        } else {
            setSelectedColors([...selectedColors, {[player.summonerName]: unselectedColors[0]}]);
            shiftArr();
            setSelectedPlayers([...selectedPlayers, player]);
        }

    }

    const btnHandler = (id) => {
        setBtnList((prevState) => {
            const modifyedBtn = [...prevState];
            modifyedBtn.filter((btn, index) => {
                return id === index
                    ? (btn.active = true)
                    : (btn.active = false);
            });
            return modifyedBtn;
        });
    };

    return (
        <div
            className={`  rounded-5px w-[90%] ml-auto mt-[20px] mr-[25px] ${
                !props.expand ? "h-0" : "h-[290px]"
            } [transition:height_0.4s] `}
        >
            {/* graph btns  */}

            {/* graph component  */}
            <div
                className={` ${!props.expand ? "opacity-[0]" : "opacity-[1] "}`}
            >
                <div className=" flex justify-between items-center mb-[35px] ">
                    {/* btns  */}
                    <div className=" flex gap-x-[15px]  ">
                        {btnList.map((btn, index) => {
                            return (
                                <button
                                    onClick={() => btnHandler(index)}
                                    key={index}
                                    className={` font-inter font-bold text-[10px] leading-[14px] rounded-full
                         text-white py-[5px] px-[15px] ${
                             btn.active
                                 ? " bg-[#d55460] border border-[#d55460]"
                                 : "bg-[#120c1d] border border-white "
                         } `}
                                >
                                    {btn.txt}
                                </button>
                            );
                        })}
                    </div>
                    {/* img btns  */}
                    <div className=" flex gap-x-[10px]  ">
                        {[props?.leftTeam, props?.rightTeam].map((team, imgIndex) => {
                            return (
                                <div
                                    className={` flex items-center justify-center gap-x-[5px] px-[10px] py-[6px] rounded-5px ${
                                        imgIndex === 0
                                            ? "bg-[#241122]"
                                            : "bg-[#181531] "
                                    }`}
                                    key={imgIndex}
                                >
                                    {team.map(
                                        (member, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className=" relative w-[35px] h-[35px] rounded-5px cursor-pointer"
                                                    onClick={() => addOrRemovePlayer(member)}
                                                >
                                                    <div
                                                        className={` w-full h-full  ${
                                                            selectedPlayers.filter((player) => player?.summonerName === member?.summonerName)[0] ? getBorder() : ""
                                                        } bg-transparent absolute left-0 top-0 rounded-5px z-50 `}
                                                        style={{
                                                            borderColor: `${selectedPlayers.filter((player) => player?.summonerName === member?.summonerName)[0] ? getBg(member) : ""}`
                                                        }}
                                                    ></div>
                                                    {getChampion(member?.championName) && (
                                                        <div
                                                            className="rounded-[5px]"
                                                            style={{
                                                                background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${
                                                                    getChampion(member?.championName)
                                                                        ?.sprite
                                                                }') no-repeat`,
                                                                width: `${
                                                                    getChampion(member?.championName)
                                                                        ?.w
                                                                }px`,
                                                                height: `${
                                                                    getChampion(member?.championName)
                                                                        ?.h
                                                                }px`,
                                                                backgroundPosition: `-${
                                                                    getChampion(member?.championName)
                                                                        ?.x
                                                                }px -${
                                                                    getChampion(member?.championName)
                                                                        ?.y
                                                                }px`,
                                                                // backgroundSize: "1000% 300%",
                                                                zoom: `0.75`,
                                                            }}
                                                        ></div>
                                                    )}
                                                </div>
                                            );
                                        }
                                    )}
                                    
                                    {/* {imgList.map((img, index) => {
                                    return (
                                        <div key={index} className=" relative w-[35px] h-[35px] rounded-5px ">
                                            
                                            <Image
                                                src={img}
                                                alt="player image"
                                                layout="fill"
                                                className=" rounded-5px "
                                            />
                                        </div>
                                    );
                                })} */}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <Graph
                        frames={props.frames}
                        selectedFrame={props.selectedFrame}
                        selectedPlayers={selectedPlayers}
                        selectedColors={selectedColors}
                        selectedBtn={btnList.filter((btn) => btn.active)[0]}
                    />
                </div>
            </div>
        </div>
    );
};

export default GraphElement;
