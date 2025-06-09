import React, { useState } from "react";
import style from "./ModalBody.module.scss";

const ModalBody = ({ friend }) => {
  const [gender, setGender] = useState(friend?.gender || "");
  const [name, setName] = useState(friend?.name || "");
  const [description, setDescription] = useState(friend?.description || "");
  const [role, setRole] = useState(friend?.role || "");

  return (
    <div className={style.modelBody}>
      <div className={style.container1}>
        <div className={style["input-container"]}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style["input-container"]}>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Enter Role.."
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
      </div>
      <div className={style.container2}>
        <div className={style["input-container"]}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="role"
            id="description"
            placeholder="Enter Description about friends wrok.."
            rows={3}
            cols={10}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.checkbox}>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="Male"
            id="male"
            value={"male"}
            checked={gender == "male"}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className={style.checkbox}>
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="Female"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </div>

      <div className={style.container3}>
        <button type="submit">Save</button>
      </div>
    </div>
  );
};

export default ModalBody;
