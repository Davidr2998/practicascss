import React from "react";
import style from "./ContainerInvoices.module.scss";
import Titleinvoice from "./TitleInvoice.js";
import Cardupload from "./CardUpload.js";
import Cardsinvoices from "./CardsInvoices.js";

function Containerinvoice() {
  return (
    <div className={style.o_size_container}>
      <div className={style.o_size_container}>
        <Titleinvoice></Titleinvoice>
        <div className={style.o_cards}>
          <Cardupload></Cardupload>
          <Cardsinvoices
            numero="#00106"
            palabra="Mindtickle"
            fecha="2 Sep, 2020"
            estado="Viewed"
            valor="$3.500"
          ></Cardsinvoices>
          <Cardsinvoices
            numero="#00105"
            palabra="Cleancloud"
            fecha="1 Sep, 2020"
            estado="Sent"
            valor="$2.000"
            green
          ></Cardsinvoices>
        </div>
      </div>
    </div>
  );
}

export default Containerinvoice;
