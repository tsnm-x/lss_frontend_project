import React from "react";
import { SiNuxtdotjs } from "react-icons/si";

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

const LosAndWinRow = () => {
    return (
        <div className=" mb-[37px] bg-card-&-content-box px-[25px] py-[10px] flex justify-center ">
            {/* loss  */}
            <div className=" text-accent-color flex justify-between mr-6 w-3/6 font-bold ">
                <IconAndCount txt="62.8k" />
                <div className=" flex items-center ">
                    <IconAndCount txt="5" />
                    <IconAndCount txt="2" />
                </div>
                <div className=" flex items-center ">
                    <IconAndCount txt="7" />
                    <IconAndCount txt="2" />
                </div>
                <p className=" font-sf-pro-text text-[14px] leading-[16px]  ">
                    24/28/26
                </p>
                {/* indicator  */}
                <p className=" font-sf-pro-text text-[14px] leading-[16px]  ">
                    Loss
                </p>
            </div>
            {/* win  */}
            <div className=" text-accent-color-2 flex justify-between ml-6 w-3/6 font-bold ">
                {/* indicator  */}
                <p className=" font-sf-pro-text text-[14px] leading-[16px]  ">
                    Win
                </p>
                <p className=" font-sf-pro-text text-[14px] leading-[16px]  ">
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
