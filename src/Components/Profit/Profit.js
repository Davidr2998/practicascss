import React from "react";
import Expenses from "./Expenses/Expenses";
import TotalProfit from "./TotalProfit/TotalProfit";
import style from "../Profit/Profit.module.scss";

function Profit() {
  return (
    <div className={style.o_profit_container}>
      <TotalProfit></TotalProfit>
      <Expenses></Expenses>
    </div>
  );
}

export default Profit;
