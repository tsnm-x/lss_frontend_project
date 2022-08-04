import React from "react";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { BiCaretDown } from "react-icons/bi";

const LanguageSelect = (props) => {
    const [selectedLanguage] = useState({});
    const languageList = [
        {
            name: "english",
            icon: undefined,
            active: true,
        },
        {
            name: "franch",
            icon: undefined,
            active: true,
        },
    ];

    return (
        <div>
            <div className=" bg-[#141726] rounded-[6px] p-[11px] flex items-center  ">
                <BiCaretDown className=" text-[17px] text-white mr-[8px] " />
                <h6 className=" text-white sf-bold-16 pr-[5px] ">English</h6>
                <TbWorld className=" text-[24px] text-white" />
        </div>
        {/* language list  */}
        <ul>
          {languageList.map((language, index) => {
            return (
              <li key={index}></li>
            )
          })}
        </ul>
        </div>
    );
};

export default LanguageSelect;
