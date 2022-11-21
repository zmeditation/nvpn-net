import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../Base/Title/Title";
import OfferCarditem from "./OfferCardItem";

const items = [
  {
    backImg: "/images/offer-card-back1.png",
    headerImg: "/images/offer-card-header1.png",
    title: "Regular VPN",
    subTitle: "Encryption Security",
    annualPrice: "49,00",
    monthPrice: "4,90"
  },
  {
    backImg: "/images/offer-card-back1.png",
    headerImg: "/images/offer-card-header2.png",
    title: "Double VPN",
    subTitle: "Additional IP Double encryption.",
    annualPrice: "65,00",
    monthPrice: "6,50"
  },
  {
    backImg: "/images/offer-card-back2.png",
    headerImg: "/images/offer-card-header3.png",
    title: "Parrallel VPN",
    subTitle: "Additional IP Double encryption. double parallel tunnel",
    annualPrice: "88,00",
    monthPrice: "8,80"
  },
  {
    backImg: "/images/offer-card-back3.png",
    headerImg: "/images/offer-card-header4.png",
    title: "Triple VPN",
    subTitle: "3 encryption improved security",
    annualPrice: "74,00",
    monthPrice: "7,40"
  }
]

const SpecialOffer = () => {
  const { t } = useTranslation();
  const [switchAnnual, setSwitchAnnual] = useState<boolean>(false)
  const annualCheck = (state:boolean) => {
    setSwitchAnnual(state)
  }
  
  return (
    <div className="c-offer-root">
      <div className="c-offer-title-content">
        <Title
          description={t("Our Special Plans")}
          color="light"
        />
        <div className="c-offer-toggle-btn">
          <span className="c-offer-toggle-text">Monthly</span>
          <label className="c-offer-switch">
            <input type="checkbox" id="checbox" checked={switchAnnual} onChange={(e:any)=>annualCheck(e.target?.checked)}/>
            <span className="c-offer-slider c-offer-round"></span>
          </label>
          <span className="c-offer-toggle-text">Annually</span>
        </div>
      </div>
      <div className="c-offer-cardlist">
        {items.map((item, index)=>(
            <OfferCarditem item={item} key={index} annualState={switchAnnual}/>
        ))}
      </div>
    </div>
  );
};
export default SpecialOffer;
