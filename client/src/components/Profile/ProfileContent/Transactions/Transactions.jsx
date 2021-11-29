import React from "react";

export const Transactions = () => {
  return (
    <div>
      <h1 className="mt-4 text-center">Transactions</h1>
      <ul className="cards-info shadow-lg reviews-info">
        <li>
          <p>Accion: Venta</p>
          <p>Usuario: @username</p>
          <p>Talento: Ejemplo</p>
          <p>Fecha: 22-10-21</p>
          <p>Transferencia: $999</p>
        </li>
        <li>
          <p>Accion: compra</p>
          <p>Usuario: @username</p>
          <p>Talento: Ejemplo</p>
          <p>Fecha: 22-10-21</p>
          <p>Transferencia: $999</p>
        </li>
        <li>
          <p>Accion: Intercambio</p>
          <p>Usuario: @username</p>
          <p>Talento: Ejemplo</p>
          <p>Fecha: 22-10-21</p>
          <p>Transferencia: $0</p>
        </li>
      </ul>
    </div>
  );
};
