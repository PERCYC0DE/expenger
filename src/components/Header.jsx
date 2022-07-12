import React from "react";
import { ControlBudget } from "./ControlBudget";
import { NewBudget } from "./NewBudget";

export const Header = ({
  gastos,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Expenger</h1>

      {isValidBudget ? (
        <ControlBudget gastos={gastos} budget={budget} />
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
