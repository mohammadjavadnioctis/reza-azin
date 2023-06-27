import React, { useMemo } from "react";
import SquareWithProtrusion from "@assets/svgs/square-and-protrusion.svg";
import Protrusion from "@assets/svgs/protrusion.svg";
import ElearningIcon from "@assets/svgs/e-learning.svg";
import UiImage from "lib/Image";
import SwiperSlider, { SwiperSlide } from "@components/ui/swiper";
import { UiLink } from "lib/UiLink";
import { FirstSlide, SecondSlide, ThirdSlide } from "./slides/BooksAreaSlides";

const items = [
    {
        id: "1",
        Component: FirstSlide,
    },
    {
        id: "2",
        Component: SecondSlide,
    },
    {
        id: "3",
        Component: ThirdSlide,
    },
];

const BooksArea = () => {
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
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                1499: {
                    slidesPerView: 1,
                },
            },
        };
    }, []);

    return (
        <section>
            <div className="tw-container tw-flex tw-justify-center tw-items-stretch ">
                <div className="tw-max-w-[500px] tw-pt-4">
                    <SwiperSlider
                        options={options}
                        className="bookingsAreaSlider tw-h-full tw-static"
                    >
                        {items.map((item) => {
                            const { Component } = item;
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className="books-slides tw-max-w-full tw-h-full !tw-static"
                                >
                                    <Component />
                                </SwiperSlide>
                            );
                        })}
                    </SwiperSlider>
                </div>
                <div className="tw-relative tw-ml-6 tw-mr-1">
                    <UiImage
                        src="https://firebasestorage.googleapis.com/v0/b/reza-azin.appspot.com/o/app-content%2Fthe-book-that-sold-100m.png?alt=media&token=3c7eb29e-342c-4bb0-aee5-587e6a74094a"
                        alt="the book that sold 100 million"
                        width={317}
                        height={275}
                        className="tw-max-w-[unset]"
                    />
                    <Protrusion className="tw-absolute tw-top-1/2 tw-right-0 -tw-translate-y-[60%]" />
                </div>
                <div className="tw-relative" style={{ direction: "rtl" }}>
                    <SquareWithProtrusion />
                    <div className="tw-absolute tw-left-0 tw-top-0 tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-py-[30px] tw-px-11">
                        <ElearningIcon className="tw-mb-4" />
                        <p className="tw-text-violet-dark tw-font-medium tw-max-w-[300px]">
                            شما می‌توانید با مطالعه کتاب های ارائه شده توسط تیم
                            رضا آذین، مسیر توسعه فردی و کاری خود را به درستی طی
                            کنید و به نتایج دلخواه دست پیدا کنید.
                        </p>
                        <UiLink
                            href="#"
                            className=" tw-absolute -tw-bottom-[10px] tw-left-[34px] tw-rounded-[32px] tw-bg-violet-dark tw-text-white tw-px-[44px] tw-py-3"
                        >
                            همه کتاب ها
                        </UiLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BooksArea;
