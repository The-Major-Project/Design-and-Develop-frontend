import React from "react";
import cx from "classnames";
import { ReactComponent as FAQ1 } from "../../../../assets/faq1.svg";
import { ReactComponent as FAQ2 } from "../../../../assets/faq2.svg";
import { ReactComponent as FAQ3 } from "../../../../assets/faq3.svg";
const Faqs = ({ color = "blue", head, para, className }) => {
    const FAQDiv = cx(
        "w-80 px-8 py-10 transition duration-500 ease-in-out hover:shadow-xl  rounded-3xl lg:w-96 lg:mx-10 md:py-6 ",
        className
    );
    const FAQHead = cx(
        {
            " text-blue-700 ": color === "blue",
            " text-pink-500": color === "pink",
            " text-yellow-500 ": color === "yellow",
        },
        "font-bold"
    );
    let Image;
    if (color === "blue") {
        Image = FAQ3;
    } else if (color === "yellow") {
        Image = FAQ2;
    } else {
        Image = FAQ1;
    }

    return (
        <div className={FAQDiv}>
            <div className="flex justify-center">
                <Image className="mt-1 mr-2" />
                <h2 className={FAQHead}>
                    Does buying followers help my Instagram account?
                </h2>
            </div>
            <p className="mt-4 ml-4">
                When it comes to a social media platform like Instagram, the number of
                followers a brand has is proportional to how successful they are. These
                are accrued over a really long time. When you buy Instagram followers
                from us, you are getting years worth of followers in one go.
            </p>
        </div>
    );
};

export default Faqs;
