import React from "react";

export const ControlBudget = ({ budget }) => {
  const formatAmount = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatAmount(budget)}
        </p>
        <p>
          <span>Disponible:</span> {formatAmount(0)}
        </p>
        <p>
          <span>Gastado:</span> {formatAmount(0)}
        </p>
      </div>
    </div>
  );
};
