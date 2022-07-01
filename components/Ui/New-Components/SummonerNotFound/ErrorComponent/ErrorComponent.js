import React, { useEffect } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ErrorDetails from "../ErrorDetails/ErrorDetails";
import Image from "next/image";
import RightSideImage from "../../../../../public/assets/new-images/SummonerNotFound/right-side-image.png";

const ErrorComponent = (props) => {
    useEffect(()=>{
        console.log(props.regions);
        console.log(props.summonersFromOtherAreas)
    }, [props.regions])
    return (
        <section
            className={`bg-card-&-content-box smTablet:bg-transparent ${props.className}`}
        >
            <div
                className="container px-1 pt-[23px] pb-14 mobile:pb-0 mobile:pt-[30px] mobile:flex smTablet:grid smTablet:grid-cols-1 smTablet:grid-rows-1
                  smTablet:pt-0 laptop:flex laptop:px-20 "
            >
                <div
                    className=" mobile:w-[300px] smTablet:w-full smTablet:col-start-1 
                smTablet:row-start-1 smTablet:relative smTablet:z-20 smTablet:flex smTablet:flex-col smTablet:flex-wrap
                 smTablet:justify-center laptop:w-[600px]"
                >
                    <ErrorMessage summonerName={props.summonerName} />
                    <ErrorDetails  summonerName={props.summonerName} summonersFromOtherAreas={props.summonersFromOtherAreas} regions={props.regions} />
                </div>
                {/* highlight image  */}
                <div
                    className=" 
                                hidden mobile:w-[calc(100%_-_300px)] mobile:flex mobile:items-center
                                mobile:justify-center smTablet:w-full smTablet:col-start-1 smTablet:row-start-1 smTablet:opacity-25
                                laptop:opacity-[1] laptop:items-start laptop:justify-end
                                "
                >
                    <div
                        className=" relative mobile:w-[210px] mobile:h-[210px] smTablet:w-[505px] smTablet:h-[495px] 
                    tablet:w-[670px] tablet:h-[670px] laptop:w-[440px] laptop:h-[440px] laptop:-mt-6 
                     smDesktop:w-[560px] smDesktop:h-[560px] desktop:w-[700px] desktop:h-[700px] "
                    >
                        <Image
                            src={RightSideImage}
                            alt="error page image"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorComponent;
