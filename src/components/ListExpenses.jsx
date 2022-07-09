import React from "react";
import { Expense } from "./Expense";

export const ListExpenses = ({ gastos }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay gastos aun"}</h2>
      {gastos.map((gasto) => (
        <Expense key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};
