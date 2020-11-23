import React from "react";
import style from "./NavOption.module.scss";

const NavOption = ({ img, blue, green, more }) => {
  return (
    <div>
      {blue === true && (
        <div className={`${style.o_nav_option} ${style.o_nav_option_blue}`}>
          <img src={img} alt="option" />
        </div>
      )}

      {green === true && (
        <div className={`${style.o_nav_option} ${style.o_nav_option_green}`}>
          <img src={img} alt="option" />
        </div>
      )}

      {more === true && (
        <div className={`${style.o_nav_option} ${style.o_nav_option_disabled}`}>
          <img src={img} alt="option" />
        </div>
      )}
    </div>
  );
};

export default NavOption;
