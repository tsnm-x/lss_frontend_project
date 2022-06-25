import React from "react";

const SimulateBtn = (props) => {
    return (
        <button
            className={`sf-bold-23 capitalize text-light-text bg-nav-btn rounded-5px py-[20px] px-[30px] ${props.className}`}
        >
            Simulate game
        </button>
    );
};

export default SimulateBtn;
