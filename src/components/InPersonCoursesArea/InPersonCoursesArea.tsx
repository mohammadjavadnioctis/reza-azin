import SectionTitle from "@components/section-title";
import { motion } from "framer-motion";
import React, { FC, useEffect, useMemo, useState } from "react";
import LineScratchLeft from "@assets/svgs/scratch-line-left.svg";
import InPersonCourseCard from "@components/CourseInfoCards/InPersonCourseCard";
import SwiperSlider, { SwiperSlide } from "@components/ui/swiper";
import { ICourse } from "@utils/types";

const AnimatedSectionTitle = motion(SectionTitle);

interface InPersonCoursesAreaPropsType {
    courses: ICourse[];
}

const InPersonCoursesArea: FC<InPersonCoursesAreaPropsType> = ({ courses }) => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const options = useMemo(() => {
        return {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: false,
            speed: 1000,
            loop: true,
            autoplay: false,
            spaceBetween: 10,
            pagination: true,
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
                1499: {
                    slidesPerView: 2,
                },
            },
        };
    }, []);

    return (
        <section className="tw-my-[70px]">
            <div className="tw-container">
                <div className="tw-w-full tw-flex tw-flex-col tw-items-center ">
                    <AnimatedSectionTitle
                        title="کلاس‌های آموزشی حضوری"
                        titleSize="small"
                        className="tw-mb-7.5 md:tw-mb-4"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        // variants={''}
                    />
                    <LineScratchLeft className="tw-text-violet-light -tw-translate-y-[80px] -tw-rotate-[27deg]" />
                </div>

                <SwiperSlider
                    options={options}
                    className="bookingsAreaSlider tw-h-full tw-static"
                >
                    {/* TODO:  bind the actuall data to the map */}
                    {domLoaded &&
                        courses.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className="books-slides tw-max-w-full tw-h-full !tw-static"
                                >
                                    <InPersonCourseCard title="دوره آموزش طراحی استوری" />
                                </SwiperSlide>
                            );
                        })}
                </SwiperSlider>
            </div>
        </section>
    );
};

InPersonCoursesArea.displayName = "InPersonCoursesArea";

export default InPersonCoursesArea;
