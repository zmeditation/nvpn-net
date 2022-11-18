import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, MenuItem, Popover } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { lang } from "../../common/constant";
import clsx from "clsx";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  ClickAwayListener,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const LanguageChange = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<string>(lang.en);
  const [open, setOpen] = useState(false);

  const handleLang = (str: string) => {
    i18n.changeLanguage(str);
    setCurrentLang(str);
    setOpen(false);
  };

  return (
    <div className="c-language-root">
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <Box
            aria-controls="simple-menu"
            aria-haspopup="true"
            className="c-language-box"
            onClick={() => setOpen(false)}
          >
            <span>{currentLang === lang.en ? t("EN") : t("Chinese")}</span>
            <ExpandMoreIcon className="c-language-icon"></ExpandMoreIcon>
          </Box>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            className="c-language-collapse"
          >
            <MenuItem onClick={() => handleLang(lang.en)}>
              <span
                className={clsx("c-language-menu", {
                  ["active"]: currentLang === lang.en,
                })}
              >
                {t("English")}
              </span>
            </MenuItem>
            <MenuItem onClick={() => handleLang(lang.ch)}>
              <span
                className={clsx("c-language-menu", {
                  ["active"]: currentLang === lang.ch,
                })}
              >
                {t("Chinese")}
              </span>
            </MenuItem>
          </Collapse>
        </List>
      </ClickAwayListener>
    </div>
  );
};
export default LanguageChange;
