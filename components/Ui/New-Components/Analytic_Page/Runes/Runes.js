import React from "react";
import DataRow from "./DataRow";
import Classess from "./Runes.module.css";
import ProfileImg from "../../../../../public/assets/new-images/Analytics-page/profile-img.png";
import Batch1 from "../../../../../public/assets/new-images/Analytics-page/batch1.png";
import Batch2 from "../../../../../public/assets/new-images/Analytics-page/batch2.png";
import Power1 from "../../../../../public/assets/new-images/Analytics-page/power1.png";
import Power2 from "../../../../../public/assets/new-images/Analytics-page/power-2.png";

const Runes = () => {
    const TeamData = {
        redTeam: [
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
        ],
        blueTeam: [
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
            {
                profile: {
                    img: ProfileImg,
                    batch: [Batch1, Batch2],
                    power: [Power1, Power2],
                },
                list: ["", "", "", "", "", ""],
            },
        ],
    };

    return (
        <section>
            <div className="container bg-[#110a1b] max-w-[1340px] px-[15px] ">
                {/* header section  */}
                <div className=" w-[1310px] h-[30px] bg-[#1b1425] rounded-5px grid grid-cols-[351px_490px_351px] gap-x-[60px] mt-1 ">
                    <div className=" max-w-[351px] grid grid-cols-[165px_93px] h-full items-center gap-x-[32.7px] px-[30px] rounded-5px ">
                        <h1 className=" sf-bold-14 text-[#8d8992] text-center ">
                            Items
                        </h1>
                        <h1 className=" sf-bold-14 text-[#8d8992] capitalize ">
                            blue team
                        </h1>
                    </div>
                    {/* center resolve  */}
                    <div></div>
                    {/* blue team */}
                    <div className=" max-w-[351px] grid grid-cols-[93px_165px] h-full items-center gap-x-[32.7px] px-[30px] rounded-5px ">
                        <h1 className=" sf-bold-14 text-[#8d8992] capitalize text-right ">
                            blue team
                        </h1>
                        <h1 className=" sf-bold-14 text-[#8d8992] text-center ">
                            Items
                        </h1>
                    </div>
                </div>
                {/* data container  */}
                <div className=" grid grid-cols-[351px_490px_351px] gap-x-[60px] mt-[6px] ">
                    {/* red team  */}
                    <div className=" flex flex-col gap-y-[11px] ">
                        {TeamData.redTeam.map((data, index) => {
                            return <DataRow key={index} {...data} />;
                        })}
                    </div>
                    {/* center resolve  */}
                    <div className=" flex items-center justify-center bg-[#175174] text-5xl capitalize rounded-5px border border-[#929292] ">
                        <h1 className=" text-white text-center ">
                            coming soon
                        </h1>
                    </div>
                    {/* blue team */}
                    <div className=" flex flex-col gap-y-[11px] ">
                        {TeamData.redTeam.map((data, index) => {
                            return (
                                <DataRow reverse={true} key={index} {...data} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Runes;
