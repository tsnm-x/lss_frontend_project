import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import useHttp from "../../../../../../hook/useHttp";
import { profileAction } from "../../../../../../store/profile";
import Classes from "./ShowMore.module.css";

const ShowMore = (props) => {
    const [start, setStart] = useState(10);
    const {sendRequest} = useHttp();
    const dispatch = useDispatch();

    function requestHandler(res) {
		if (res?.status === 200) {
			dispatch(
				profileAction.setMoreMatches({
					profile: res.data.matches,
				})
			);
		}
	}
	const getMoreMatches = () => {
		if (start === 100) {
			return;
		}
		sendRequest(
			{
				url: "/summonerByName",
				method: "POST",
				body: { region: props?.region, summonerName: props.summonerName, start },
			},
			requestHandler
		);
		setStart(start + 10);
	};
    return (
        <button onClick={getMoreMatches} className={` w-full h-[50px] flex items-center justify-center bg-headBorder rounded-5px `}>
            <h3 className={` font-sf-pro-text font-bold text-center text-[18px] leading-[21.4px] text-[#979797]`}>Show More</h3>
        </button>
    );
};

export default ShowMore;
