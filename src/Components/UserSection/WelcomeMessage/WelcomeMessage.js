import React from "react";
import style from "./WelcomeMessage.module.scss";

const WelcomeMessage = () => {
  return (
    <div className={style.o_main_container}>
      <img
        src="/assets/img/Emoji_Profile.png"
        alt="user"
        className={style.o_img}
      />
      <p>
        Welcome back, <br />
        <strong>Julie Bell</strong>
      </p>
    </div>
  );
};

export default WelcomeMessage;
