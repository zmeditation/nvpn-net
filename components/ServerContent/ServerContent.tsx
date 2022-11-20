import Title from "../Base/Title/Title";
import { useTranslation } from "react-i18next";
import ActionButton from "../Base/ActionButton/ActionButton";

const ServerContent = () => {
  const { t } = useTranslation();
  const handleUrl = (url: string) => {
    window.open(url);
  };
  return (
    <div className="c-server-root">
      <canvas id="canvas" className="c-canvas-root"></canvas>
      <div className="c-server-container">
        <div className="c-server-content">
          <div className="c-server-inner-content">
            <div className="c-server-left">
              <Title
                description={t("Servers in 23 Countries Worldwide")}
                color="light"
              />
              <div className="c-server-descriptionroot">
                <div
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
                </div>
              </div>
            </div>
          </div>
          <div
            className="c-server-right"
          >
            <img src="/images/server-map.png" className="c-server-map" useMap="#map"></img>
            <map name="map">
              <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm"></area>
              <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm"/>
              <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm"/>
            </map>
          </div>
        </div>
        <div className="c-server-bottom">
          <img src="/images/server-bottom.png" className="c-server-bottom-img"></img>
        </div>
      </div>
    </div>
  );
};
export default ServerContent;
