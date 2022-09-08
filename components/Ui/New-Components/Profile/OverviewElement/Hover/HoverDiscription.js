import React from "react";
import Image from "next/image";

const HoverDiscription = (props) => {
    return (
        <>
            {/* indicator  */}
            <div
                className={` transform  opacity-0 scale-y-0 group-hover:delay-1000 group-hover:opacity-100 group-hover:scale-y-100 mt-2 transition-all ease-in-out duration-200 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] w-[30px] h-[15px] bg-[#d9d9d9] border absolute left-277 top-[35px] z-50  `}
            ></div>
            <div
                className={`
                                                        w-[555px] border bg-[#241e2c] p-[17px_42px_27px_45px] absolute
                                                         no-repeat -left-[260px] top-[50px] 
                                                         transform  opacity-0 scale-y-0 group-hover:delay-1000 group-hover:opacity-100 group-hover:scale-y-100 mt-2 transition-all ease-in-out duration-200
                                                          z-50`}
            >
                {/* top header  */}
                <div className=" flex items-center ">
                    {/* img  */}
                    <div className={` ${props.border} `} style={props.style}>
                        {props.img && (
                            <div className={` relative w-[${props.img.width}] h-[${props.img.height}]`}>
                                <Image
                                    src={props.img.src}
                                    alt={props.img.alt}
                                    layout="fill"
                                />
                            </div>
                        )}
                    </div>
                    <div className=" flex ml-3 ">
                        {props.name && (
                            <h3 className=" font-sf-pro-text font-[700] text-[18px] leading-[22px] text-white mr-3 ">
                                {props.name}
                            </h3>
                        )}
                        {props.role && (
                            <p className=" font-sf-pro-text text-[9px] leading-[11px] font-[700] text-[#FF4256] capitalize ">
                                {props.role}
                            </p>
                        )}
                    </div>
                </div>
                {/* discription  */}
                {props.dis && (
                    <div className=" hover-dis mt-3 ">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: props.dis,
                            }}
                        ></p>
                    </div>
                )}

                {props.gold && (
                    <h2 className=" font-sf-pro-text text-[18px] leading-[22px] font-[700] text-[#CFB977] mt-[22px] ">
                        Cost: {props.gold}G
                    </h2>
                )}
            </div>
        </>
    );
};

export default HoverDiscription;