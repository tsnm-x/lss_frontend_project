import React from "react";

const ErrorDetails = () => {
    const errorDetails = [
        {
            countryName: "euw",
            summoner: "beanovi",
        },
        {
            countryName: "na",
            summoner: "beanovi",
        },
        {
            countryName: "kr",
            summoner: "beanovi",
        },
    ];

    return (
        <div>
            <h2 className=" sf-mid-20 text-white">
                We found these summoners from other regions for you :)
            </h2>
            {/* summoner details    */}
            <div className=" grid grid-cols-3 mt-10">
                {errorDetails.map((item, index) => {
                    return (
                        <div key={"card" + index}>
                            <h2 className=" sf-bold-15 text-white uppercase">{item.countryName}</h2>
                            <h4 className=" sf-bold-12 text-accent-color capitalize mt-[18px] ">{item.summoner}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ErrorDetails;
