import React from "react";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { BiCaretDown } from "react-icons/bi";
import Image from "next/image";
import EnglishFlag from "../../../../../public/assets/new-images/Flags/GB.png";
import FrenchFlag from "../../../../../public/assets/new-images/Flags/FR.png";
import GermanFlag from "../../../../../public/assets/new-images/Flags/DE.png";

const LanguageSelect = (props) => {
    const [activeLanguage, setActiveLanguage] = useState({
        name: "english",
    });
    const [showLangList, setShowLangList] = useState(false);
    const languageList = [
        {
            name: "english",
            icon: EnglishFlag,
        },
        {
            name: "franch",
            icon: FrenchFlag,
        },
        {
            name: "german",
            icon: GermanFlag,
        },
    ];

    const activeLangHandler = (lang) => {
        if (activeLanguage === lang) {
            return;
        }
        setActiveLanguage((prevLang) => {
            return {
                name: lang,
            };
        });
        setShowLangList(false);
    };

    const listShowHideHandler = () => {
        setShowLangList(!showLangList);
    };

    return (
        <div className=" relative ">
            <div
                onClick={listShowHideHandler}
                className=" relative z-[60] bg-headBorder rounded-[6px] px-[11px] h-[45px] flex items-center justify-between cursor-pointer w-[123px] "
            >
                <BiCaretDown className=" text-[17px] text-white mr-[8px] " />
                { (
                    <h6 className=" text-white sf-mid-16 pr-[5px] capitalize ">
                        {activeLanguage.name}
                    </h6>
                )}
                <TbWorld className=" text-[24px] text-white" />
            </div>
            {/* language list  */}
            {showLangList && (
                <ul className="  absolute z-[55] left-0 top-[35px] w-[123px] pt-2 bg-headBorder rounded-[6px]  ">
                    {languageList.map((language, index) => {
                        return (
                            <li
                                onClick={() => activeLangHandler(language.name)}
                                key={index}
                                className=" cursor-pointer p-[11px] pl-[16px]  flex items-center justify-between  "
                            >
                                <h6 className=" text-white sf-mid-16 capitalize ">
                                    {language.name}
                                </h6>
                                <div className=" relative w-[24px] h-[17.2px] ">
                                    <Image
                                        src={language.icon}
                                        alt="country flag"
                                        layout="fill"
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelect;
