import React from "react";
import { Orders } from "./Orders/Orders";
import { QandA } from "./QandA/Q&A";
import { Reviews } from "./Reviews/Reviews";
import { Transactions } from "./Transactions/Transactions";

export const ProfileContent = () => {
  return (
    <div>
      <Orders />
      <Reviews />
      <Transactions />
      <QandA />
    </div>
  );
};
