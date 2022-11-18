import Title from "../Base/Title/Title";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import ActionButton from "../Base/ActionButton/ActionButton";

const ServerContent = () => {
  const { t } = useTranslation();
  const handleUrl = (url: string) => {
    window.open(url);
  };
  return (
    <div className="c-server-root">
      <div className="c-server-container">
        <div className="c-server-content">
          <div className="c-server-inner-content">
            <div className="c-server-left">
              <ScrollAnimation
                animateIn="zoomIn"
                animateOut="fadeOut"
                duration={0.5}
                delay={0}
                animateOnce={true}
              >
                <Title
                  description={t("Servers in 23 Countries Worldwide")}
                  color="light"
                />
              </ScrollAnimation>
              <div className="c-server-descriptionroot">
                <ScrollAnimation
                  animateIn="fadeInDown"
                  animateOut="fadeOut"
                  duration={2}
                  delay={0}
                  animateOnce={true}
                  className="c-server-descriptions"
                >
                  <span className="c-server-description">
                    {t("Easy to use and offers connections through our 49 servers located in 23 countries, we give you blazing fast speeds and unlimited bandwidth.")}
                  </span>
                  <ActionButton
                      letter="Order Now"
                      className="c-server-button"
                      onClick={() => handleUrl("https://play.unicial.org")}
                    />
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <ScrollAnimation
            animateIn="bounceInUp"
            animateOut="fadeOut"
            duration={2}
            delay={0}
            animateOnce={true}
            className="c-server-right"
          >
            <img src="/images/server-map.png" className="c-server-map"></img>
          </ScrollAnimation>
        </div>
        <div className="c-server-bottom">
          <img src="/images/server-bottom.png"></img>
        </div>
      </div>
    </div>
  );
};
export default ServerContent;
