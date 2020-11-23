import React from "react";
import style from "./CardUpload.module.scss";


function Cardupload() {
  return (
    <div className={style.o_card_upload}>
        <div className={style.o_inside_card}>
            <img src="/assets/icons/Cloud.svg" 
            alt="Cloud Icon"
            className={style.o_img_cloud}/>
            <h3>Upload invoice</h3>
        </div>
    </div>
  );
}

export default Cardupload;