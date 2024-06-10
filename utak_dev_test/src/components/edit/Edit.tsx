import { useState } from "react";
import style from "./style.module.scss";

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

function Edit({ editDescription, setEditDescription }: IProps) {
  const [newDescription, setNewDescription] = useState("");
  const handleUpdate = () => {
    //update item
    setEditDescription(!editDescription);
    //navigate to homepage
  };

  return (
    <div className={style.edit}>
      <label>Please enter the description below</label>
      <textarea
        required
        name="description"
        id="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      ></textarea>
      <button className={style.updateButton} onClick={() => handleUpdate}>
        Update Item
      </button>
    </div>
  );
}

export default Edit;
