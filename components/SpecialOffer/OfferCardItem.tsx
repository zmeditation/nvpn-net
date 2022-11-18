import { useTranslation } from "react-i18next";
import ActionButton from "../Base/ActionButton/ActionButton";

const OfferCarditem = (props: any) => {
  const {item} = props
  const { t } = useTranslation();
  const handleUrl = (url: string) => {
    window.open(url);
  };

  return (
    <div className="c-offer-carditem">
      <img src={item.backImg} className="c-offer-card-background"></img>
      <div className="c-offer-card-content">
        <img src={item.headerImg} className="c-offer-card-header-img"></img>
        <div className="c-offer-card-title">{item.title}</div>
        <div className="c-offer-card-subtitle">{item.subTitle}</div>
        <div className="c-offer-card-pricecontent">
          <span className="c-offer-card-dollar">$</span>
          <span className="c-offer-card-price">{item.price}</span>
        </div>
        <ActionButton
          letter="Order Now"
          className="c-offer-card-button"
          onClick={() => handleUrl("https://play.unicial.org")}
        />
      </div>
    </div>
  );
};
export default OfferCarditem;