import React, { useEffect, useState } from "react";
import HeaderWithSearchbar from "../../components/shared/New-Componets/HeaderWithSearchbar/HeaderWithSearchbar";
import ErrorComponent from "../../components/Ui/New-Components/SummonerNotFound/ErrorComponent/ErrorComponent";
import Footer from '../../components/shared/New-Componets/Footer/Footer'
import classes from '../../styles/index.module.css'
import useHttp from "../../hook/useHttp";
import { useRouter } from "next/router";

const SummonerNotFound = () => {
    const router = useRouter();
    const [summonersFromOtherAreas, setSummonersFromOtherAreas] = useState([]);
    const summoners = [];
    const [regions, setRegions] = useState([]);
    const [regionObj, setRegionObj] = useState({})
    const [refresher, setRefresher] = useState(false);
    const [summonerName, setSummonerName] = useState("");
    const { hasError, sendRequest } = useHttp();

    const requestHandler = (res) => {
        setRefresher(false);
        if(!res){
            console.log(res, "no response from the server");
            return;
        }

        summoners.push({region: res.data.region, summonerName: res.data.name})

        console.log(summoners)

        setSummonersFromOtherAreas(summoners)
        setRefresher(true);

    }

    const getSummonersFromOtherAreas = (region, summonerName) => {
        console.log(region);
        console.log(summonerName);
        sendRequest(
            {
                url: "/summonerName",
                method: "GET",
                params: {
                    region,
                    summonerName,
                },
            },
            requestHandler
        );
    }

    useEffect(() => {
        setRegions(router.query.reqServers);
        setSummonerName(router.query.summonerName)
    }, [router.query.reqServers, router.query.summonerName]);

    useEffect(()=>{
        setRegionObj(JSON.parse(router.query.regionFullName))
    }, [router.query.regionFullName])

    useEffect(()=>{
        regions?.forEach((region)=> getSummonersFromOtherAreas(region, summonerName));
    }, [regions, summonerName]);

    useEffect(()=>{
        console.log(summonersFromOtherAreas)
    }, [summonersFromOtherAreas])

    return (
        <div
            className={` laptop:flex laptop:flex-col laptop:flex-wrap laptop:justify-between laptop:min-h-screen ${classes.mainWrapper}`}
        >
            <HeaderWithSearchbar className=" tablet:pt-[10px] " />
            {regionObj && (
                <ErrorComponent
                    className=" h-[88vh] absolute left-0 bottom-0 w-screen 
                    smTablet:static smTablet:h-[initial] smTablet:mt-[70px] desktop:mt-[165px] "
                    summonerName={summonerName}
                    summonersFromOtherAreas = {summonersFromOtherAreas}
                    regions={regionObj}
                    />
            )}
        <Footer textStyle="text-grayed-text text-center smMobile:w-[244px]
             smTablet:container tablet:w-[722px] tablet:text-[8px] tablet:leading-[10px]
             laptop:pb-[25px] desktop:py-[0px] desktop:text-[10px]
             desktop:leading-[12px] " className=" desktop:mt-[73px] " />
        </div>
    );
};

export default SummonerNotFound;
