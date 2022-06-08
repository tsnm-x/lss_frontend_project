import React from "react";
import one from "../../../../public/assets/live_simulator_timeline/top-row/one.png";
import two from "../../../../public/assets/live_simulator_timeline/top-row/two.png";
import three from "../../../../public/assets/live_simulator_timeline/top-row/three.png";
import four from "../../../../public/assets/live_simulator_timeline/top-row/four.png";
import five from "../../../../public/assets/live_simulator_timeline/top-row/five.png";
import six from "../../../../public/assets/live_simulator_timeline/top-row/six.png";

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

    return (
        <div className=" mx-auto w-[860px] pb-[45px] mt-[30px] ">
            <div className="">
                {/* top row  */}
                <div className=" grid grid-cols-6 "></div>
            </div>
        </div>
    );
};

export default BottomChart;
