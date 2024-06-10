import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import style from "./style.module.scss";
import { useState, useEffect } from "react";
import { itemsCollection } from "../../lib/controller";
import { NewItemType } from "../../types/items";
import Information from "../details/Information";

function Item() {
  const [items, setItems] = useState<NewItemType[]>([]);

  useEffect(() =>
    onSnapshot(itemsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
      setItems(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    }), []
  );
  console.log(items, "items");
  return (
    <div className={style.item}>
      <h2 className={style.title}>All Items</h2>
      {items && items.length ? (
        <div>
          {
            items?.map((item)=>(
              <Information key={item.id} item={item} />
            ))
          }
        </div>
      ) : (
        <h2 className="no-items">
          There are no items. Please add one
        </h2>
      )}
    </div>
  );
}

export default Item;
