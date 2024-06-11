import { useState } from "react";
import style from "./style.module.scss";
import { NewItemType } from "../../types/items";
import { Link, useNavigate } from "react-router-dom";
import Edit from "../edit/Edit";
import { deleteItem } from "../../lib/controller";
import { EditFilled, DeleteFilled } from '@ant-design/icons'

interface IProps {
  item: NewItemType;
  detailsPage?: boolean;
}

function Information({ item, detailsPage }: IProps) {
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={style.information}>
      <div className={style.nameContainer}>
        <h3>Name: {item.name}</h3>
      </div>
      <div className={style.description}>
        {detailsPage ? (
          <>
            <ul>
              <li>Price: {item.price}</li>
              <li>Stock: {item.stock}</li>
              <li>Category: {item.category}</li>
              <li>Description: {item.description}</li>
            </ul>
            <div className={style.buttonContainer}>
              <button
                className={style.editButton}
                onClick={() => setEditMode(!editMode)}
              >
                <EditFilled />
              </button>
              {editMode && (
                <Edit
                  editMode={editMode}
                  setEditMode={setEditMode}
                  id={item.id}
                />
              )}
              <button className={style.deleteButton} onClick={() => deleteItem(item.id, navigate)}>
                <DeleteFilled />
              </button>
            </div>
          </>
        ) : (
          <Link to={`/items/${item.id}`}>
            <button className={style.viewButton}>View more information</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Information;
