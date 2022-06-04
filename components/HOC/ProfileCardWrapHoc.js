import React from "react";
import classes from "./ProfileCardWrapHoc.module.css";

const ProfileCardWrapHoc = (PushedElement) => {
    return class NewComponent extends React.Component {
        render() {
            return (
                <aside
                    className={` ${classes.card_wrap} ${this.props.className} `}
                >
                    {/* top slider  */}
                    {this.props.title && (
                        <div className=" mb-[26px] ">
                            <h6 className=" font-gotham-book text-[8px] leading-[11px] font-medium text-liquid-white capitalize text-[] ">
                                {this.props.title}
                            </h6>
                        </div>
                    )}
                    <PushedElement {...this.props} />
                </aside>
            );
        }
    };
};

export default ProfileCardWrapHoc;
