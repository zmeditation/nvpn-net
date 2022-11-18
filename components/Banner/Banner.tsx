import { useState, useEffect } from "react";
import ActionButton from "../Base/ActionButton/ActionButton";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import ScrollAnimation from "react-animate-on-scroll";

const Banner = () => {
  const { t } = useTranslation();
  const handleUrl = (url: string) => {
    window.open(url);
  };
  const item =
    {
      image: "/images/banner.png",
      title: t("nVpn"),
      description: t("The VPN service that provides a secure and private connection within a public network for your phone, tablet & desktop secure & private"),
      button: t("Order Now"),
    }

  return (
    <div className="c-banner-root">
      <ol className="c-banner-slide-container">
            <div
              className={clsx("c-banner-slider-child", "c-banner-slide active")}
            >
              <img
                src={item.image}
                className="c-banner-background"
                alt="background"
              ></img>
              <div className="c-banner-container">
                <ScrollAnimation
                  animateIn="fadeInDown"
                  animateOut="fadeOut"
                  duration={1}
                  delay={0}
                  animateOnce={true}
                  className="c-banner-text-type2"
                >
                  {item.title}
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInDown"
                  animateOut="fadeOut"
                  duration={2}
                  delay={0}
                  animateOnce={true}
                  className="c-banner-text-type4"
                >
                  {item.description}
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="zoomIn"
                  animateOut="fadeOut"
                  duration={1}
                  delay={0}
                  animateOnce={true}
                  className="c-banner-button"
                >
                  <ActionButton
                    letter={item.button}
                    onClick={() => handleUrl("https://play.unicial.org")}
                  />
                </ScrollAnimation>
              </div>
            </div>
      </ol>
    </div>
  );
};

export default Banner;
