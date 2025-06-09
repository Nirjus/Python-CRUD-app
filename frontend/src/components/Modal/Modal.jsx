import React from "react";
import styles from "./Modal.module.scss";
import { X } from "lucide-react";

const Modal = ({ setIsOpen, contentBox, headerText = "" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBox}>
        <div className={styles.header}>
          <h5>{headerText}</h5>
          <X
            onClick={() => setIsOpen(false)}
            color="white"
            cursor={"pointer"}
          />
        </div>
        {contentBox}
      </div>
    </div>
  );
};

export default Modal;
