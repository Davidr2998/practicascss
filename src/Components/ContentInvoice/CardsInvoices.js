import React from "react";
import style from "./CardsInvoices.module.scss";

function Cardsinvoices({ numero, palabra, fecha, estado, valor, green }) {
  return (
    <div className={style.o_card_container}>
      <div className={style.o_top_card}>
        <div
          className={green ? style.o_vertical : style.o_vertical_orange}
        ></div>
        <div className={style.o_top_text}>
          <h3 className={style.o_text}>{numero}</h3>
          <h3 className={style.o_difer_text}>{palabra}</h3>
          <h3 className={style.o_text}>{fecha}</h3>
        </div>
      </div>
      <hr className={style.o_line} />
      <div className={style.o_down_text}>
        <h3 className={style.o_text_down}>{estado}</h3>
        <h3 className={style.o_difer_text_down}>{valor}</h3>
      </div>
    </div>
  );
}

export default Cardsinvoices;
