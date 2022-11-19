import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const {t} = useTranslation()
  return (
    <div className="c-footer-root">
      <div className="c-footer-container">
        <div className="c-footer-left">
          <div className="c-footer-title-left">Follow Us</div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              rel="noreferrer"
              className="c-footer-linkItem-content"
              href="https://www.facebook.com/groups/4354141514692375/"
            >
              <span className="c-social-icon">
                <img src="/images/social-facebook.png" width={12}></img>
              </span>
              <span className="c-footer-linkText">Facebook</span>
            </a>
          </div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              rel="noreferrer"
              className="c-footer-linkItem-content"
              href="https://twitter.com/zilionixx"
            >
              <span className="c-social-icon">
                <img src="/images/social-twitter.png" width={20}></img>
              </span>
              <span>Twitter</span>
            </a>
          </div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              href="mailto:tsimafei@zilionixx.com"
              className="c-footer-linkItem-content"
              rel="noreferrer"
            >
              <span className="c-social-icon">
                <img src="/images/social-email.png" width={20}></img>
              </span>
              <span>Gmail</span>
            </a>
          </div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              href="mailto:tsimafei@zilionixx.com"
              className="c-footer-linkItem-content"
              rel="noreferrer"
            >
              <span className="c-social-icon">
                <img src="/images/social-youtube.png"></img>
              </span>
              <span>YouTube</span>
            </a>
          </div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              href="mailto:tsimafei@zilionixx.com"
              rel="noreferrer"
              className="c-footer-linkItem-content"
            >
              <span className="c-social-icon">
                <img src="/images/social-telegram.png"></img>
              </span>
              <span>Telegram</span>
            </a>
          </div>
        </div>
        <div className="c-footer-right">
          <div className="c-footer-title-right">nVpn</div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              href="mailto:tsimafei@zilionixx.com"
              rel="noreferrer"
            >
              <span>Order Now</span>
            </a>
          </div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              href="mailto:tsimafei@zilionixx.com"
              rel="noreferrer"
            >
              <span>Contact Us</span>
            </a>
          </div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              href="mailto:tsimafei@zilionixx.com"
              rel="noreferrer"
            >
              <span>F.A.Q</span>
            </a>
          </div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              href="mailto:tsimafei@zilionixx.com"
              rel="noreferrer"
            >
              <span>Client Area</span>
            </a>
          </div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              href="mailto:tsimafei@zilionixx.com"
              rel="noreferrer"
            >
              <span>Terms of Service</span>
            </a>
          </div>
          <div className="c-footer-linkItem">
            <a
              target="_blank"
              href="mailto:tsimafei@zilionixx.com"
              rel="noreferrer"
            >
              <span>Privacy policy</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;