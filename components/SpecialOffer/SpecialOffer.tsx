import { useTranslation } from "react-i18next";
import Title from "../Base/Title/Title";
import OfferCarditem from "./OfferCardItem";

const items = [
  {
    backImg: "/images/offer-card-back1.png",
    headerImg: "/images/offer-card-header1.png",
    title: "Regular VPN",
    subTitle: "Encryption Security",
    price: "4,90"
  },
  {
    backImg: "/images/offer-card-back1.png",
    headerImg: "/images/offer-card-header2.png",
    title: "Double VPN",
    subTitle: "Additional IP Double encryption.",
    price: "6,50"
  },
  {
    backImg: "/images/offer-card-back2.png",
    headerImg: "/images/offer-card-header3.png",
    title: "Parrallel VPN",
    subTitle: "Additional IP Double encryption. double parallel tunnel",
    price: "8,80"
  },
  {
    backImg: "/images/offer-card-back3.png",
    headerImg: "/images/offer-card-header4.png",
    title: "Triple VPN",
    subTitle: "3 encryption improved security",
    price: "7,40"
  }
]

const SpecialOffer = () => {
  const { t } = useTranslation();
  return (
    <div className="c-offer-root">
          <div className="c-offer-title-content">
            <Title
              description={t("Special offer")}
              color="light"
            />
          </div>
        <div className="c-offer-cardlist">
          {items.map((item, index)=>(
              <OfferCarditem item={item}/>
          ))}
        </div>
    </div>
  );
};
export default SpecialOffer;
