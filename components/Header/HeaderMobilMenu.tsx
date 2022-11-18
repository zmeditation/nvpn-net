import { useState } from "react";
import { useTranslation } from "react-i18next";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  ClickAwayListener,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const HeaderMobileMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleUrl = (url: string) => {
    setOpen(false);
    window.open(url);
  };

  return (
    <div className="c-header-mobile-container">
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <div className="c-header-mobile-logo" onClick={handleModal}>
            <img src="/logo.png" className="c-header-logo-img" alt="logo"></img>
            <span className="c-header-logo-name">{t("nVpn")}</span>
            {open ? (
              <ExpandLess className="c-header-mobile-icon" />
            ) : (
              <ExpandMore className="c-header-mobile-icon" />
            )}
          </div>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            className="c-header-mobile-menu-collapse"
          >
            <List
              component="div"
              disablePadding
              className="c-header-mobile-menu-content"
            >
              <ListItem
                button
                onClick={() => window.location.reload()}
                className="active-list"
                disableRipple
              >
                <ListItemText primary={t("Home")} />
              </ListItem>
              <ListItem
                button
                onClick={() => handleUrl("/#")}
                disableRipple
              >
                <ListItemText primary={t("Pricing")} />
              </ListItem>
              <ListItem
                button
                onClick={() => handleUrl("/#")}
                disableRipple
              >
                <ListItemText primary={t("F.A.Q")} />
              </ListItem>
              <ListItem
                button
                onClick={() => handleUrl("/#")}
                disableRipple
              >
                <ListItemText primary={t("Contact Us")} />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </ClickAwayListener>
    </div>
  );
};

export default HeaderMobileMenu;
