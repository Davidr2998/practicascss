import react from 'react';
import style from "../Cards/Cards.module.scss"

const Cards = ({value, imgsrc, name, date, color, blue, green, lillac }) => { 
    return (

        <div>
        {blue && <div className={`${style.o_card_container} ${style.o_card_container_blue}`}>
                <div className={style.o_price}>
                <h3>{value}</h3>
                <img src='./assets/icons/Clip.svg' className={style.o_img_clip}/>
            </div>                
            <h5 className={style.o_date}>{date}</h5>
            <div className={style.o_icon_container}>
                <img src={imgsrc} className={style.o_img_icon}/>
                <h3>{name}</h3>
            </div>
        </div>}

        {green &&<div className={`${style.o_card_container} ${style.o_card_container_green}`}>
            <div className={style.o_price}>
                <h3>{value}</h3>
                <img src='./assets/icons/Clip.svg' className={style.o_img_clip}/>
            </div>                
            <h5 className={style.o_date}>{date}</h5>
            <div className={style.o_icon_container}>
                <img src={imgsrc} className={style.o_img_icon}/>
                <h3>{name}</h3>
            </div>
        </div>}

        {lillac && <div className={`${style.o_card_container} ${style.o_card_container_lillac}`}>
            <div className={style.o_price}>
                <h3>{value}</h3>
                <img src='./assets/icons/Clip.svg' className={style.o_img_clip}/>
            </div>                
            <h5 className={style.o_date}>{date}</h5>
            <div className={style.o_icon_container}>
                <img src={imgsrc} className={style.o_img_icon}/>
                <h3>{name}</h3>
            </div>
        </div>}
        </div>
    );
}

export default Cards;
