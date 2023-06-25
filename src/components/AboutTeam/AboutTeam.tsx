import React, { FC } from "react";
import BigPlayButton from "@assets/svgs/big-play-button.svg";
import UiImage from "lib/Image";

const AboutTeam: FC = () => {
    return (
        <section className="tw-my-[70px]">
            <div className="tw-container tw-flex tw-flex-row tw-justify-center">
                <div className="images tw-relative tw-w-[285px]">
                    <BigPlayButton />
                    <UiImage
                        src="https://firebasestorage.googleapis.com/v0/b/reza-azin.appspot.com/o/app-content%2FReza-and-the-other-guy.png?alt=media&token=1acb02cc-fd96-4c6b-9c89-e76294d377bf"
                        alt="reza azin image"
                        width={285}
                        height={281}
                        className="tw-absolute -tw-bottom-4 -tw-left-8"
                    />
                </div>
                <div
                    className="tw-max-w-[743px] tw-w-full tw-pl-10"
                    style={{ direction: "rtl" }}
                >
                    <h3 className="tw-inline tw-text-base tw-text-secondary-light ">
                        {" "}
                        تیم رضا آذین,{" "}
                    </h3>
                    <p className="tw-inline tw-text-paragraph">
                        با افتخار به عنوان یک گروه تخصصی در زمینه توسعه کسب و
                        کار در اینستاگرام، به شما خوش آمد می‌گوییم. هدف ما ارائه
                        راهکارها و استراتژی‌های موثر جهت بهره‌برداری از
                        اینستاگرام برای افزایش رشد و موفقیت کسب و کار شماست.
                    </p>
                    <p className="tw-text-paragraph">
                        در این دوره‌های آموزشی، ما با بهره‌گیری از تجربیاتمان در
                        زمینه توسعه کسب و کار در اینستاگرام، به شما نکات و
                        راهکارهای کاربردی را ارائه می‌دهیم. از جمله مباحثی که در
                        دوره‌های آموزشی ما پوشش داده می‌شوند، می‌توان به
                        استراتژی‌های تبلیغاتی، راهکارهای ارتباطی با مشتریان،
                        راهکارهای افزایش فالوئرها و ترافیک سایت از طریق
                        اینستاگرام و نحوه استفاده از ابزارها و ویژگی‌های جدید
                        اینستاگرام اشاره کرد.
                    </p>
                    <p className="tw-text-paragraph">
                        ما باور داریم که اینستاگرام با بیش از میلیارد کاربر فعال
                        ماهانه، یکی از بهترین پلتفرم‌ها برای رشد و گسترش کسب و
                        کارهاست. بنابراین، در دوره‌های آموزشی ما، شما با استفاده
                        از روش‌های نوین و به روز، می‌توانید توانایی‌های بیشتری
                        را در بهره‌برداری از اینستاگرام برای رشد کسب و کار خود
                        کسب کنید.
                    </p>
                </div>
            </div>
        </section>
    );
};

AboutTeam.displayName = "AboutTeam";

export default AboutTeam;
