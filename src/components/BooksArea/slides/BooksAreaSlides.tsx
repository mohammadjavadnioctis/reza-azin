import { UiLink } from "lib/UiLink";
import React, { FC } from "react";
import PriceTag from "@assets/svgs/price-tag.svg";

const FirstSlide: FC = () => {
    return (
        <div className={`tw-h-full tw-space-y-7`} style={{ direction: "rtl" }}>
            <h4 className="tw-text-2xl tw-font-normal">
                نقشه‌ای که ۱۰۰ میلیون فروخت!
            </h4>
            <p className="tw-text-paragraph">
                با افتخار به عنوان یک گروه تخصصی در زمینه توسعه کسب و کار در
                اینستاگرام، به شما خوش آمد می‌گوییم. هدف ما ارائه راهکارها و
                استراتژی‌های موثر جهت بهره‌برداری از اینستاگرام برای افزایش
                رشد...
            </p>

            <div className="tw-flex tw-justify-start">
                <UiLink
                    href={"#"}
                    className="tw-px-[26px] tw-py-3 hover:tw-text-defGreen tw-text-defGreen tw-border-2 tw-border-defGreen tw-rounded-[55px] tw-flex tw-ml-2"
                >
                    <PriceTag className="tw-ml-2"/>
                  <span className="">
                      ۵۵/۰۰۰ تومان
                    </span>
                </UiLink>
                <UiLink
                    href={"#"}
                    className="tw-px-[34px] tw-py-3 tw-bg-defGreen hover:tw-text-white tw-text-white tw-rounded-[55px]"
                >
                    مشاهده جزئیات
                </UiLink>
            </div>
        </div>
    );
};

const SecondSlide: FC = () => {
    return  <div className={`tw-h-full tw-space-y-7`} style={{ direction: "rtl" }}>
    <h4 className="tw-text-2xl tw-font-normal">
        نقشه‌ای که ۱۰۰ میلیون فروخت!
    </h4>
    <p className="tw-text-paragraph">
        با افتخار به عنوان یک گروه تخصصی در زمینه توسعه کسب و کار در
        اینستاگرام، به شما خوش آمد می‌گوییم. هدف ما ارائه راهکارها و
        استراتژی‌های موثر جهت بهره‌برداری از اینستاگرام برای افزایش
        رشد...
    </p>

    <div className="tw-flex tw-justify-start">
        <UiLink
            href={"#"}
            className="tw-px-[26px] tw-py-3 hover:tw-text-defGreen tw-text-defGreen tw-border-2 tw-border-defGreen tw-rounded-[55px] tw-flex tw-ml-2"
        >
            <PriceTag className="tw-ml-2"/>
          <span className="">
              ۵۵/۰۰۰ تومان
            </span>
        </UiLink>
        <UiLink
            href={"#"}
            className="tw-px-[34px] tw-py-3 tw-bg-defGreen hover:tw-text-white tw-text-white tw-rounded-[55px]"
        >
            مشاهده جزئیات
        </UiLink>
    </div>
</div>;
};

const ThirdSlide: FC = () => {
    return  <div className={`tw-h-full tw-space-y-7`} style={{ direction: "rtl" }}>
    <h4 className="tw-text-2xl tw-font-normal">
        نقشه‌ای که ۱۰۰ میلیون فروخت!
    </h4>
    <p className="tw-text-paragraph">
        با افتخار به عنوان یک گروه تخصصی در زمینه توسعه کسب و کار در
        اینستاگرام، به شما خوش آمد می‌گوییم. هدف ما ارائه راهکارها و
        استراتژی‌های موثر جهت بهره‌برداری از اینستاگرام برای افزایش
        رشد...
    </p>

    <div className="tw-flex tw-justify-start">
        <UiLink
            href={"#"}
            className="tw-px-[26px] tw-py-3 hover:tw-text-defGreen tw-text-defGreen tw-border-2 tw-border-defGreen tw-rounded-[55px] tw-flex tw-ml-2"
        >
            <PriceTag className="tw-ml-2"/>
          <span className="">
              ۵۵/۰۰۰ تومان
            </span>
        </UiLink>
        <UiLink
            href={"#"}
            className="tw-px-[34px] tw-py-3 tw-bg-defGreen hover:tw-text-white tw-text-white tw-rounded-[55px]"
        >
            مشاهده جزئیات
        </UiLink>
    </div>
</div>;
};

FirstSlide.displayName = "firstBooksSlide";
SecondSlide.displayName = "SecondBooksSlide";
FirstSlide.displayName = "ThirdBooksSlide";

export { FirstSlide, SecondSlide, ThirdSlide };
