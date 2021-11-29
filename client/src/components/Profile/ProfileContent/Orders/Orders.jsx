import React from "react";
import "./Orders.css"

export const Orders = () => {
  return (
    <div>
      <h1 className="text-center">Pedidos</h1>
      <ul className="text-center shadow-lg orders-info">
        <li>@username</li>
        <li>talent name</li>
        <li className="text-blue-600 hover:underline cursor-pointer">Ver Pedido</li>
        <li className="cursor-pointer hover:underline">Comunicarse</li>
      </ul>
    </div>
  );
};
