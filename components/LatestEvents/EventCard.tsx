import { useTranslation } from "react-i18next";

const EventCard = (props: any) => {
  const {item} = props
  const { t } = useTranslation();
  return (
    <div className="c-events-carditem">
      <img src="/images/events-card-back.png" className="c-events-card-background"></img>
      <div className="c-events-card-content">
        <div className="c-events-card-header-img">
          <img src="/images/arrow.png"></img>
          <img src="/images/arrow.png"></img>
          <img src="/images/arrow.png"></img>
        </div>
        <div className="c-events-card-subtitle">{item?.desc}</div>
        <div className="c-events-card-date">{item?.date}</div>
      </div>
    </div>
  );
};
export default EventCard;