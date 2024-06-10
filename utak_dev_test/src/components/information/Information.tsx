import { useState } from "react";
import style from "./style.module.scss";
import { NewItemType } from "../../types/items";
import { Link } from "react-router-dom";
import Edit from "../edit/Edit";

interface IProps {
  item: NewItemType;
  detailsPage?: boolean;
}
function Information({ item, detailsPage }: IProps) {
  const [editDescription, setEditDescription] = useState(false);

  return (
    <div className={style.information}>
      <div className={style.imageContainer}>
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
              onClick={() => setEditDescription(!editDescription)}
            >
              Edit Description
            </strong>
            {editDescription ? (
              <Edit editDescription={editDescription} setEditDescription={setEditDescription}/>
            ): null}
          </p>
          <button>Delete Item</button>
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
