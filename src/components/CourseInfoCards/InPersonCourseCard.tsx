import UiImage from "lib/Image";
import { UiLink } from "lib/UiLink";
import React, { FC } from "react";
import MapPin from '@assets/svgs/map-pin.svg'
import CalendarWithPlus from '@assets/svgs/map-pin.svg'
import Calendar from '@assets/svgs/calendar.svg'
import ThreePeople from '@assets/svgs/three-person-sequence.svg'

interface InPersonCourseCardPropsType {
    bgImage?: string;
    title?: string;
    capacity?: string;
    sessions?: number;
    startDateString?: string;
    startDate?: Date;
    location?: string;
}

const InPersonCourseCard: FC<InPersonCourseCardPropsType> = ({
    bgImage = "https://firebasestorage.googleapis.com/v0/b/reza-azin.appspot.com/o/app-content%2FPeople-in-course.png?alt=media&token=d92ca5ab-ae17-4a5e-b6d3-a2fb5fc38366",
    title = "تیتر",
    location = 'لوکیشن',
    startDateString = 'شروع از ۱ تیر ماه ۱۴۰۳',
    sessions = 2,
    capacity = 15
}) => {
    return (
        <div className="tw-w-full tw-relative tw-max-w-[636px] tw-rounded-[25px] tw-overflow-hidden">
            <UiImage
                src={bgImage}
                width={636}
                height={326}
                alt="course wallpaper"
            />

            <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-end tw-px-4">
                <h5 className="tw-text-white tw-text-2xl tw-font-normal">
                    {title}
                </h5>
                <div className="summary-info-part tw-w-full tw-border-2 tw-border-[#4B4B4B] tw-rounded-[74px] tw-backdrop-blur-lg tw-mb-4 tw-p-2 tw-flex tw-justify-between tw-items-center">
                    <div className="tw-w-min tw-px-3 tw-py-2 tw-bg-blue tw-text-white tw-rounded-[40px]">
                        <UiLink href={"#"} className="tw-w-min">
                            ثبت‌نام
                        </UiLink>
                    </div>
                    <div className="tw-flex tw-space-x-3" style={{ direction: "rtl" }}>
                        <div className="tw-flex tw-ml-3" >
                            <MapPin className="tw-ml-2" />
                            <span className="tw-text-white">{location}</span>
                        </div>
                        <div className="tw-flex" >
                            <CalendarWithPlus className="tw-ml-2" />
                            <span className="tw-text-white">{startDateString}</span>
                        </div>
                        <div className="tw-flex" >
                            <Calendar className="tw-ml-2" />
                            <span className="tw-text-white"> {sessions} جلسه </span>
                        </div>
                        <div className="tw-flex" >
                            <ThreePeople className="tw-ml-2" />
                            <span className="tw-text-white"> ظرفیت {capacity} نفر</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

InPersonCourseCard.displayName = "InPersonCourseCard";

export default InPersonCourseCard;
