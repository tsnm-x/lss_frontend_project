import React from "react";
import one from "../../../../public/assets/live_simulator_timeline/top-row/one.png";
import two from "../../../../public/assets/live_simulator_timeline/top-row/two.png";
import three from "../../../../public/assets/live_simulator_timeline/top-row/three.png";
import four from "../../../../public/assets/live_simulator_timeline/top-row/four.png";
import five from "../../../../public/assets/live_simulator_timeline/top-row/five.png";
import six from "../../../../public/assets/live_simulator_timeline/top-row/six.png";
import Image from "next/image";

const BottomChart = () => {
    const topTimeRow = [
        {
            img: one,
        },
        {
            img: two,
            number: 6,
        },
        {
            img: three,
        },
        {
            img: four,
        },
        {
            img: five,
        },
        {
            img: six,
        },
        {
            img: one,
        },
    ];

    // top row generator
    const TopRow = (props) => {
        return (
            <div className={`grid grid-cols-7 h-[40px] ${props.className}`}>
                {topTimeRow.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className=" first:bg-[#fc2300] flex items-center justify-center w-[89px] "
                        >
                            <div
                                className={`relative ${
                                    index === 0
                                        ? "w-[21px] h-[21px] border border-[#FFFFFF] rounded-full "
                                        : "w-[26px] h-[26px] "
                                }`}
                            >
                                <Image
                                    src={item.img}
                                    alt="simple image"
                                    layout="fill"
                                />
                            </div>
                            {/* number  */}
                            {item.number && (
                                <div className=" w-[26px] h-[26px] rounded-full bg-[#fc2300] ml-[14px] flex justify-center items-center ">
                                    <p className=" font-sf-pro text-white text-[15px] ">{item.number}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };
    // bottom row generator
    const BottomRow = (props) => {
        return (
            <div className={`grid grid-cols-7 h-[40px] ${props.className}`}>
                {topTimeRow.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className=" first:bg-[#198cff] flex items-center justify-center w-[89px] "
                        >
                            <div
                                className={`relative ${
                                    index === 0
                                        ? "w-[21px] h-[21px] border border-[#FFFFFF] rounded-full "
                                        : "w-[26px] h-[26px] "
                                }`}
                            >
                                <Image
                                    src={item.img}
                                    alt="simple image"
                                    layout="fill"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className=" mx-auto w-[860px] mt-[30px] bg-[#ecf5fe] overflow-hidden rounded-[22px] ">
            {/* top row  */}
            <TopRow />
            <BottomRow />
        </div>
    );
};

export default BottomChart;
