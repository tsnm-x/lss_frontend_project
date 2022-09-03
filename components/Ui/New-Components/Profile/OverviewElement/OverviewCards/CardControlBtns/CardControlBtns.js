import React from "react";
import SmallBtn from "../../../../../../shared/Btn/SmallBtn";

const CardControlBtns = (props) => {
    const filterMatches = (btn) => {
        props.setSelectedMatchType(btn);
    };
    return (
        <div className=" bg-cardBg p-[6px] rounded-[4px] gap-x-[10px] inline-flex ">
            {props?.ControlBtnLists.map((btnName, index) => {
                return (
                    <SmallBtn
                        key={index}
                        click={() => filterMatches(btnName)}
                        active={btnName === props.selectedMatchType}
                        className=" capitalize "
                    >
                        {btnName}
                    </SmallBtn>
                );
            })}
        </div>
    );
};

export default CardControlBtns;
