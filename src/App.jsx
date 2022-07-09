import { useState } from "react";
import { Header } from "./components/Header";
import { ListExpenses } from "./components/ListExpenses";
import { Modal } from "./components/Modal";
import { generarId } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animatedModal, setAnimatedModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(() => {
      setAnimatedModal(true);
    }, 100);
  };

  const guardarGasto = (gasto) => {
    gasto.id = generarId();
    setGastos([...gastos, gasto]);
    setAnimatedModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ListExpenses gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewBudget}
              alt="Icono para nuevo gasto"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animatedModal={animatedModal}
          setAnimatedModal={setAnimatedModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
}

export default App;
