import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./style.module.scss";
import { updateItem } from "../../lib/controller";

interface IProps {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
}

function Edit({ editMode, setEditMode, id }: IProps) {
  const [newDescription, setNewDescription] = useState("");
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const navigate = useNavigate();

  const handleUpdate = () => {
    //update item
    updateItem(id, {description: newDescription, name: newName, price: newPrice});
    setEditMode(!editMode);
    //navigate to homepage
    navigate('/');
  };

  return (
    <div className={style.edit}>
      <label>Please update the new details below</label>
      <label id="name">Item name:</label>
      <input
        required
        name="name"
        id="name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <label id="price">Price:</label>
      <input
        required
        name="price"
        id="price"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <label id="description">Description:</label>
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