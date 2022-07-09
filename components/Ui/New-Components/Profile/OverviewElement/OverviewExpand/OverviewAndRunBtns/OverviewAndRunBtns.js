import React, { useEffect, useState } from "react";

const OverviewAndRunBtns = (props) => {
    const [btns, setBtns] = useState([
        { text: "overview", active: true },
        { text: "runes", active: false },
    ]);

    const [cancelExpand, setCancelExpand] = useState(false);

    useEffect(()=>{
       if(cancelExpand){
            props.setExpand(false); 
            props.expandControl(false);
       }
    }, [cancelExpand])

    const ClickHandler = (txt) => {
        setBtns((prevState) => {
            const modifyedArray = [];
            prevState.forEach((item, index) => {
                item.text === txt
                    ? (item.active = true)
                    : (item.active = false);
                modifyedArray.push(item);
            });
            return modifyedArray;
        });
        txt === "runes" ? props.runesHandler(true) : props.runesHandler(false);
    };

    return (
        <div className=" mt-[18px] mb-[30px] text-center smDesktop:mt-5 smDesktop:mb-9 ">
            {btns.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => ClickHandler(item.text)}
                        className={`font-sf-pro-text text-[19px]
             leading-[23px] font-bold capitalize mx-[40px] smDesktop:text-[20px] smDesktop:leading-[24px] ${
                 item.active ? "text-accent-color" : "text-grayed-text"
             } `}
                    >
                        {item.text}
                    </button>
                );
            })}
            <button
                className={`font-sf-pro-text text-[14px] leading-[16px] text-nav-btn
                    capitalize font-bold tracking-wider border-b-[2px]
                    border-nav-btn pb-1 `}
                    onClick={() => setCancelExpand(true)}
            >
                Leave
            </button>
        </div>
    );
};

export default OverviewAndRunBtns;
