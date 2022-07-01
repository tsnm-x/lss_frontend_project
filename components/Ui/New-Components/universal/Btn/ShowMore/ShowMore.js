import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Classes from "./ShowMore.module.css";

const ShowMore = (props) => {
  const ClickHandler = () => {
        props?.click();
    };

    return (
        <button onClick={ClickHandler} className={`${Classes.BtnWrap}`}>
            <h3 className={` sf-bold-40 ${Classes.BtnTxt}`}>Show more</h3>
            <BsChevronDown className=" text-[20px]  text-white mx-auto " />
        </button>
    );
};

export default ShowMore;
