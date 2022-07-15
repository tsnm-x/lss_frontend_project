import React from "react";
import Image from "next/image";
import ProfileOne from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/first.png";
import ProfileTwo from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/sec.png";
import CenterBatch from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch.png";
import Batch1 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch-1.png";
import Batch2 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch-2.png";
import Batch3 from "../../../../../../../public/assets/new-images/Profile/card/CardExpand/selected/batch-3.png";

const Profile = (props) => {
    console.log(props.color);
    return (
        <div className=" flex items-center">
            {/* image  */}
            <div className=" relative w-[30px] h-[30px] mr-[10px] ">
                <Image
                    src={props.img}
                    alt={props.name + " image"}
                    layout="fill"
                />
            </div>
            {/* name  */}
            <div>
                <h2 className=" text-white font-sf-pro-text font-bold text-[11px] leading-[13px] ">
                    {props.left} Left
                </h2>
                <h2
                    className={`font-sf-pro-text capitalize font-bold text-[11px] leading-[13px]`}
                    style={{ color: props.color }}
                >
                    {props.name}
                </h2>
            </div>
        </div>
    );
};

const LeftBatchBar = (props) => {
    return (
        <div className=" w-[612px] h-[45px] bg-card-&-content-box grid grid-cols-1 grid-rows-1 rounded-t-[10px] ">
            {/* center batch  */}
            <div className=" flex justify-center items-end row-start-1 col-start-1 ">
                <div className=" relative w-[50px] h-[50px] ">
                    <Image src={CenterBatch} alt="center batch" layout="fill" />
                </div>
            </div>
            {/* left right batch  */}
            <div className=" row-start-1 col-start-1 grid grid-cols-2 bg-transparent rounded-t-[10px] ">
                {props.batches.map((batch, index) => {
                    return (
                        <div
                            key={index}
                            className={`rounded-tr-[10px] flex items-center justify-center gap-x-[6px] ${
                                batch.active ? "border-[#72B2E3] border" : ""
                            } `}
                        >
                            {batch.batch.map((batch, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`w-[30px] h-[30px] relative rounded-full ${
                                            !batch.img
                                                ? "bg-mix-white-black"
                                                : "  bg-transparent "
                                        }`}
                                    >
                                        {batch.img ? (
                                            <Image
                                                src={batch.img}
                                                alt={batch.alt}
                                                layout="fill"
                                            />
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const ProfileCompareBar = () => {
    const profileData = [
        {
            img: ProfileOne,
            name: "baron nashor",
            left: "12:35",
            color: "#8C3DCF",
        },
        {
            img: ProfileTwo,
            name: "elder drake",
            left: "2:15",
            color: "#24C2AD",
        },
    ];

    // batch img list
    const batchList = [
        {
            batch: [
                { img: Batch1, alt: "green batch" },
                { img: Batch2, alt: "half green batch" },
                { img: undefined, alt: "blank img" },
                { img: undefined, alt: "blank img" },
            ],
            active: false,
        },
        {
            batch: [
                { img: Batch3, alt: "green batch" },
                { img: Batch2, alt: "half green batch" },
                { img: Batch2, alt: "half green batch" },
                { img: Batch2, alt: "half green batch" },
            ],
            active: true,
        },
    ];
    return (
        <div className=" grid grid-cols-1 grid-rows-1 px-12 border-b border-[#140a22] ">
            {/* profiles  */}
            <div className=" flex items-center gap-x-6 row-start-1 col-start-1 ">
                {profileData.map((profile, index) => {
                    return <Profile key={index} {...profile} />;
                })}
            </div>
            {/* left batch bar  */}
            <div className=" row-start-1 col-start-1 flex justify-center">
                <LeftBatchBar batches={batchList} />
            </div>
        </div>
    );
};

export default ProfileCompareBar;
