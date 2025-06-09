import React from "react";
import styles from "./Navbar.module.scss";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles["nav-container"]}>
        <h4>🐍 Py Friends</h4>
        <span className={styles["nav-container"]}>
          <p>Friendship🔥</p>
          <Menu className={styles.menu} cursor={"pointer"} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
