import React from "react";

const Footer = (props) => {
    return (
        <footer
            className={` overflow-x-hidden bg-footer-bg mt-9 desktop:py-[43px] laptop:bg-[#241e2c41] ${props.className}`}
        >
            <div className="container ">
                <div
                    className={` nedgen-regular-5 mx-auto py-[15px] smTablet:nedgen-regular-10 ${props.textStyle}`}
                >
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
