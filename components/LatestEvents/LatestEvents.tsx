import { useTranslation } from "react-i18next";
import Title from "../Base/Title/Title";
import ScrollAnimation from "react-animate-on-scroll";
import EventCard from "./EventCard";

const items = [
  {
    desc: "Our support team has been down for 3 days due to a server corruption on the host side. We are tackling this issue and have made progress today, it will take another 1-2 days for a full fix.",
    date: "1:46 AM  Jul 3, 2022"
  },
  {
    desc: "The Website server had a technical issue almost all throughout the day, which just has been fixed right now. Everything is back functional.",
    date: "1:46 AM  Jul 3, 2022"
  },
  {
    desc: "Since yesterday there was a problem connecting our hostname. To fix this, re-download the config file now, it will contain your VPN IP address. We will decide in 1-2 days!",
    date: "2:37 AM  Jul 6, 2022"
  },
  {
    desc: "Update: Hostname problem is resolved now, all systems back up working. Important: Make sure to re-download your config file one more time now!",
    date: "3:15 AM  Jul 6, 2022"
  }
]

const LatestEvents = () => {
  const { t } = useTranslation();
  return (
    <div className="c-events-root">
      <div className="c-events-container">
        <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
            animateOnce={true}
          >
            <div className="c-events-title-content">
              <Title
                description={t("Latest events")}
                color="light"
              />
              <img src="/images/latestevents-logo.png" className="c-events-title-logo"></img>
            </div>
          </ScrollAnimation>
          <div className="c-events-cardlist">
            {items.map((item, index)=>(
              <ScrollAnimation
                animateIn="zoomIn"
                animateOut="fadeOut"
                duration={0.5}
                delay={0}
                animateOnce={true}
                key={index}
              >
                <EventCard item={item}/>
              </ScrollAnimation>
            ))}
          </div>
      </div>
    </div>
  );
};
export default LatestEvents;
