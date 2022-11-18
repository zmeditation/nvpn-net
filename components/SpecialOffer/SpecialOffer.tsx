import { useTranslation } from "react-i18next";
import Title from "../Base/Title/Title";
import ScrollAnimation from "react-animate-on-scroll";
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
       <ScrollAnimation
          animateIn="zoomIn"
          animateOut="fadeOut"
          duration={0.5}
          delay={0}
          animateOnce={true}
        >
          <div className="c-offer-title-content">
            <Title
              description={t("Special offer")}
              color="light"
            />
          </div>
        </ScrollAnimation>
        <div className="c-offer-cardlist">
          {items.map((item, index)=>(
            <ScrollAnimation
              animateIn="zoomIn"
              animateOut="fadeOut"
              duration={0.5}
              delay={0}
              animateOnce={true}
              key={index}
            >
              <OfferCarditem item={item}/>
            </ScrollAnimation>
          ))}
        </div>
    </div>
  );
};
export default SpecialOffer;
