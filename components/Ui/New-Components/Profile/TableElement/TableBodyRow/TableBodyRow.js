import React from "react";
import classes from "../Table.module.css";
import Image from "next/image";

const Champion = (props) => {
    return (
        <div className=" flex items-center ">
            <div className=" relative w-[29px] h-[29px] mr-[7px] ">
                <Image src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${props.championName}.png`} alt="image" layout="fill" />
            </div>
            <p className=" text-light-text capitalize">
                {props.championName}{" "}
                <span className=" text-grayed-text">({props.winCount + props.lossCount} Games)</span>
            </p>
        </div>
    );
};

const TableBodyRow = (props) => {
    return (
        <div className={` ${classes.tableBodyRow} ${props.className}`}>
            <div className=" text-grayed-text">#{props.champLevel}</div>
            <div className=" text-light-text uppercase ">{props.role}</div>
            <Champion {...props} />
            <div className=" text-accent-color-3">{(props.winCount / (props.winCount + props.lossCount) * 100).toFixed(2)}</div>
            <div className=" text-accent-color-3">
            {(((props.totalAssists + props.totalKills) / (props.totalDeaths? props.totalDeaths : 1)).toFixed(2))}
                <span className=" text-grayed-text">:1</span>
            </div>
            <div className=" text-light-text">{props.avgCs.toFixed(2)}</div>
            <div className=" text-accent-color-3 ">
                {props.goldPerMinute.toFixed(2)}{" "}
                <span className=" text-grayed-text capitalize text-[12px] ">
                    g/min
                </span>
            </div>
            <div className=" text-light-text ">
                {props.totalDamageDealt.toLocaleString()}
            </div>
        </div>
    );
};

export default TableBodyRow;
