import clsx from "clsx";
import Anchor from "@ui/anchor";
import WidgetTitle from "./widget-title";

type TProps = {
    className?: string;
    mode?: "light" | "dark";
};

const ListWidget = ({ className, mode }: TProps) => {
    return (
        <div className={clsx(className)}>
            <WidgetTitle mode={mode}>Information</WidgetTitle>
            <ul
                className={clsx(
                    "tw-text-md tw-font-medium",
                    mode === "dark" && "tw-text-gray-400"
                )}
            >
                <li className="tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">Membership</Anchor>
                </li>
                <li className="tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">Purchase guide</Anchor>
                </li>
                <li className="tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">Privacy policy</Anchor>
                </li>
                <li className="tw-pr-5 tw-mb-[11px]">
                    <Anchor path="/#">Terms of service</Anchor>
                </li>
            </ul>
        </div>
    );
};

export default ListWidget;
