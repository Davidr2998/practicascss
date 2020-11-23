import React from "react";
import style from "./InvoicesDown.module.scss";
import Containerinvoice from "../ContentInvoice/ContainerInvoice.js";
import Containerimg from "../ContainerImgInvoice/ContainerImg.js";

function Invoicesdown() {
  return (
    <div className={style.o_big_container}>
      <Containerinvoice></Containerinvoice>
      <Containerimg></Containerimg>
    </div>
  );
}

export default Invoicesdown;
