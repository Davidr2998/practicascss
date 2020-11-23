import rect from "react";
import style from "../TotalProfit/TotalProfit.module.scss";

function TotalProfit() {
  return (
    <div className={style.o_totalprofit_container}>
      <div className={style.o_title_profit_container}>
        <h1>Total Profit</h1>
        <h3>September 2020</h3>
        <img
          src="/assets/icons/Sliders.svg"
          className={style.o_sliders_icon}
          alt="Icono de configuración"
        />
      </div>
      <div className={style.o_info_container}>
        <div className={style.o_info}>
          <h2>$22.3k</h2>
          <div className={style.o_income}>
            <img
              src="/assets/icons/Circle_1.svg"
              className={style.o_circle_icon}
            />
            <h4>$54.3k income</h4>
          </div>
          <div className={style.o_expenses}>
            <img
              src="/assets/icons/Circle_2.svg"
              className={style.o_circle_icon}
            />
            <h4>$32.1k expenses</h4>
          </div>
        </div>
        <h4 className={style.o_info_graph}>Mo 30</h4>
      </div>
    </div>
  );
}

export default TotalProfit;
