import React from "react";
import style from "./DashOption.module.scss";

const DashOption = ({ icon, description }) => {
  return (
    <div className={style.o_option_container}>
      <img src={icon} alt="#" />
      <h4>{description}</h4>
    </div>
  );
};

export default DashOption;
