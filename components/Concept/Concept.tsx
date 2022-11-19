import Title from "../Base/Title/Title";
import { useTranslation } from "react-i18next";

const Concept = () => {
  const { t } = useTranslation();
  return (
    <div className="c-concept-root">
      <canvas id="bg-animation"></canvas>
      <div className="c-concept-container">
        <div className="c-concept-title-content">
          <Title description="Why nVpn?" color="dark"/>
        </div>
        <div className="c-concept-content">
          <div className="c-concept-inner-content">
            <div className="c-concept-description">
              <div className="c-event-item"
              >
                <div className="c-concept-desc-item">
                  <img src="/images/concept-group.png" className="c-concept-desc-icon"></img>
                  <div>nVpn uses a tunneling method, the data is broken into smaller encrypted &quot;packets&quot; and subsequently sent through the created virtual tunnel</div>
                </div>
              </div>
              <div
                className="c-event-item"
              >
                <div className="c-concept-desc-item">
                  <img src="/images/concept-bxs_network-chart.png" className="c-concept-desc-icon"></img>
                  <div>The connection gets established via the Open Source Software OpenVPN (or L2TP/IPsec (IKEv1 IKEv2), Squid & Socks5 proxy)</div>
                </div>
              </div>
              <div
                className="c-event-item"
              >
                <div className="c-concept-desc-item">
                  <img src="/images/concept-wpf_security-checked.png" className="c-concept-desc-icon"></img>
                  <div>We provide by default a secure 256 Bit AES-CBC encrypted connection  to our servers located all over the world where all traffic is directed through them! </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-concept-inner-content">
            <div className="c-concept-right-text">
              <img
                src="/images/concept-right.png"
                className="c-concept-img-left"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Concept;
