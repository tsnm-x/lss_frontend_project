import React from "react";
import FeedBackBtn from "../../../shared/Old-Shared-Components/FeedbackBtn/FeedBackBtn";
import classes from "./LiveWhiteCardWrapHoc.module.css";
import { BsWifi } from "react-icons/bs";

const LiveWhiteCardWrapHoc = (PushedElement) => {
    return class WrapperComponent extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <section>
                        {/* top title  */}
                        <div className=" container max-w-[1047px] mx-auto relative mb-5">
                            {/* left side  */}
                            <div>
                                <h3 className=" text-mix-white-black-100 gotham-15px-book ">
                                    Live-Game found for Suuusanoo
                                </h3>
                                <p className=" sf-8px-regular text-mix-white-black ">
                                    Lorem Ipsum
                                </p>
                            </div>
                            {/* right side feedback  */}
                            <FeedBackBtn className=" absolute right-8 bottom-0 z-50" />
                        </div>
                    </section>
                    <section>
                        {/* live icon  */}
                        {true && (
                            <div className="container max-w-[1047px] mx-auto">
                                <div className=" flex">
                                    <BsWifi className=" text-[#fc2300] text-[20px] " />
                                    <p className=" gotham-13px-mid capitalize text-[#fc2300] ml-4 ">
                                        live
                                    </p>
                                </div>
                            </div>
                        )}

                        <div
                            className={`${classes.card} flex items-center relative mt-2 ${this.props.className}`}
                        >
                            {/* image wrapper  */}
                            <PushedElement {...this.props} />

                            {/* click button  */}

                            <button className=" gotham-10px-mid  bg-red-yellow-gold rounded-full capitalize text-white py-[10px] px-7 absolute -bottom-4 right-32">
                                full matrics
                            </button>
                        </div>
                    </section>
                </React.Fragment>
            );
        }
    };
};

export default LiveWhiteCardWrapHoc;
