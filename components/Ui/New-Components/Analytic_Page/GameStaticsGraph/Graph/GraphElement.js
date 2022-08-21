import React, { useState } from "react";
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

const GraphElement = (props) => {
    const [btnList, setBtnList] = useState([
        {
            txt: "Damage Dealt",
            active: true,
        },
        {
            txt: "CS/Time",
            active: false,
        },
        {
            txt: "Gold/Time",
            active: false,
        },
        {
            txt: "XP/Time",
            active: false,
        },
    ]);

    const playerList = {
        red: [
            { img: ImgOne, active: true, border: "#d55460" },
            { img: ImgTwo, active: false },
            { img: ImgThree, active: true, border: "#5d7cf6" },
            { img: ImgFour, active: false },
            { img: ImgFive, active: false },
        ],
        blue: [
            { img: ImgSix, active: false },
            { img: ImgSeven, active: true, border: "#ffd964" },
            { img: ImgThree, active: false },
            { img: ImgFour, active: false },
            { img: ImgFive, active: false },
        ],
    };

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
                        {Object.keys(playerList).map((imgList, imgIndex) => {
                            return (
                                <div
                                    className={` flex items-center justify-center gap-x-[5px] px-[10px] py-[6px] rounded-5px ${
                                        imgList === "red"
                                            ? "bg-[#241122]"
                                            : "bg-[#181531] "
                                    }`}
                                    key={imgIndex}
                                >
                                    {playerList[imgList].map(
                                        (component, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className=" relative w-[35px] h-[35px] rounded-5px "
                                                >
                                                    <div
                                                        className={` w-full h-full  ${
                                                            component.active &&
                                                            `border-[${component.border}] border-[2px]`
                                                        } bg-transparent absolute left-0 top-0 rounded-5px z-50 `}
                                                    ></div>
                                                    <Image
                                                        src={component.img}
                                                        alt="player image"
                                                        layout="fill"
                                                        className=" rounded-5px "
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
                                    {console.log(playerList[imgList])}
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
                        selectedPlayers={props.selectedPlayers}
                    />
                </div>
            </div>
        </div>
    );
};

export default GraphElement;
