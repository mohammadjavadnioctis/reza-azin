// import SectionTitle from "@components/section-title";
// import CourseArea from "@containers/course/layout-01";
import { ICourse, MottoType, SectionTitleType, TSection } from "@utils/types";
import { motion } from "framer-motion";
import CourseCard from "@components/course-card/course-01";
import React, { FC, useMemo } from "react";
import { scrollUpVariants } from "@utils/variants";
import SectionTitle from "@components/section-title";
import SwiperSlider, { SwiperSlide } from "@components/ui/swiper";
import dynamic from "next/dynamic";


const DynamicSwiperSlider = dynamic(() => import('@ui/swiper'), {
    loading: () => <p>Loading...</p>,
    ssr: false
  })
   



const AnimatedSwiper = motion(DynamicSwiperSlider);


const AnimatedSectionTitle = motion(SectionTitle);
const AnimatedCourseCard = motion(CourseCard);

type CoursesSliderWithCategoryProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        motto?: MottoType;
        courses: ICourse[];
    };
};

const CoursesSliderWithCategory: FC<CoursesSliderWithCategoryProps> = ({
    data: { section_title, courses },
    // data,
    // space,
    // bg,
    // titleSize,
}) => {
    // console.log("this is the data: ", data);

    const options = useMemo(() => {
        return {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            speed: 1000,
            loop: true,
            autoplay: false,
            spaceBetween: 50,
            pagination: true,
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                1499: {
                    slidesPerView: 3,
                },
            },
        };
    }, []);



    return (
        <section className="tw-container tw-mt-[70px] ">
            <div className="tw-min-h-[500px] tw-bg-secondary tw-rounded-[25px] tw-py-[50px]">
                {/* <CourseArea
                    data={data}
                    innerContainerClassNames="tw-bg-secondary"
                /> */}
                {section_title && (
                    <AnimatedSectionTitle
                        {...section_title}
                        titleSize={"small"}
                        className="tw-mb-7.5 md:tw-mb-15"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={scrollUpVariants}
                        color="C"
                    />
                )}
                {/* <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-[103px]"> */}
                    <AnimatedSwiper
                        options={options}
                        className="bookingsAreaSlider tw-h-full tw-static tw-px-[71px]"
                    >
                        {courses.map((course) => {
                            return (
                                <SwiperSlide
                                    key={course.id}
                                    className="books-slides tw-max-w-full tw-h-full !tw-static"
                                >
                                    <AnimatedCourseCard
                                        key={course.path}
                                        title={course.title}
                                        path={course.path}
                                        published_at={course.published_at}
                                        thumbnail={course.thumbnail}
                                        price={course.price}
                                        currency={course.currency}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: 0.4 }}
                                        variants={scrollUpVariants}
                                        instructorName={course.instructorName}
                                        duration={course.duration}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </AnimatedSwiper>
                {/* </div> */}
            </div>
        </section>
    );
};

CoursesSliderWithCategory.displayName = "CursesSliderWithCategory";

export default CoursesSliderWithCategory;
