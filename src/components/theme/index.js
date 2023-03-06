import React, { useEffect, useState } from "react";
import { THEME } from "../../constants";
import { getTheme, setTheme } from "../../utils";
import { setDarkTheme, setLightTheme } from "../../utils/theme";

import LightOn from "../../../assets/icons/lightOn";
import LightOff from "../../../assets/icons/lightOff";

import "./index.scss";

const Theme = () => {
  const [checked, setChecked] = useState(true);

  const getNewTheme = (checked) => {
    return checked ? THEME.LIGHT : THEME.DARK;
  };

  const handleSwitch = (checked) => {
    const newTheme = getNewTheme(checked);
    setTheme(newTheme);
    setChecked(checked);

    if (checked) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  useEffect(() => {
    const defaultTheme = getTheme(THEME.LIGHT);
    const checked = defaultTheme === THEME.LIGHT;
    setChecked(checked);
    handleSwitch(checked);
  }, []);

  return (
    <div
      className="themeSwitch"
      data-light={checked}
      onClick={() => handleSwitch(!checked)}
    >
      {checked ? (
        <LightOn
          width={28}
          height={28}
          strokeWidth={2}
          color="var(--default-darker-white)"
        />
      ) : (
        <LightOff
          width={23}
          height={23}
          strokeWidth={2.5}
          color="var(--default-darker-white)"
        />
      )}
    </div>
  );
};

export default Theme;
