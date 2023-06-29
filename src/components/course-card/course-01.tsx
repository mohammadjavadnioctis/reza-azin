import { forwardRef } from "react";
import clsx from "clsx";
// import dayjs from "dayjs";
import Anchor from "@ui/anchor";
import { ICourse } from "@utils/types";
import NineOclock from "@assets/svgs/nine-oclock.svg";
import ManSpeaking from "@assets/svgs/man-speaking.svg";
import BitcoinIcon from "@assets/svgs/bitcoin-sign.svg";

interface TProps
    extends Pick<
        ICourse,
        | "thumbnail"
        | "title"
        | "path"
        | "currency"
        | "price"
        | "published_at"
        | "excerpt"
        | "instructorName"
        | "duration"
    > {
    className?: string;
}

const CourseCard = forwardRef<HTMLDivElement, TProps>(
    (
        {
            className,
            thumbnail,
            title,
            path,
            price,
            // currency,
            instructorName,
            duration,
            // published_at,
            // excerpt,
        },
        ref
    ) => {
        // TODO: add the proper path
        path = "#";
        // const priceConv = price === 0 ? "free" : `${currency}${price}`;
        return (
            <div className="tw-px-[18px]">
                <div
                    className={clsx(
                        "tw-transition-all tw-bg-gray-100 tw-rounded-[15px] tw-h-full group hover:tw-bg-white hover:tw-shadow-4xl hover:tw-shadow-black/[0.12]",
                        className
                    )}
                    ref={ref}
                >
                    <figure className="tw-relative tw-overflow-hidden tw-rounded-t-[15px]">
                        {thumbnail?.src && (
                            <img
                                src={thumbnail.src}
                                alt={thumbnail?.alt || title}
                                width={thumbnail?.width || 300}
                                height={thumbnail?.height || 300}
                                loading={thumbnail?.loading || "lazy"}
                                className="tw-min-h-[300px] tw-max-h-[300px] tw-w-full tw-transition-transform tw-duration-1000 tw-ease-out group-hover:tw-scale-110"
                            />
                        )}

                        <Anchor className="link-overlay" path={path}>
                            {title}
                        </Anchor>
                    </figure>
                    <div
                        className="tw-relative tw-px-5 tw-pt-12 tw-pb-4 tw-rounded-2xl"
                        style={{ direction: "rtl" }}
                    >
                        <h3 className="tw-capitalize tw-font-bold tw-text-violet-dark tw-bg-[#E4E4E4] tw-bg-opacity-90  tw-backdrop-blur-[10px] tw-leading-none tw-rounded-[15px] tw-flex tw-justify-center tw-items-center tw-absolute -tw-right-4 -tw-translate-y-1/2 tw-top-0 tw-w-[calc(100%_+_34px)] tw-h-[60px] md:tw-h-[70px] tw-text-lg md:tw-text-base tw-py-6 tw-px-5">
                            <Anchor path={path}>{title}</Anchor>
                        </h3>
                        {/* <span className="tw-font-medium tw-block tw-uppercase tw-mb-1 tw-tracking-[2px] tw-text-secondary-light">
                            {dayjs(published_at).format("MMM DD, YYYY")}
                        </span> */}
                        {/* {excerpt && <p className="tw-mt-2.5">{excerpt}</p>} */}
                        <div className="tw-w-full tw-flex tw-items-center tw-justify-between tw-text-sm">
                            <div className="tw-flex tw-items-center tw-flex-nowrap">
                                <NineOclock className="tw-ml-2" />
                                <span> {duration} </span>
                            </div>
                            <div className="tw-flex tw-items-center">
                                <ManSpeaking className="tw-ml-2" />
                                <span> {instructorName} </span>
                            </div>
                            <div className="tw-flex tw-items-center">
                                <BitcoinIcon className="tw-ml-2" />
                                <span> {price} هزار تومان </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

export default CourseCard;
