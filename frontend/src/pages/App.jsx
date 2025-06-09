import { useState } from "react";
import { Plus } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import CardFetchComponent from "../components/CardFetchComponent/CardFetchComponent";
import Modal from "../components/Modal/Modal";
import ModalBody from "../components/Modal/ModalBody/ModalBody";
import style from "./App.module.scss";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Navbar />
      <br />
      <div className={style.appContainer}>
        <button
          className={style.addFriendsBtn}
          onClick={() => setOpenModal(true)}
        >
          <Plus /> <span>Add Friends</span>
        </button>
      </div>
      <br />
      <CardFetchComponent />
      {openModal && (
        <Modal
          setIsOpen={setOpenModal}
          headerText="My new Friend 🤝"
          contentBox={<ModalBody />}
        />
      )}
    </div>
  );
}

export default App;
