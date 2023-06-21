import UiImage from "lib/Image";
import React, { FC } from "react";
import LineScratchLeft from '@assets/svgs/scratch-line-left.svg'
import ScratchLineRight from '@assets/svgs/scratch-line-right.svg'

const HeroSection: FC = () => {
    return (
        <div className="Hero_section tw-flex tw-flex-row">
            <div className="tw-h-[640px] tw-w-full tw-max-w-[640px] tw-relative tw-rounded-br-[25px] tw-bg-secondary tw-border tw-border-pink-500 ">
                <div className="image_container tw-absolute tw-right-0 tw-bottom-12 tw-translate-x-[31%]">
                    <div className=" tw-relative tw-w-[323px] tw-h-[431px] ">
                        <UiImage
                            src={
                                "https://firebasestorage.googleapis.com/v0/b/reza-azin.appspot.com/o/dotted-image-frame.png?alt=media&token=ae875d80-69db-4a2d-a912-aade0c1445e9"}
                                alt="reza azin image"
                                fill
                                priority
                        />
                        <UiImage
                            src={
                                "https://firebasestorage.googleapis.com/v0/b/reza-azin.appspot.com/o/reza-azin-hero-section.png?alt=media&token=c9b97489-d0a7-4ee0-9719-7c6c9310ffed"}
                                alt="reza azin image"
                                fill
                                priority
                                className="tw-bg-primary tw-rounded-t-[175px] tw-translate-x-5 -tw-translate-y-5"

                        />
                        <LineScratchLeft className="tw-absolute tw-top-[52px] tw-left-[-71px]"/>
                        <ScratchLineRight className="tw-absolute tw-top-[52px] tw-right-2"/>
                    </div>
                </div>
            </div>
            <div className="tw-h-[640px] tw-w-full tw-flex tw-justify-end tw-items-center tw-pr-[223px] tw-border tw-border-pink-500">
                <div className="tw-border-2 tw-border-blue-500">
                    <h1 className="tw-font-black tw-text-[120px] gradient-text tw-font-dana">
                        رضا آذین
                    </h1>
                </div>
            </div>
        </div>
    );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
