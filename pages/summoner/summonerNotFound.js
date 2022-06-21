import React from "react";
import HeaderWithSearchbar from "../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar";
import ErrorComponent from "../../components/Ui/New-Components/SummonerNotFound/ErrorComponent/ErrorComponent";
import Footer from '../../components/shared/New-Componets/Footer/Footer'
import classes from '../../styles/index.module.css'

const summonerNotFound = () => {
    return (
        <div
            className={` laptop:flex laptop:flex-col laptop:flex-wrap laptop:justify-between laptop:min-h-screen ${classes.mainWrapper}`}
        >
            <HeaderWithSearchbar className=" tablet:pt-[10px] " />
            <ErrorComponent
                className=" h-[88vh] absolute left-0 bottom-0 w-screen 
            smTablet:static smTablet:h-[initial] smTablet:mt-[70px] "
            />
            <Footer textStyle="text-grayed-text text-center smMobile:w-[244px] smTablet:container tablet:w-[722px] tablet:text-[8px] tablet:leading-[10px] laptop:pb-[25px] laptop:bg-[#241e2c41] desktop:py-[0px] " />
        </div>
    );
};

export default summonerNotFound;
