import React from "react";
import Image from "next/image";
import ProfileWithBatch from "../../../Ui/ProfileWithBatch/ProfileWithBatch";
import VS_img from "../../../../public/assets/Live/suggested-builds/vs.png";

const LeftRankList = (props) => {
    return (
        <div className=" w-full flex flex-col mt-3 gap-y-4 ">
            {props.predictBuildsList.map((item, index) => {
                return (
                    <div
                        className={`flex items-center w-full justify-between pl-[30px] pr-[12px] rounded-tr-xl rounded-br-xl border-[0.1px] border-[#198cff3d] ${
                            item.active && " bg-white-blue"
                        }`}
                        key={index}
                    >
                        <div className=" order-1 ">
                            <ProfileWithBatch imgLink={item.main} />
                        </div>

                        <div className=" flex gap-x-3 bg-full-dark p-[3px] rounded-full ">
                            {item.list.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" relative w-4 h-4 "
                                    >
                                        <Image
                                            src={item}
                                            alt="award list"
                                            layout="fill"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const RightRankList = (props) => {
    return (
        <div className=" w-full flex flex-col mt-3 gap-y-4 ">
            {props.predictBuildsList.map((item, index) => {
                return (
                    <div
                        className={`flex items-center w-full justify-between pl-[30px] pr-[12px] rounded-tr-xl rounded-br-xl border-[0.1px] border-[#198cff3d] ${
                            item.active && " bg-white-blue"
                        }`}
                        key={index}
                    >
                        <div className=" order-1 ">
                            <ProfileWithBatch imgLink={item.main} />
                        </div>

                        <div className=" flex gap-x-3 bg-full-dark p-[3px] rounded-full ">
                            {item.list.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" relative w-4 h-4 "
                                    >
                                        <Image
                                            src={item}
                                            alt="award list"
                                            layout="fill"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const PredectionCard = (props) => {
    return (
        <div className=" flex flex-col bg-white items-start pb-8 rounded-t-lg  ">
            {/* top header  */}
            <div className=" flex justify-between w-5/6 mx-auto -mt-[15px] ">
                <h1 className=" gotham-10px-mid capitalize text-white px-8 py-[10px] bg-white-blue ">
                    predicted builds
                </h1>
                <h1 className=" gotham-10px-mid capitalize text-white px-8 py-[10px] bg-red-yellow-gold ">
                    predicted builds
                </h1>
            </div>
            <div className=" grid grid-cols-[1fr_50px_1fr] items-center w-full justify-between ">
                {/* left  */}
                <LeftRankList {...props} />
                {/* center vs  */}
                <div className=" relative w-[26px] h-[41px] ">
                    <Image src={VS_img} alt="vs icon" />
                </div>
                {/* right  */}
                {/* <RightRankList {...props} /> */}
                <h1>hello Mohd Rejoan</h1>
            </div>
        </div>
    );
};

export default PredectionCard;