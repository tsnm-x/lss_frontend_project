import React from "react";
import HeaderWithSearchbar from "../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar";
import ErrorComponent from "../../components/Ui/New-Components/SummonerNotFound/ErrorComponent/ErrorComponent";
import Footer from '../../components/shared/New-Componets/Footer/Footer'


const summonerNotFound = () => {
    return (
        <>
            <HeaderWithSearchbar className=" tablet:pt-[10px] " />
            <ErrorComponent
                className=" h-[88vh] absolute left-0 bottom-0 w-screen 
            smTablet:static smTablet:h-[initial] smTablet:mt-[70px] "
            />
            <Footer textStyle="text-grayed-text text-center smMobile:w-[244px] smTablet:container tablet:w-[722px] tablet:text-[8px] tablet:leading-[10px] laptop:pb-[25px] desktop:py-[0px] " />
        </>
    );
};

export default summonerNotFound;
