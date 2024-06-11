import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import style from "./style.module.scss";
import { useState, useEffect } from "react";
import { itemsCollection } from "../../lib/controller";
import { NewItemType } from "../../types/items";
import Information from "../information/Information";

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

  return (
    <div className={style.itemContainer}>
      <p className={style.allItem}>All Items</p>
      <div className={style.itemMap}>
      {items && items.length ? (
        <div className={style.title}>
          {
            items?.map((item)=>(
              <Information key={item.id} item={item} />
            ))
          }
        </div>
      ) : (
        <h2 className={style.title}>
          There are no items. Please add one
        </h2>
      )}
      </div>
    </div>
  );
}

export default Item;
