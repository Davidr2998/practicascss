import React from "react";
import style from "./OptionPanel.module.scss";
import DashOption from "./DashOption/DashOption";

const OptionPanel = () => {
  const options = [
    {
      id: 1,
      icon: "/assets/icons/Dashboard_Rocket.svg",
      description: "Dashboard",
    },
    {
      id: 2,
      icon: "/assets/icons/Clients.svg",
      description: "Clients",
    },
    {
      id: 3,
      icon: "/assets/icons/Invoices.svg",
      description: "Invoices",
    },
    {
      id: 4,
      icon: "/assets/icons/Estimates.svg",
      description: "Estimates",
    },
    {
      id: 5,
      icon: "/assets/icons/MyTeam.svg",
      description: "My team",
    },
  ];
  return (
    <div className={style.o_option_container}>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <DashOption icon={option.icon} description={option.description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionPanel;
