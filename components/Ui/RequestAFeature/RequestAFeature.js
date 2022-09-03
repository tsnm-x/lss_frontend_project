import React from "react";
import Image from "next/image";
import RequestFeatureImg from "../../../public/assets/new-images/landing-page/main-bg-sm.png";

const RequestAFeature = () => {
    return (
        <section>
            <div className=" container h-[450px] ">
                <div className=" ml-[77px] w-[1416px] flex items-center justify-between  ">
                    {/* text  */}
                    <div className=" w-[505px] mt-8 ">
                        <h2 className=" font-mazin font-bold text-[36px] leading-[46px] text-white ">
                            Made by Gamers for Gamers
                        </h2>
                        <p className=" font-mazin font-[400] text-[22px] leading-[28px] text-white flex flex-col my-8 ">
                            <span>Your opinion matters!</span>
                            <span>
                                We believe in LSS.GG that the community is the
                            </span>
                            <span>biggest driving factor for success.</span>
                            <span>
                                Let us know what you think about the website to
                            </span>
                            <span>help make it better.</span>
                        </p>
                        <button className="  w-[132px] h-[42px] rounded-[7px] bg-red flex items-center justify-center font-inter font-[700] text-[12px] leading-[20px] text-white ">
                            Request a Feature
                        </button>
                    </div>
                    {/* image  */}
                    <div className=" w-[762px] h-[450px] relative ">
                        <Image
                            src={RequestFeatureImg}
                            alt="highlight image"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RequestAFeature;
