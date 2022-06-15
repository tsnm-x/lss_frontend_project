import React from "react";

const Footer = (props) => {
    return (
        <footer className={`bg-footer-bg mt-9`}>
            <div className="container ">
                <div className="font-NEDGEN text-[5px] leading-[6px] text-grayed-text text-center max-w-[244px] mx-auto  bg-footer-bg py-[15px] ">
                    <p>Lss.gg © 2022</p>
                    <p>
                        Lss.gg isn’t endorsed by Riot Games and doesn’t reflect
                        the views or opinions of Riot Games or anyone officially
                        involved in producing or managing League of Legends.
                        League of Legends and Riot Games are trademarks or
                        registered trademarks of Riot Games, Inc. League of
                        Legends © Riot Games, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
