import clsx from "clsx";
import Anchor from "@ui/anchor";
import WidgetTitle from "./widget-title";

type TProps = {
    className?: string;
    mode?: "light" | "dark";
};

const TwoColumnListWidget = ({ className, mode }: TProps) => {
    return (
        <div className={clsx(className)}>
            <WidgetTitle mode={mode}>Explore</WidgetTitle>
            <ul
                className={clsx(
                    "tw-flex tw-flex-wrap tw-text-md tw-font-medium",
                    mode === "dark" && "tw-text-gray-400"
                )}
            >
                <li className="tw-w-1/2 tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">Start here</Anchor>
                </li>
                <li className="tw-w-1/2 tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">Success story</Anchor>
                </li>
                <li className="tw-w-1/2 tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">Blog</Anchor>
                </li>
                <li className="tw-w-1/2 tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">Courses</Anchor>
                </li>
                <li className="tw-w-1/2 tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">About us</Anchor>
                </li>
                <li className="tw-w-1/2 tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">Contact us</Anchor>
                </li>
            </ul>
        </div>
    );
};

export default TwoColumnListWidget;
