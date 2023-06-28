import SectionTitle from "@components/section-title";
import { motion } from "framer-motion";
import React, { FC } from "react";
import LineScratchLeft from "@assets/svgs/scratch-line-left.svg";

const AnimatedSectionTitle = motion(SectionTitle);

const InPersonCoursesArea: FC = () => {
    return (
        <section className="tw-my-[70px]">
            <div className="tw-w-full tw-flex tw-flex-col tw-items-center ">
                <AnimatedSectionTitle
                    title="کلاس‌های آموزشی حضوری"
                    titleSize={"small"}
                    className="tw-mb-7.5 md:tw-mb-4"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    // variants={''}
                />
                <LineScratchLeft className="tw-text-violet-light -tw-translate-y-[80px] -tw-rotate-[27deg]" />
            </div>
        </section>
    );
};

InPersonCoursesArea.displayName = "InPersonCoursesArea";

export default InPersonCoursesArea;
