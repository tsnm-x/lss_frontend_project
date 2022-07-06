import React from "react";
import classes from "./LiveContentWrap.module.css";

const LiveContentWrap = (PushedElement) => {
    return class NewElement extends React.Component {
        render() {
            return (
                <div className={`${classes.card} ${this.props.hocStyle}`}>
                    <PushedElement {...this.props} />
                </div>
            );
        }
    };
};

export default LiveContentWrap;
