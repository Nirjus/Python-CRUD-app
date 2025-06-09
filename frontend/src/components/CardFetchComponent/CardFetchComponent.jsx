import React, { useEffect, useState } from "react";
import styles from "./CardFetchComponent.module.scss";
import Card from "../Card/Card";
import { friendsData } from "../../data";

const CardFetchComponent = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(friendsData);
  }, []);
  return (
    <div className={styles.container}>
      {friends.length != 0 &&
        friends.map((friend) => <Card friend={friend} key={friend.id} />)}
    </div>
  );
};

export default CardFetchComponent;
