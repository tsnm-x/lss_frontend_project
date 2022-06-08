import React from "react";
import Image from "next/image";
import ProfileWithBatch from "../../../Ui/ProfileWithBatch/ProfileWithBatch";
import VS_img from "../../../../public/assets/Live/suggested-builds/vs.png";
import ProfileImage from '../../../../public/assets/oftenPlayedWith/south-korea.png'

const LeftRankList = (props) => {
    console.log('your predection cards' , props)
    return (
        <div
            className={`w-[170px] flex flex-col mt-3 ${props.className}`}
        >
            {props.predictBuildsList.map((item, index) => {
                return (
                    <div
                        className={`flex items-center w-full justify-between rounded-tr-xl rounded-br-xl border-[0.1px] border-[#198cff3d] pl-[15px] mb-[4px] ${
                            item.active && " bg-white-blue"
                        }`}
                        key={index}
                    >
                        <div className=" flex bg-full-dark  items-center p-[1px] pr-[3px] rounded-full ">
                            {item.list.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" relative w-[13px] h-[13px] border-0_3 border-white-blue first:border first:border-[#FFD700] mr-[1px] first:mr-[0] last:mr-[0] first:w-[16px] first:h-[16px] rounded-full   "
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

                        <div className=" w-[7px] h-[7px] bg-white border-[0.1px] border-[#707070] rounded-full"></div>

                        <div className="">
                            <ProfileWithBatch imgLink={ProfileImage} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


const PredectionCard = (props) => {


    return (
        <div
            className={`flex flex-col bg-white items-start pb-8 rounded-t-lg ${props.className}`}
        >
            {/* top header  */}
            <div className=" flex justify-between w-5/6 mx-auto -mt-[15px] font-sf-pro text-[5px] leading-[10px] text-center text-white capitalize ">
                <h1 className=" bg-white-blue w-[80px] ">
                    predicted builds 
                </h1>
                <h1 className=" bg-red-yellow-gold w-[80px] ">
                    predicted builds 
                </h1>
            </div>
            <div className=" grid grid-cols-[171px_auto_171px] items-center w-full justify-between ">
                {/* left  */}
                <LeftRankList {...props} />
                {/* center vs  */}
                <div className=" relative w-[26px] h-[41px] ">
                    <Image src={VS_img} alt="vs icon" />
                </div>
                {/* right  */}
                
            </div>
        </div>
    );
};

export default PredectionCard;
