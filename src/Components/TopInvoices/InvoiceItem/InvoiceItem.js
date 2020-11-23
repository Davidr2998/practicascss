import React from "react";
import style from "./InvoiceItem.module.scss";

const InvoiceItem = ({ title, value, description }) => {
  return (
    <div className={style.o_item_container}>
      {title && <p>{title}</p>}
      {value ? (
        <h3>{value}</h3>
      ) : (
        <div className={style.o_revenue_container}>
          <div className={style.o_range_container}>
            <div className={style.o_range_content}></div>
          </div>
          <h3>$21.3k</h3>
        </div>
      )}
      <p className={style.o_description}> {description} </p>
    </div>
  );
};

export default InvoiceItem;
