import React from 'react'

// header bar
const HeaderBar = (props) => {
    return (
        <div className=" grid grid-cols-[140px_100px_97px_93px_215px_120px_120px] items-center py-2 bg-[#160f20] ">
            <h1 className=" sf-bold-10 capitalize text-grayed-text ml-[15px] ">
                <span
                    className={` ${
                        props.type === "Defeat"
                            ? "text-accent-color"
                            : "text-accent-color-2"
                    } sf-bold-14 mr-[5px] `}
                >
                    {props.type}
                </span>{" "}
                {props.type === "Defeat" ? "(Red Team)" : "(Blue Team)"}
            </h1>
            <h1 className=" sf-bold-10  capitalize text-grayed-text text-center "></h1>
            <h1 className=" sf-bold-10  capitalize text-grayed-text text-center ">
                Creep Score
            </h1>
            <h1 className=" text-center sf-bold-10 capitalize text-grayed-text ">
                score
            </h1>
            <h1 className=" sf-bold-10  capitalize text-grayed-text ">items</h1>
            <h1 className=" text-center  sf-bold-10  capitalize text-grayed-text ">
                Damage Dealt
            </h1>
            <h1 className=" ml-2  sf-bold-10  capitalize text-grayed-text ">
                gold
            </h1>
        </div>
    );
};

export default HeaderBar