import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Modal from "./Modal/Modal";
import { useModal } from "./useModal/useModal";

const Modals = () => {
  const [isOpenModalLogin, openModalLogin, closeModalLogin] = useModal(false);
  const [isOpenModalRegister, openModalRegister, closeModalRegister] =
    useModal(false);
  const [login, setLogin] = useState(true);
  return (
    <div>
      <h1>Modals</h1>
      <button className="btnsHome" onClick={openModalLogin}>
        Login
      </button>
      <Modal isOpen={isOpenModalLogin} closeModal={closeModalLogin}>
        {login ? (
          <Login setLogin={setLogin} />
        ) : (
          <Register setLogin={setLogin} />
        )}
      </Modal>
      <button className="btnsHome" onClick={openModalRegister}>
        Register
      </button>
      <Modal isOpen={isOpenModalRegister} closeModal={closeModalRegister}>
        {login ? (
          <Login setLogin={setLogin} />
        ) : (
          <Register setLogin={setLogin} />
        )}
      </Modal>
    </div>
  );
};

export default Modals;
