import React from "react";
import InvoiceItem from "./InvoiceItem/InvoiceItem";
import style from "./TopInvoices.module.scss";

const NumericInvoices = () => {
  return (
    <div className={style.o_invoice_container}>
      <InvoiceItem title="Invoices" value="$12,095" description="Overdue" />
      <InvoiceItem value="$33,363" description="Total outstanding" />
      <InvoiceItem value="$4,500" description="In draft" />
      <InvoiceItem title="Outstanding Revenue" description="$12,095 overdue" />
      <img src="/assets/icons/Search.svg" alt="Search" />
    </div>
  );
};

export default NumericInvoices;
