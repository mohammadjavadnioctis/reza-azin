import React from "react";
import SquareWithProtrusion from "@assets/svgs/square-and-protrusion.svg";
import Protrusion from "@assets/svgs/protrusion.svg";
import ElearningIcon from "@assets/svgs/e-learning.svg";
import UiImage from "lib/Image";

const BooksArea = () => {
    return (
        <section>
            <div className="tw-container tw-flex tw-justify-center">
            <div>
                    hi
                </div>
                <div className="tw-relative">
                    <UiImage
                        src="https://firebasestorage.googleapis.com/v0/b/reza-azin.appspot.com/o/app-content%2Fthe-book-that-sold-100m.png?alt=media&token=3c7eb29e-342c-4bb0-aee5-587e6a74094a"
                        alt="the book that sold 100 million"
                        width={317}
                        height={275}
                    />
                    <Protrusion className="tw-absolute tw-top-1/2 tw-right-0 -tw-translate-y-[60%]" />
                </div>
                <div className="tw-relative" style={{direction: 'rtl'}}>
                    <SquareWithProtrusion />
                    <div className="tw-absolute tw-left-0 tw-top-0 tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-py-[30px] tw-px-11">
                        <ElearningIcon className="tw-mb-4" />
                        <p className="tw-text-violet-dark tw-font-medium tw-max-w-[300px]">شما می‌توانید با مطالعه کتاب های ارائه شده توسط تیم رضا آذین، مسیر توسعه فردی و کاری خود را به درستی طی کنید و به نتایج دلخواه دست پیدا کنید.</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default BooksArea;
