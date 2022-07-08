import React from "react";

const SimulateBtn = (props) => {
    const clickHandler = () => {
        props.click ? props.click() : console.log('please input the click function on SimulateBtn file');
    }
    return (
        <button
            onClick={clickHandler}
            className={`sf-bold-23 capitalize text-light-text bg-nav-btn rounded-5px py-[20px] px-[30px] ${props.className}`}
            disabled={props.showRunes}
        >
            Simulate game
        </button>
    );
};

export default SimulateBtn;
