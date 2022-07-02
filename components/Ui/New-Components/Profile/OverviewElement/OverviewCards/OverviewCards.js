import React, { useEffect, useState } from "react";
import Image from "next/image";
import AdsImg from "../../../../../../public/assets/new-images/Profile/ads.png";
import CardControlBtns from "./CardControlBtns/CardControlBtns";
import Card from "./Card/Card";
import ShowMore from "../../../universal/Btn/ShowMore/ShowMore";
import ExpandCard from "../OverviewExpand/ExpandCard/ExpandCard";

const OverviewCards = (props) => {
    const { cards } = props;
    const [loaderViewer, setLoaderViewer] = useState(true)
    const [rankedSolo, setRankedSolo] = useState([]);
	const [normals, setNormals] = useState([]);
	const [rankedFlex, setRankedFlex] = useState([]);

    useEffect(()=>{

		setRankedSolo(props.matches?.filter((match)=>{
			return match.queueId === 420
		}));

		setNormals(props.matches?.filter((match)=>{
			return (match.queueId !== 420 && match.queueId !== 440)
		}))

		setRankedFlex(props.matches?.filter((match)=>{
			return match.queueId === 440
		}))


	}, [props.matches])

    useEffect(()=>{
		(!rankedSolo.length && props.selectedMatchType === "ranked solo") ||
		(!normals.length && props.selectedMatchType === "normals") ||
		(!rankedFlex.length && props.selectedMatchType === "ranked flex")?
		setLoaderViewer(false) :
		setLoaderViewer(true)

	}, [rankedSolo, normals, rankedFlex, props.selectedMatchType])
    return (
        <aside className={` w-full ${props.expand && 'card-expand'}`}>
            <CardControlBtns selectedMatchType={props?.selectedMatchType} setSelectedMatchType={props?.setSelectedMatchType} ControlBtnLists={props?.ControlBtnLists}/>
            <div className=" mt-5 relative">
                {/* card container  */}
                <div className=" ">
                    {/* experimental expand card  */}
                    {/* <ExpandCard /> */}
                    {/* card list  */}
                    {props.matches[0] && props.selectedMatchType === "all" && props.matches.map((match, index) => {
                        return <Card key={index} index={index} match={match} region={props?.region}/>;
                    })}

                    {rankedSolo[0] && props.selectedMatchType === "ranked solo" && rankedSolo.map((match, index) => {
                        return <Card key={index} index={index} match={match} region={props?.region} />;
                    })}

                    {rankedFlex[0] && props.selectedMatchType === "ranked flex" && rankedFlex.map((match, index) => {
                        return <Card key={index} index={index} match={match} region={props?.region} />;
                    })}

                    {normals[0] && props.selectedMatchType === "normals" && normals.map((match, index) => {
                        return <Card key={index} index={index} match={match} region={props?.region} />;
                    })}

                    {!loaderViewer && (
                        <div className="text-white flex justify-center">No #{props.selectedMatchType === "all"? "ranked solo": props.selectedMatchType}# games have een found for this summoner</div>
                    )}
                </div>
                {/* show more btn  */}
                <ShowMore />
            </div>
        </aside>
    );
};

export default OverviewCards;
