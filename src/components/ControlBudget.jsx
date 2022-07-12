import { useState, useEffect } from "react";

export const ControlBudget = ({ gastos, budget }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = budget - totalGastado;
    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

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
          <span>Disponible:</span> {formatAmount(disponible)}
        </p>
        <p>
          <span>Gastado:</span> {formatAmount(gastado)}
        </p>
      </div>
    </div>
  );
};
