import React from "react";

const SmallBtn = (props) => {
    const clickHandler = () => {
        console.log("clicked");
        console.log("btn active", props.active);
        props.click();
    };
    return (
        <button
            onClick={clickHandler}
            className={`rounded-[7px] p-[11px_13px] bg-[#242326] hover:bg-[#353338] font-inter font-[700]
             text-[12px] leading-[20px] flex items-center justify-center ${
                 props.active ? "text-white" : "text-[#919192] "
             } ${props.className} `}
        >
            {props.children}
        </button>
    );
};

export default SmallBtn;

// <div className=" relative mr-[40px] ">
//                         <Link
//                             href={{
//                                 pathname: "/summoner/[region]/[summonerName]",
//                                 query: {
//                                     region: router?.query?.region,
//                                     summonerName: router?.query?.summonerName,
//                                 },
//                             }}
//                         >
//                             <button
//                                 onClick={() => controller("overview")}
//                                 className={` mazin-bold-21 capitalize  ${
//                                     currentView === "overview"
//                                         ? " text-accent-color"
//                                         : "text-grayed-text"
//                                 } `}
//                             >
//                                 overview
//                             </button>
//                         </Link>
//                         {currentView === "overview" ? (
//                             <div className=" bg-accent-color w-full h-[4px] absolute -bottom-[20.5px]  "></div>
//                         ) : null}
//                     </div>
//                     <div className=" relative ">
//                         <button
//                             onClick={() => controller("champPool")}
//                             className={` mazin-bold-21 capitalize ${
//                                 currentView === "champPool"
//                                     ? " text-accent-color"
//                                     : "text-grayed-text"
//                             } `}
//                         >
//                             champion pool
//                         </button>
//                         {currentView === "champPool" ? (
//                             <div className=" bg-accent-color w-full h-[4px] absolute -bottom-[20.5px] "></div>
//                         ) : null}
//                     </div>
