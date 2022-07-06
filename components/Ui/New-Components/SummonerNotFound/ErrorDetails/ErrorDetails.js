import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useHttp from "../../../../../hook/useHttp";
import { profileAction } from "../../../../../store/profile";


const ErrorDetails = (props) => {
    let normalColor = {}
    let newColor = {}
    const [color, setColor] = useState({});
    const [region, setRegion] = useState("");
    const router = useRouter();
    const {sendRequest} = useHttp();
    const dispatch = useDispatch();

    useEffect(()=>{
        sendRequest(
            {
                url: "/summonerByName",
                method: "POST",
                body: {
                    region,
                    summonerName: router.query?.summonerName,
                },
            },
            requestHandler
        );
    }, [region])


    useEffect(()=>{
       if(Object.keys(color).length !== Object.keys(newColor).length) setColor(newColor)
    }, [newColor])

    useEffect(()=>{
        console.log(color)
    }, [color])

    function requestHandler(res) {
        
		if (!res) {
			console.log(res, "no response from the server");
			return;
		}

		dispatch(
			profileAction.setProfileDataPage({
				profile: res.data.matches,
				// region,
				region,
				summonerName: router.query?.summonerName,
			})
		);
		Router.push(
			{
				pathname: '/summoner/[region]/[summonerName]',
				query: {
					region,
					summonerName: router.query?.summonerName
				}
			}
		);
	}

    const getSummoner = (region) => {
        setRegion(region);

        console.log(region);

        
    }


    return (
        <div className=" mt-[23px] desktop:mt-0 ">
            <h2 className=" sf-mid-20 text-white mobile:text-[15px] mobile:max-w-[185px] smTablet:hidden ">
                We found these summoners from other regions for you :)
            </h2>
            {/* summoner details    */}
            <div className=" grid grid-cols-3 mt-10 mobile:mt-[13px] smTablet:mt-0 laptop:mt-[70px] laptop:max-w-[550px]
                    desktop:mt-[110px] ">
                {/* small screen  */}
                {/* {selectionNameList.map((item, index) => {
                    return (
                        <div className=" laptop:hidden" key={"card" + index}>
                            <h2 className=" sf-bold-15 text-white uppercase smTablet:sf-bold-27 ">
                                {item.name}
                            </h2>
                            <h4
                                className=" sf-bold-12 text-accent-color mt-[18px] mobile:mt-[12px] 
                                         smTablet:sf-bold-27 smTablet:mt-0"
                            >
                                example
                            </h4>
                        </div>
                    );
                })} */}
                {/* large screen  */}
                {Object.keys(props?.regions).map((item, index) => {
                    if (typeof normalColor[item] === 'undefined') normalColor[item] = 'text-grayed-text' 
                    return (
                        <div key={index} className=" hidden laptop:block mb-[50px] desktop:mb-[59px] ">
                            <h2
                            className={`sf-bold-15 text-[14px] capitalize desktop:text-[18px] desktop:leading-[24px] ${color[item]? color[item] : normalColor[item]} `}
                            >
                                {props?.regions[item]}
                            </h2>
                            {props?.summonersFromOtherAreas.map((summonerObj, idx) => {
                                if(item === summonerObj.region) newColor[item] =  'text-white'
                                return (
                                    <div key={idx}>
                                        
                                        {item === summonerObj.region && (
                                            <>
                                                <h4
                                                className={`sf-bold-12 text-accent-color mt-[7px] capitalize desktop:text-[16px] desktop:leading-[21px] `}
                                                onClick={() => getSummoner(item)}
                                                >
                                                    {summonerObj.summonerName}  
                                                </h4>
                                            </>
                                        )}
                                    </div>
                                    
                                )
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ErrorDetails;
