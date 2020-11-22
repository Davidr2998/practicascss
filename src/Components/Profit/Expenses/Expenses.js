import react from 'react';
import Cards from './Cards/Cards';
import "./Expenses.css";

function Expenses() { 
    return(
        <div className="o-expenses-container">
            <div className="o-title-container">
                <h1>Expenses</h1>
                <img src="./assets/icons/Arrow.svg" className="o-arrow-icon" alt="Icono de flecha" />
            </div>
            <div className="o-cards-container">
                <Cards value={"$20."} date={"23 Sep, 2020"} name="Software" imgsrc="/assets/icons/Software.svg"></Cards>
                <Cards value={"$30."} date={"26 Sep, 2020"} name="Management" imgsrc="/assets/icons/Management.svg"></Cards>
                <Cards value={"$60."} date={"28 Sep, 2020"} name="Support" imgsrc="/assets/icons/Apple.svg"></Cards>
            </div>
        </div>
    );
}

export default Expenses;
