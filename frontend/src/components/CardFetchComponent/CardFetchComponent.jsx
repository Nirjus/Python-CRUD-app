import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Card from "../Card/Card";
import Loader from "../loader/Loader";
import { getUsers } from "../../utils/userOperation";
import styles from "./CardFetchComponent.module.scss";
import ModalBody from "../Modal/ModalBody/ModalBody";
import Modal from "../Modal/Modal";
// import { friendsData } from "../../data";

const CardFetchComponent = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const getUsersHandler = async () => {
    setIsLoading(true);
    const result = await getUsers();
    setIsLoading(false);
    if (result.success) {
      setFriends(result.data);
    }
  };
  useEffect(() => {
    getUsersHandler();
  }, []);
  return (
    <div>
      <div className={styles.appContainer}>
        <button onClick={() => setOpenModal(true)}>
          <Plus /> <span>Add Friends</span>
        </button>
      </div>
      <br />
      <div className={styles.container}>
        {friends.length != 0 &&
          !isLoading &&
          friends.map((friend) => (
            <Card
              friend={friend}
              key={friend.id}
              fetchUsers={getUsersHandler}
            />
          ))}
        <div className={styles.loaderSpace}>{isLoading && <Loader />}</div>
        {!isLoading && friends.length == 0 && (
          <p className={styles.ptag}>
            No friends have 🥲 <br /> create a Buddy from + icon
          </p>
        )}
      </div>
      {openModal && (
        <Modal
          setIsOpen={setOpenModal}
          headerText="My new Friend 🤝"
          contentBox={
            <ModalBody
              setModalclose={setOpenModal}
              fetchUser={getUsersHandler}
            />
          }
        />
      )}
    </div>
  );
};

export default CardFetchComponent;
