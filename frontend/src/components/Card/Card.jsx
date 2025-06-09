import React, { useState } from "react";
import { Edit, Delete, TriangleAlert } from "lucide-react";
import toast from "react-hot-toast";
import Modal from "../Modal/Modal";
import ModalBody from "../Modal/ModalBody/ModalBody";
import { deleteUser } from "../../utils/userOperation";
import Loader from "../loader/Loader";
import styles from "./Card.module.scss";

const Card = ({ friend, fetchUsers }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.userInfo}>
            <img src={friend.imgUrl} alt={friend.name} />
            <span>
              <h4>{friend.name}</h4>
              <p>{friend.role}</p>
            </span>
          </div>
          <div className={styles.actionButns}>
            <button onClick={() => setIsEdit(true)}>
              <Edit size={20} />
            </button>
            <button onClick={() => setIsDelete(true)}>
              <Delete size={20} />
            </button>
          </div>
        </div>
        <div className={styles.cardFooter}>{friend.description}</div>
      </div>
      {isDelete && (
        <Modal
          setIsOpen={setIsDelete}
          contentBox={
            <DeleteFriendComponent
              setIsDelete={setIsDelete}
              id={friend.id}
              fetchUsers={fetchUsers}
            />
          }
        />
      )}
      {isEdit && (
        <Modal
          setIsOpen={setIsEdit}
          headerText="Edit my buddy 🧜‍♂️"
          contentBox={
            <ModalBody
              isEdit
              friend={friend}
              setModalclose={setIsEdit}
              fetchUser={fetchUsers}
            />
          }
        />
      )}
    </>
  );
};

const DeleteFriendComponent = ({ setIsDelete, id, fetchUsers }) => {
  const [isLoading, setIsLoading] = useState(false);
  async function deleteFriend() {
    setIsLoading(true);
    const result = await deleteUser(id);
    setIsLoading(false);
    if (result.success) {
      toast.success(result.data.msg);
      setIsDelete(true);
      fetchUsers();
    } else {
      toast.error(result.error);
    }
  }
  return (
    <div className={styles.deleteContainer}>
      <h3>Are you sure, you want to delete the friend?</h3>
      <span className={styles.warning}>
        <TriangleAlert color={"yellow"} size={20} />
        <p>
          This process is irreversable!, once you delete, you can not restore
          the data.
        </p>
      </span>
      <br />
      <div className={styles.btnContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button type="button" onClick={deleteFriend}>
              Yes
            </button>
            <button type="button" onClick={() => setIsDelete(false)}>
              No
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
