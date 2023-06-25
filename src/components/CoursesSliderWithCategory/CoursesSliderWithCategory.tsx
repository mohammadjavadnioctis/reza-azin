import SectionTitle from '@components/section-title';
import CourseArea from '@containers/course/layout-01';
import { ICourse, MottoType, SectionTitleType, TSection } from '@utils/types';
import { motion } from 'framer-motion';
import React, { FC } from 'react'



const AnimatedSectionTitle = motion(SectionTitle);


type CoursesSliderWithCategoryProps = TSection & {
    data: {
        section_title?: SectionTitleType;
        motto?: MottoType;
        courses: ICourse[];
    };
};


const CoursesSliderWithCategory: FC<CoursesSliderWithCategoryProps> = ({
    // data: { section_title, motto, courses },
    data,
    space,
    bg,
    titleSize,
}) => {
   console.log('this is the data: ', data)
  return (
    <section className='tw-container tw-mt-[70px]'>
        <div className='tw-min-h-[500px] tw-bg-secondary tw-rounded-[25px]'>
           
            <CourseArea
                data={data}
                innerContainerClassNames="tw-bg-secondary"
            />
        </div>
    </section>
  )
}

CoursesSliderWithCategory.displayName = 'CursesSliderWithCategory'

export default CoursesSliderWithCategory