import { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import HeaderMobileMenu from "./HeaderMobilMenu";
import ActionButton from "../Base/ActionButton/ActionButton";

interface Props {
  scrolltotop: boolean;
}

function ScrollTop({ scrolltotop }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={scrolltotop ? "c-scroll-top" : "c-scroll-top-disable"}>
      <span onClick={handleClick} role="presentation">
        <i className="fas fa-chevron-up c-scroll-top-icon"></i>
      </span>
    </div>
  );
}

const Header = () => {
  const { t } = useTranslation();
  const [scrolltotop, setScrolltotop] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleUrl = (url: string) => {
    window.open(url);
  };
  const handleScroll = () => {
    if (window.scrollY > 65) {
      setScrolltotop(true);
      window.innerWidth <= 768 ? setSticky(false) : setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
      setScrolltotop(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSticky(false);
    } else {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className={`c-header-root${sticky ? " sticky" : ""}`}>
      <Box className={`c-header-container`}>
        <div className="c-header-menu-group">
          <div className="c-header-menu">
            <div className="c-header-logo">
              <img
                src="/logo.png"
                className="c-header-logo-img"
                alt="logo"
              ></img>
              <span className="c-header-logo-name">{t("nVpn")}</span>
            </div>
            <Button
              className="c-header-nav c-header-nav-active"
              disableRipple
              onClick={() => window.location.reload()}
            >
              <span className="c-header-nav-text">{t("Home")}</span>
            </Button>
            <Button
              className="c-header-nav"
              disableRipple
              onClick={() => handleUrl("/#")}
            >
              <span className="c-header-nav-text">{t("Pricing")}</span>
            </Button>
            <Button
              className="c-header-nav"
              disableRipple
              onClick={() => handleUrl("/#")}
            >
              <span className="c-header-nav-text">{t("F.A.Q")}</span>
            </Button>
            <Button
              className="c-header-nav"
              disableRipple
              onClick={() => handleUrl("/#")}
            >
              <span className="c-header-nav-text">{t("Contact Us")}</span>
            </Button>
          </div>
          <HeaderMobileMenu />
          {/* <LanguageChange /> */}
        </div>
        <ActionButton
          letter="Login"
          className="c-header-login-button"
          onClick={() => handleUrl("/#")}
        />
      </Box>
      <div id="back-to-top-anchor" />
      <ScrollTop scrolltotop={scrolltotop} />
    </div>
  );
};

export default Header;
