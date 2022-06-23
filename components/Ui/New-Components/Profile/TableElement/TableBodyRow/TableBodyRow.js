import React from "react";
import classes from "../Table.module.css";
import Image from "next/image";

const Champion = (props) => {
    return (
        <div className=" flex items-center ">
            <div className=" relative w-[29px] h-[29px] mr-[7px] ">
                <Image src={props[0].img} alt="image" layout="fill" />
            </div>
            <p className=" text-light-text capitalize">
                {props[0].name}{" "}
                <span className=" text-grayed-text">({props[0].games} Games)</span>
            </p>
        </div>
    );
};

const TableBodyRow = (props) => {
    return (
        <div className={` ${classes.tableBodyRow} ${props.className}`}>
            <div className=" text-grayed-text">#{props.rank}</div>
            <div className=" text-light-text uppercase ">{props.role}</div>
            <Champion {...props.champion} />
            <div className=" text-accent-color-3">{props.wr}</div>
            <div className=" text-accent-color-3">
                {props.kda}
                <span className=" text-grayed-text">:{props.kdaThunk}</span>
            </div>
            <div className=" text-light-text">{props.csMin}</div>
            <div className=" text-accent-color-3 ">
                {props.goldMin}{" "}
                <span className=" text-grayed-text capitalize text-[12px] ">
                    g/min
                </span>
            </div>
            <div className=" text-light-text ">
                {props.damageDealt.toLocaleString()}
            </div>
        </div>
    );
};

export default TableBodyRow;
