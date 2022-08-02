import { useState } from "react";
import { Message } from "./Message";

export const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();
    if (!budget || budget < 0) {
      setMessage("No es un presupuesto válido");
      return;
    }
    setMessage("");
    setIsValidBudget(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form action="" className="formulario" onSubmit={handleBudget}>
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            onFocus={(e) => (e.target.value = "")}
          />
        </div>
        <input type="submit" value="Añadir" />
        {message && <Message type={"error"}>{message}</Message>}
      </form>
    </div>
  );
};
