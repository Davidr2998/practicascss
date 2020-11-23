import React from "react";
import style from "./TitleInvoice.module.scss";

function Titleinvoice() {
  return (
    <div className={style.o_title_container}>
      
        <div className={style.o_text_container}>
          <h1>Invoices</h1>
          <h3>recently created</h3>
        </div>

        <div className={style.o_img_container}>
          <img src="/assets/icons/Sliders.svg"
          alt="Slider"
          className={style.o_img_slider}/>
          <img src="/assets/icons/Arrow.svg"
          alt="Arrow"
          className={style.o_img_arrow}/>
        </div>
        
    </div>
  );
}

export default Titleinvoice;
