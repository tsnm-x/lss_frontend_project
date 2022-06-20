import { useRouter } from "next/router";
import Header from "../../components/shared/header/Header";
import classes from "../../styles/Home.module.css";
import leaveFeedback from "../../public/assets/leave-feedback.png";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";
import useHttp from "../../hook/useHttp";

export default function ErrorPage(){
    const router = useRouter();
    const [summonersFromOtherAreas, setSummonersFromOtherAreas] = useState([]);
    const summoners = []
    const [regions, setRegions] = useState([]);
    const [summonerName, setSummonerName] = useState("");
    const { hasError, sendRequest } = useHttp();

    const requestHandler = (res) => {
        if(!res){
            console.log(res, "no response from the server");
            return;
        }

        summoners.push({region: res.data.region, summonerName: res.data.name})

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
        console.log(region);
        console.log(summonerName);
    }

    useEffect(() => {
        setRegions(router.query.reqServers);
        setSummonerName(router.query.summonerName)
    }, [router.query.reqServers]);

    useEffect(()=>{
        regions.forEach((region)=> getSummonersFromOtherAreas(region, summonerName))
        setSummonersFromOtherAreas(summoners);
    }, [regions, summonerName])
    
    return (
        <div>
			<Header />

			<div
				className={` grid grid-cols-1 grid-rows-[repeat(2, 50%)] ${classes.wrapper}`}
			>
				{/* top section  */}
				<div className=" self-end justify-self-center self-center w-full max-w-[580px] ">
					<div>
						<h3 className={`text-white ${classes.header}`}>
							Experience <span className="text-blue-700">The Ultimate</span>{" "}
							Simulator
						</h3>
						<h3 className={`text-white ${classes.header}`}>
							League Of Legends
						</h3>
					</div>
					<p className={`${classes.title} sf-13px-regular mx-auto flex flex-col `}>
						<span>
							Whether you like to dive straight into the fray, support your
							teammates, or
						</span>
						<span>
							something in between, there’s a spot for you on the Rift.
						</span>
					</p>

                    <h1 className={`text-white ${classes.header}`}>{router?.query?.summonerName}</h1>
				</div>
                <div>
                    {router?.query?.reqServers?.map((region) => {
                        return (
                            <div className="text-white">
                                <div>region: {region}</div>
                                {summonersFromOtherAreas[0] && summonersFromOtherAreas.map((summonerObj)=>{
                                    if(summonerObj.region === region){
                                        return (
                                            <div className="text-red-500 font-bold">{summonerObj.summonerName}</div>
                                        )
                                    }
                                    return (
                                        <>
                                        </>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
				{/* left chat  */}
				<div className={`feedback_btn_wrap`}>
					<div className={`btn_img`}>
						<Image src={leaveFeedback} alt="leave feedback img" />
					</div>
					<button className={` feedback_btn`}>
						<BsFillChatSquareTextFill className={`feedback_btn_icon`} />
						<p className={`feedback_btn_txt`}>leave feedback</p>
					</button>
				</div>
			</div>
		</div>
    )
}