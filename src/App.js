import React from "react";
import "./App.css";
import Invoicesdown from "./Components/InvoicesDown/InvoicesDown.js";
import VerticalNav from "./Components/VerticalNav/VerticalNav";
import UserSection from "./Components/UserSection/UserSection";
import TopInvoices from "./Components/TopInvoices/TopInvoices";
import Profit from "./Components/Profit/Profit";

function App() {
  return (
    <div className="o-app-main-container">
      <VerticalNav />
      <UserSection />
      <div className="o-left-container">
        <TopInvoices />
        <Profit />
        <Invoicesdown />
      </div>
    </div>
  );
}

export default App;
