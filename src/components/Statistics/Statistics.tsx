import React, { FC } from 'react'
import StatisticsBG from "@assets/svgs/statistics-bg.svg";
import Bookmark from "@assets/svgs/book-bookmark.svg";
import Hand from "@assets/svgs/hand-holding-medical.svg";
import PlayButton from "@assets/svgs/play-button.svg";
import GraduationCap from "@assets/svgs/graduation-cap.svg";

const Statistics: FC = () => {
  return (
    <div className='tw-container relative tw-mt-[70px]'>
        <StatisticsBG className='tw-max-w-full'/>
        <div className='tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-justify-between tw-items-center tw-px-[210px]'>
            {statisticsData.map(item => {
                const {value, label, Icon, id} = item;
                return (
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-4' key={id}>
                        <Icon />
                        <h4>{label}</h4>
                        <span className='tw-font-semibold tw-tracking-[13.4px]'>+{value}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}







const statisticsData = [
    {
        id: 1,
        label: 'کتاب ها',
        value: '20',
        Icon: Bookmark,
    },
    {
        id: 2,
        label: 'تعداد مشاورها',
        value: '3000',
        Icon: Hand,
    },
    {
        id: 3,
        label: 'ساعت آموزشی',
        value: '600',
        Icon: PlayButton,
    },
    {
        id: 4,
        label: 'دانشجوی فعال',
        value: '1200',
        Icon: GraduationCap,
    },
]




Statistics.displayName = 'Statistics'

export default Statistics