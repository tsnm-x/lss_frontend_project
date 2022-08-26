import React from "react";

const RankHover = (props) => {
    return (
        <div
            className={` ${
                props.item === 6632 && props.index === 0
                    ? " block "
                    : " hidden "
            } w-[555px] border bg-[#241e2c] p-[17px_42px_27px_45px] absolute z-10 no-repeat  `}
            
        >
            <div
                className={`rounded-full ${
                    mythicHighlighter(item)
                        ? props?.convertM(props?.match?.duration) <= 5
                            ? "border-2 border-[#FEFCE8]"
                            : mainPlayer?.win
                            ? "border-2 border-[#198cff]"
                            : "border-2 border-[#D55460]"
                        : ""
                }`}
                style={{
                    background: `url('https://ddragon.leagueoflegends.com/cdn/12.14.1/img/sprite/${
                        getItem(item)?.sprite
                    }') no-repeat`,
                    width: `${getItem(item)?.w}px`,
                    height: `${getItem(item)?.h}px`,
                    backgroundPosition: `-${getItem(item)?.x}px -${
                        getItem(item)?.y
                    }px`,
                    // backgroundSize: "contain",
                    zoom: `0.63`,
                }}
            ></div>
        </div>
    );
};

export default RankHover;
