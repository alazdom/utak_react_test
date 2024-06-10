import { useState } from "react";
import style from "./style.module.scss";
import { NewItemType } from "../../types/items";
import { Link, useNavigate } from "react-router-dom";
import Edit from "../edit/Edit";
import { deleteItem } from "../../lib/controller";

interface IProps {
  item: NewItemType;
  detailsPage?: boolean;
}

function Information({ item, detailsPage }: IProps) {
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();
  return (
    <div className={style.information}>
      <div className={style.imageContainer}>
        <h3>Name: {item.name}</h3>
        <h3>Price: {item.price}</h3>
      </div>
      <div className={style.description}>
        <hr />
        {detailsPage ? (
          <>
            <p>
              {item.description}{" "}
              <strong
                className={style.itemDescription}
                onClick={() => setEditMode(!editMode)}
              >
                Edit Item
              </strong>
              {editMode ? (
                <Edit
                  editMode={editMode}
                  setEditMode={setEditMode}
                  id={item.id}
                />
              ) : null}
            </p>
            <button onClick={() => deleteItem(item.id, navigate)}>
              Delete Item
            </button>
          </>
        ) : (
          <Link to={`/items/${item.id}`}>
            <button>View more information</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Information;
