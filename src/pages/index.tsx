import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Layout from "@layout/layout-01";
// import Wrapper from "@ui/wrapper/wrapper-01";
// import HeroArea from "@containers/hero/layout-01";
// import ServiceArea from "@containers/service/layout-01";
// import AboutArea from "@containers/about/layout-01";
// import FunFactArea from "@containers/funfact/layout-01";
// import TestimonialArea from "@containers/testimonial/layout-01";
// import VideoArea from "@containers/video/layout-01";
// import CourseArea from "@containers/course/layout-01";
// import BlogArea from "@containers/blog/layout-01";
// import BrandArea from "@containers/brand/layout-01";

import { normalizedData } from "@utils/methods";
import { IBlog, ICourse } from "@utils/types";

import HeroSection from "@components/HeroSection/HeroSection";
import Statistics from "@components/Statistics/Statistics";
import CoursesSliderWithCategory from "@components/CoursesSliderWithCategory/CoursesSliderWithCategory";
import AboutTeam from "@components/AboutTeam/AboutTeam";
import BooksArea from "@components/BooksArea/BooksArea";
import InPersonCoursesArea from "@components/InPersonCoursesArea/InPersonCoursesArea";
import { getPageData } from "../lib/page";
import { getAllBlogs } from "../lib/blog";
import { getallCourses, getFilteredCourse } from "../lib/course";

interface PageContent {
    section: string;
}

type TProps = {
    data: {
        page: {
            content: PageContent[];
        };
        courses: ICourse[];
        popularCourse: ICourse;
        blogs: IBlog[];
    };
};

type PageProps = NextPage<TProps> & {
    Layout: typeof Layout;
};

const Home: PageProps = ({ data }) => {
    const content = normalizedData<PageContent>(data.page?.content, "section");
    return (
        <>
            <HeroSection />
            <Statistics />
            <CoursesSliderWithCategory
                data={{ ...content?.["course-area"], courses: data.courses }}
            />

            <AboutTeam />
            <BooksArea />
            <InPersonCoursesArea courses={data.courses} />

            {/* <CourseArea
                data={{ ...content?.["course-area"], courses: data.courses }}
                innerContainerClassNames="tw-bg-secondary"


            /> */}
        </>
        // <>
        //     <HeroArea
        //         data={{
        //             ...content?.["hero-area"],
        //             popularCourse: data.popularCourse,
        //         }}
        //     />
        //     <ServiceArea data={content?.["service-area"]} space="none" />
        //     <AboutArea data={content?.["about-area"]} />
        //     <Wrapper className="tw-py-[100px]">
        //         <FunFactArea
        //             data={content?.["funfact-area"]}
        //             space="bottom-2"
        //         />
        //         <TestimonialArea
        //             data={content?.["testimonial-area"]}
        //             space="none"
        //         />
        //     </Wrapper>
        //     <VideoArea data={content?.["video-area"]} space="none" />
        //     <CourseArea
        //         data={{ ...content?.["course-area"], courses: data.courses }}
        //     />
        //     <BlogArea data={{ ...content?.["blog-area"], blogs: data.blogs }} />
        //     <BrandArea data={content?.["brand-area"]} />
        // </>
    );
};

Home.Layout = Layout;

export const getStaticProps: GetStaticProps = () => {
    const page = getPageData("home", "index-01");
    const courses = getallCourses(
        [
            "title",
            "thumbnail",
            "price",
            "currency",
            "category",
            "description",
            "instructorName",
            "duration",
        ],
        0,
        9
    );
    const popularCourse = getFilteredCourse(
        [
            "title",
            "published_at",
            "thumbnail",
            "price",
            "currency",
            "excerpt",
            "isPopular",
            "category",
        ],
        "isPopular",
        true
    );
    const { blogs } = getAllBlogs(
        ["title", "image", "category", "postedAt", "views"],
        0,
        3
    );
    return {
        props: {
            data: {
                page,
                courses,
                popularCourse,
                blogs,
            },
        },
    };
};

export default Home;
