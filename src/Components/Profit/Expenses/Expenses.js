import react from "react";
import Cards from "./Cards/Cards";
import style from "../Expenses/Expenses.module.scss";

function Expenses() {
  return (
    <div className={style.o_expenses_container}>
      <div className={style.o_title_container}>
        <h1>Expenses</h1>
        <img
          src="./assets/icons/Arrow.svg"
          className={style.o_arrow_icon}
          alt="Icono flecha"
        />
      </div>
      <div className={style.o_cards_container}>
        <Cards
          value={"$20."}
          date={"23 Sep, 2020"}
          name="Software"
          imgsrc="/assets/icons/Software.svg"
          green
        ></Cards>
        <Cards
          value={"$30."}
          date={"26 Sep, 2020"}
          name="Management"
          imgsrc="/assets/icons/Management.svg"
          blue
        ></Cards>
        <Cards
          value={"$60."}
          date={"28 Sep, 2020"}
          name="Support"
          imgsrc="/assets/icons/Apple.svg"
          lillac
        ></Cards>
      </div>
    </div>
  );
}

export default Expenses;
