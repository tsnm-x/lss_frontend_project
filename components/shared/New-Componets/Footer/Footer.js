import React from "react";
import Logo from "../../../Ui/New-Components/universal/logo/Logo";

const Footer = (props) => {
    return (
        <footer
            className={` h-[250px] ${props.className}`}
        >
            <div className="container flex justify-between pt-[26px]  ">
                <div className=" w-[500px] ">
                    <Logo className=" font-[400] text-[25px] leading-[24px] text-[#FFF] " />
                    <p
                        className={` font-mazin font-[400] text-[14px] leading-[18px] text-white flex flex-col mt-[25px] ${props.textStyle}`}
                    >
                        <span>Lss.gg © 2022</span>
                        <span>
                            Lss.gg isn’t endorsed by Riot Games and doesn’t
                            reflect the views or opinions of Riot Games or
                            anyone officially involved in producing or managing
                            League of Legends. League of Legends and Riot Games
                            are trademarks or registered trademarks of Riot
                            Games, Inc. League of Legends © Riot Games, Inc.
                        </span>
                    </p>
                </div>
                <div className=" mt-[24px] ">
                    <h6 className=" font-mazin font-[700] text-[16px] leading-[20px] text-white ">Contact us:</h6>
                    <p className=" font-mazin font-normal text-[14px] leading-[18px] text-white mt-[38px] ">contact@lss.gg</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
