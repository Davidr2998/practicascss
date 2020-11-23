import React from "react";
import NavOption from "./NavOption/NavOption";
import style from "./VerticalNav.module.scss";

const VerticalNav = () => {
  return (
    <div className={style.o_nav_container}>
      <img
        src="/assets/icons/Circle_Colors.svg"
        alt="#"
        className={style.o_nav_logo}
      />
      <div className={style.o_nav_option_container}>
        <NavOption img="/assets/icons/Triangle.svg" blue />
        <NavOption img="/assets/icons/Square.svg" green />
        <NavOption img="/assets/icons/Cross.svg" more />
      </div>
    </div>
  );
};

export default VerticalNav;
