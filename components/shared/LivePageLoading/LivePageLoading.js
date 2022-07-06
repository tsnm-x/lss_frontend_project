import React, { useEffect, useState } from "react";
import classes from "./LivePageLoading.module.css";
import LiveWhiteCardWrapHoc from "../../HOC/old-components/LiveWhiteCardWrapHoc/LiveWhiteCardWrapHoc";
import Image from "next/image";
import SwordImage from "../../../public/assets/old-images/Live/sord.png";
import Link from "next/link";

const LivePageLoading = () => {
    return (
        <div className=" w-[250px] ml-[15%] 2xl:w-[280px] ">
            <Image src={SwordImage} alt="sword image" />
        </div>
    );
};

export default LiveWhiteCardWrapHoc(LivePageLoading);
