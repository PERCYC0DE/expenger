import React from "react";
import { ControlBudget } from "./ControlBudget";
import { NewBudget } from "./NewBudget";

export const Header = ({
  gastos,
  setGastos,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Expenger</h1>

      {isValidBudget ? (
        <ControlBudget
          gastos={gastos}
          setGastos={setGastos}
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};
