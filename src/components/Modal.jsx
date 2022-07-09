import { useState } from "react";
import CloseBtn from "../img/cerrar.svg";
import { Message } from "./Message";

export const Modal = ({
  setModal,
  animatedModal,
  setAnimatedModal,
  guardarGasto,
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleHiddeModal = () => {
    setAnimatedModal(false);
    setTimeout(() => {
      setModal(false);
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }

    guardarGasto({ nombre, cantidad, categoria });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseBtn}
          alt="Boton cerrar modal"
          onClick={handleHiddeModal}
        />
      </div>
      <form
        action=""
        className={`formulario ${animatedModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Message type={"error"}>{mensaje}</Message>}
        <div className="campo">
          <label htmlFor="name">Nombre del gasto</label>
          <input
            type="text"
            placeholder="Añade el nombre del gasto"
            id="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="quantity">Cantidad</label>
          <input
            type="number"
            placeholder="Añade la cantidad del gasto. Ejem. 300"
            id="quantity"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Categoría</label>
          <select
            name=""
            id="category"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Seleccione">-- Seleccionar --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir gasto" />
      </form>
    </div>
  );
};