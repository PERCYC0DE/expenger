import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ListExpenses } from "./components/ListExpenses";
import { Modal } from "./components/Modal";
import { generarId } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [gastos, setGastos] = useState([]);
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animatedModal, setAnimatedModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
    }
  }, [gastoEditar]);

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(() => {
      setAnimatedModal(true);
    }, 100);
  };

  const guardarGasto = (gasto) => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    setAnimatedModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ListExpenses gastos={gastos} setGastoEditar={setGastoEditar} />
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
