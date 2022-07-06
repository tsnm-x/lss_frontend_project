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
        <button onClick={getMoreMatches} className={`${Classes.BtnWrap}`}>
            <h3 className={` sf-bold-40 ${Classes.BtnTxt}`}>Show more</h3>
            <BsChevronDown className=" text-[20px]  text-white mx-auto " />
        </button>
    );
};

export default ShowMore;
