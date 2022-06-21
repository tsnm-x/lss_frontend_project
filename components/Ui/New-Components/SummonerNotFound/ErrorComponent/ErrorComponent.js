import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ErrorDetails from "../ErrorDetails/ErrorDetails";
import Image from "next/image";
import RightSideImage from "../../../../../public/assets/new-images/SummonerNotFound/right-side-image.png";

const ErrorComponent = (props) => {
    return (
        <section className={`bg-card-&-content-box ${props.className}`}>
            <div className="container px-1 pt-[23px] pb-14 mobile:pb-0 mobile:pt-[30px] mobile:flex ">
                <div className=" mobile:w-[300px] ">
                    <ErrorMessage />
                    <ErrorDetails />
                </div>
                {/* highlight image  */}
                <div className=" hidden mobile:w-[calc(100%_-_300px)] mobile:flex mobile:items-center mobile:justify-center">
                    <div className=" relative w-[210px] h-[210px] ">
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
