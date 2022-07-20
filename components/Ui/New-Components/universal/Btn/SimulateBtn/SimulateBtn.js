import React, { useState } from "react";
import Loader from "../../../../../shared/Old-Shared-Components/loader/Loader"
const SimulateBtn = (props) => {
    const [loaderViewer, setLoaderViewer] = useState(false)
    const clickHandler = () => {
        props.click ? props.click() : console.log('please input the click function on SimulateBtn file');
        setLoaderViewer(true)
    }
    return (
        <>
            <button
                onClick={clickHandler}
                className={`sf-bold-23 capitalize text-light-text bg-nav-btn rounded-5px py-[20px] px-[30px] ${props.className}`}
                disabled={props.showRunes}
            >
                {
                    loaderViewer && !props.showSimulatedGraph ? (
                        <Loader/>
                    ) : "Simulate game"
                }
            </button>
        </>
    );
};

export default SimulateBtn;
