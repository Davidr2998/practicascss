import React from "react";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import style from "./UserSection.module.scss";
import OptionPanel from "./OptionPanel/OptionPanel";
import DashOption from "./OptionPanel/DashOption/DashOption";

const UserSection = () => {
  return (
    <div className={style.o_main_container}>
      <WelcomeMessage />
      <OptionPanel />
      <DashOption
        icon="/assets/icons/Settings.svg"
        description="Settings"
        className={style.o_settings}
      />
    </div>
  );
};

export default UserSection;
