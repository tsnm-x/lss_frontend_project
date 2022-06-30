import React from "react";
import { SiNuxtdotjs } from "react-icons/si";
import Image from "next/image";
import ProfileImg from "../../../../../../../public/assets/new-images/Profile/card/Jiggesh.png";

const IconAndCount = (props) => {
    return (
        <div className=" flex first:mr-[10px] ">
            <SiNuxtdotjs className=" mr-2 " />{" "}
            <p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text ">
                {props.txt}
            </p>
        </div>
    );
};

const LosAndWinRow = (props) => {
    return (
        <div className=" mb-[37px] bg-card-&-content-box px-[25px] h-10 flex justify-center items-center gap-x-10 ">
            {/* loss  */}
            <div className=" text-accent-color flex justify-between items-center w-3/6 font-bold ">
                <IconAndCount txt="62.8k" />
                <div className=" flex items-center ">
                    <IconAndCount txt="5" />
                    <IconAndCount txt="2" />
                </div>
                <div className=" flex items-center ">
                    <IconAndCount txt="7" />
                    <IconAndCount txt="2" />
                </div>
                <p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
                    24/28/26
                </p>
                {/* indicator  */}
            </div>
            {/* los and wind  */}
            {props.showProfile ? (
                <div className=" relative overflow-hidden rounded w-10 h-10 ">
                    <Image src={ProfileImg} alt="Profile image" layout="fill" />
                </div>
            ) : (
                <div className=" flex gap-x-12 items-center">
                    <p className=" font-sf-pro-text text-[14px] leading-[16px] text-accent-color font-bold  ">
                        Loss
                    </p>
                    <p className=" font-sf-pro-text text-[14px] leading-[16px] text-accent-color-2 font-bold  ">
                        Win
                    </p>
                </div>
            )}

            {/* win  */}
            <div className=" text-accent-color-2 flex justify-between items-center w-3/6 font-bold ">
                {/* indicator  */}
                <p className=" font-sf-pro-text text-[14px] leading-[16px] text-light-text  ">
                    24/28/26
                </p>
                <div className=" flex items-center ">
                    <IconAndCount txt="7" />
                    <IconAndCount txt="2" />
                </div>
                <div className=" flex items-center ">
                    <IconAndCount txt="5" />
                    <IconAndCount txt="2" />
                </div>

                <IconAndCount txt="62.8k" />
            </div>
        </div>
    );
};

export default LosAndWinRow;
