import { useState, useEffect } from "react";
import ActionButton from "../Base/ActionButton/ActionButton";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Banner = () => {
  const { t } = useTranslation();
  const handleUrl = (url: string) => {
    window.open(url);
  };
  const item =
    {
      image: "/images/banner_.png",
      title: t("nVpn"),
      description: t("The VPN service that provides a secure and private connection within a public network for your phone, tablet & desktop secure & private"),
      button: t("Order Now"),
    }
  const playing = true
  const loop = true
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
            <div
              className="c-banner-text-type2"
            >
              {item.title}
            </div>
            <div
              className="c-banner-text-type4"
            >
              {item.description}
            </div>
            <div
              className="c-banner-button"
            >
              <ActionButton
                letter={item.button}
                onClick={() => handleUrl("https://play.unicial.org")}
              />
            </div>
          </div>
          <video autoPlay loop muted className="c-banner-video">
            {/* <source src={`${BackendUploadURL}/advertise/zilionixxapp.mp4`} type="video/mp4" /> */}
            <source src="/images/banner.mp4" type="video/ogg" />
            {/* <source src="/images/zilionixxapp.mp4" type="video/mp4" /> */}
          </video>
        </div>
      </ol>
    </div>
  );
};

export default Banner;
