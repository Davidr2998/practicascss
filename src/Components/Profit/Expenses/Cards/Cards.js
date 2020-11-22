import react from 'react';
import "../Cards/Cards.css"

const Cards = ({value, imgsrc, name, date }) => { 
    return (
        <div className="o-card-container">
            <div className="o-price">
                <h3>
                    {value}
                </h3>
                <img src='./assets/icons/Clip.svg' className="o-img-clip"/>
            </div>                
            <h5 className="o-date">{date}</h5>
            <div className="o-icon-container">
                <img src={imgsrc} className="o-img-icon"/>
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default Cards;
