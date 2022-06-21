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

    return (
        <div className=" mt-[23px] ">
            <h2 className=" sf-mid-20 text-white mobile:text-[15px] mobile:max-w-[185px] smTablet:hidden ">
                We found these summoners from other regions for you :)
            </h2>
            {/* summoner details    */}
            <div className=" grid grid-cols-3 mt-10 mobile:mt-[13px] smTablet:mt-0 ">
                {selectionNameList.map((item, index) => {
                    return (
                        <div key={"card" + index}>
                            <h2 className=" sf-bold-15 text-white uppercase smTablet:sf-bold-27 ">
                                {item.name}
                            </h2>
                            <h4
                                className=" sf-bold-12 text-accent-color mt-[18px] mobile:mt-[12px] 
                                         smTablet:sf-bold-27 smTablet:mt-0 "
                            >
                                example
                            </h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ErrorDetails;
