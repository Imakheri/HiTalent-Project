import ReactModal from "react-modal";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CheckoutMP() {
  const [modalIsOpen, setIsOpen] = useState(true);
  return (
    <ReactModal
      isOpen={modalIsOpen}
      contentLabel="Example Modal"
      overlayClassName="fixed inset-0 bg-black bg-opacity-40"
      className="absolute m-auto max-w-max h-96 inset-x-0 top-40 bg-dark border-2 border-white rounded-lg"
    >
      <div className="h-96 flex justify-around text-center flex-col">
        <h1 className="text-white text-3xl underline font-semibold">
          ¡Gracias por su compra!
        </h1>
        <h2 className="text-white text-2xl font-medium p-10">
          Ahora podes coordinar con tu docente digital accediendo al chat desde
          su perfil.
        </h2>
        <Link
          to="/home"
          className="bg-dark font-bold self-center text-2xl border-2 w-40 rounded hover:bg-light hover:border-black"
        >
          Entendido
        </Link>
      </div>
    </ReactModal>
  );
}
