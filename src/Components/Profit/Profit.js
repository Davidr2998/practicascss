import React from "react";
import Expenses from "./Expenses/Expenses";
import "../Profit/Profit.css"

function Profit() { 
    return(
        <div className="o-profit-container">
            <Expenses></Expenses>
        </div>
    );
}

export default Profit;
