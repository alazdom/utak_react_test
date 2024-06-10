import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./style.module.scss";
import { updateItemDescription } from "../../lib/controller";

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
}

function Edit({ editDescription, setEditDescription, id }: IProps) {
  const [newDescription, setNewDescription] = useState("");

  const navigate = useNavigate();

  const handleUpdate = () => {
    //update item
    updateItemDescription(id, {description: newDescription});
    setEditDescription(!editDescription);
    //navigate to homepage
    navigate('/');
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
      <button className={style.updateButton} onClick={() => handleUpdate()}>
        Update Item
      </button>
    </div>
  );
}

export default Edit;
