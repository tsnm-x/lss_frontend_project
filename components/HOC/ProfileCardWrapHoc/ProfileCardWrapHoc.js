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
                    <div className=" pb-8 ">
                        <h6 className="  font-gotham-book text-[8px] leading-[11px] font-medium text-liquid-white capitalize ">
                            {this.props.title}
                        </h6>
                    </div>
                    <PushedElement {...this.props} />
                </aside>
            );
        }
    };
};

export default ProfileCardWrapHoc;
