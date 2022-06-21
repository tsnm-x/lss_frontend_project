import React, { useState } from "react";

const ErrorDetails = () => {
    const [selectionNameList, setSelectionName] = useState([
        {
            name: "NA",
            active: true,
            fullName: "north america",
        },
        {
            name: "euw",
            active: false,
            fullName: "europe west",
        },
        {
            name: "eun",
            active: false,
            fullName: "Eu Nordic and East",
        },
    ]);

    const selectionNameLargeScreen = [
        {
            name: "north america",
            user: "exampleError",
        },
        {
            name: "europe west",
        },
        {
            name: "EU Nordic and East",
        },
        {
            name: "Korea",
        },
        {
            name: "Japan",
            user: "exampleError",
        },
        {
            name: "Latin America North",
        },
        {
            name: "Latin America South",
        },
    ];

    return (
        <div className=" mt-[23px] desktop:mt-0 ">
            <h2 className=" sf-mid-20 text-white mobile:text-[15px] mobile:max-w-[185px] smTablet:hidden ">
                We found these summoners from other regions for you :)
            </h2>
            {/* summoner details    */}
            <div className=" grid grid-cols-3 mt-10 mobile:mt-[13px] smTablet:mt-0 laptop:mt-[70px] laptop:max-w-[550px]
                    desktop:mt-[110px] ">
                {/* small screen  */}
                {selectionNameList.map((item, index) => {
                    return (
                        <div className=" laptop:hidden" key={"card" + index}>
                            <h2 className=" sf-bold-15 text-white uppercase smTablet:sf-bold-27 ">
                                {item.name}
                            </h2>
                            <h4
                                className=" sf-bold-12 text-accent-color mt-[18px] mobile:mt-[12px] 
                                         smTablet:sf-bold-27 smTablet:mt-0"
                            >
                                example
                            </h4>
                        </div>
                    );
                })}
                {/* large screen  */}
                {selectionNameLargeScreen.map((item, index) => {
                    return (
                        <div key={index} className=" hidden laptop:block mb-[50px] desktop:mb-[59px] ">
                            <h2
                                className={`sf-bold-15 text-[14px] capitalize desktop:text-[18px] desktop:leading-[24px]  ${
                                    item.user
                                        ? "text-white"
                                        : "text-grayed-text"
                                } `}
                            >
                                {item.name}
                            </h2>
                            <h4
                                className={`sf-bold-12 text-accent-color mt-[7px] capitalize desktop:text-[16px] desktop:leading-[21px] `}
                            >
                                {item.user}
                            </h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ErrorDetails;
