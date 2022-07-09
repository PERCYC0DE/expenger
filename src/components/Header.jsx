import React from "react";
import { ControlBudget } from "./ControlBudget";
import { NewBudget } from "./NewBudget";

export const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Expenger</h1>

      {isValidBudget ? (
        <ControlBudget budget={budget} />
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
