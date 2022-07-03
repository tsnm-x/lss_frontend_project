import React from "react";
import classes from "./FeedBackBtn.module.css";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import leaveFeedback from "../../../public/assets/leave-feedback.png";
import Image from "next/image";

export default function FeedBackBtn(props) {
    return (
        <div className={`${classes.feedback_btn_wrap} ${props.className}`}>
            <div className={`${classes.btn_img}`}>
                <Image src={leaveFeedback} alt="leave feedback img" />
            </div>
            <button className={` ${classes.feedback_btn}`}>
                <BsFillChatSquareTextFill
                    className={`${classes.feedback_btn_icon}`}
                />
                <p className={`${classes.feedback_btn_txt}`}>leave feedback</p>
            </button>
        </div>
    );
}
